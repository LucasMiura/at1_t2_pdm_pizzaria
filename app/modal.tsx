import { View, Text, StyleSheet } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Sobre o Projeto</Text>
      <Text style={styles.texto}>
        Este é um modal criado automaticamente pelo Expo Router.  
        O objetivo da atividade foi criar uma FlatList com informações locais de uma pizzaria.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7e6",
    justifyContent: "center",
    padding: 25,
  },
  titulo: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d32f2f",
    textAlign: "center",
    marginBottom: 15,
  },
  texto: {
    fontSize: 16,
    color: "#444",
    lineHeight: 22,
    textAlign: "center",
  },
});
