export interface User {
  id?: string;
  name?: string;
  email?: string;
  user?: string;
}

export interface LoginRequest {
  username: string;
  password: string;
}

export interface LoginResponse {
  user: User;
  token?: string;
}
