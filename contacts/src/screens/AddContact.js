import React, { useContext, useState } from 'react';
import { 
    StyleSheet,
    Text,
    TouchableHighlight,
    View
} from 'react-native';

import ContactsContext from '../context/ContactsContext';
import FormInput from '../components/FormInput';
import { colors, fonts } from '../../public/styles';

export default props => {
    const context = useContext(ContactsContext)

    const [firstName, setFirstName] = useState('')
    const [lastName, setLastName] = useState('')
    const [phone, setPhone] = useState('')
    const [email, setEmail] = useState('')

    const addContact = () => {
        const contact = { 
            firstName,
            lastName,
            phone,
            email
        }

        context.dispatch({ type: 'addContact', payload: contact })

        props.navigation.goBack();
    }

    const handleChange = (name, value) => {
        switch (name) {
            case 'firstName':
                setFirstName(value);
                break;
            case 'lastName':
                setLastName(value);
                break;
            case 'phone':
                setPhone(value);
                break;
            case 'email':
                setEmail(value);
                break;
        }
    }

    return (
        <View style={styles.container}>
            <View style={styles.form}>
                <FormInput 
                    icon='user'
                    name='firstName'
                    placeholder='Nome'
                    value={firstName}
                    handleChange={handleChange} 
                />
                <FormInput 
                    name='lastName'
                    placeholder='Sobrenome'
                    value={lastName}
                    handleChange={handleChange} 
                />
                <FormInput 
                    icon='phone'
                    name='phone'
                    placeholder='Nº Telefone'
                    value={phone}
                    handleChange={handleChange} 
                />
                <FormInput
                    icon='mail'
                    name='email' 
                    placeholder='Email'
                    value={email}
                    handleChange={handleChange}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableHighlight style={styles.button} onPress={addContact}>
                        <Text style={styles.buttonText}>Salvar</Text>
                    </TouchableHighlight>
                </View>
            </View>
        </View>
    )
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