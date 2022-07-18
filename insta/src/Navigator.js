import React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Icon from 'react-native-vector-icons/FontAwesome';

import Feed from './screens/Feed';

export default props => {
    const Tab = createBottomTabNavigator();

    const menuOptions = {
        initialRouteName: 'Feed',
        headerShown: false,
    }
    
    return (
        <NavigationContainer>
            <Tab.Navigator 
                screenOptions={({ route }) => (
                    { ...menuOptions,
                        tabBarIcon: ({ color, size }) => <Icon name={icons[route.name]} size={size} color={color} />
                    }
                )}
            >
                <Tab.Screen name='Feed' component={Feed}  />
                <Tab.Screen name='AddPhoto' component={Feed}  />
                <Tab.Screen name='Profile' component={Feed} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}

const icons = {
    Feed: 'home',
    AddPhoto: 'camera',
    Profile: 'user'
}