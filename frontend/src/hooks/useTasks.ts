import { useEffect, useState } from "react";
import { getTasks } from "../services/taskService";
import type { Task } from "../types/Task";

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

    return {
        tasks,
        isLoading,
        message,
    };
}