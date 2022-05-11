import { StyleSheet, View, Text } from 'react-native';
import React from 'react';
import { Feather } from '@expo/vector-icons'
import { Fontisto } from '@expo/vector-icons'

const CardView = (props) => {
    const Icon = () => {
        if(props.icon === 'clear_day'){
            return(
                <Feather style={styles.cardIcon} name="sun" size={40} color="white" />
            )    
        }
        if(props.icon === 'cloudly_day'){
            return(
                <Fontisto style={styles.cardIcon} name="day-cloudy" size={40} color="white" />
            )     
        }
        if(props.icon === 'rain'){
            return(
                <Feather style={styles.cardIcon} name="cloud-rain" size={40} color="white" />
            ) 
            
        }         
    }
    return (
        <View style={[styles.card, {backgroundColor: props.backgroundColor}]}>
            <Text style={styles.cardTitle}>{props.title}</Text>
            <Text style={styles.dateTime}>{props.date}</Text>
            <Icon></Icon>
            <View style={styles.temperature}>
                <Text style={styles.temperatureText}>{props.temperature}</Text>
                <Text style={[styles.temperatureText, { fontSize: 14 }]}>°c</Text>
            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    card: {
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: 20,
        margin: 10,
        width: 110,
        height: 210,

    },
    cardIcon: {
        marginTop: 15,
        color:"white",
    },
    temperature: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    temperatureText: {
        color: "white",
        fontSize: 30,

    },
    cardTitle: {
        color: "white",
        fontSize: 25,
    },
    dateTime: {
        color: "white",
        fontSize: 15,
    },
});


export default CardView