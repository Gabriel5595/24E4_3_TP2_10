import React from 'react';
import { View, Text, Button, StyleSheet } from 'react-native';

const ProductItem = ({ product, addToCart }) => (
    <View style={styles.item}>
        <Text style={styles.itemText}>{product.name}</Text>
        <Text style={styles.itemText}>${product.price}</Text>
        <Button title="Add to Cart" onPress={() => addToCart(product)} />
    </View>
);

const styles = StyleSheet.create({
    item: {
        marginBottom: 15,
        padding: 10,
        backgroundColor: '#f4f4f4',
        borderRadius: 8,
        alignItems: 'center',
    },
    itemText: {
        fontSize: 18,
    },
});

export default ProductItem;
