import { StyleSheet, ScrollView, Text, View } from 'react-native';



const InfoScreen = () => {
    async function getLocation () {
        let {locationStatus} = await Location.requestForegroundPermissionsAsync()

        if (locationStatus !== 'granted'){
            console.log("Acesso negado")
        }else{
            console.log("Acesso permitido")
            let location = await Location.getCurrentPositionAsync({});
            setGeoLocation(location.coords);
            console.log(location)
            console.log(location.coords)            
        }
    }

    useEffect(() => {
        getLocation()

    }, [])


    return (
            <View  style={styles.container}  >
                <Text>Informações do App</Text>
            </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
})

export default InfoScreen