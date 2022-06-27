import React from 'react';
import { Button, SafeAreaView } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Icon from 'react-native-vector-icons/FontAwesome';
import UserForm from './src/views/UserForm';
import UserList from './src/views/UserList';

const Stack = createNativeStackNavigator()

export default () => (
    <SafeAreaView style={{ flex : 1 }}>
        <NavigationContainer>
            <Stack.Navigator 
                initialRouteName='UserList' 
                screenOptions={{
                    headerStyle: {
                        backgroundColor: '#000',
                    },
                    headerTitleStyle: {
                        fontSize: 20,
                    },
                    headerTintColor: '#46E74B',
                    headerTitleAlign: 'left',
                }}
            >
                <Stack.Screen name="UserList" component={UserList} options={({ navigation }) => {
                        return {
                            title: 'List of Users',
                            headerRight: () => (
                                <Icon.Button
                                    onPress={() => navigation.navigate("UserForm")}
                                    type="clear"
                                    name="plus"
                                    color="#000"
                                    size={30}
                                />
                            )
                        }
                    }} 
                />
                <Stack.Screen name="UserForm" component={UserForm} options={{title: 'Registration Form'}} />
            </Stack.Navigator>
        </NavigationContainer>
    </SafeAreaView>
)
