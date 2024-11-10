import React from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

const CartScreen = ({ route }) => {
    const { cart } = route.params;

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Cart</Text>
            {cart.length === 0 ? (
                <Text style={styles.emptyText}>Your cart is empty!</Text>
            ) : (
                <FlatList
                    data={cart}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <View style={styles.item}>
                            <Text style={styles.itemText}>{item.name}</Text>
                            <Text style={styles.itemText}>${item.price}</Text>
                        </View>
                    )}
                />
            )}
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
    emptyText: {
        fontSize: 18,
        color: 'gray',
    },
});

export default CartScreen;
