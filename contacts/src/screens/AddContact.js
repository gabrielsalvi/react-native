import React, { Component } from 'react';
import { 
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../../public/styles';
import Header from '../components/Header';

const initialState = {
    firstName: '',
    lastName: '',
    phone: '',
    email: '',
}

export default class AddContact extends Component {
    constructor(props) {
        super(props);
        this.state = { ...initialState };
    }

    render() {
        return (
            <>
            <Header title='Adicionar Contato' />
            <View style={styles.container}>
                {/* <Header title='Adicionar Contato' /> */}
                <View style={styles.form}>
                    <View style={styles.section}>
                        <Icon name='user' size={30} color={colors.formIcon} style={styles.icon} />
                        <View style={styles.inputsSection}>
                            <TextInput
                                style={styles.input}
                                placeholder='Nome'
                                value={this.state.firstName}
                                onChangeText={firstName => this.setState({ firstName })}
                            />
                            <TextInput 
                                style={styles.input}
                                placeholder='Sobrenome'
                                value={this.state.lastName}
                                onChangeText={lastName => this.setState({ lastName })}
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Icon name='phone' size={30} color={colors.formIcon} style={styles.icon} />
                        <View style={styles.inputsSection}>
                            <TextInput
                                style={styles.input}
                                placeholder='Nº Telefone'
                                value={this.state.phone}
                                onChangeText={phone => this.setState({ phone })}
                            />
                        </View>
                    </View>
                    <View style={styles.section}>
                        <Icon name='mail' size={30} color={colors.formIcon} style={styles.icon} />
                        <View style={styles.inputsSection}>
                            <TextInput
                                style={styles.input}
                                placeholder='Email'
                                value={this.state.email}
                                onChangeText={email => this.setState({ email })}
                            />
                        </View>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableHighlight style={styles.button}>
                            <Text style={styles.buttonText}>Salvar</Text>
                        </TouchableHighlight>
                    </View>
                </View>
            </View>
            </>
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
    inputsSection: {
        width: '75%',
    },
    input: {
        width: '100%',
        fontFamily: fonts.main,
        fontSize: fonts.inputSize,
        borderBottomWidth: 1,
        borderColor: colors.border,
        padding: 10
    },
    section: {
        flexDirection: 'row',
        marginHorizontal: 20
    },
    icon: {
        margin: 10,
        marginRight: 30
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
