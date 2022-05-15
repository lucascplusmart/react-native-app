import { StyleSheet, ScrollView, Text, View } from 'react-native';
import api from '../server/api';
import { useState, useEffect } from 'react';

const SearchScreen = (props) => {
    const [cityClimate, setCityClimate] = useState({})
    console.log(props.cityName)
    const getRequest = async () => {
        
        api.get(`/weather?key=c1c886d3&city_name=${props.cityName}`)
            .then((response) => {
                console.log("GET Response")
                console.log(response.data);
                setCityClimate(response.data.results)
                console.log(cityClimate)
            })
            .catch(function (error) {
                console.log("Error ao carregar dados cidade",error);
            });

    }
    useEffect(() => {
        getRequest()

    }, [])

    return (
        <ScrollView >
            <View>
                <Text>{cityClimate.city_name}</Text>
            </View>
        </ScrollView>
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