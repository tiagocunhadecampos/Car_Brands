import styled from "styled-components/native";
import { FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Brand } from "../types";

export const Container = styled.View`
  flex: 1;
  background-color: #fff;
  padding: 16px;
`;

export const Header = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 20px;
`;

export const WelcomeText = styled.Text`
  font-size: 18px;
  font-weight: bold;
`;

export const LogoutButton = styled.TouchableOpacity`
  padding: 8px;
  border-radius: 8px;
  background-color: #f5f5f5;
`;

export const SearchContainer = styled.View`
  margin-bottom: 15px;
`;

export const SearchInputContainer = styled.View`
  flex-direction: row;
  align-items: center;
  background-color: #f8f9fa;
  border-radius: 10px;
  padding: 0 12px;
  height: 50px;
  border-width: 1px;
  border-color: #e9ecef;
`;

export const SearchIcon = styled(Ionicons)`
  margin-right: 8px;
`;

export const SearchInput = styled.TextInput`
  flex: 1;
  font-size: 16px;
  color: #333;
`;

export const ClearButton = styled.TouchableOpacity`
  padding: 4px;
`;

export const ResultsContainer = styled.View`
  margin-bottom: 10px;
`;

export const ResultsText = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const CenteredContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;

export const StyledFlatList = styled(FlatList as new () => FlatList<Brand>)`
  flex: 1;
`;

export const EmptyContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
  padding-top: 60px;
`;

export const EmptyText = styled.Text`
  font-size: 18px;
  font-weight: bold;
  color: #666;
  margin-top: 16px;
`;

export const EmptySubText = styled.Text`
  font-size: 14px;
  color: #999;
  margin-top: 8px;
`;
