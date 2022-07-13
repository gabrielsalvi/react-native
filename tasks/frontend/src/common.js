import { Alert, Platform } from 'react-native'

const server = Platform.OS === 'ios'
    ? 'http://localhost:3000' 
    : 'http://10.0.2.2:3000'

const showError = error => {
    if (error.response && error.response.data) {
        Alert.alert('Oops... There was a problem!', error.response.data)
    } else {
        Alert.alert('Oops... There was a problem!', error)
    }
}

const showSuccess = message => {
    Alert.alert('Success!', message)
}

export { server, showError, showSuccess }