import React from 'react'
import { StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'
import ScreenButton from '../components/ScreenButton'

export default (props) => {
    return (
        <View style={styles.container}>
            <CentralText textColor={'green'} bgColor={'yellow'}>Screen A</CentralText>
            <ScreenButton {... props} nextScreen={'ScreenB'} title={'Go to Screen B'}/>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})