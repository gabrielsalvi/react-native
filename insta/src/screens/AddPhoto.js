import React, { Component } from 'react'
import { 
    Alert,
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
import { launchCamera, launchImageLibrary } from 'react-native-image-picker';

export default class AddPhoto extends Component {
    constructor() {
        super()
        this.state = {
            image: null,
            comment: ''
        }
    }

    pickPhoto = async () => {
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

    pickImage = async () => {
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

    save = () => {
        Alert.alert('Image Saved!', this.state.comment)
    }

    render() {
        return (
            <ScrollView>
                <View style={styles.container}>
                    <Text style={styles.title}>Share a image</Text>
                    <View style={styles.imageContainer}>
                        <Image style={styles.image} source={this.state.image} />
                    </View>
                    <TouchableOpacity onPress={this.pickPhoto} style={styles.button}>
                        <Text style={styles.buttonText}>Pick the photo</Text>
                    </TouchableOpacity>
                    <TouchableOpacity onPress={this.pickImage} style={styles.button}>
                        <Text style={styles.buttonText}>Pick the image</Text>
                    </TouchableOpacity>
                    <TextInput 
                        style={styles.input}
                        placeholder='Leave a comment bellow'
                        onChangeText={comment => this.setState({ comment })}
                    />
                    <TouchableOpacity style={styles.button} onPress={this.save}>
                        <Text style={styles.buttonText}>Save</Text>
                    </TouchableOpacity>
                </View>
            </ScrollView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        alignItems: 'center'
    },
    title: {
        fontSize: 20,
        marginTop: Platform.OS === 'ios' ? 30 : 10,
        fontWeight: 'bold'
    },
    imageContainer: {
        width: '90%',
        height: Dimensions.get('window').width / 2,
        backgroundColor: '#E5E5E5',
        marginTop: 10
    },
    image: {
        width: '100%',
        height: Dimensions.get('window').width / 2,
        resizeMode: 'center',
    },
    button: {
        marginTop: 30,
        padding: 10,
        backgroundColor: '#4286f4',
    },
    buttonText: {
        fontSize: 20,
        color: '#FFF',
    },
    input: {
        marginTop: 20,
        width: '90%'
    }
})