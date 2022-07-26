import React, { useState } from 'react';

import {
    StyleSheet,
    TextInput,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';
import { colors, fonts } from '../../public/styles';

export default props => {
    const icon = props.icon 
                    ? <Icon name={props.icon} size={30} color={colors.formIcon} style={styles.icon} />
                    : null
                    
    const inputStyle = icon ? null : { marginLeft: 60 }

    return (
        <View style={styles.container}>
            {icon}
            <TextInput
                style={[styles.input, inputStyle]}
                placeholder={props.placeholder}
                value={props.value}
                onChangeText={text => props.handleChange(props.name, text)}
            />
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        justifyContent: 'space-evenly',
        alignItems: 'center',
    },
    input: {
        width: '70%',
        fontFamily: fonts.main,
        fontSize: fonts.inputSize,
        borderBottomWidth: 1,
        borderColor: colors.border,
        padding: 10
    }
})