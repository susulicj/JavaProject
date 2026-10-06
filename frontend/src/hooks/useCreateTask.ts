import { useState } from "react";
import { createTask } from "../services/taskService";
import type { CreateTaskData } from "../types/CreateTaskData";


export function useCreateTask() {
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
            const task = await createTask(formData);

            console.log("Task created:", task);

            setMessage("Task created successfully!");

            setFormData({
                title: "",
                completed: false,
            });
        } catch (error) {
            console.error("Failed to create task:", error);
            setMessage("Failed to create task.");
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