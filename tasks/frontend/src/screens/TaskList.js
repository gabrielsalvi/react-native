import React, { Component } from 'react'
import { View, Text, ImageBackground, SafeAreaView, StyleSheet } from 'react-native'

import moment from 'moment'

import { colors, fonts } from '../styles'
import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    render() {
        const today = moment().locale('en').format('ddd, MMMM D')

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.titleSize,
        color: colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        color: colors.secondary,
        marginLeft: 20,
        marginBottom: 15
    }
})