import { StyleSheet, Dimensions, Text, View, Keyboard, Image} from 'react-native';
import api from '../server/api';
import { useState, useEffect } from 'react';
import CardInfo from '../components/CardInfo';
import { FontAwesome } from '@expo/vector-icons';

var config = require('../config.json');

const SearchScreen = (props) => {

    if (props.cityName === '') {
        return (
            <View style={styles.inicial}>
                <Image
                style={styles.img}
                source={{uri: 'https://cdn.icon-icons.com/icons2/882/PNG/512/1-83_icon-icons.com_68859.png'}}
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
                <View style={styles.itensStyle}>
                    <CardInfo title={"Data"} value={cityClimate.date}/>
                    <CardInfo title={"Tempo"} value={cityClimate.description}/>
                    <CardInfo title={"Umidade"} value={cityClimate.humidity}/>
                    <CardInfo title={"Vento"} value={cityClimate.wind_speedy}/>
                </View>
            </View>
    );
}

const styles = StyleSheet.create({
    itensStyle: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'space-between',
        backgroundColor: '#006092',
        borderRadius: 20,
        flexDirection: 'row',
        flexWrap: 'wrap',
        marginTop: 30,
        marginBottom: 390,
        marginLeft: 10,
        marginRight: 10

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
        marginTop: 30   
    },
    img: {
        width: 200,
        height: 200
    }
})

export default SearchScreen