import React, { Component } from 'react';
import { StyleSheet, Text, TextInput, View } from 'react-native'
import { TouchableHighlight } from 'react-native-gesture-handler';

export default class UserForm extends Component {

    render() {
        const textInputStyle = [styles.input, styles.textInput]
        const buttonStyle = [styles.input, styles.button]

        return (
            <View style={styles.container}>
                <TextInput style={textInputStyle} placeholder='Name' />
                <TextInput style={textInputStyle} placeholder='Occupation' />
                <TextInput style={textInputStyle} placeholder='Avatar URL' />
                <TouchableHighlight style={buttonStyle}>
                    <Text style={styles.text}>Save</Text>
                </TouchableHighlight>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
    },
    input: {
        height: 50,
        width: 300,
        margin: 12,
    },
    textInput: {
        borderWidth: 1,
        padding: 10,
        fontSize: 20,
    },
    button: {
        backgroundColor: '#000',
        justifyContent: 'center',
        alignItems: 'center',
    },
    text: {
        color: '#46E74B',
        fontSize: 20
    }
})