import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { CarModel } from "../types";

interface ModelCardProps {
  model: CarModel;
}

const ModelCard: React.FC<ModelCardProps> = ({ model }) => {
  return (
    <TouchableOpacity
      style={{
        padding: 16,
        borderWidth: 1,
        borderColor: "#ccc",
        margin: 8,
        borderRadius: 8,
      }}
    >
      <View>
        <Text style={{ fontSize: 18 }}>{model.nome}</Text>
      </View>
    </TouchableOpacity>
  );
};

export default ModelCard;
