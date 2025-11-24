import { Stack } from "expo-router";
import { View, StatusBar } from "react-native";

export default function RootLayout() {
  return (
    <View style={{ flex: 1 }}>
      <StatusBar barStyle="light-content" />
      <Stack
        screenOptions={{
          headerStyle: { backgroundColor: "#d32f2f" },
          headerTintColor: "#fff",
          headerTitleStyle: { fontWeight: "bold" },
        }}
      />
    </View>
  );
}
