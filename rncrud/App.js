import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';

const Stack = createNativeStackNavigator()

export default () => (
    <NavigationContainer>
        <Stack.Navigator initialRouteName='UserList'>
            <Stack.Screen name="UserList" component={UserForm} />
            <Stack.Screen name="UserForm" component={UserList} />
        </Stack.Navigator>
    </NavigationContainer>
)
