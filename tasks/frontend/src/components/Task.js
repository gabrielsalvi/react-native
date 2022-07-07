import React from 'react'
import { StyleSheet, Text, TouchableOpacity, TouchableWithoutFeedback, View } from 'react-native'
import { GestureHandlerRootView, Swipeable } from 'react-native-gesture-handler';
import Icon from 'react-native-vector-icons/FontAwesome'

import moment from 'moment'

import { colors, fonts } from '../styles'

export default props => {
    const isDoneStyle  = props.doneAt != null 
        ? { textDecorationLine: 'line-through' } : { }

    const date = props.doneAt ? props.doneAt : props.estimateAt
    const formattedDate = moment(date).format('ddd, D MMMM')

    const rightActionContent = () => {
        return (
            <TouchableOpacity 
                style={styles.right} 
                activeOpacity={0.7}
            >
                <Icon name='trash' size={30} color={colors.secondary} />
            </TouchableOpacity>
        )
    }
    
    return (
        <GestureHandlerRootView>
            <Swipeable renderRightActions={rightActionContent}>
                <View style={styles.container}>
                    <TouchableWithoutFeedback  onPress={() => props.onToggleTask(props.id)}>
                        <View style={styles.checkContainer}>
                            {getCheckView(props.doneAt)}
                        </View>
                    </TouchableWithoutFeedback>
                    <View>
                        <Text style={[styles.description, isDoneStyle]}>{props.description}</Text>
                        <Text style={styles.date}>{`${formattedDate}`}</Text>    
                    </View>
                </View>
            </Swipeable>
        </GestureHandlerRootView>
    )
}

const getCheckView = (doneAt) => {
    return doneAt 
        ? <View style={styles.done}>
            <Icon name='check' size={20} color={colors.secondary} />
          </View>
        : <View style={styles.pending} />
}

const styles = StyleSheet.create({
    container: {
        flexDirection: 'row',
        borderColor: colors.taskBorder,
        borderBottomWidth: 1,
        alignItems: 'center',
        paddingVertical: 10,
    },
    checkContainer: {
        width: '20%',
        alignItems: 'center',
        justifyContent: 'center'

    },
    pending: {
        height: 25,
        width: 25,
        borderRadius: 25,
        borderWidth: 1,
        borderColor: colors.checkboxBorder,
    },
    done: {
        height: 25,
        width: 25,
        borderRadius: 25,
        backgroundColor: colors.checkboxSelected,
        alignItems: 'center',
        justifyContent: 'center'
    },
    description: {
        fontFamily: fonts.mainFont,
        color: colors.mainText,
        fontSize: 18,
    },
    date: {
        fontFamily: fonts.mainFont,
        color: colors.subText,
        fontSize: 15,
    },
    right: {
        backgroundColor: 'red',
        flexDirection:'row',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingHorizontal: 20
    }
})