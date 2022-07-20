import React, { Component } from 'react'
import { 
    Image, 
    Platform,
    StyleSheet,
    Text,
    View
} from 'react-native'
import { Gravatar } from 'react-native-gravatar'
import { connect } from 'react-redux'

import icon from '../../assets/imgs/icon.png'

class Header extends Component {
    constructor(props) {
        super(props)
    }

    render() {
        const name = this.props.name || 'Anonymous'
        
        const gravatarOptions = {
            email: this.props.email,
            secure: true
        }
        const gravatar = this.props.email 
            ? <Gravatar options={gravatarOptions} style={styles.avatar} /> 
            : null

        return (
            <View style={styles.container}>
                <View style={styles.rowContainer}>
                    <Image source={icon} style={styles.image} />
                    <Text style={styles.title}>Insta</Text>
                </View>
                <View style={styles.userContainer}>
                    {gravatar}
                    <Text style={styles.name}>{name}</Text>
                </View>
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        marginTop: Platform.OS === 'ios' ? 20 : 0,
        padding: 10,
        borderBottomWidth: 1,
        borderColor: '#BBB',
        width: '100%',
        flexDirection: 'row',
        justifyContent: 'space-between'
    },
    rowContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    image: {
        height: 30,
        width: 30,
        resizeMode: 'contain'
    },
    title: {
        fontFamily: 'shelter',
        fontSize: 28,
        height: 30,
        color: '#000',
    },
    avatar: {
        width: 30,
        height: 30,
        marginHorizontal: 10,
        borderRadius: 15
    },
    userContainer: {
        flexDirection: 'row',
        alignItems: 'center'
    },
    name: {
        fontSize: 10,
        color: '#888',
        marginRight: 10
    }
})

const mapStateToProps = ({ user }) => {
    return {
        email: user.email,
        name: user.name
    }
}

export default connect(mapStateToProps)(Header)