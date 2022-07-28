import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native';

import { connect } from 'react-redux';
import { createUser } from '../store/actions/user';

class Register extends Component {
    constructor() {
        super();
        this.state = {
            name: '',
            email: '',
            password: '',
        }
    }

    register = () => {
        this.props.onCreateUser(this.state)
    }

    render() {
        return (
            <View style={styles.container}>
                <TextInput 
                    style={styles.input}
                    placeholder='Name'
                    autoFocus={true}
                    value={this.state.name}
                    onChangeText={name => this.setState({ name })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Email'
                    keyboardType='email-address'
                    value={this.state.email}
                    onChangeText={email => this.setState({ email })}
                />
                <TextInput 
                    style={styles.input}
                    placeholder='Password'
                    secureTextEntry={true}
                    value={this.state.password}
                    onChangeText={password => this.setState({ password })}
                />
                <TouchableOpacity onPress={this.register} style={styles.button}>
                    <Text style={styles.buttonText}>Save</Text>
                </TouchableOpacity>
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
    input: {
        marginTop: 20,
        width: '90%',
        height: 40,
        borderRadius: 20,
        borderWidth: 1,
        borderColor: '#333',
        backgroundColor: '#FFF',
        padding: 10,
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
})

const mapDispatchToProps = dispatch => {
    return {
        onCreateUser: user => dispatch(createUser(user))
    }
}

export default connect(null, mapDispatchToProps)(Register)