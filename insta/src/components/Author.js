import React from 'react'
import { 
    StyleSheet,
    Text,
    View
} from 'react-native'

import { Gravatar } from 'react-native-gravatar'

export default props => {
    const gravatarOptions = {
        email: props.email,
        secure: true
    }

    return (
        <View style={styles.container}>
            <Gravatar style={styles.avatar} options={gravatarOptions} />
            <Text style={styles.nickname}>{props.nickname}</Text>
        </View>
    )   
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    avatar: {
        width: 30,
        height: 30,
        borderRadius: 15,
        marginHorizontal: 10
    },
    nickname: {
        fontSize: 15,
        fontWeight: 'bold',
        color: '#444',
        marginVertical: 10,

    }
})