import { View, Text, StyleSheet } from "react-native";

export default function ModalScreen() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>Janela Modal</Text>
      <Text style={styles.text}>
        Este é um modal criado automaticamente pelo Expo Router.
      </Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    padding: 20,
    backgroundColor: "#fff",
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: "#d32f2f",
  },
  text: {
    fontSize: 16,
    color: "#444",
    marginTop: 15,
    textAlign: "center",
  },
});
