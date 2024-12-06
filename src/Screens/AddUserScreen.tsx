import React, { useState } from "react";
import { View, Text, TextInput, Button, Alert, StyleSheet } from "react-native";
import axios from "axios";

const AddUserScreen = ({ navigation }: any) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");

  const handleAddUser = async () => {
    if (!name || !email) {
      Alert.alert("Erro", "Nome e email são obrigatórios.");
      return;
    }

    try {
      const response = await axios.post("http://192.168.3.8:3000/users", {
        name,
        email,
      });

      Alert.alert("Sucesso", "Usuário criado com sucesso!");
      navigation.goBack(); // Retorna à tela anterior
    } catch (error) {
      console.error("Erro ao criar usuário:", error);
      Alert.alert("Erro", "Não foi possível criar o usuário.");
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.label}>Nome:</Text>
      <TextInput
        style={styles.input}
        value={name}
        onChangeText={setName}
        placeholder="Digite o nome"
      />

      <Text style={styles.label}>Email:</Text>
      <TextInput
        style={styles.input}
        value={email}
        onChangeText={setEmail}
        placeholder="Digite o email"
        keyboardType="email-address"
      />

      <Button title="Criar Usuário" onPress={handleAddUser} color="#6200ea" />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: "#fff",
  },
  label: {
    fontSize: 16,
    marginBottom: 8,
    fontWeight: "bold",
  },
  input: {
    borderWidth: 1,
    borderColor: "#ccc",
    borderRadius: 4,
    padding: 8,
    marginBottom: 16,
  },
});

export default AddUserScreen;
