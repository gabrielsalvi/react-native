import React from 'react';

import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import ContactList from './screens/ContactList';
import AddContact from './screens/AddContact';
import { colors } from '../public/styles';

const Stack = createNativeStackNavigator();

const StackNavigator = () => {
    return (
        <Stack.Navigator screenOptions={screenOptions} initialRouteName='ContactList'>
            <Stack.Screen options={options} name='ContactList' component={ContactList}/>
            <Stack.Screen options={options} name='AddContact' component={AddContact}/>
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

const screenOptions = {
    headerStyle: { 
        backgroundColor: colors.main,
    },
    headerTintColor: colors.secondary,
    headerTitleAlign: 'center'
}

const screenTitle = {
    ContactList: 'Lista de Contatos',
    AddContact: 'Adicionar Contato'
}

const options = ({ route }) => {
    return {
        title: screenTitle[route.name]
    }
}

export default Navigator