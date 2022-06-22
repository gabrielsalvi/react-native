import React from 'react'
import { View } from 'react-native'
import CentralText from '../components/CentralText'
import ScreenButton from '../components/ScreenButton'

export default props => (
    <>
        <CentralText bgColor={'red'}>Screen C</CentralText>
        <ScreenButton {... props} nextScreen={'ScreenB'} title={'Go to Screen B'}/>
    </>
)