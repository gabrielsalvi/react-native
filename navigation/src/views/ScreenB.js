import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'

export default props => (
    <View style={styles.container}>
        <CentralText bgColor={'purple'}>Screen B</CentralText>
        <Button 
            title='Next'
            onPress={() => 
                props.navigation.navigate('ScreenC')
            } 
        />
    </View>
)

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})