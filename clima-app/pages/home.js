import {
    StyleSheet,
    Text,
    View,
    ScrollView,
    Alert
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardInfo from '../components/CardInfo';
import WeatherList from '../components/WeatherListing';
import { useEffect, useState } from 'react';
import Map from '../components/Map';
import { WindowHeight, WindowWidth } from '../utils/dimesion';
import GeoLocation from '../utils/geoLocation';



const HomeScreen = (props) => {
    let currentTemperature = props.data
    let listDate = props.data.forecast

    const [geoLocation, setGeoLocation] = useState({})

    const Icon = () => {
        if (currentTemperature.currently === 'dia') {
            return (
                <MaterialCommunityIcons style={styles.iconSun} name="weather-sunny" size={50} color="orange" />
            )
        } else {
            return (
                <MaterialCommunityIcons style={styles.iconSun} name="moon-waning-crescent" size={50} color="black" />
            )
        }
    }

    async function getLocation() {
        let coords = await GeoLocation()
        if (coords === 0) {
            Alert.alert(
                "Acesso negado",
                "Ative a geo localização do dispositivo para obter as informações geográficas",
                [
                    { text: "OK", onPress: () => null }
                ]
            );

        }
        setGeoLocation(coords);
    }

    useEffect(() => {
        getLocation()

    }, [])



    return (
        <ScrollView>
            <View style={styles.container}>
                <Icon></Icon>

                <View style={styles.temperature}>
                    <Text style={styles.temperatureText}>{currentTemperature.temp}</Text>
                    <Text style={[styles.temperatureText, { fontSize: 14 }]}>°c</Text>
                </View>
                <Text style={{ fontSize: 14, color: "black" }}>{currentTemperature.city}</Text>
                <Text style={{ fontSize: 14, color: "black" }}>{currentTemperature.description}</Text>

                <WeatherList dados={listDate} />

                <View style={styles.info}>
                    <Text style={styles.infoText}>Informações adicionais</Text>
                    <View style={styles.infoCards}>
                        <CardInfo title={'Umidade'} value={currentTemperature.humidity} />
                        <CardInfo title={'Vento'} value={currentTemperature.wind_speedy} />
                        <CardInfo title={'Hora da medição'} value={currentTemperature.time} />
                        <CardInfo title={'Turno'} value={currentTemperature.currently} />
                    </View>
                </View>

                <View>
                    <Map
                        latitude={geoLocation.latitude}
                        longitude={geoLocation.longitude}
                        city={currentTemperature.city}
                        description={currentTemperature.description}
                    />
                </View>
            </View>
        </ScrollView>

    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    iconSun: {
        marginTop: 50
    },
    temperature: {
        alignItems: 'center',
        flexDirection: 'row',
        marginTop: 5
    },
    temperatureText: {
        color: "black",
        fontSize: 35,

    },
    info: {      
        alignItems: 'center',
        backgroundColor: '#006092',
        borderRadius: 28,
        width: 0.9 * WindowWidth,
        height: 0.3 * WindowHeight,
        margin: 10,
        alignItems: 'center',
        justifyContent: 'space-between',
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoCards: {
        flex: 1,
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});

export default HomeScreen