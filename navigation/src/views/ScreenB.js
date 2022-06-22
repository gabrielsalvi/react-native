import React from 'react'
import { StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'
import NextScreenButton from '../components/NextScreenButton'

export default props => (
    <View style={styles.container}>
        <CentralText bgColor={'purple'}>Screen B</CentralText>
        <NextScreenButton {... props} nextScreen={'ScreenC'}/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})