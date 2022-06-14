import React, { Component } from 'react'
import { StyleSheet, View } from 'react-native'
import Button from './components/Button'
import Display from './components/Display'

export default class Calculator extends Component {
    
    constructor(props) {
        super(props)
      
        this.state = {
            symbolsToDisplay: '0',
        }
    }

    setSymbolsToDisplay = (newSymbol) => {
        const symbolsToDisplay = this.state.symbolsToDisplay + " " + newSymbol

        this.setState({
            symbolsToDisplay: symbolsToDisplay
        })
    }

    getPressedSymbol = (symbol) =>  {
        this.setSymbolsToDisplay(symbol)
    }

    render() {
        return (
            <>
                <Display toDisplay={this.state.symbolsToDisplay}/>
                    <View style={style.buttonsContainer}>
                    <Button label="AC" onPress={this.getPressedSymbol} clear />
                    <Button label="( )" onPress={this.getPressedSymbol} operator />
                    <Button label="%" onPress={this.getPressedSymbol} operator />
                    <Button label="/" onPress={this.getPressedSymbol} operator />
                    <Button label="7" onPress={this.getPressedSymbol} />
                    <Button label="8" onPress={this.getPressedSymbol} />
                    <Button label="9" onPress={this.getPressedSymbol} />
                    <Button label="x" onPress={this.getPressedSymbol} operator />
                    <Button label="4" onPress={this.getPressedSymbol} />
                    <Button label="5" onPress={this.getPressedSymbol} />
                    <Button label="6" onPress={this.getPressedSymbol} />
                    <Button label="-" onPress={this.getPressedSymbol} operator />
                    <Button label="1" onPress={this.getPressedSymbol} />
                    <Button label="2" onPress={this.getPressedSymbol} />
                    <Button label="3" onPress={this.getPressedSymbol} />
                    <Button label="+" onPress={this.getPressedSymbol} operator />
                    <Button label="0" onPress={this.getPressedSymbol} />
                    <Button label="." onPress={this.getPressedSymbol} />
                    <Button label="<x" onPress={this.getPressedSymbol} />
                    <Button label="="  onPress={this.getPressedSymbol} operator />
                </View>
            </>
        )
    }
}

const style = StyleSheet.create({
    buttonsContainer: {
        flex: 3,
        flexDirection: "row",
        flexWrap: "wrap",
        backgroundColor: "#1D1C1C",
        padding: 10,
    }
})