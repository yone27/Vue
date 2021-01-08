const state = {
    contacts: [],
    notify: ''
};

const getters = {
    allContacts: state => state.contacts,
    notify: state => state.notify
};

const actions = {
    async fetchContacts({ commit }) {
        // const response = await axios.get(
        //   'https://jsonplaceholder.typicode.com/todos'
        // );

        // commit('setContacts', response.data);
    },
    async addContact({ commit }, data) {
        // const response = await axios.post(
        //   'https://jsonplaceholder.typicode.com/todos',
        //   { title, completed: false }
        // );
        commit('setNotify', 'complete');
        commit('newContact', data);
    },
    setNotify({ commit }, notify) {
        commit('setNotify', notify);
    },
    clearNotify({ commit }) {
        commit('clearNotify');
    },
    async deleteContact({ commit }, id) {
        // await axios.delete(`https://jsonplaceholder.typicode.com/todos/${id}`);
        commit('setNotify', 'delete');
        commit('removeContact', id);
    },
    async filterContacts({ commit }, e) {
        // Get selected number
        // const response = await axios.get(
        //     `https://jsonplaceholder.typicode.com/todos?_limit=${limit}`
        // );

        // commit('setContacts', response.data);
    },
    editContact({ commit }, id) {
        commit('editContact', id);
    },
    async updateContact({ commit }, updateContact) {
        // const response = await axios.put(
        //     `https://jsonplaceholder.typicode.com/todos/${updateContact.id}`,
        //     updateContact
        // );
        commit('setNotify', 'updated');
        commit('updateContact', updateContact);
    }
};

const mutations = {
    setNotify: (state, notify) => (state.notify = notify),
    clearNotify: (state) => (state.notify = ''),
    setContacts: (state, contacts) => (state.contacts = contacts),
    newContact: (state, contact) => state.contacts.unshift(contact),
    removeContact: (state, id) => (state.contacts = state.contacts.filter(contact => contact.id !== id)),
    editContact: (state, id) => {
        state.contacts = state.contacts.map(contact => contact.id === id ? { ...contact, editing: !contact.editing } : contact)
    },
    updateContact: (state, updateContact) => {
        const index = state.contacts.findIndex(contact => contact.id === updateContact.id);
        if (index !== -1) {
            state.contacts.splice(index, 1, updateContact);
        }
    }
};

export default {
    state,
    getters,
    actions,
    mutations
};
