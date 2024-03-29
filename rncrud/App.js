import React from 'react';
import { SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';
import { UsersProvider } from './src/context/UsersContext';

const Stack = createNativeStackNavigator()

export default () => (
        <SafeAreaView style={{ flex : 1 }}>
            <UsersProvider>
                <NavigationContainer>
                    <Stack.Navigator initialRouteName='UserList' screenOptions={navigatorScreenOptions}>
                        <Stack.Screen name="UserList" component={UserList} options={userListOptions} />
                        <Stack.Screen name="UserForm" component={UserForm} options={{title: 'Registration Form'}} />
                    </Stack.Navigator>
                </NavigationContainer>
            </UsersProvider>
        </SafeAreaView>
    
)

const navigatorScreenOptions = {
    headerStyle: {
        backgroundColor: '#000',
    },
    headerTitleStyle: {
        fontSize: 20,
    },
    headerTintColor: '#46E74B',
    headerTitleAlign: 'left',
}

const userListOptions = ({ navigation }) => {
    return {
        title: 'List of Users',
        headerRight: () => (
            <Icon
                onPress={() => navigation.navigate("UserForm")}
                name="plus-circle"
                color="#46E74B"
                size={30}
                solid
            />
        )
    }
}