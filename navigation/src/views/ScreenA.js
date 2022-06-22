import React from 'react'
import { Button, StyleSheet, View } from 'react-native'
import CentralText from '../components/CentralText'

export default (props) => {
    return (
        <View style={styles.container}>
            <CentralText textColor={'green'} bgColor={'yellow'}>Screen A</CentralText>
            <Button 
                title='Next'
                onPress={() => 
                    props.navigation.navigate('ScreenB')
                } 
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    }
})