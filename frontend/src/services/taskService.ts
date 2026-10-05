import api from "./api";
import type { Task } from "../types/Task";

export const getTasks = async (): Promise<Task[]> => {
    const response = await api.get<Task[]>("/tasks");

    return response.data;
};