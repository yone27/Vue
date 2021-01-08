<template>
  <section class="wrapper__main">
    <div v-for="contact in allContacts" :key="contact.id">
      <template v-if="contact.editing">
        <EditContact @dblclick="onDblClick(contact)" :contact="contact" />
      </template>
      <template v-else>
        <Contact @dblclick="onDblClick(contact)" :contact="contact" />
      </template>
    </div>
  </section>
</template>

<script>
import Contact from "./Contact.vue";
import EditContact from "./EditContact.vue";
import { mapGetters, mapActions } from "vuex";

export default {
  name: "Contacts",
  methods: {
    ...mapActions(["fetchContacts"]),
    onDblClick(todo) {
      const updContact = {
        id: todo.id,
        title: todo.title,
        completed: !todo.completed
      };

      this.updateContact(updContact);
    }
  },
  computed: mapGetters(["allContacts"]),
  //   created() {
  //     this.fetchContacts();
  //   },
  components: {
    Contact,
    EditContact
  }
};
</script>
<style>
</style>