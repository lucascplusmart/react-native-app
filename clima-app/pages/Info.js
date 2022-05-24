import {
    StyleSheet,
    ScrollView,
    Text,
    View,
    FlatList,
    Image
} from 'react-native';
import { useState, useEffect } from 'react';
import { WindowHeight } from '../utils/dimesion';


const renderItem = ({ item }) => (
        <View style={styles.listItem}>
            <Image source={{ uri: item.avatar_url }} style={{ width: 60, height: 60, borderRadius: 30 }} />
            <View style={{ alignItems: "center", flex: 1 }}>
                <Text style={{ fontWeight: "bold" }}>{item.login}</Text>
            </View>
        </View>
        
    

);

const InfoScreen = () => {
    const [data, setData] = useState()

    const getMovieRequest = async () => {
        const url = "https://api.github.com/repos/lucascplusmart/react-native-app/assignees"
        const response = await fetch(url)
        const responseJson = await response.json()

        if (responseJson) {
            setData(responseJson)
        }

    }

    useEffect(() => {
        getMovieRequest()

    }, [])


    return (
        <View>
            <View style={styles.text}>
                <Text >
                    Esse aplicativo foi pensado e desenvolvido por (nossos nomes), visando a obtenção da nota parcial da disciplina de Projeto de Sistema Web I, 
                    do curso de Sistemas de Informação do Instituto Federal de Educação, Ciência e Tecnologia do Ceará, campus Crato. 
                    O app foi desenvolvido em React Native e faz uso das APIs (Application Programming Interface) HG Weather e Linkin. 
                    Para seu bom funcionamento, necessita da localização do dispositivo (coletada mediante permissão) e 
                    recomendamos que seja usado em Sistema Operacional Android.
                </Text>
            </View>
          
            <FlatList
                style={{ marginTop: 50 }}
                contentContainerstyles={styles.list}
                data={data}
                renderItem={renderItem}
                keyExtractor={(_, index) => 'key' + index}
            />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#F7F7F7',
        marginTop: 60
    },
    listItem: {
        margin: 10,
        padding: 10,
        backgroundColor: "#FFF",
        width: "80%",
        flex: 1,
        alignSelf: "center",
        flexDirection: "row",
        borderRadius: 20
    },
    text:{
        borderRadius: 20,
        backgroundColor: '#FFF',
        height: 0.4 * WindowHeight,
        justifyContent: 'center',
        marginVertical: 8,
        marginHorizontal: 16,
        padding: 20,
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    }

});
export default InfoScreen