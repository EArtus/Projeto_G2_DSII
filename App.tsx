import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";
import HomeScreen from "./src/Screens/HomeScreen";
import MapScreen from "./src/Screens/MapScreen";
import AddUserScreen from "./src/Screens/AddUserScreen";
import ScheduleCollectionScreen from "./src/Screens/ScheduleCollectionScreen";
import RecyclingInfoScreen from "./src/Screens/RecyclingInfoScreen";
import UserDetailsScreen from "./src/Screens/UserDetailsScreen";

type RootStackParamList = {
  Home: undefined;
  MapScreen: undefined;
  AddUser: undefined;
  ScheduleCollection: undefined;
  UserDetails: undefined;
  RecyclingInfoScreen: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export default function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen
          name="Home"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="MapScreen"
          component={MapScreen}
          options={{ title: "Mapa de Pontos de Descarte" }}
        />
        <Stack.Screen
          name="AddUser"
          component={AddUserScreen}
          options={{ title: "Adicionar Usuário" }}
        />
        <Stack.Screen
          name="ScheduleCollection"
          component={ScheduleCollectionScreen}
          options={{ title: "Agendar Coleta" }}
        />
        <Stack.Screen
          name="UserDetails"
          component={UserDetailsScreen}
          options={{ title: "Painel do Usuário" }}
        />
        <Stack.Screen
          name="RecyclingInfoScreen"
          component={RecyclingInfoScreen}
          options={{ title: "Informações de Reciclagem" }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}