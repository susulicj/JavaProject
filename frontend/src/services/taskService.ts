import api from "./api";
import type { Task } from "../types/Task";
import type { CreateTaskData } from "../types/CreateTaskData";

export const getTasks = async (): Promise<Task[]> => {
    const response = await api.get<Task[]>("/tasks");
    return response.data;
};

export const createTask = async (data: CreateTaskData): Promise<Task> => {
    const response = await api.post<Task>("/tasks", data);
    return response.data;
};

export const deleteTask = async (id: number): Promise<void> => {
    await api.delete(`/tasks/${id}`);
};

export const updateTask = async (id: number, data: CreateTaskData): Promise<Task> => {
    const response = await api.put<Task>(`/tasks/${id}`, data);
    return response.data;
};