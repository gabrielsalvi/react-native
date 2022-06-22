import React from 'react'
import { Button } from 'react-native'

export default ({ navigation, nextScreen, title }) => (
    <Button 
        title={title || 'Next Screen'}
        onPress={() => navigation.navigate(nextScreen)} 
    />
)