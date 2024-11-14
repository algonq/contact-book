<template>
  <div>
    <h2>{{ contact.firstName }} {{ contact.lastName }}</h2>
    <p>Email: {{ contact.email }}</p>
    <router-link :to="`/edit/${contact.id}`">Edit</router-link>
    <button @click="deleteContact"> Delete </button>
    <router-link to="/">Back</router-link>
  </div>
</template>

<script>
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
    deleteContact() {
      contactStore.deleteContact(this.contact.id);
      this.$router.push('/');
    },
  },
};
</script>
