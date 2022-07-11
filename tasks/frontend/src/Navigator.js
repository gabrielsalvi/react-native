import React from 'react'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

import Auth from './screens/Auth'
import TaskList from './screens/TaskList'

const Stack = createNativeStackNavigator()

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='Auth' screenOptions={{ headerShown: false }}>
            <Stack.Screen name='Auth' component={Auth} />
            <Stack.Screen name='TaskList' component={TaskList} />
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