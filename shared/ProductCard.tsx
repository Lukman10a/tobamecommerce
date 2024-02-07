import { View, Image, StyleSheet } from 'react-native';

const ProductCard = () => {
  return (
    <View style={styles.productCardContainer}>
        <Image source={require('../assets/donut.png')} />
    </View>
  )
}

export default ProductCard

const styles = StyleSheet.create({
    productCardContainer: {
        backgroundColor: "#ffff"
    }
  });