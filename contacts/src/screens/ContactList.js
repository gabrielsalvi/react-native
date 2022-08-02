import React, { useContext, useEffect, useState } from 'react';
import { 
    FlatList,
    SafeAreaView,
    StyleSheet,
    Text,
    TextInput,
    TouchableHighlight,
    View
} from 'react-native';

import Icon from 'react-native-vector-icons/Feather';

import ContactsContext from '../context/ContactsContext';
import Contact from '../components/Contact';
import { colors, fonts } from '../../public/styles';

export default props => {
    const context = useContext(ContactsContext)
    const [searchContact, setSearchContact] = useState('')
    
    useEffect(() => {
        context.dispatch({ type: 'filterContacts', payload: searchContact })
    }, [searchContact]);

    const renderList = () => (
        context.state.contacts.length !== 0 
            ? <FlatList
                data={context.state.filteredContacts}
                renderItem={({ item: contact }) => <Contact {...contact} {...props} />}
                keyExtractor={contact => contact.id.toString()}
            />
            : <View style={styles.messageBar}>
                <Text style={styles.message}>Nenhum contato encontrado</Text>
            </View>
    )

    return (
        <SafeAreaView style={styles.container}>
            <View style={styles.searchBar}>
                <Icon name='search' size={30} style={styles.icon} />
                <TextInput 
                    style={styles.input}
                    placeholder='Busque um contato...'
                    value={searchContact}
                    onChangeText={text => {
                        setSearchContact(text);
                    }}
                />
            </View>
            { renderList() }
            <View style={styles.buttonContainer}>
                <TouchableHighlight 
                    style={styles.button} 
                    onPress={() => props.navigation.navigate('AddContact')}
                >
                    <Icon name='user-plus' size={23} color={colors.secondary} />
                </TouchableHighlight>
            </View>
        </SafeAreaView>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
    },
    searchBar: {
        flexDirection: 'row',
        borderWidth: 1,
        borderColor: colors.border,
        alignItems: 'center'
    },
    icon: {
        marginHorizontal: 10
    },
    input: {
        width: '100%',
        fontFamily: fonts.main,
        fontSize: fonts.inputSize,
        padding: 10,
    },
    messageBar: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    message: {
      
        fontFamily: fonts.main,
        fontSize: fonts.inputSize,
        padding: 10,
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