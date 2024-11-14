<template>
  <div>
    <h1>Add New Contact</h1>
    <ContactForm @submit="addContact" />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import { contactStore } from '../store/contactStore.js';

export default {
  components: { ContactForm },
  methods: {
    addContact(contact) {
      contactStore.addContact(contact);
      this.$router.push(`/contact/${contact.id}`);
    },
  },
};
</script>
