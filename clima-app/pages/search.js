import { StyleSheet, ScrollView, Text, View } from 'react-native';
import api from '../server/api';
import { useState, useEffect } from 'react';

const SearchScreen = (props) => {

    if (props.cityName === '') {
        return null
        
    }
    const [cityClimate, setCityClimate] = useState({})


    const getRequest = async () => {
        
        api.get(`/weather?key=c1c886d3&city_name=${props.cityName}`)
            .then((response) => {    
                setCityClimate(response.data.results)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados cidade",error);
            });

    }
    useEffect(() => {
        getRequest()

    }, [props.cityName])

    return (
            <View  style={styles.container}  >
                <Text>{cityClimate.city_name}</Text>
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

export default SearchScreen