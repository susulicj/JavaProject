
import api from "./api";
import type { LoginData, RegisterData, LoginResponse } from "../types/Auth";

export const login = async (data: LoginData): Promise<LoginResponse> => {
    const response = await api.post<LoginResponse>("/auth/login", data);

    return response.data;
};

export const register = async (data: RegisterData) => {
    const response = await api.post("/auth/register", data);

    return response.data;
};

