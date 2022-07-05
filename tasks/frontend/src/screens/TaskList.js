import React, { Component } from 'react'
import { View, Text, ImageBackground, SafeAreaView, StyleSheet, FlatList, Platform } from 'react-native'
import Icon from 'react-native-vector-icons/Entypo'

import moment from 'moment'

import { colors, fonts } from '../styles'
import todayImage from '../../assets/imgs/today.jpg'
import Task from '../components/Task'
import AddTask from './AddTask'

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
            ],
            showDoneTasks: true,
            showAddTaskModal: true
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

    toggleDoneTasksVisibility = () => {
        this.setState((state) => { 
            return { showDoneTasks: !state.showDoneTasks }
        })
    }

    render() {
        const today = moment().locale('en').format('ddd, MMMM D')

        return (
            <SafeAreaView style={styles.container}>
                <AddTask 
                    isVisible={this.state.showAddTaskModal}
                    onCancel={() => this.setState({ showAddTaskModal: false })}
                />
                <ImageBackground source={todayImage} style={styles.background}>
                    <View style={styles.iconContainer}>
                        <Icon 
                            name={this.state.showDoneTasks ? 'eye' : 'eye-with-line'} 
                            size={25} 
                            color={colors.secondary}
                            onPress={this.toggleDoneTasksVisibility}
                        />
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>Today</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        keyExtractor={(task) => task.id.toString()}
                        renderItem={this.renderTask}
                        data={this.state.showDoneTasks ?
                            this.state.tasks :
                            this.state.tasks.filter(task => !task.doneAt)
                        }
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
    },
    iconContainer: {
        alignItems: 'flex-end',
        marginRight: 20,
        marginTop:  Platform.OS === 'ios' ? 45 : 15
    }
})