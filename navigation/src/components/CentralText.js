import React from 'react'
import { View, StyleSheet, Text } from 'react-native'

export default (props) => (
    <View style={styles(props).container}>
        <Text style={styles(props).text}>
            {props.children}
        </Text>
    </View>    
)

const styles = (props) => StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
        backgroundColor: props.bgColor || '#000',
    },
    text: {
        fontSize: 50,
        color: props.textColor || '#FFF'
    }
})
