export const contactStore = {
    getContacts() {
      const contacts = localStorage.getItem('contacts');
      return contacts ? JSON.parse(contacts) : [];
    },
    saveContacts(contacts) {
      localStorage.setItem('contacts', JSON.stringify(contacts));
    },
    addContact(contact) {
      const contacts = this.getContacts();
      contact.id = Date.now().toString();
      contacts.push(contact);
      this.saveContacts(contacts);
    },
    updateContact(updatedContact) {
      const contacts = this.getContacts().map(contact =>
        contact.id === updatedContact.id ? updatedContact : contact
      );
      this.saveContacts(contacts);
    },
    deleteContact(id) {
      const contacts = this.getContacts().filter(contact => contact.id !== id);
      this.saveContacts(contacts);
    },
    getContactById(id) {
      return this.getContacts().find(contact => contact.id === id);
    },
  };
  