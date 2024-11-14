<template>
  <ul>
    <li v-for="contact in contacts" :key="contact.id">
      <router-link :to="`/contact/${contact.id}`">{{ contact.firstName }} {{ contact.lastName }}</router-link>
    </li>
  </ul>
</template>

<script>
export default {
  props: ['contacts'],
};
</script>
