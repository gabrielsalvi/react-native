import React, { Component } from 'react';
import {
    SafeAreaView,
    StyleSheet
} from 'react-native';

import Header from './src/components/Header'
import Post from './src/components/Post'

import fenceImage from './assets/imgs/fence.jpg'

export default class App extends Component {
    render() {

        const comments = [
            {
                nickname: 'Joana Elena Silva',
                comment: 'Excelente Foto!',
            },
            {
                nickname: 'Rafael Gustavo Pereira',
                comment: 'Muito ruim! Faço melhor...',
            }
        ]

        return (
            <SafeAreaView style={{flex: 1}}>
                <Header />
                <Post image={fenceImage} comments={comments} />
            </SafeAreaView>
        );
    }
};