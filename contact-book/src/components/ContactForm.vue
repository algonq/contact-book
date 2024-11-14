<template>
  <form @submit.prevent="handleSubmit">
    <input v-model="contact.firstName" placeholder="First Name" required />
    <input v-model="contact.lastName" placeholder="Last Name" required />
    <input v-model="contact.email" type="email" placeholder="Email" required />
    <button type="submit">Save</button>
  </form>
</template>

<script>
export default {
  props: ['contactData'],
  data() {
    return {
      contact: this.contactData || { firstName: '', lastName: '', email: '' },
    };
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.contact });
    },
  },
};
</script>
