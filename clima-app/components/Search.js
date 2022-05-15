import React, { useState } from 'react';
import { SafeAreaView, TouchableOpacity, StyleSheet, TextInput, Keyboard} from 'react-native';
import { FontAwesome } from '@expo/vector-icons';
import {getRequest} from '../pages/search' 

const Search = (props) => {
    const [text, setText] = useState('')
    console.log("digitando:")
    console.log(text)

    return(
        <SafeAreaView style={styles.container}>
            <TouchableOpacity style={styles.buttonSearch}>
                <FontAwesome 
                name='search' 
                size={props.size} 
                color={props.color}
                onPress={() => {}}/> 
            </TouchableOpacity>
            <TextInput 
            style={styles.inputSearch} 
            placeholder='Cidade, país...'
            value={text}
            onChangeText={(value) => setText(value)}
            />

        </SafeAreaView>
    );
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        marginVertical:12,
        display: 'flex',
        flexDirection: 'row-reverse',
        width: "90%"

    },
    buttonSearch: {
        display: 'flex',
        alignItems: 'flex-end',
        
    },
    inputSearch:{
        display: 'flex',
        alignItems: 'flex-start',
        width: "100%",
        alignSelf: 'center'
    }
});

export default Search;
