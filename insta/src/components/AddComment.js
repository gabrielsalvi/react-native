import React, { Component } from 'react'
import {
    Alert, 
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

export default class AddComment extends Component {
    constructor() {
        super();
        this.state = {
            comment: '',
            editMode: false,
        }
    }

    handleAddComment = () => {
        Alert.alert('Adicionado!', this.state.comment)
    }

    render() {
        let commentArea = null
        if (this.state.editMode) {
            commentArea = (
                <View style={styles.container}>
                    <TextInput
                        style={styles.input} autoFocus={true}
                        placeholder='Add Comment' 
                        value={this.props.comment}
                        onChangeText={(comment) => this.setState({ comment })}
                        onSubmitEditing={this.handleAddComment}
                    />
                    <TouchableWithoutFeedback onPress={() => this.setState({ editMode: false})}>
                        <Icon name='times' size={15} color='#555'/>
                    </TouchableWithoutFeedback>
                </View>
            )
        } else {
            commentArea = (
                <TouchableWithoutFeedback onPress={() => this.setState({ editMode: true})}>
                    <View style={styles.container}>
                        <Icon name='comment-o' size={25} color='#555'/>
                        <Text style={styles.caption}>
                            Add comment
                        </Text>
                    </View>
                </TouchableWithoutFeedback>
            )
        }

        return (
            <View style={{ flex: 1 }}>
                {commentArea}
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row',
        alignItems: 'center',
        margin: 10,
    },
    input: {
        width: '90%'
    },
    caption: {
        marginLeft: 10,
        fontSize: 12,
        color: '#CCC'
    },
})