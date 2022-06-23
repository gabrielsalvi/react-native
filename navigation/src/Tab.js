import React from 'react'
import {} from 'react-native'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import { NavigationContainer } from '@react-navigation/native'
import ScreenA from './views/ScreenA'
import ScreenB from './views/ScreenB'
import ScreenC from './views/ScreenC'

const Tab = createBottomTabNavigator()

export default props => (
    <NavigationContainer>
        <Tab.Navigator screenOptions={{
            tabBarActiveTintColor: 'red',
            tabBarInactiveTintColor: 'blue',
            tabBarLabelStyle: { fontSize: 30 },
            headerStyle: { backgroundColor: 'papayawhip' }
        }}>
            <Tab.Screen name='ScreenA' component={ScreenA} />
            <Tab.Screen name='ScreenB' component={ScreenB} />
            <Tab.Screen name='ScreenC' component={ScreenC} />
        </Tab.Navigator>
    </NavigationContainer>
)