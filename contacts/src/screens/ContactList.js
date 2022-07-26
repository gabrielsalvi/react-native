import React, { Component } from 'react';
import { 
    FlatList,
    SafeAreaView,
    StyleSheet,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import Contact from '../components/Contact';
import { colors } from '../../public/styles';

const contacts = [
    {
        id: Math.random(),
        name: 'Julio Cesar',
        phone: '(54)98414-5616',
        email: 'julio@gmail.com'
    },
    {
        id: Math.random(),
        name: 'Marechal Bormann',
        phone: '49996817331',
        email: 'marbor@outlook.com'
    },
    {
        id: Math.random(),
        name: 'Thomas Muller',
        phone: '54981931243',
        email: 'muller@outlook.com'
    },
]

export default class ContactList extends Component {
    constructor(props) {
        super(props);
        this.state = {
            contacts: [...contacts],
            filteredContacts: [...contacts],
            searchContact: ''
        }
    }

    filterContacts = () => {
        const filteredContacts = this.state.contacts
            .filter(contact => contact.name.toLocaleLowerCase().includes(this.state.searchContact.toLocaleLowerCase()))

        this.setState({ filteredContacts })
    }

    render() {
        return (
            <SafeAreaView style={styles.container}>
                <TextInput 
                    placeholder='Busque um contato...'
                    value={this.state.searchContact}
                    onChangeText={text => this.setState({ searchContact: text }, this.filterContacts)}
                />
                <FlatList
                    data={this.state.filteredContacts}
                    renderItem={({ item: contact }) => <Contact {...contact} />}
                    keyExtractor={contact => contact.id.toString()}
                />
                <View style={styles.buttonContainer}>
                    <TouchableHighlight 
                        style={styles.button} 
                        onPress={() => this.props.navigation.navigate('AddContact')}
                    >
                        <Icon name='user-plus' size={23} color={colors.secondary} />
                    </TouchableHighlight>
                </View>
            </SafeAreaView>
        )
    }
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    buttonContainer: {
        alignItems: 'flex-end'
    },
    button: {
        width: 60,
        height: 60,
        borderRadius: 30,
        margin: 10,
        backgroundColor: colors.main,
        alignItems: 'center',
        justifyContent: 'center'
    }
});