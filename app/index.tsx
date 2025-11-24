import { View, Text, StyleSheet } from "react-native";

export default function HomeScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Pizzaria Vale do Sabor</Text>
      <Text style={styles.subtitle}>Bem-vindo ao nosso cardápio 🍕</Text>
      <Text style={styles.info}>A FlatList será implementada aqui!</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#fff7e6",
    padding: 20,
  },
  title: {
    fontSize: 26,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  subtitle: {
    marginTop: 10,
    fontSize: 18,
    color: "#555",
  },
  info: {
    marginTop: 25,
    fontSize: 16,
    fontStyle: "italic",
    color: "#777",
  },
});
