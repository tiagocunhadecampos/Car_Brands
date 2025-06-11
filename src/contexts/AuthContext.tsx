import React, { createContext, useContext, useState, useEffect } from "react";
import { login as apiLogin } from "../services/api";
import { User } from "../types";
import { saveUserData, getUserData, clearUserData } from "../utils/storage";

interface AuthContextType {
  user: User | null;
  isLoading: boolean;
  isLoginLoading: boolean;
  login: (user: string, password: string) => Promise<void>;
  logout: () => Promise<void>;
}

export const AuthContext = createContext<AuthContextType | undefined>(
  undefined
);

export const AuthProvider: React.FC<{ children: React.ReactNode }> = ({
  children,
}) => {
  const [user, setUser] = useState<User | null>(null);
  const [isLoading, setIsLoading] = useState(true);
  const [isLoginLoading, setIsLoginLoading] = useState(false);

  useEffect(() => {
    loadStoredUser();
  }, []);

  const loadStoredUser = async () => {
    try {
      const storedUser = await getUserData();
      if (storedUser) {
        setUser(storedUser);
      }
    } catch (error) {
      console.log("Error loading stored user:", error);
    } finally {
      setIsLoading(false);
    }
  };

  const login = async (username: string, password: string) => {
    setIsLoginLoading(true);
    try {
      console.log("Attempting login with:", { username, password });
      const userData = await apiLogin(username, password);
      console.log("Login response:", userData);

      setUser(userData.user);
      await saveUserData(userData.user);
    } catch (error: any) {
      console.error("Login error:", error);
      throw new Error(error.message || "Login failed");
    } finally {
      setIsLoginLoading(false);
    }
  };

  const logout = async () => {
    try {
      setUser(null);
      await clearUserData();
    } catch (error) {
      console.log("Error during logout:", error);
    }
  };

  return (
    <AuthContext.Provider
      value={{ user, isLoading, isLoginLoading, login, logout }}
    >
      {children}
    </AuthContext.Provider>
  );
};

export const useAuth = () => {
  const context = useContext(AuthContext);
  if (context === undefined) {
    throw new Error("useAuth must be used within an AuthProvider");
  }
  return context;
};
