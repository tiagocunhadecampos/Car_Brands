import styled from "styled-components/native";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 24px;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LogoContainer = styled.View`
  align-items: center;
  margin-bottom: 10px;
`;

export const Logo = styled.Image`
  width: 250px;
  height: 250px;
`;

export const FormContainer = styled.View`
  width: 100%;
  max-width: 400px;
`;

export const FormGroup = styled.View`
  margin-bottom: 20px;
`;

export const Label = styled.Text`
  font-size: 16px;
  font-weight: 500;
  color: #333;
  margin-bottom: 8px;
`;

export const Input = styled.TextInput<{ hasError?: boolean }>`
  background-color: #f8f9fa;
  border: 1px solid ${(props: any) => (props.hasError ? "#dc3545" : "#e9ecef")};
  border-radius: 8px;
  padding: 12px 16px;
  font-size: 16px;
  color: #333;
`;

export const PasswordContainer = styled.View`
  position: relative;
`;

export const PasswordInput = styled.TextInput<{ hasError?: boolean }>`
  background-color: #f8f9fa;
  border: 1px solid ${(props: any) => (props.hasError ? "#dc3545" : "#e9ecef")};
  border-radius: 8px;
  padding: 12px 50px 12px 16px;
  font-size: 16px;
  color: #333;
`;

export const EyeIcon = styled.TouchableOpacity`
  position: absolute;
  right: 15px;
  top: 13px;
  padding: 5px;
`;

export const LoginButton = styled.TouchableOpacity<{ disabled?: boolean }>`
  background-color: ${(props: any) => (props.disabled ? "#ccc" : "#007bff")};
  border-radius: 8px;
  padding: 14px;
  align-items: center;
  margin-top: 10px;
  opacity: ${(props: any) => (props.disabled ? 0.6 : 1)};
`;

export const LoginButtonText = styled.Text`
  color: #fff;
  font-size: 16px;
  font-weight: 600;
`;

export const ErrorContainer = styled.View`
  margin-top: 8px;
`;

export const ErrorText = styled.Text`
  color: #dc3545;
  font-size: 14px;
  margin-left: 4px;
`;

export const LoadingContainer = styled.View`
  flex-direction: row;
  align-items: center;
  justify-content: center;
`;

export const LoadingText = styled.Text`
  color: #fff;
  font-size: 16px;
  margin-left: 8px;
`;
