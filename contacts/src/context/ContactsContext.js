import React, { createContext, useReducer } from 'react';

import contacts from '../data/contacts';
import reducer from './reducer';

const ContactsContext = createContext()

const initialState = {
    contacts: [...contacts],
    filteredContacts: [...contacts],
}

export const ContactsProvider = props => {
    const [state, dispatch] = useReducer(reducer, initialState);

    return (
        <ContactsContext.Provider value={{ state, dispatch }}>
            {props.children}
        </ContactsContext.Provider>
    )
}

export default ContactsContext;