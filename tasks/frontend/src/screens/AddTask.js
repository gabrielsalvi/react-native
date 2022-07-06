import React, { Component } from 'react'
import { Modal, StyleSheet, Text, TextInput, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { colors, fonts } from '../styles'

const initialState = { 
    description: ''
}

export default class AddTask extends Component {
    
    constructor(props) {
        super(props)

        this.state = {
            ...initialState
        }
    }
    
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
                    <View>
                        <Text style={styles.header}>New Task</Text>
                        <TextInput 
                            style={styles.input}
                            placeholder={'Description'}
                            value={this.state.description}
                            onChangeText={text => this.setState({ description: text})}
                        />
                    </View>
                    <View style={styles.buttonsContainer}>
                        <TouchableOpacity 
                            style={styles.button}
                            activeOpacity={0.7}
                        >
                            <Text style={styles.buttonText}>Save</Text>
                        </TouchableOpacity>
                        <TouchableOpacity 
                            style={styles.button} 
                            activeOpacity={0.7}
                            onPress={this.props.onCancel}
                        >
                            <Text style={styles.buttonText}>Cancel</Text>
                        </TouchableOpacity>
                    </View>
                </View>
                <TouchableWithoutFeedback onPress={this.props.onCancel}>
                    <View style={styles.overlay}></View>
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
    input: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        width: '90%',
        height: 40,
        margin: 15,
        backgroundColor: colors.secondary,
        borderWidth: 1,
        borderColor: colors.inputBorder,
        borderRadius: 6
    },
    buttonsContainer: {
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'flex-end'
    },
    button: {
        width: 120,
        height: 40,
        backgroundColor: colors.today,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 10,
        marginBottom: 20
    },
    buttonText: {
        color: colors.secondary,
        fontFamily: fonts.mainFont,
        fontSize: fonts.buttonTextSize
    },

})