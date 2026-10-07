import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import type { Task } from "../types/Task";
import { deleteTask } from "../services/taskService";
import { useNavigate } from "react-router-dom";

export function useTasks() {
    const [tasks, setTasks] = useState<Task[]>([]);
    const [isLoading, setIsLoading] = useState(true);
    const [message, setMessage] = useState("");

    useEffect(() => {
        const loadTasks = async () => {
            try {
                const data = await getTasks();
                setTasks(data);
                console.log("Success", data);
            } catch (error) {
                console.error("Failed to load tasks:", error);
                setMessage("Failed to load tasks.");
            } finally {
                setIsLoading(false);
            }
        };

        loadTasks();
    }, []);

    const onDelete = async (id: number) => {
        try {
            await deleteTask(id);
    
            setTasks((previousTasks) =>
                previousTasks.filter((task) => task.id !== id)
            );
    
            setMessage("Task deleted successfully!");
        } catch (error) {
            console.error("Failed to delete task:", error);
            setMessage("Failed to delete task.");
        }
    };
    const navigate = useNavigate();

    const onUpdate = (id: number) => {
        navigate(`/tasks/edit/${id}`);
    };

    return {
        tasks,
        isLoading,
        message,
        onDelete,
        onUpdate 
    };
}