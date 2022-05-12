import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { useState, useEffect } from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardView from '../components/CardView';
import CardInfo from '../components/CardInfo';
import api from '../server/api';

const HomeScreen = () => {
    const [currentTemperature, setCurrentTemperature] = useState()

    const getRequest = async () => {
        response = await api.get("/weather?key=44d09c68&user_ip=remote")
        setCurrentTemperature(response.data.results)
    }
    useEffect(() => {
        getRequest()

    }, [])

    return (
        <ScrollView>
            <View style={styles.container}>
                <MaterialCommunityIcons style={styles.iconSun} name="weather-sunny" size={50} color="orange" />

                <View style={styles.temperature}>
                    <Text style={styles.temperatureText}>{currentTemperature.temp}</Text>
                    <Text style={[styles.temperatureText, { fontSize: 14 }]}>°c</Text>
                </View>
                <Text style={{ fontSize: 14, color: "black" }}>{currentTemperature.city}</Text>
                <Text style={{ fontSize: 14, color: "black" }}>{currentTemperature.description}</Text>



                <View style={styles.cardView}>
                    <CardView title={"segunda"} temperature={0} backgroundColor={"#006092"} date={"15/05"} icon={"clear_day"} />
                    <CardView title={"terça"} temperature={0} backgroundColor={"#006092"} date={"15/05"} icon={"cloudly_day"} />
                    <CardView title={"quarta"} temperature={0} backgroundColor={"#006092"} date={"15/05"} icon={"rain"} />
                </View>

                <View style={styles.info}>
                    <Text style={styles.infoText}>Informações adicionais</Text>
                    <View style={styles.infoCards}>
                        <CardInfo title={'Umidade'} value={currentTemperature.humidity} />
                        <CardInfo title={'Vento'} value={currentTemperature.wind_speedy} />
                        <CardInfo title={'Hora da medição'} value={currentTemperature.time} />
                        <CardInfo title={'Turno'} value={currentTemperature.currently} />

                    </View>
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
    cardView: {
        margin: 10,
        flexDirection: 'row',
        alignItems: 'center'

    },
    info: {
        alignItems: 'center',
        backgroundColor: '#006092',
        borderRadius: 28,
        width: 350,
        height: 200,
        margin: 10
    },
    infoText: {
        color: 'white',
        fontSize: 20,
        fontWeight: 'bold'
    },
    infoCards: {
        flexDirection: 'row',
        flexWrap: 'wrap'
    }

});

export default HomeScreen