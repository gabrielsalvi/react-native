import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'
import NextScreenButton from '../components/NextScreenButton'

export default (props) => {
    return (
        <View style={styles.container}>
            <CentralText textColor={'green'} bgColor={'yellow'}>Screen A</CentralText>
            <NextScreenButton {... props} nextScreen={'ScreenB'} title={'Go to Screen B'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})