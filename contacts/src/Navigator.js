import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactList from './screens/ContactList';
import AddContact from './screens/AddContact';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator initialRouteName='ContactList' screenOptions={{headerShown: false}}>
            <Stack.Screen name='ContactList' component={ContactList}/>
            <Stack.Screen name='AddContact' component={AddContact}/>
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