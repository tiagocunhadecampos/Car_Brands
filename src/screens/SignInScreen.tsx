import React, { useState } from "react";
import { Alert, ActivityIndicator } from "react-native";
import { useForm, Controller } from "react-hook-form";
import { useAuth } from "../contexts/AuthContext";
import { Ionicons } from "@expo/vector-icons";
import * as S from "../styles/signIn.styles";

interface FormData {
  user: string;
  password: string;
}

const SignInScreen = () => {
  const { login, isLoginLoading } = useAuth();
  const [showPassword, setShowPassword] = useState(false);
  const {
    control,
    handleSubmit,
    formState: { errors },
  } = useForm<FormData>();

  const onSubmit = async (data: FormData) => {
    try {
      await login(data.user, data.password);
    } catch (error: any) {
      Alert.alert("Login Error", error.message || "Login failed");
    }
  };

  const togglePasswordVisibility = () => {
    setShowPassword(!showPassword);
  };

  return (
    <S.Container>
      <S.CenteredContainer>
        <S.LogoContainer>
          <S.Logo
            source={require("../../assets/icon.png")}
            resizeMode="contain"
          />
        </S.LogoContainer>

        <S.FormContainer>
          <S.FormGroup>
            <S.Label>Username</S.Label>
            <Controller
              control={control}
              render={({ field: { onChange, onBlur, value } }) => (
                <S.Input
                  onBlur={onBlur}
                  onChangeText={onChange}
                  value={value || ""}
                  placeholder="Enter your username"
                  autoCapitalize="none"
                  autoCorrect={false}
                  hasError={!!errors.user}
                />
              )}
              name="user"
              rules={{ required: "Username is required" }}
              defaultValue=""
            />
            {errors.user && (
              <S.ErrorContainer>
                <S.ErrorText>{errors.user.message}</S.ErrorText>
              </S.ErrorContainer>
            )}
          </S.FormGroup>

          <S.FormGroup>
            <S.Label>Password</S.Label>
            <S.PasswordContainer>
              <Controller
                control={control}
                render={({ field: { onChange, onBlur, value } }) => (
                  <S.PasswordInput
                    onBlur={onBlur}
                    onChangeText={onChange}
                    value={value || ""}
                    placeholder="Enter your password"
                    secureTextEntry={!showPassword}
                    autoCapitalize="none"
                    autoCorrect={false}
                    hasError={!!errors.password}
                  />
                )}
                name="password"
                rules={{ required: "Password is required" }}
                defaultValue=""
              />
              <S.EyeIcon onPress={togglePasswordVisibility}>
                <Ionicons
                  name={showPassword ? "eye-off" : "eye"}
                  size={24}
                  color="#666"
                />
              </S.EyeIcon>
            </S.PasswordContainer>
            {errors.password && (
              <S.ErrorContainer>
                <S.ErrorText>{errors.password.message}</S.ErrorText>
              </S.ErrorContainer>
            )}
          </S.FormGroup>

          <S.LoginButton
            onPress={handleSubmit(onSubmit)}
            disabled={isLoginLoading}
          >
            {isLoginLoading ? (
              <S.LoadingContainer>
                <ActivityIndicator size="small" color="#ffffff" />
                <S.LoadingText>Signing in...</S.LoadingText>
              </S.LoadingContainer>
            ) : (
              <S.LoginButtonText>Sign In</S.LoginButtonText>
            )}
          </S.LoginButton>
        </S.FormContainer>
      </S.CenteredContainer>
    </S.Container>
  );
};

export default SignInScreen;
