import * as Location from 'expo-location';

async function GeoLocation() {
    let locationStatus = await Location.requestForegroundPermissionsAsync()

    if ((locationStatus.status !== 'granted') || (!locationStatus.granted)) {
        return 0;
    } else {
        console.log("Acesso permitido")
        let location = await Location.getCurrentPositionAsync({});
        return location.coords;
    }
}

export default GeoLocation