import React from 'react'
import { SafeAreaView } from 'react-native'
import { NavigationContainer } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import ScreenA from './views/ScreenA'
import ScreenB from './views/ScreenB'
import ScreenC from './views/ScreenC'

const Stack = createNativeStackNavigator()

export default () => {
    return (
        <SafeAreaView style={{ flex : 1 }}>
            <NavigationContainer>
                <Stack.Navigator initialRouteName='ScreenA'>
                    <Stack.Screen name='ScreenA' component={ScreenA} />
                    <Stack.Screen name='ScreenB' component={ScreenB} />
                    <Stack.Screen name='ScreenC' component={ScreenC} />
                </Stack.Navigator>
            </NavigationContainer>
        </SafeAreaView>
    )
}