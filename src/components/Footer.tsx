import React from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { StackNavigationProp } from "@react-navigation/stack";

type RootStackParamList = {
  UserDetails: undefined; // Painel do Usuário
  RecyclingInfoScreen: undefined;
};

type FooterNavigationType = StackNavigationProp<RootStackParamList>;

const Footer = () => {
  const navigation = useNavigation<FooterNavigationType>();

  return (
    <View style={styles.footer}>
      {/* Botão para Painel do Usuário */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("UserDetails")}
      >
        <Text style={styles.button}>Painel do Usuário</Text>
      </TouchableOpacity>

      {/* Botão para Informações de Reciclagem */}
      <TouchableOpacity
        style={styles.buttonContainer}
        onPress={() => navigation.navigate("RecyclingInfoScreen")}
      >
        <Text style={styles.button}>Informações de Reciclagem</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  footer: {
    backgroundColor: "#6200ea",
    padding: 20,
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    height: 100,
  },
  buttonContainer: {
    flex: 1,
    alignItems: "center",
  },
  button: {
    fontSize: 16,
    color: "white",
    fontWeight: "bold",
    textAlign: "center",
  },
});

export default Footer;
