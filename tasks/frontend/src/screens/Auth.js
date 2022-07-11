import React, { Component } from 'react'
import {
    ImageBackground,
    StyleSheet, 
    Text,
    TouchableOpacity,
    View 
} from 'react-native'

import AuthInput from '../components/AuthInput'

import { colors, fonts } from '../styles'
import backgroundImage from '../../assets/imgs/login.jpg'

const initialState = {
    name: '',
    email: '',
    password: '',
    passwordConfirmation: '',
    newStage: false,
}

export default class Auth extends Component {

    constructor() {
        super()
        this.state = { ...initialState }
    }

    signinOrSignup = () => {
        if (this.state.newStage) {
            this.signup()
        } else {
            this.signin()
        }
    }

    signin = () => {
        console.log('signin')
    }

    signup = () => {
        console.log('signup')
    }

    render() {
        return (
            <ImageBackground 
                style={styles.background}
                source={backgroundImage}
            >
                <Text style={styles.title}>Tasks</Text>
                <View style={styles.formContainer}>
                    <Text style={styles.subtitle}>
                        {this.state.newStage ? 'Join Tasks today' : 'Sign in to Tasks'}
                    </Text>
                    {this.state.newStage && 
                        <AuthInput 
                            icon='user'
                            style={styles.input}
                            placeholder='Name' 
                            value={this.state.name}
                            onChangeText={name => this.setState({ name })}
                        />
                    }
                    <AuthInput 
                        icon='at'
                        style={styles.input}
                        placeholder='Email' 
                        value={this.state.email}
                        onChangeText={email => this.setState({ email })}
                    />
                   <AuthInput
                        icon='lock' 
                        style={styles.input}
                        placeholder='Password'
                        secureTextEntry={true}
                        value={this.state.password}
                        onChangeText={password => this.setState({ password })}
                    />
                    {this.state.newStage && 
                        <AuthInput
                            icon='asterisk' 
                            style={styles.input}
                            placeholder='Password Confirmation'
                            secureTextEntry={true}
                            value={this.state.passwordConfirmation}
                            onChangeText={passwordConfirmation => this.setState({ passwordConfirmation })}
                        />
                    }
                    <TouchableOpacity onPress={this.signinOrSignup}>
                        <View style={styles.button}>
                            <Text style={styles.buttonText}>
                                {this.state.newStage ? 'Sign up' : 'Sign in'}
                            </Text>
                        </View>
                    </TouchableOpacity>
                </View>
                <TouchableOpacity 
                    style={styles.toggleScreenMode} 
                    onPress={() => this.setState({ newStage: !this.state.newStage })}
                >
                    <Text style={styles.buttonText}>
                        {this.state.newStage ? 'Have an account already? Log in' : 'Don\'t have an account? Sign up'}
                    </Text>
                </TouchableOpacity>
            </ImageBackground>
        )
    }
}

const styles = StyleSheet.create({
    background: {
        flex: 1,
        width: '100%',
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontFamily: fonts.mainFont,
        color: colors.secondary,
        fontSize: 70,
        marginBottom: 10
    },
    subtitle: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        color: colors.secondary,
        textAlign: 'center',
        marginBottom: 10
    },
    formContainer: {
        width: '90%',
        backgroundColor: 'rgba(0, 0, 0, 0.8)',
        padding: 20,
    },
    input: {
        textAlign: 'center',
        marginTop: 10,
        backgroundColor: '#FFF',
    },
    button: {
        backgroundColor: '#080',
        marginTop: 10,
        padding: 10,
        alignItems: 'center',
        borderRadius: 7
    },
    buttonText: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        color: colors.secondary,
    },
    toggleScreenMode: {
        padding: 10,
    }
})