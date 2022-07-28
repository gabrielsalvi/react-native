import React, { Component } from 'react';
import { Image, StyleSheet, Text, View } from 'react-native';

const image = require('../../assets/imgs/icon.png');

export default class Splash extends Component {
    componentDidMount = () => {
        setTimeout(
            () => { this.props.navigation.navigate('App') },
            2000
        )
    }

    render() {
        return (
            <View style={styles.container}>
                <Image source={image} style={styles.image} />
                <Text style={styles.header}>Insta</Text>
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
    image: {
        width: 200,
        height: 200,
        resizeMode: 'contain'
    },
    header: {
        fontSize: 50,
        fontWeight: 'bold'
    }
})