import React, { useEffect, useState } from "react";
import { View, Text, FlatList, StyleSheet, Alert } from "react-native";
import axios from "axios";

type Collection = {
  id: number;
  type: string;
  quantity: string;
  date: string;
  address: string;
};

const UserDetailsScreen = () => {
  const [collections, setCollections] = useState<Collection[]>([]);
  const [loading, setLoading] = useState(false);

  const fetchCollections = async () => {
    try {
      setLoading(true);
      const response = await axios.get("http://192.168.3.8:3000/collections"); // Substitua pelo IP correto
      setCollections(response.data);
    } catch (error) {
      console.error("Erro ao buscar coletas:", error);
      Alert.alert("Erro", "Não foi possível carregar as coletas agendadas.");
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchCollections();
  }, []);

  const renderCollection = ({ item }: { item: Collection }) => (
    <View style={styles.card}>
      <Text style={styles.cardTitle}>Tipo: {item.type}</Text>
      <Text style={styles.cardText}>Quantidade: {item.quantity}</Text>
      <Text style={styles.cardText}>
        Data: {new Date(item.date).toLocaleDateString()} às{" "}
        {new Date(item.date).toLocaleTimeString()}
      </Text>
      <Text style={styles.cardText}>Endereço: {item.address}</Text>
    </View>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Coletas Agendadas</Text>
      {loading ? (
        <Text style={styles.loading}>Carregando...</Text>
      ) : collections.length > 0 ? (
        <FlatList
          data={collections}
          keyExtractor={(item) => item.id.toString()}
          renderItem={renderCollection}
          contentContainerStyle={styles.list}
        />
      ) : (
        <Text style={styles.noData}>Nenhuma coleta agendada encontrada.</Text>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    padding: 20,
  },
  title: {
    fontSize: 24,
    fontWeight: "bold",
    marginBottom: 20,
    color: "#6200ea",
    textAlign: "center",
  },
  loading: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
  noData: {
    textAlign: "center",
    fontSize: 16,
    color: "#555",
  },
  list: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Sombras para Android
  },
  cardTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 5,
    color: "#333",
  },
  cardText: {
    fontSize: 16,
    color: "#555",
  },
});

export default UserDetailsScreen;
