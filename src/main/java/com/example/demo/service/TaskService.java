
package com.example.demo.service;

import com.example.demo.dto.task.TaskRequest;
import com.example.demo.dto.task.TaskResponse;
import com.example.demo.model.Task;
import com.example.demo.model.User;
import com.example.demo.repository.TaskRepository;
import com.example.demo.repository.UserRepository;

import org.springframework.stereotype.Service;
import org.springframework.security.core.Authentication;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;
    private final UserRepository userRepository;

    public TaskService(TaskRepository taskRepository, UserRepository userRepository) {
        this.taskRepository = taskRepository;
        this.userRepository = userRepository;
    }   

    public List<TaskResponse> getAllTasks() {
        return taskRepository.findAll()
                .stream()
                .map(this::toResponse)
                .toList();
    }

    public TaskResponse getTaskById(Long id) {
        return taskRepository.findById(id)
                .map(this::toResponse)
                .orElse(null);
    }

    public TaskResponse createTask(
        TaskRequest request,
        Authentication authentication) {

        User user = userRepository
                .findByUsername(authentication.getName())
                .orElseThrow();

        Task task = new Task();

        task.setTitle(request.getTitle());
        task.setCompleted(request.isCompleted());

        task.setUser(user);

        Task savedTask = taskRepository.save(task);

        return new TaskResponse(
                    savedTask.getId(),
                    savedTask.getTitle(),
                    savedTask.isCompleted()
            );
    }

    public void deleteTask(Long id) {
        taskRepository.deleteById(id);
    }

    private TaskResponse toResponse(Task task) {
        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.isCompleted()
        );
    }
    public List<TaskResponse> getMyTasks(Authentication authentication) {

        User user = userRepository
                .findByUsername(authentication.getName())
                .orElseThrow();
    
        return taskRepository.findByUserId(user.getId())
                .stream()
                .map(this::mapToResponse)
                .toList();
    }

    private TaskResponse mapToResponse(Task task) {

        return new TaskResponse(
                task.getId(),
                task.getTitle(),
                task.isCompleted()
        );
    }
}

