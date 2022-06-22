import React from 'react'
import { StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'
import ScreenButton from '../components/ScreenButton'

export default props => (
    <View style={styles.container}>
        <CentralText bgColor={'purple'}>Screen B</CentralText>
        <ScreenButton {... props} nextScreen={'ScreenC'}/>
        <ScreenButton {... props} title={'Go Back to Screen A'} goBack/>
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})