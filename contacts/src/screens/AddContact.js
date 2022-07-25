import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import FormInput from '../components/FormInput';
import { colors, fonts } from '../../public/styles';

export default class AddContact extends Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <FormInput icon='user' placeholder='Nome'/>
                    <FormInput placeholder='Sobrenome'/>
                    <FormInput icon='phone' placeholder='Nº Telefone'/>
                    <FormInput icon='mail' placeholder='Email'/>
                    <View style={styles.buttonsContainer}>
                        <TouchableHighlight style={styles.button}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    form: {
        width: '90%',
    },
    buttonsContainer: {
        marginVertical: 30, 
        alignItems: 'center',
        justifyContent: 'center'
    },
    button: {
        width: 150,
        height: 40,
        borderRadius: 75,
        backgroundColor: colors.main,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontFamily: fonts.main,
        fontSize: fonts.inputSize,
        color: colors.secondary
    }
})
