import React, { useState } from "react";
import { Button, Text, View, StyleSheet, TouchableOpacity, Pressable, TextInput } from "react-native";
import Modal from "react-native-modal";
import { FontAwesome } from '@expo/vector-icons';
import SendEmailUser from "../mail/ send-email";


const ModalSendEmail = () => {


    return (
        <View style={{ flex: 1 }}>
            <Button title="Show modal" onPress={toggleModal} />


        </View>
    );
}


const SendEmail = (props) => {
    const [isModalVisible, setModalVisible] = useState(false);
    const [textDestinatario, setTextDestinatario] = useState('');
    const [userEmailDestinatario, setUserEmailDestinatario] = useState();


    const toggleModal = () => {
        setModalVisible(!isModalVisible);
    };

    const send = (textDestinatario) => {
        setUserEmailDestinatario(textDestinatario)
        console.log(userEmailDestinatario)
        SendEmailUser(
            userEmailDestinatario,
            'Informações sobre o clima',
            'Dados clima',
            { cc:null }
        )
    }

    return (
        <View>
            <Modal isVisible={isModalVisible}>
                <View style={styles.centeredView}>
                    <View style={[styles.modalView, { width: 250, height: 500 }]}>
                        <Text style={styles.header}>E-mail</Text>
                        <TextInput
                            placeholder="Destinatario do e-mail"
                            onChangeText={textDestinatario => setTextDestinatario(textDestinatario)}
                            defaultValue={textDestinatario}
                            maxLength={50}
                            autoFocus={true}
                            contextMenuHidden={true}
                            style={styles.textInput}
                        />

                        <View style={{
                            flexDirection: 'row'
                        }}>

                            <Pressable
                                style={[styles.button, styles.buttonSend]}
                                onPress={()=>send(textDestinatario)}
                            >
                                <Text style={styles.textStyle}>Send</Text>
                            </Pressable>

                            <Pressable
                                style={[styles.button, styles.buttonClose]}
                                onPress={toggleModal}
                            >
                                <Text style={styles.textStyle}>Closed</Text>
                            </Pressable>
                        </View>

                    </View>
                </View>

            </Modal>

            <TouchableOpacity onPress={toggleModal} style={styles.icon}>
                <FontAwesome name="send" size={props.size} color={props.color} />

            </TouchableOpacity>
        </View>

    );
};

const styles = StyleSheet.create({
    header: {
        fontSize: 36,
        marginBottom: 48
    },
    icon: {
        marginHorizontal: 15,
        marginVertical: 12
    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22,

    },
    centeredView: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        marginTop: 22
    },
    modalView: {
        margin: 20,
        backgroundColor: "white",
        borderRadius: 20,
        padding: 35,
        alignItems: "center",
        shadowColor: "#000",
        shadowOffset: {
            width: 0,
            height: 2
        },
        shadowOpacity: 1,
        shadowRadius: 4,
        elevation: 5
    },
    button: {
        borderRadius: 20,
        padding: 10,
        elevation: 2,
        marginLeft: 10
    },
    buttonSend: {
        backgroundColor: "#00FF00",
    },
    buttonClose: {
        backgroundColor: "#F6404F",
    },
    textStyle: {
        color: "white",
        fontWeight: "bold",
        textAlign: "center"
    },
    modalText: {
        marginBottom: 15,
        textAlign: "center"
    },
    textInput: {
        height: 40,
        borderColor: "#000000",
        borderBottomWidth: 1,
        marginBottom: 36
    },

});

export default SendEmail;



