import React, { Component } from 'react';
import { FlatList, StyleSheet, View } from 'react-native';

import { connect } from 'react-redux';

import Header from '../components/Header';
import Post from '../components/Post';

import { fetchPosts } from '../store/actions/post'

class Feed extends Component {
    constructor(props) {
        super(props);
    }

    componentDidMount = () => {
        this.props.onFetchPosts()
    }

    renderItem = ({ item }) => {
        return <Post key={item.id} {...item} />
    } 

    render() {
        return (
            <View style={styles.container}>
                <Header {...this.props} />
                <FlatList 
                    data={this.props.posts} 
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

const mapStateToProps = ({ posts }) => {
    return {
        posts: posts.posts
    }
}

const mapDispatchToProps = dispatch => {
    return {
        onFetchPosts: () => dispatch(fetchPosts())
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Feed)