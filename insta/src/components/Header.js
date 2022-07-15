import React, { Component } from 'react'
import { 
    Image, 
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'

import icon from '../../assets/imgs/icon.png'

export default class Header extends Component {
    render() {
        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Insta</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'shelter',
        fontSize: 28,
        height: 30,
        color: '#000',
    }
})