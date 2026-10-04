
package com.example.demo.service;

import com.example.demo.dto.task.TaskRequest;
import com.example.demo.dto.task.TaskResponse;
import com.example.demo.model.Task;
import com.example.demo.repository.TaskRepository;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
public class TaskService {

    private final TaskRepository taskRepository;

    public TaskService(TaskRepository taskRepository) {
        this.taskRepository = taskRepository;
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

    public TaskResponse createTask(TaskRequest request) {
        Task task = new Task();
        task.setTitle(request.getTitle());
        task.setCompleted(request.isCompleted());

        Task savedTask = taskRepository.save(task);

        return toResponse(savedTask);
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
}

