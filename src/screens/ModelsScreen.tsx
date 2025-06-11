import React, { useEffect, useState } from "react";
import { ActivityIndicator } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import ModelCard from "../components/ModelCard";
import { fetchCarModels } from "../services/api";
import type { StackScreenProps } from "@react-navigation/stack";
import { RootStackParamList } from "../types/navigation";
import { CarModel } from "../types";
import * as S from "../styles/model.styles";

type Props = StackScreenProps<RootStackParamList, "ModelScreen">;

const ModelScreen: React.FC<Props> = ({ route }) => {
  const { brandCode, brandName } = route.params;
  const [models, setModels] = useState<CarModel[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  useEffect(() => {
    const fetchModels = async () => {
      try {
        const response = await fetchCarModels(brandCode);
        setModels(response.modelos);
      } catch (err: any) {
        setError(err.message || "Failed to load models");
        console.error("Error fetching models:", err);
      } finally {
        setLoading(false);
      }
    };

    fetchModels();
  }, [brandCode]);

  if (loading) {
    return (
      <S.LoadingContainer>
        <ActivityIndicator size="large" color="#0000ff" />
        <S.LoadingText>Loading models...</S.LoadingText>
      </S.LoadingContainer>
    );
  }

  if (error) {
    return (
      <S.ErrorContainer>
        <S.ErrorText>{error}</S.ErrorText>
      </S.ErrorContainer>
    );
  }

  return (
    <S.Container>
      <S.HeaderContainer>
        <S.Title>{brandName}</S.Title>
        <S.CountText>
          {models.length} {models.length === 1 ? "model" : "models"}
        </S.CountText>
      </S.HeaderContainer>

      <S.ModelsList
        data={models}
        keyExtractor={(item: CarModel) => item.codigo}
        renderItem={({ item }: { item: CarModel }) => (
          <ModelCard model={item} />
        )}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <S.EmptyContainer>
            <Ionicons name="car-outline" size={48} color="#ccc" />
            <S.EmptyText>No models found</S.EmptyText>
            <S.EmptySubText>This brand has no available models</S.EmptySubText>
          </S.EmptyContainer>
        }
      />
    </S.Container>
  );
};

export default ModelScreen;
