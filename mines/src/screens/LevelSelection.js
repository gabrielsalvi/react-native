import React from 'react'
import { View, StyleSheet, Text, Modal } from 'react-native'
import LevelSelectionButton from './LevelSelectionButton'

export default props => {
    return (
        <Modal 
            onRequestClose={props.onCancel}
            visible={props.isVisible}
            animationType='slide'
            transparent={true}
        >
            <View style={styles.frame}>
                <View style={styles.container}>
                    <Text style={styles.title}>Select the Level</Text>
                    <LevelSelectionButton level='Easy' onLevelSelected={props.onLevelSelected}/>
                    <LevelSelectionButton level='Normal' onLevelSelected={props.onLevelSelected} />
                    <LevelSelectionButton level='Hard' onLevelSelected={props.onLevelSelected} />
                </View>
            </View>
        </Modal>
    )
}

const styles = StyleSheet.create({
    frame: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'rgba(0,0,0,0.6)',
    },
    container: {
        backgroundColor: '#EEE',
        alignItems: 'center',
        justifyContent: 'center',
        padding: 15,
    },
    title: {
        fontSize: 30,
        fontWeight: 'bold',
    }
})