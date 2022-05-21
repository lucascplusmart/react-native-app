import { StyleSheet, Dimensions, Text, View, Keyboard, Image} from 'react-native';
import api from '../server/api';
import { useState, useEffect } from 'react';
import CardInfo from '../components/CardInfo';
import { FontAwesome } from '@expo/vector-icons';

var config = require('../config.json');

const SearchScreen = (props) => {

    if (props.cityName === '') {
        return (
            <View style={styles.containerInicial}>
                <Image
                style={styles.img}
                source={require('../assets/aguardando_pesquisa.png')}
                />
            </View>
        );
        
    }
    const [cityClimate, setCityClimate] = useState({})

    const getRequest = async () => {
        
        api.get(`/weather?key=${config.key_01}&city_name=${props.cityName}`)
            .then((response) => {    
                setCityClimate(response.data.results)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados cidade",error);
            });

    }
    useEffect(() => {
        Keyboard.dismiss()
        getRequest()

    }, [props.cityName])

    return (
            <View style={styles.container}>
                <View style={styles.location}>
                    <Text style={styles.nameStyle}>{cityClimate.city}  </Text>
                    <FontAwesome name="map-marker" size={28} color='#E73E2B'/>
                </View>
                <Text style={styles.description}>Tempo: {cityClimate.description}</Text>
                <View style={styles.itensStyle}>
                    <CardInfo title={"Data"} value={cityClimate.date}/>
                    <CardInfo title={"Hora"} value={cityClimate.time}/>
                    <CardInfo title={"Temperatura ºC"} value={cityClimate.temp}/>
                    <CardInfo title={"Umidade %"} value={cityClimate.humidity}/>
                    <CardInfo title={"Vento"} value={cityClimate.wind_speedy}/>
                    <CardInfo title={"Céu"} value={cityClimate.condition_slug}/>
                    <CardInfo title={"Nascer do sol"} value={cityClimate.sunrise}/>
                    <CardInfo title={"Pôr do sol"} value={cityClimate.sunset}/>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    itensStyle: {
        alignItems: 'center',
        alignSelf: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#006092',
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        margin: 10,
    },
    nameStyle: {
        color: 'black',
        marginLeft: 15,
        fontSize: 20,
        alignSelf: 'center',
    },
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        flexDirection: 'column'
    },
    location: {
        justifyContent: 'center',
        alignItems: 'center',
        flexDirection: 'row',
        margin: 10   
    },
    img: {
        width: 200,
        height: 200
    },
    containerInicial:{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description:{
        color: '#006092',
        fontSize: 15,
        alignSelf: 'center',
    }
})

export default SearchScreen