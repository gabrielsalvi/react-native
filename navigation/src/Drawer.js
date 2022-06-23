import React from 'react'
import { NavigationContainer } from '@react-navigation/native';
import { createDrawerNavigator } from '@react-navigation/drawer';
import ScreenA from './views/ScreenA'
import ScreenB from './views/ScreenB'
import ScreenC from './views/ScreenC'

const Drawer = createDrawerNavigator()

export default props => (
    <NavigationContainer>
        <Drawer.Navigator useLegacyImplementation
      screenOptions={{
        draweStyle: {
          backgroundColor: '#c6cbef',
          width: 240,
        },
      }}>
            <Drawer.Screen name='ScreenA' component={ScreenA} />
            <Drawer.Screen name='ScreenB' component={ScreenB} />
            <Drawer.Screen name='ScreenC' component={ScreenC} />
        </Drawer.Navigator>        
    </NavigationContainer>
)