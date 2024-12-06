import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  MapScreen: undefined;
  AddUser: undefined;
  ScheduleCollection: undefined;
};

type HeaderNavigationType = StackNavigationProp<RootStackParamList>;

const Header = () => {
  const navigation = useNavigation<HeaderNavigationType>();

  return (
    <View style={styles.header}>
      {/* Botão do Mapa à Esquerda */}
      <TouchableOpacity onPress={() => navigation.navigate("MapScreen")}>
        <Text style={styles.button}>Mapa</Text>
      </TouchableOpacity>

      {/* Botão de Agendar Coleta no Centro */}
      <TouchableOpacity onPress={() => navigation.navigate("ScheduleCollection")}>
        <Text style={[styles.button, styles.centerButton]}>Agendar Coleta</Text>
      </TouchableOpacity>

      {/* Botão de Criar Usuário à Direita */}
      <TouchableOpacity onPress={() => navigation.navigate("AddUser")}>
        <Text style={styles.button}>Criar Usuário</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  header: {
    backgroundColor: "#6200ea",
    padding: 20,
    paddingTop: 50, // Ajuste para dispositivos com notch
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  button: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
  },
  centerButton: {
    fontSize: 18, // Maior para dar destaque ao botão central
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Header;
