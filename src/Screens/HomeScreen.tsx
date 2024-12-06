import React, { useEffect, useState } from "react";
import { View, FlatList, StyleSheet, Alert, Text } from "react-native";
import axios from "axios";
import Header from "../components/Header";
import Footer from "../components/Footer";

const HomeScreen = () => {
  const [users, setUsers] = useState<any[]>([]);

  const fetchUsers = async () => {
    try {
      const response = await axios.get("http://192.168.3.8:3000/users");
      setUsers(response.data);
    } catch (error) {
      console.error("Erro ao buscar usuários:", error);
      Alert.alert("Erro", "Não foi possível buscar os usuários.");
    }
  };

  useEffect(() => {
    fetchUsers();
  }, []);

  return (
    <View style={styles.container}>
      <Header />
      <FlatList
        data={users}
        keyExtractor={(item) => item.id.toString()}
        renderItem={({ item }) => (
          <View style={styles.userContainer}>
            <Text style={styles.userName}>{item.name}</Text>
            <Text style={styles.userEmail}>{item.email}</Text>
          </View>
        )}
        contentContainerStyle={styles.list}
      />
      <Footer />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
  },
  list: {
    paddingHorizontal: 20,
  },
  userContainer: {
    backgroundColor: "#f0f0f0",
    padding: 10,
    marginTop: 10,
    borderRadius: 5,
  },
  userName: {
    fontSize: 16,
    fontWeight: "bold",
    color: "#333",
  },
  userEmail: {
    fontSize: 14,
    color: "#666",
  },
});

export default HomeScreen;
