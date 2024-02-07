import { StatusBar } from "expo-status-bar";
import { StyleSheet, Text, View } from "react-native";
import ProductPage from "./screens/ProductPage";

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      <ProductPage />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#F9F9F9",
    alignItems: "center",
    justifyContent: "center",
  },
});
