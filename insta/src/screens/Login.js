import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';
import { connect } from 'react-redux';

import { login } from '../store/actions/user'

class Login extends Component {
    constructor(props) {
        super(props)
        this.state = {
            name: 'Temp',
            email: '',
            password: '',
        }
    }

    login = () => {
        this.props.onLogin({ ...this.state })
        this.props.navigation.navigate('Home')
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    placeholder='Email'
                    style={styles.input}
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                    autoFocus={true}
                />
                <TextInput 
                    placeholder='Password'
                    style={styles.input}
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity 
                        style={styles.button} 
                        onPress={this.login}
                    >
                        <Text style={styles.buttonText}>Login</Text>
                    </TouchableOpacity>
                    <TouchableOpacity 
                        style={[styles.button, {backgroundColor: 'green'}]} 
                        onPress={() => this.props.navigation.navigate('Register')}
                    >
                        <Text style={styles.buttonText}>Register</Text>
                    </TouchableOpacity>
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
    buttonsContainer: {
        flexDirection: 'row'
    },
    button: {
        width: 150,
        height: 45,
        borderRadius: 25,
        marginHorizontal: 5,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4',
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#FFF',
        padding: 10,
    }
})

const mapDispatchToProps = dispatch => {
    return {
        onLogin: user => dispatch(login(user))
    }
}

export default connect(null, mapDispatchToProps)(Login)