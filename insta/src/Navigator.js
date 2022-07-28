import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { connect } from 'react-redux';
import Icon from 'react-native-vector-icons/FontAwesome';

import Splash from './screens/Splash';
import Feed from './screens/Feed';
import AddPhoto from './screens/AddPhoto';
import Profile from './screens/Profile';
import Login from './screens/Login';
import Register from './screens/Register';

const AppStack = createBottomTabNavigator();
const AuthStack = createNativeStackNavigator();
const AuthProfileStack = createNativeStackNavigator();
const SplashStack = createNativeStackNavigator();

const Navigator = props => {
    const menuOptions = route => {
        return {
            initialRouteName: 'Feed',
            headerShown: false,
            tabBarShowLabel: false,
            tabBarIcon: ({ color, size }) => <Icon name={icons[route.name]} size={size} color={color} />
        }
    }

    const Auth = () => (
        <AuthStack.Navigator screenOptions={{headerShown: false}}>
            <AuthStack.Screen name="Login" component={Login} />
            <AuthStack.Screen name="Register" component={Register} /> 
        </AuthStack.Navigator>
    )

    const AuthOrProfile = () => (
        <AuthProfileStack.Navigator initialRouteName='Auth'>
            <AuthProfileStack.Screen name="Home" component={Profile} />
            <AuthProfileStack.Screen name="Auth" component={Auth} /> 
        </AuthProfileStack.Navigator>
    )


    const AppNavigator = () => {
        const addPhoto = props.name
            ? <AppStack.Screen name='AddPhoto' component={AddPhoto} />
            : null

        return (
            <AppStack.Navigator screenOptions={({ route }) => menuOptions(route)}>
                <AppStack.Screen name='Feed' component={Feed} />
                {addPhoto}
                <AppStack.Screen name='Profile' component={AuthOrProfile} />
            </AppStack.Navigator>
        )
    }

    const SplashNavigator = () => (
        <SplashStack.Navigator screenOptions={{ headerShown: false }} >
            <SplashStack.Screen name="Splash" component={Splash} />
            <SplashStack.Screen name="App" component={AppNavigator} />
        </SplashStack.Navigator>
    )

    return (
        <NavigationContainer>
            <SplashNavigator /> 
        </NavigationContainer>
    )
}

const icons = {
    Feed: 'home',
    AddPhoto: 'camera',
    Profile: 'user'
}

const mapStateToProps = ({ user }) => {
    return {
        ...user
    }
}

export default connect(mapStateToProps)(Navigator)