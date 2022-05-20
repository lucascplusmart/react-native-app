import MapView, {Marker} from 'react-native-maps';
import { StyleSheet, View, Dimensions } from 'react-native';

const Map = (props) => {
    let lat = (props.latitude) ? (props.latitude) : -43.12467
    let long = (props.longitude) ? (props.longitude) : -22.90376
    //-22.90376521367796, -43.12467966892886 - coordenadas do Rio de Janeiro

    return (
        <View>
            <MapView style={styles.mapStyle}
            region={{
                latitude: lat,
                longitude: long,
                latitudeDelta: 0.099,
                longitudeDelta: 0.041,
            }}
            >
            <Marker
            coordinate={{
                longitude: long,
                latitude: lat
              }}
            title={props.city}
            description={props.description}
            />

            </MapView>
        </View>
    )
}

const styles = StyleSheet.create({
    mapStyle:{
        marginTop: 20,
        marginLeft: 20,
        marginRight: 20,
        marginBottom: 30,
        width: (Dimensions.get('window').width) - 20,
        height: 300,
    }
})

export default Map