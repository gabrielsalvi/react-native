import React, { Component } from 'react';
import { 
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import ContactsContext from '../context/ContactsContext';
import FormInput from '../components/FormInput';
import { colors, fonts } from '../../public/styles';

export default class AddContact extends Component {

    static contextType = ContactsContext

    constructor(props) {
        super(props);
        const contact = { ...props.route.params }

        this.state = contact.id
            ? {
                id: contact.id,
                firstName: contact.firstName,
                lastName: contact.lastName,
                phone: contact.phone,
                email: contact.email
            }
            : {
                firstName: '',
                lastName: '',
                phone: '',
                email: ''
            }
    }

    addContact = () => {
        const contactToSave = { ...this.state }

        if (contactToSave.id) {
            this.context.dispatch({ type: 'updateContact', payload: contactToSave })
        } else {
            this.context.dispatch({ type: 'addContact', payload: contactToSave })
        }
        this.props.navigation.goBack();
    }

    handleChange = (name, value) => {
        this.setState({ [name] : value })
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