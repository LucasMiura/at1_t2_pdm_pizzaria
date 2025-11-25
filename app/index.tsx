import { View, Text, StyleSheet, FlatList, Image, TouchableOpacity } from "react-native";

const pizzas = [
  {
    id: "1",
    nome: "Pizza Margherita",
    descricao: "Molho de tomate, mussarela e manjericão fresco.",
    preco: "R$ 35,00",
    imagem: "https://images.pexels.com/photos/1583884/pexels-photo-1583884.jpeg"
  },
  {
    id: "2",
    nome: "Calabresa Especial",
    descricao: "Calabresa fatiada, cebola e azeitona.",
    preco: "R$ 42,00",
    imagem: "https://images.pexels.com/photos/825661/pexels-photo-825661.jpeg"
  },
  {
    id: "3",
    nome: "Quatro Queijos",
    descricao: "Mussarela, provolone, parmesão e catupiry.",
    preco: "R$ 48,00",
    imagem: "https://images.pexels.com/photos/2619967/pexels-photo-2619967.jpeg"
  },
  {
    id: "4",
    nome: "Frango com Catupiry",
    descricao: "Frango desfiado temperado com catupiry cremoso.",
    preco: "R$ 45,00",
    imagem: "https://images.pexels.com/photos/1146760/pexels-photo-1146760.jpeg"
  },
  {
    id: "5",
    nome: "Moda da Casa",
    descricao: "Calabresa, bacon, milho, catupiry e mussarela.",
    preco: "R$ 52,00",
    imagem: "https://images.pexels.com/photos/4676400/pexels-photo-4676400.jpeg"
  },
  {
    id: "6",
    nome: "Portuguesa",
    descricao: "Presunto, ovos, cebola, milho, ervilha e mussarela.",
    preco: "R$ 44,00",
    imagem: "https://images.pexels.com/photos/708587/pexels-photo-708587.jpeg"
  },
  {
    id: "7",
    nome: "Pepperoni",
    descricao: "Mussarela e generosas fatias de pepperoni.",
    preco: "R$ 50,00",
    imagem: "https://images.pexels.com/photos/1596883/pexels-photo-1596883.jpeg"
  },
  {
    id: "8",
    nome: "Carne Seca",
    descricao: "Carne seca desfiada com catupiry.",
    preco: "R$ 55,00",
    imagem: "https://images.pexels.com/photos/4109086/pexels-photo-4109086.jpeg"
  },
  {
    id: "9",
    nome: "Chocolate",
    descricao: "Chocolate ao leite derretido com granulado.",
    preco: "R$ 39,00",
    imagem: "https://images.pexels.com/photos/3682838/pexels-photo-3682838.jpeg"
  },
  {
    id: "10",
    nome: "Banana com Canela",
    descricao: "Banana, açúcar, canela e leite condensado.",
    preco: "R$ 37,00",
    imagem: "https://images.pexels.com/photos/7363688/pexels-photo-7363688.jpeg"
  },
];

const renderItem = ({ item }) => (
  <View style={styles.card}>
    <Image source={{ uri: item.imagem }} style={styles.image} />
    <Text style={styles.nome}>{item.nome}</Text>
    <Text style={styles.descricao}>{item.descricao}</Text>
    <Text style={styles.preco}>{item.preco}</Text>

    <TouchableOpacity style={styles.botao}>
      <Text style={styles.textoBotao}>Adicionar Item</Text>
    </TouchableOpacity>
  </View>
);

export default function Home() {
  return (
    <View style={styles.container}>
      <Text style={styles.titulo}>Cardápio - Miura Pizzaria 🍕</Text>

      <FlatList
        data={pizzas}
        keyExtractor={(item) => item.id}
        renderItem={renderItem}
        showsVerticalScrollIndicator={false}
        contentContainerStyle={{ paddingBottom: 20 }}
      />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff7e6",
    padding: 15,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "bold",
    textAlign: "center",
    marginVertical: 15,
    color: "#d32f2f",
  },
  card: {
    backgroundColor: "#fff",
    padding: 15,
    marginBottom: 15,
    borderRadius: 12,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 4,
  },
  image: {
    width: "100%",
    height: 160,
    borderRadius: 12,
  },
  nome: {
    fontSize: 20,
    fontWeight: "bold",
    marginTop: 10,
    color: "#d32f2f",
  },
  descricao: {
    fontSize: 15,
    color: "#555",
    marginTop: 4,
  },
  preco: {
    fontSize: 18,
    marginTop: 6,
    fontWeight: "600",
    color: "#333",
  },
  botao: {
    backgroundColor: "#d32f2f",
    padding: 10,
    borderRadius: 10,
    marginTop: 10,
    alignItems: "center",
  },
  textoBotao: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "600",
  },
});
