import React, { useState } from 'react';
import { View, Text, FlatList, Button, StyleSheet } from 'react-native';
import ProductItem from '../components/ProductItem';

const HomeScreen = ({ navigation }) => {
    const [products, setProducts] = useState([
        { id: '1', name: 'Product A', price: 10.0 },
        { id: '2', name: 'Product B', price: 20.0 },
        { id: '3', name: 'Product C', price: 30.0 },
    ]);
    const [cart, setCart] = useState([]);

    const addToCart = (product) => {
        setCart((prevCart) => [...prevCart, product]);
    };

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Products</Text>
            <FlatList
                data={products}
                keyExtractor={(item) => item.id}
                renderItem={({ item }) => (
                    <ProductItem product={item} addToCart={addToCart} />
                )}
            />
            <Button title="View Cart" onPress={() => navigation.navigate('Cart', { cart })} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
    },
    title: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
    },
});

export default HomeScreen;
