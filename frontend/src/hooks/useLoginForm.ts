// src/hooks/useLoginForm.ts
import { useState } from "react";
import { login } from "../services/authService";
import type { LoginData } from "../types/Auth";

export function useLoginForm() {
    const [formData, setFormData] = useState<LoginData>({ username: "", password: "" });
    const [message, setMessage] = useState("");
    const [isLoading, setIsLoading] = useState(false); 

    const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = event.target;
        setFormData((previous) => ({
            ...previous,
            [name]: value,
        }));
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        setIsLoading(true);
        setMessage("");

        try {
            const response = await login(formData);
            console.log("Login successful:", response);
            localStorage.setItem("token", response.token);
            setMessage("Login successful!");
        } catch (error) {
            console.error("Login failed:", error);
            setMessage("Login failed.");
        } finally {
            setIsLoading(false);
        }
    };

    return {
        formData,
        message,
        isLoading,
        handleChange,
        handleSubmit,
    };
}
