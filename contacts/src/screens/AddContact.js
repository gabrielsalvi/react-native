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
        this.state = {
            firstName: '',
            lastName: '',
            phone: '',
            email: '',
        }
    }

    handleChange = (name, value) => {
        this.setState({ [name]: value });
    }

    addContact = () => {
        const contact = { ...this.state }

        // return contact;
        console.log(contact)
    }

    render() {
        return (
            <View style={styles.container}>
                <View style={styles.form}>
                    <FormInput 
                        icon='user'
                        name='firstName'
                        placeholder='Nome'
                        value={this.state.firstName}
                        handleChange={this.handleChange} 
                    />
                    <FormInput 
                        name='lastName'
                        placeholder='Sobrenome'
                        value={this.state.lastName}
                        handleChange={this.handleChange} 
                    />
                    <FormInput 
                        icon='phone'
                        name='phone'
                        placeholder='Nº Telefone'
                        value={this.state.phone}
                        handleChange={this.handleChange} 
                    />
                    <FormInput
                        icon='mail'
                        name='email' 
                        placeholder='Email'
                        value={this.state.email}
                        handleChange={this.handleChange}
                    />
                    <View style={styles.buttonsContainer}>
                        <TouchableHighlight style={styles.button} onPress={this.addContact}>
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
