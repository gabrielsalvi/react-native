import React, { Component } from 'react'
import { 
    Alert,
    FlatList, 
    ImageBackground,
    Platform, 
    SafeAreaView, 
    StyleSheet,
    Text,
    TouchableOpacity,
    View
} from 'react-native'

import AsyncStorage from '@react-native-async-storage/async-storage'
import Icon from 'react-native-vector-icons/Entypo'
import axios from 'axios'
import moment from 'moment'

import Task from '../components/Task'
import AddTask from './AddTask'

import { colors, fonts } from '../styles'
import images from '../../assets/imgs'

import { server, showError } from '../common'

export default class TaskList extends Component {
    constructor(props) {
        super(props)
    }

    componentDidMount = async () => {
        const strState = await AsyncStorage.getItem('state')
        const savedState = JSON.parse(strState) || this.props.global.state

        this.props.global.dispatch({
            type: 'setDoneTasksVisibility',
            payload: savedState.showDoneTasks
        })

        this.loadTasks()
    }

    loadTasks = async () => {
        try {
            const maxDate = moment()
                .add({ days: this.props.daysAhead })
                .format('YYYY-MM-DD 23:59:59')

            const res = await axios.get(`${server}/tasks?date=${maxDate}`)

            this.props.global.dispatch({
                type: 'loadTasks',
                payload: res.data
            })
            
            this.filterTasks()
        
        } catch(error) {
            showError(error)
        }
    }

    addTask = async task => {
        if (!task || !task.description || !task.description.trim()) {
            Alert.alert('Invalid Data', 'You must provide a valid description to add a new task!')    
            return;
        }

        try {
            await axios.post(`${server}/tasks`, {
                description: task.description,
                estimateAt: task.estimateAt
            })

            this.props.global.dispatch({
                type: 'setModalVisibility',
                payload: false
            })

            this.loadTasks()

        } catch (error) {
            showError(error)
        }
    }

    onToggleTask = async id => {
        try {
            await axios.put(`${server}/tasks/${id}/toggle`)
            this.loadTasks()
        } catch (error) {
            showError(error)
        }
    }
    
    renderTask = ({ item: task }) => {
        return <Task {...task} onToggleTask={this.onToggleTask} onDelete={this.deleteTask}/>
    }

    toggleDoneTasksVisibility = () => {
        this.props.global.dispatch({
            type: 'setDoneTasksVisibility',
            payload: !this.props.global.state.showDoneTasks
        })

        this.filterTasks()
    }

    toggleModalVisibility = () => {
        this.props.global.dispatch({
            type: 'setModalVisibility',
            payload: !this.props.global.state.showAddTaskModal
        })
    }

    deleteTask = async id => {
        try {
            await axios.delete(`${server}/tasks/${id}`)
            this.loadTasks()
        } catch (error) {
            showError(error)
        }
    }

    filterTasks = () => {
        const visibleTasks = this.props.global.state.showDoneTasks
            ? [...this.props.global.state.tasks]
            : this.props.global.state.tasks.filter(task => task.doneAt === null);

        this.props.global.dispatch({
            type: 'setVisibleTasks',
            payload: visibleTasks
        })

        AsyncStorage.setItem('state', JSON.stringify({
            showDoneTasks: this.props.global.state.showDoneTasks
        }))
    }

    getBackgroundImage = () => {
        switch (this.props.daysAhead) {
            case 0:
                return images.today
            case 1:
                return images.tomorrow
            case 7:
                return images.week
            case 30:
                return images.month
            default:
                return images.today
        }
    }

    getButtonColor = () => {
        switch (this.props.daysAhead) {
            case 0:
                return colors.today
            case 1:
                return colors.tomorrow
            case 7:
                return colors.week
            case 30:
                return colors.month
            default:
                return colors.today
        }
    }

    render() {
        const today = moment().locale('en').format('ddd, MMMM D')

        return (
            <SafeAreaView style={styles.container}>
                <AddTask 
                    isVisible={this.props.global.state.showAddTaskModal}
                    onCancel={this.toggleModalVisibility}
                    onSave={this.addTask}
                />
                <ImageBackground source={this.getBackgroundImage()} style={styles.background}>
                    <View style={styles.iconContainer}>
                        <Icon 
                            name='menu' 
                            size={25} 
                            color={colors.secondary}
                            onPress={() => this.props.navigation.openDrawer()}
                        />
                        <Icon 
                            name={this.props.global.state.showDoneTasks ? 'eye' : 'eye-with-line'}
                            size={25} 
                            color={colors.secondary}
                            onPress={this.toggleDoneTasksVisibility}
                        />
                    </View>
                    <View style={styles.titleBar}>
                        <Text style={styles.title}>{this.props.title}</Text>
                        <Text style={styles.subtitle}>{today}</Text>
                    </View>
                </ImageBackground>
                <View style={styles.taskList}>
                    <FlatList
                        keyExtractor={(task) => task.id.toString()}
                        renderItem={this.renderTask}
                        data={this.props.global.state.visibleTasks}
                    />
                </View>
                <TouchableOpacity 
                    style={[styles.button, { backgroundColor: this.getButtonColor() }]}
                    activeOpacity={0.7}
                    onPress={this.toggleModalVisibility}
                >
                    <Icon name='plus' size={20} color={colors.secondary} />
                </TouchableOpacity>
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
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginHorizontal: 20,
        marginTop:  Platform.OS === 'ios' ? 45 : 15
    }, 
    button: {
        position: 'absolute',
        right: 30,
        bottom: 30,
        width: 50,
        height: 50,
        borderRadius: 25,
        justifyContent: 'center',
        alignItems: 'center',
    }
})