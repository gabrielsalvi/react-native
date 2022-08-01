import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

import { colors, fonts } from '../../public/styles';

export default props => {
    const gravatarOptions = {
        email: props.email,
        secure: true
    }

    const displayName = props.firstName + ' ' + props.lastName

    return (
        <View style={styles.container}>
            <Gravatar options={gravatarOptions} style={styles.avatar} />
            <Text style={styles.name}>{displayName}</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        borderBottomWidth: 1,
        borderBottomColor: colors.border,
        alignItems: 'center'
    },
    name: {
        fontFamily: fonts.main,
        fontSize: fonts.contactNameSize,
        color: colors.text
    },
    avatar: {
        width: 45,
        height: 45,
        borderRadius: 25,
        margin: 10,
    }
})