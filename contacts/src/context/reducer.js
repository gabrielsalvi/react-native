export default reducer = (state, action) => {
    const fn = actions[action.type]
    return fn ? fn(state, action) : state
}

const actions = {
    addContact: (state, action) => {
        const contact = { id: Math.random(), ...action.payload }
        const contacts = [...state.contacts, contact].sort(comparison);

        return {
            ...state,
            contacts: [...contacts],
            filteredContacts: [...contacts]
        }
    },
    filterContacts: (state, action) => {
        const filteredContacts = state.contacts
            .filter(contact => {
                const searchedName = action.payload.toLocaleLowerCase();
                const name = contact.firstName
                    .concat(' ')
                    .concat(contact.lastName)
                    .toLocaleLowerCase();

                return name.includes(searchedName);
        }).sort(comparison)

        return {
            ...state,
            filteredContacts
        }
    }
}

const comparison = (a, b) => {
    const nameA = a.firstName.concat(' ').concat(a.lastName).toLocaleLowerCase();
    const nameB = b.firstName.concat(' ').concat(b.lastName).toLocaleLowerCase();

    return nameA.localeCompare(nameB);
}