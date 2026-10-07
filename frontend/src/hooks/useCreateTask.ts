import { useState } from "react";
import { createTask, updateTask } from "../services/taskService";
import type { CreateTaskData } from "../types/CreateTaskData";


export function useCreateTask(id: string) {
    const [formData, setFormData] = useState<CreateTaskData>({title: "", completed: false,});
    const [isLoading, setIsLoading] = useState(false);
    const [message, setMessage] = useState("");

    const handleChange = (
        event: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
    ) => {
        const { name, value, type } = event.target;

        setFormData((previous) => ({
            ...previous,
            [name]:
                type === "checkbox"
                    ? (event.target as HTMLInputElement).checked
                    : value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
    
        setIsLoading(true);
        setMessage("");
    
        try {
            let task;
    
            if (id) {
                task = await updateTask(Number(id), formData);
                setMessage("Task updated successfully!");
            } else {
                task = await createTask(formData);
                setMessage("Task created successfully!");
            }
    
            console.log("Task:", task);
    
        } catch (error) {
            console.error("Failed to save task:", error);
            setMessage("Failed to save task.");
        } finally {
            setIsLoading(false);
        }
    };
    return {
        formData,
        isLoading,
        message,
        handleChange,
        handleSubmit,
    };
}