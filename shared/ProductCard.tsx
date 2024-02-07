import {
  View,
  Image,
  StyleSheet,
  Text,
  SafeAreaView,
  TouchableOpacity,
} from "react-native";

const ProductCard = () => {
  return (
    <SafeAreaView style={styles.productCardContainer}>
      <Image source={require("../assets/donut.png")} />
      <View style={styles.textContainer}>
        <Text>African Doug...</Text>
        <Text>$30</Text>
      </View>
      <TouchableOpacity style={styles.cartButton}>
        <Text>Add to Cart</Text>
      </TouchableOpacity>
    </SafeAreaView>
  );
};

export default ProductCard;

const styles = StyleSheet.create({
  productCardContainer: {
    backgroundColor: "#ffff",
    justifyContent: "center",
    alignItems: "center",
    gap: 10,
    borderRadius: 10,
    padding:15
  },
  textContainer: {
    flexDirection: "row",
    gap:10
  },
  cartButton:{
    backgroundColor:"red",
    padding:10,
    borderRadius:15
  }
});
