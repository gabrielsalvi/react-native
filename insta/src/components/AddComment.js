import React, { Component } from 'react'
import { 
    StyleSheet,
    Text,
    TextInput,
    TouchableWithoutFeedback,
    View
} from 'react-native'

import Icon from 'react-native-vector-icons/FontAwesome'

import { connect } from 'react-redux';
import { addComment } from '../store/actions/post'

class AddComment extends Component {
    constructor(props) {
        super(props);
        this.state = {
            comment: '',
            editMode: false,
        }
    }

    handleAddComment = () => {
        this.props.onAddComment({
            postId: this.props.postId,
            comment: {
                nickname: this.props.name,
                comment: this.state.comment
            }
        })
        
        this.setState({ comment: '', editMode: false })
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

const mapStateToProps = ({ user }) => {
    return {
        name: user.name
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddComment: payload => dispatch(addComment(payload))
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddComment)