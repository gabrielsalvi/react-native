import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const Tab = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();

const AuthProfile = createNativeStackNavigator();

export default props => {

    const Auth = () => (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} /> 
        </AuthStack.Navigator>
    )

    const AuthOrProfile = () => (
        <AuthProfile.Navigator initialRouteName='Auth'>
            <AuthProfile.Screen name="Home" component={Profile} />
            <AuthProfile.Screen name="Auth" component={Auth} /> 
        </AuthProfile.Navigator>
    )

    const menuOptions = route => {
        return {
            initialRouteName: 'Feed',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => <Icon name={icons[route.name]} size={size} color={color} />
        }
    }

    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => menuOptions(route)}
            >
                <Tab.Screen name='Feed' component={Feed}  />
                <Tab.Screen name='AddPhoto' component={AddPhoto}  />
                <Tab.Screen name='Profile' component={AuthOrProfile} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const icons = {
    Feed: 'home',
    AddPhoto: 'camera',
    Profile: 'user'
}