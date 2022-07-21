import React, { Component } from 'react'
import { 
    Dimensions,
    Image,
    Platform,
    ScrollView,
    StyleSheet,
    Text,
    TextInput,
    TouchableOpacity,
    View
} from 'react-native'

import { connect } from 'react-redux';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

import Header from '../components/Header';

import { addPost } from '../store/actions/post'

 class AddPhoto extends Component {
    constructor(props) {
        super(props)
        this.state = {
            image: null,
            comment: ''
        }
    }

    takePicture = async () => {
        const result = await launchCamera({
            mediaType: 'photo',
            includeBase64: true,
            saveToPhotos: true,
            maxHeight: 600,
            maxWidth: 800
        })

        this.setState({
            image: {
                uri: result.assets[0].uri,
                base64: result.assets[0].base64
            }
        })
    }

    pickPhoto = async () => {
        const result = await launchImageLibrary({
            mediaType: 'photo',
            includeBase64: true,
            maxHeight: 600,
            maxWidth: 800
        })

        this.setState({
            image: {
                uri: result.assets[0].uri,
                base64: result.assets[0].base64
            }
        })
    }

    save = async () => {
        this.props.onAddPost({
            id: Math.random(),
            nickname: this.props.name,
            email: this.props.email,
            image: this.state.image,
            comments: [
                {
                    nickname: this.props.name,
                    comment: this.state.comment
                }
            ]
        })

        this.props.navigation.navigate('Feed')
    }

    render() {
        return (
            <>
            <Header />
            <View style={styles.container}>
                <Text style={styles.title}>Share a picture</Text>
                <View style={styles.imageContainer}>
                    <Image style={styles.image} source={this.state.image} />
                </View>
                <View style={styles.buttonsContainer}>
                    <TouchableOpacity onPress={this.takePicture} style={styles.button}>
                        <Text style={styles.buttonText}>Camera</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.pickPhoto} style={styles.button}>
                        <Text style={styles.buttonText}>Photos</Text>
                    </TouchableOpacity>
                </View>
                <TextInput 
                    style={styles.input}
                    placeholder='Leave a comment...'
                    onChangeText={comment => this.setState({ comment })}
                />
                <TouchableOpacity style={styles.button} onPress={this.save}>
                    <Text style={styles.buttonText}>Share</Text>
                </TouchableOpacity>
            </View>
            </>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    title: {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 20
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#E5E5E5',
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    buttonsContainer: {
        flexDirection: 'row',
    },
    button: {
        width: 180,
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
        marginHorizontal: 5,
        alignItems: 'center',
        justifyContent: 'center'
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        fontFamily: 'shelter',
        fontSize: 20,
        marginTop: 20,
        width: '90%'
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name,
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onAddPost: post => {
            dispatch(addPost(post))
        }
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(AddPhoto)