import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import { createDrawerNavigator } from '@react-navigation/drawer'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'
import Menu from './screens/Menu'

import { fonts } from './styles'

const menuConfig = {
    drawerLabelStyle: {
        fontFamily: fonts.mainFont,
        fontWeight: 'normal',
        fontSize: 20,
    },
    drawerActiveTintColor: '#080',
    headerShown: false
}

const Drawer = createDrawerNavigator()
const DrawerNavigator = props => {
    const { email, name } = props.route.params
    return (
        <Drawer.Navigator 
            initialRouteName='Today'
            screenOptions={menuConfig}
            drawerContent={props => {
                return <Menu {...props} email={email} name={name} />
            }}
        >
            <Drawer.Screen name='Today'>
                {props => <TaskList title='Today' daysAhead={0} {...props} />} 
            </Drawer.Screen>
            <Drawer.Screen name='Tomorrow'>
                {props => <TaskList title='Tomorrow' daysAhead={1} {...props} />} 
            </Drawer.Screen>
            <Drawer.Screen name='Week'>
                {props => <TaskList title='Week' daysAhead={7} {...props} />} 
            </Drawer.Screen>
            <Drawer.Screen name='Month'>
                {props => <TaskList title='Month' daysAhead={30} {...props} />} 
            </Drawer.Screen>
        </Drawer.Navigator>
    )
}

const Stack = createNativeStackNavigator()
const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='TaskList' component={DrawerNavigator} />
        </Stack.Navigator>
    )
}

const Navigator = () => {
    return (
        <NavigationContainer>
            <StackNavigator />
        </NavigationContainer>
    )
}

export default Navigator