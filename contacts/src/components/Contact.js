import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native';
import { Gravatar } from 'react-native-gravatar';

import { colors, fonts } from '../../public/styles';

export default props => {
    const gravatarOptions = {
        email: props.email,
        secure: true
    }

    const contact = {
        id: props.id,
        firstName: props.firstName,
        lastName: props.lastName,
        phone: props.phone,
        email: props.email
    }

    const displayName = contact.firstName + ' ' + contact.lastName

    return (
        <TouchableOpacity 
            style={styles.container} 
            onPress={() => props.navigation.navigate('AddContact', contact)}
        >
            <Gravatar options={gravatarOptions} style={styles.avatar} />
            <Text style={styles.name}>{displayName}</Text>
        </TouchableOpacity>
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