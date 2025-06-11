import React, { useEffect, useState } from "react";
import {
  FlatList,
  ActivityIndicator,
  Alert,
  ListRenderItem,
} from "react-native";
import styled from "styled-components/native";
import { Ionicons } from "@expo/vector-icons";
import { useAuth } from "../contexts/AuthContext";
import { fetchCarBrands } from "../services/api";
import BrandCard from "../components/BrandCard";
import { Brand } from "../types";
import { getErrorMessage } from "../utils/errorHandler";
import {
  CenteredContainer,
  ClearButton,
  Container,
  EmptyContainer,
  EmptySubText,
  EmptyText,
  ErrorText,
  Header,
  LoadingText,
  LogoutButton,
  ResultsContainer,
  ResultsText,
  SearchContainer,
  SearchIcon,
  SearchInput,
  SearchInputContainer,
  StyledFlatList,
  WelcomeText,
} from "../styles/home.styles";

const HomeScreen = () => {
  const { user, logout } = useAuth();
  const [brands, setBrands] = useState<Brand[]>([]);
  const [filteredBrands, setFilteredBrands] = useState<Brand[]>([]);
  const [searchText, setSearchText] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadBrands = async () => {
      try {
        const data = await fetchCarBrands();
        setBrands(data);
        setFilteredBrands(data);
      } catch (err: unknown) {
        setError(getErrorMessage(err));
      } finally {
        setLoading(false);
      }
    };

    loadBrands();
  }, []);

  useEffect(() => {
    if (searchText.trim() === "") {
      setFilteredBrands(brands);
    } else {
      const filtered = brands.filter((brand: Brand) =>
        brand.nome.toLowerCase().includes(searchText.toLowerCase())
      );
      setFilteredBrands(filtered);
    }
  }, [searchText, brands]);

  const handleLogout = async () => {
    Alert.alert(
      "Logout",
      "Are you sure you want to logout?",
      [
        {
          text: "Cancel",
          style: "cancel",
        },
        {
          text: "Logout",
          style: "destructive",
          onPress: async () => {
            await logout();
          },
        },
      ],
      { cancelable: true }
    );
  };

  const clearSearch = () => {
    setSearchText("");
    setFilteredBrands(brands);
  };

  const renderBrand: ListRenderItem<Brand> = ({ item }) => (
    <BrandCard brand={item} />
  );

  if (loading) {
    return (
      <CenteredContainer>
        <ActivityIndicator size="large" color="#0000ff" />
        <LoadingText>Loading brands...</LoadingText>
      </CenteredContainer>
    );
  }

  if (error) {
    return (
      <CenteredContainer>
        <ErrorText>Error: {error}</ErrorText>
      </CenteredContainer>
    );
  }

  return (
    <Container>
      <Header>
        <WelcomeText>Welcome, {user?.name}!</WelcomeText>
        <LogoutButton onPress={handleLogout}>
          <Ionicons name="exit-outline" size={28} color="#ff4444" />
        </LogoutButton>
      </Header>

      <SearchContainer>
        <SearchInputContainer>
          <SearchIcon name="search" size={20} color="#666" />
          <SearchInput
            placeholder="Search car brands..."
            value={searchText}
            onChangeText={setSearchText}
            autoCapitalize="none"
            autoCorrect={false}
          />
          {searchText.length > 0 && (
            <ClearButton onPress={clearSearch}>
              <Ionicons name="close-circle" size={20} color="#666" />
            </ClearButton>
          )}
        </SearchInputContainer>
      </SearchContainer>

      <ResultsContainer>
        <ResultsText>
          {searchText
            ? `${filteredBrands.length} results found`
            : `${brands.length} car brands`}
        </ResultsText>
      </ResultsContainer>

      <StyledFlatList
        data={filteredBrands}
        renderItem={renderBrand}
        keyExtractor={(item: Brand) => item.codigo.toString()}
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <EmptyContainer>
            <Ionicons name="car-outline" size={48} color="#ccc" />
            <EmptyText>No car brands found</EmptyText>
            <EmptySubText>Try a different search term</EmptySubText>
          </EmptyContainer>
        }
      />
    </Container>
  );
};

export default HomeScreen;
