import axios from "axios";
import { User, Brand, CarModel, ApiError } from "../types";

const API_BASE_URL = "https://parallelum.com.br/fipe/api/v1/carros";
const LOGIN_URL = "https://test-api-y04b.onrender.com/signIn";

interface LoginRequest {
  user: string;
  password: string;
}

interface LoginResponse {
  user: User;
  token?: string;
}

interface CarModelsResponse {
  modelos: CarModel[];
}

const handleApiError = (error: any, defaultMessage: string): never => {
  if (error.response?.data) {
    const apiError: ApiError = {
      message: error.response.data.message || defaultMessage,
      status: error.response.status,
      code: error.response.data.code,
    };
    throw new Error(apiError.message);
  }
  throw new Error("Network error");
};

export const login = async (
  user: string,
  password: string
): Promise<LoginResponse> => {
  try {
    const requestData: LoginRequest = { user, password };
    const response = await axios.post<LoginResponse>(LOGIN_URL, requestData);
    return response.data;
  } catch (error: any) {
    handleApiError(error, "Login failed");
    throw new Error("Unreachable");
  }
};

export const fetchCarBrands = async (): Promise<Brand[]> => {
  try {
    const response = await axios.get<Brand[]>(`${API_BASE_URL}/marcas`);
    return response.data;
  } catch (error: any) {
    handleApiError(error, "Failed to fetch brands");
    throw new Error("Unreachable");
  }
};

export const fetchCarModels = async (
  brandCode: string
): Promise<CarModelsResponse> => {
  try {
    const response = await axios.get<CarModelsResponse>(
      `${API_BASE_URL}/marcas/${brandCode}/modelos`
    );
    return response.data;
  } catch (error: any) {
    handleApiError(error, "Failed to fetch models");
    throw new Error("Unreachable");
  }
};

const api = {
  login,
  fetchCarBrands,
  getModelsByBrand: fetchCarModels,
} as const;

export default api;
