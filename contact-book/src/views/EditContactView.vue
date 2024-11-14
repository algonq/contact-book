<template>
  <div>
    <h1>Edit Contact</h1>
    <ContactForm :contactData="contact" @submit="updateContact" />
  </div>
</template>

<script>
import ContactForm from '../components/ContactForm.vue';
import { contactStore } from '../store/contactStore.js';

export default {
  data() {
    return {
      contact: null,
    };
  },
  created() {
    const id = this.$route.params.id;
    this.contact = contactStore.getContactById(id);
  },
  methods: {
    updateContact(updatedContact) {
      contactStore.updateContact(updatedContact);
      this.$router.push(`/contact/${updatedContact.id}`);
    },
  },
};
</script>
