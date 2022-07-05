import React, { Component } from 'react'
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, FlatList } from 'react-native'

import moment from 'moment'

import Task from '../components/Task'
import { colors, fonts } from '../styles'
import todayImage from '../../assets/imgs/today.jpg'

export default class TaskList extends Component {
    constructor(props) {
        super(props)

        this.state = {
            tasks: [
                {
                    id: 1,
                    description: 'Buy Books',
                    estimateAt: new Date(),
                    doneAt: new Date()
                },
                {
                    id: 2,
                    description: 'Read book',
                    estimateAt: new Date(),
                    doneAt: null
                }
            ]
        }
    }

    onToggleTask = (id) => {
        const tasks = this.state.tasks.map(task => {
            if (task.id === id) {
                task.doneAt = task.doneAt ? null : new Date()
            }
            return task
        })
        this.setState({ tasks });
    }
    
    renderTask = ({ item: task }) => {
        return <Task {...task} onToggleTask={this.onToggleTask}/>
    }

    render() {
        const today = moment().locale('en').format('ddd, MMMM D')

        return (
            <SafeAreaView style={styles.container}>
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        keyExtractor={(task) => task.id.toString()}
                        renderItem={this.renderTask}
                        data={this.state.tasks}
                    />
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    background: {
        flex: 3
    },
    taskList: {
        flex: 7,
    },
    titleBar: {
        flex: 1,
        justifyContent: 'flex-end',
    },
    title: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.titleSize,
        color: colors.secondary,
        marginLeft: 20,
        marginBottom: 20
    },
    subtitle: {
        fontFamily: fonts.mainFont,
        fontSize: fonts.subtitleSize,
        color: colors.secondary,
        marginLeft: 20,
        marginBottom: 15
    }
})