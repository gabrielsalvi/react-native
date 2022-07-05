import React, { Component } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { colors, fonts } from '../styles'

export default class TaskList extends Component {

    render() {
        return (
            <Modal 
                transparent={true} 
                visible={this.props.isVisible}
                onRequestClose={this.props.onCancel}
                animationType={'slide'}
            >
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}></View>
                </TouchableWithoutFeedback>
                <View style={styles.container}>
                    <View style={styles.inputsContainer}>
                        <Text style={styles.header}>New Task</Text>
                        <TextInput style={styles.inputs}></TextInput>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity style={styles.button}>
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}>
                        
                    </View>
                </TouchableWithoutFeedback>
            </Modal>
        )
    }
}

const styles = StyleSheet.create({
    overlay: {
        flex: 1,
        backgroundColor: 'rgba(0, 0, 0, 0.7)'
    },
    container: {
        flex: 2,
        backgroundColor: colors.secondary
    },
    header: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        textAlign: 'center',
        padding: 15,
        backgroundColor: colors.today,
        color: colors.secondary
    },
    inputsContainer: {
        flex: 3,
    },
    buttonsContainer: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {
        width: 120,
        height: 60,
        backgroundColor: colors.today,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginBottom: 20
    },
    buttonText: {
        color: colors.secondary,
    },

})