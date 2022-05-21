import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, TextInput } from 'react-native';
import { FontAwesome } from '@expo/vector-icons';

const Search = (props) => {

    const [value, setValue] = useState("")
    return (
        <SafeAreaView style={styles.container}>
            <TouchableOpacity onPress={() => props.setText(value) } style={styles.buttonSearch}>
                <FontAwesome name="search" size={props.size} color={props.color} />
            </TouchableOpacity>

            <TextInput
                style={styles.inputSearch}
                placeholder='Digite o nome da cidade'
                value={value}
                onChangeText={(value) => setValue(value)}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal: 15,
        marginVertical: 12,
        display: 'flex',
        flexDirection: 'row-reverse',
        width: "90%"

    },
    buttonSearch: {
        display: 'flex',
        alignItems: 'flex-end',

    },
    inputSearch: {
        display: 'flex',
        alignItems: 'flex-start',
        width: "100%",
        alignSelf: 'center'
    }
});

export default Search;
