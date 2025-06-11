import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { ActivityIndicator, View, Image, StyleSheet } from "react-native";
import { useAuth } from "../contexts/AuthContext";
import SignInScreen from "../screens/SignInScreen";
import HomeScreen from "../screens/HomeScreen";
import ModelScreen from "../screens/ModelsScreen";
import { RootStackParamList } from "../types/navigation";

const Stack = createStackNavigator<RootStackParamList>();

const AppNavigator: React.FC = () => {
  const { user, isLoading } = useAuth();

  if (isLoading) {
    return (
      <View style={styles.splashContainer}>
        <Image
          source={require("../../assets/icon.png")}
          style={styles.logo}
          resizeMode="contain"
        />
        <ActivityIndicator
          size="large"
          color="#0000ff"
          style={styles.loading}
        />
      </View>
    );
  }

  return (
    <Stack.Navigator
      screenOptions={{
        headerStyle: {
          backgroundColor: "#f5f5f5",
        },
        headerTitleStyle: {
          fontWeight: "bold",
          fontSize: 18,
        },
        headerTitleAlign: "center",
        headerTintColor: "#333",
      }}
    >
      {user ? (
        <>
          <Stack.Screen
            name="Home"
            component={HomeScreen}
            options={{
              title: "Car Brands",
              headerLeft: () => null,
            }}
          />
          <Stack.Screen
            name="ModelScreen"
            component={ModelScreen}
            options={{
              title: "Models",
            }}
          />
        </>
      ) : (
        <Stack.Screen
          name="SignIn"
          component={SignInScreen}
          options={{ headerShown: false }}
        />
      )}
    </Stack.Navigator>
  );
};

const styles = StyleSheet.create({
  splashContainer: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "#ffffff",
  },
  logo: {
    width: 200,
    height: 200,
    marginBottom: 50,
  },
  loading: {
    marginTop: 30,
  },
});

export default AppNavigator;
