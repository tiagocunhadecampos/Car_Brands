import styled from "styled-components/native";
import { FlatList } from "react-native";
import { CarModel } from "../types";

export const Container = styled.View`
  flex: 1;
  padding: 16px;
  background-color: #fff;
`;

export const HeaderContainer = styled.View`
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 16px;
  padding-left: 8px;
  padding-right: 8px;
`;

export const Title = styled.Text`
  font-size: 20px;
  font-weight: bold;
  color: #333;
`;

export const CountText = styled.Text`
  font-size: 14px;
  color: #666;
  font-weight: 500;
`;

export const LoadingContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const LoadingText = styled.Text`
  margin-top: 10px;
  font-size: 16px;
  color: #666;
`;

export const ErrorContainer = styled.View`
  flex: 1;
  justify-content: center;
  align-items: center;
`;

export const ErrorText = styled.Text`
  color: red;
  font-size: 16px;
`;

export const ModelsList = styled(FlatList as new () => FlatList<CarModel>)`
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
  text-align: center;
`;
