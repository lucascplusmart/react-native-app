import { StyleSheet, ScrollView, Text, View } from 'react-native';



const InfoScreen = () => {

    return (
            <View  style={styles.container}  >
                <Text>Esse aplicativo foi desenvolvido visado a obtenção da nota parcial da disciplina de PSWI...</Text>
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