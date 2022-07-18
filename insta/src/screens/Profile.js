import React, { Component } from 'react';
import { StyleSheet, Text, TouchableOpacity, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

export default class Profile extends Component {
    logout = () => {

    }

    render() {
        const options = {
            email: 'email',
            secure: true
        }
        
        return (
            <View style={styles.container}>
                <Gravatar options={options} style={styles.avatar} />
                <Text style={styles.nickname}>name</Text>
                <Text style={styles.email}>email</Text>
                <TouchableOpacity style={styles.button} onPress={this.logout}>
                    <Text style={styles.buttonText}>Logout</Text>
                </TouchableOpacity>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
    },
    avatar: {
        width: 150,
        height: 150,
        borderRadius: 75,
        marginTop: 100,
    },
    nickname: {
        marginTop: 30,
        fontSize: 30,
        fontWeight: 'bold'
    },
    email: {
        marginTop: 20,
        fontSize: 25
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286F4'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF'
    }
})