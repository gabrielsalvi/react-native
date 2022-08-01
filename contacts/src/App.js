import React from 'react';
import { ContactsProvider } from './context/ContactsContext';
import Navigator from './Navigator';

export default App = () => {
    return (
        <ContactsProvider>
            <Navigator />
        </ContactsProvider>
    )
}