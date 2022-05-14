import { StyleSheet, ScrollView, Text, View } from 'react-native';
import api from '../server/api';
import { useState, useEffect } from 'react';

const SearchScreen = () => {
    const [cityClimate, setCityClimate] = useState({})

    const getRequest = async () => {
        api.get("/weather?key=44d09c68&city_name=Crato,ce")
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
                <Text>{cityClimate.description}</Text>
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