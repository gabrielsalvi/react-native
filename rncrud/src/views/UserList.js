import React, { Component } from 'react';
import { Alert } from 'react-native';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, ListItem } from "@rneui/themed";
import AntDesignIcon from 'react-native-vector-icons/AntDesign';
import FontAwesomeIcon from 'react-native-vector-icons/FontAwesome'
import UsersContext from '../context/UsersContext';

export default class UserList extends Component {    
    static contextType = UsersContext

    constructor(props) {
        super(props)
    }

    confirmUserDeletion = (user) => {        
        Alert.alert('Delete User', `Do you want to delete the user ${user.name}?`, [
            {
                text: 'Yes',
                onPress: () => this.context.dispatch({
                    type: 'delete_user',
                    payload: user.id
                })
            },
            {
                text: 'Nope'
            }
        ])
    }

    confirmUserEdit = (user) => {
        Alert.alert('Edit User', `Do you want to change the data of ${user.name}?`, [
            {
                text: 'Yes',
                onPress: () =>  this.navigate("UserForm", user)
            },
            {
                text: 'Nope'
            }
        ])
    }

    navigate = (location, param) => this.props.navigation.navigate(location, param)

    keyExtractor = (item) => item.id.toString()

    renderItem = ({ item: user }) => (
      <ListItem onPress={() => this.navigate('UserForm', user)} bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.occupation}</ListItem.Subtitle>
        </ListItem.Content>
        <FontAwesomeIcon
            name="edit"
            color="orange"
            size={25}
            onPress={() => this.confirmUserEdit(user)}
        />
        <AntDesignIcon
            name="delete"
            color="red"
            size={25}
            onPress={() => this.confirmUserDeletion(user)}
        />
      </ListItem>
    )
    
    render () {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={this.context.state.users}
          renderItem={this.renderItem}
        />
      )
    }
}