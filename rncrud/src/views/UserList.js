import React, { Component } from 'react';
import { FlatList } from 'react-native-gesture-handler';
import { Avatar, ListItem } from "@rneui/themed";
import users from '../data/users';

export default class App extends Component {    
    
    keyExtractor = (item, index) => index.toString()

    renderItem = ({ item: user }) => (
      <ListItem bottomDivider>
        <Avatar source={{uri: user.avatarUrl}} />
        <ListItem.Content>
          <ListItem.Title>{user.name}</ListItem.Title>
          <ListItem.Subtitle>{user.occupation}</ListItem.Subtitle>
        </ListItem.Content>
      </ListItem>
    )
    
    render () {
      return (
        <FlatList
          keyExtractor={this.keyExtractor}
          data={users}
          renderItem={this.renderItem}
        />
      )
    }
}