import React from 'react';
import { SafeAreaView, StyleSheet, Text } from 'react-native';

import { colors, fonts } from '../../public/styles';

export default props => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.title}>{props.title}</Text>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        padding: 10,
        backgroundColor: colors.main,
        alignItems: 'center',
        justifyContent: 'center',
    },
    title: {
        fontFamily: fonts.main,
        fontSize: fonts.titleSize,
        color: colors.secondary
    }
});