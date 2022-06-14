import React, { Component } from 'react'
import { View } from 'react-native'
import Button from '../Button'
import Display from '../Display'
import styles from './styles'

const initialState = {
    display: '0',
}

export default class Calculator extends Component {
    
    constructor(props) {
        super(props)
        
        this.state = { ...initialState }
        this.history = [initialState]
    }

    changeState = (newState) => {
        this.history.push(this.state)
        this.setState(newState)
    }

    displayText = (newSymbol) => {
        const display = this.state.display

        this.changeState({
            display: display === '0' ? newSymbol : display + newSymbol
        })
    }

    pressedButton = (symbol) => this.displayText(symbol)

    deleteDigit = () => this.setState(this.history.pop())

    clearDisplay = () => {
        this.changeState(initialState)
        this.history = []
    }

    render() {
        return (
            <>
                <Display toDisplay={this.state.display}/>
                <View style={styles.buttonsContainer}>
                    <Button label="AC" onPress={this.clearDisplay} clear />
                    <Button label="( )" onPress={this.pressedButton} operator />
                    <Button label="%" onPress={this.pressedButton} operator />
                    <Button label="/" onPress={this.pressedButton} operator />
                    <Button label="7" onPress={this.pressedButton} />
                    <Button label="8" onPress={this.pressedButton} />
                    <Button label="9" onPress={this.pressedButton} />
                    <Button label="x" onPress={this.pressedButton} operator />
                    <Button label="4" onPress={this.pressedButton} />
                    <Button label="5" onPress={this.pressedButton} />
                    <Button label="6" onPress={this.pressedButton} />
                    <Button label="-" onPress={this.pressedButton} operator />
                    <Button label="1" onPress={this.pressedButton} />
                    <Button label="2" onPress={this.pressedButton} />
                    <Button label="3" onPress={this.pressedButton} />
                    <Button label="+" onPress={this.pressedButton} operator />
                    <Button label="0" onPress={this.pressedButton} />
                    <Button label="." onPress={this.pressedButton} />
                    <Button label="<x" onPress={this.deleteDigit} />
                    <Button label="=" onPress={this.pressedButton} operator />
                </View>
            </>
        )
    }
}