import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import Header from '../components/Header';
import Post from '../components/Post';

export default class Feed extends Component {
    constructor() {
        super();

        this.state = {
            posts: [
                {
                    id: Math.random(),
                    nickname: 'Rafael Pereira Filho',
                    email: 'rafaelpprrflh@gmail.com',
                    image: require('../../assets/imgs/fence.jpg'),
                    comments: [
                        {
                        nickname: 'John Ray Sheldon',
                        comment: 'Stunning!'
                        },
                        {
                            nickname: 'Ana Julia',
                            comment: 'Beautiful!!!'
                        }
                    ]
                },
                {
                    id: Math.random(),
                    nickname: 'Zinedine Zidane',
                    email: 'zizu@gmail.com',
                    image: require('../../assets/imgs/bw.jpg'),
                    comments: []
                }
            ]
        }
    }

    renderItem = ({ item }) => {
        return <Post key={item.id} {...item} />
    } 

    render() {
        return (
            <View style={styles.container}>
                <Header />
                <FlatList 
                    data={this.state.posts} 
                    keyExtractor={post => `${post.id}`}
                    renderItem={this.renderItem}
                />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#F5FCFF'
    }
})