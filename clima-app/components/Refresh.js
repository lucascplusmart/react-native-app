import { FontAwesome } from '@expo/vector-icons';
import { TouchableOpacity,StyleSheet } from 'react-native';
import React from 'react';

const Refresh = (props) =>{

    return(
        <TouchableOpacity  onPress={()=>props.getRequest()} style={styles.container}>
            <FontAwesome name="refresh" size={props.size} color={props.color} />
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    container: {
        marginHorizontal:15,
        marginVertical:12
    },
});


export default Refresh