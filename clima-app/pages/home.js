import {
    StyleSheet,
    Text,
    View,
    ScrollView
} from 'react-native';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import CardView from '../components/CardView';
import CardInfo from '../components/CardInfo';

const HomeScreen = (props) => {
    let currentTemperature = props.data
    let listDate =  props.data.forecast

    const Icon = () => {
        if (currentTemperature.currently === 'dia') {
            return (
                <MaterialCommunityIcons style={styles.iconSun} name="weather-sunny" size={50} color="orange" />
            )
        } else {
            return (
                <MaterialCommunityIcons style={styles.iconSun} name="moon-waning-crescent" size={24} color="black" />
            )
        }
    }

    const Card = () => {
        return (
            <View style={styles.cardView}>
                <CardView title={listDate[1].weekday} temperature={listDate[1].max} backgroundColor={"#006092"} date={listDate[1].date} icon={listDate[1].condition} />
                <CardView title={listDate[2].weekday} temperature={listDate[2].max} backgroundColor={"#006092"} date={listDate[2].date} icon={listDate[2].condition} />
                <CardView title={listDate[3].weekday} temperature={listDate[3].max} backgroundColor={"#006092"} date={listDate[3].date} icon={listDate[3].condition} />
            </View>
        )
    }

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

                {/* <Card/> */}

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