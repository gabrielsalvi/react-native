import React from 'react'
import { Button } from 'react-native'

export default ({ navigation, nextScreen, goBack, title }) => {
    return <>
        {goBack ?   
            <Button 
                    title={title || 'Go Back'}
                    onPress={() => navigation.goBack()}
                />
            : false
        }

        {nextScreen ?   
            <Button 
                    title={title || 'Next Screen'}
                    onPress={() => navigation.navigate(nextScreen)}
                />
            : false
        }
    </>
}

() => { 

}