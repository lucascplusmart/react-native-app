import { StyleSheet, View, Text } from 'react-native';
import React from 'react';

const CardInfo = (props) => {


    return (
        <View style={styles.card}>
            <Text style={styles.text}>{props.title}</Text>
            <Text style={[styles.text, { color: '#adadad' }]}>{props.value}</Text>
        </View>
    )
}
const styles = StyleSheet.create({
    card: {
        alignItems: 'center',
        margin: 10,
        minWidth: 150,
    },
    text: {
        color: '#e0e0e0',
        margin: 5,
        marginLeft: 15,
        fontSize: 18,
    },
});

export default CardInfo