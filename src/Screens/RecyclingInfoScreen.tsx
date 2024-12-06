import React from "react";
import { View, Text, StyleSheet, ScrollView } from "react-native";

const RecyclingInfoScreen = () => {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Informações de Reciclagem</Text>
      <ScrollView contentContainerStyle={styles.scrollContainer}>
        <View style={styles.section}>
          <Text style={styles.sectionTitle}>1. Lixo Orgânico</Text>
          <Text style={styles.text}>
            Exemplos: Restos de comida, cascas de frutas, borra de café.
          </Text>
          <Text style={styles.text}>
            Descarte: Lixeira verde. Pode ser transformado em adubo por compostagem.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>2. Lixo Reciclável</Text>
          <Text style={styles.text}>
            Exemplos: Plástico (garrafas), vidro (potes), papel (jornais), metal (latas).
          </Text>
          <Text style={styles.text}>
            Descarte: Lixeira azul ou amarela. Lave os itens antes de descartar.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>3. Lixo Seco (Não Reciclável)</Text>
          <Text style={styles.text}>
            Exemplos: Fraldas, espelhos, cerâmica quebrada.
          </Text>
          <Text style={styles.text}>
            Descarte: Lixeira preta ou cinza. Vai para aterros sanitários.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>4. Lixo Perigoso</Text>
          <Text style={styles.text}>
            Exemplos: Pilhas, baterias, medicamentos vencidos, lâmpadas.
          </Text>
          <Text style={styles.text}>
            Descarte: Pontos de coleta específicos para produtos perigosos.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>
            5. Resíduos de Construção e Demolição
          </Text>
          <Text style={styles.text}>
            Exemplos: Tijolos, cimento, madeiras.
          </Text>
          <Text style={styles.text}>
            Descarte: Caçambas específicas para resíduos de construção.
          </Text>
        </View>

        <View style={styles.section}>
          <Text style={styles.sectionTitle}>6. Lixo Eletrônico (e-lixo)</Text>
          <Text style={styles.text}>
            Exemplos: Celulares, computadores, televisores.
          </Text>
          <Text style={styles.text}>
            Descarte: Pontos de coleta de eletrônicos ou programas de devolução de empresas.
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f4f4f4",
    paddingTop: 20,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 20,
    color: "#6200ea",
  },
  scrollContainer: {
    paddingHorizontal: 20,
  },
  section: {
    backgroundColor: "#fff",
    borderRadius: 8,
    padding: 15,
    marginBottom: 15,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3, // Para Android
  },
  sectionTitle: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 8,
    color: "#333",
  },
  text: {
    fontSize: 16,
    color: "#555",
    marginBottom: 5,
  },
});

export default RecyclingInfoScreen;
