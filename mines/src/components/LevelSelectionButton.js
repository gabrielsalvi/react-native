import React from 'react'
import { StyleSheet, Text, TouchableOpacity } from 'react-native'

export default (props) => {
    let multiplier = 0.1
    const componentStyles = [styles.button]
    
    switch (props.level) {
        case 'Hard':
            multiplier = 0.3
            componentStyles.push(styles.bgHard)
            break;
        case 'Normal':
            multiplier = 0.2
            componentStyles.push(styles.bgNormal)
            break;
        case 'Easy':
            multiplier = 0.1
            componentStyles.push(styles.bgEasy)
            break;
        default:
            break;
    }

    return (
        <TouchableOpacity
            style={componentStyles}
            onPress={() => props.onLevelSelected(multiplier)}
        >
            <Text style={styles.buttonLabel}>{props.level}</Text>
        </TouchableOpacity>
    )
}

const styles = StyleSheet.create({
    button: {
        marginTop: 10,
        padding: 5,
    },
    buttonLabel: {
        fontSize: 20,
        color: '#EEE',
        fontWeight: 'bold',
    },
    bgEasy: {
        backgroundColor: '#49b65d'
    },
    bgNormal: {
        backgroundColor: '#2765F7'
    },
    bgHard: {
        backgroundColor: '#F26337'
    }
})