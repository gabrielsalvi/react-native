import React, { Component } from 'react'
import { 
    Dimensions,
    Image, 
    StyleSheet,
    View
} from 'react-native'

import Author from './Author'
import Comments from './Comments'

export default class Post extends Component {
    render() {
        return (
            <View style={styles.container}>
                <Image source={this.props.image} style={styles.image} />
                <Author email='fulano@gmail.com' nickname='Fulano De Tal' />
                <Comments comments={this.props.comments} />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    image: {
        width: Dimensions.get('window').width,
        height: Dimensions.get('window').width * 3 / 4,
        resizeMode: 'contain'
    }
})