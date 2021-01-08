<template>
  <form class="contact">
    <aside class="contact__imgContainer">
      <img v-bind:src="contact.image" class="contact__img" alt="Maria carrillo" />
    </aside>
    <header class="contact__main">
      <div class="form-group">
        <input type="text" v-model="contact.name" />
      </div>
      <div class="form-group">
        <textarea name="description" cols="30" rows="5" v-model="contact.description"></textarea>
      </div>
    </header>
    <aside class="contact__iconContainer">
      <i class="contact__icon fa fa-save" @click="onSubmit()"></i>
    </aside>
  </form>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "EditContact",
  methods: {
    ...mapActions(["deleteContact", "updateContact"]),
    onSubmit() {
      this.updateContact(1)
      this.contact.editing = false;
      this.updateContact(this.contact);
    }
  },
  props: {
    contact: {}
  }
};
</script>
<style scope>
.contact__main input,
.contact__main textarea {
  background: #fcfbf5;
  border: 1px solid #d6d6d6;
  padding: 10px;
  color: #353535;
}
.contact__main textarea {
  width: 70%;
}
.contact__main input {
  font-size: 20px;
  width: 20%;
}
@media (max-width: 400px) {
  .form-group:not(:last-child) {
    margin-bottom: 20px;
  }
}
</style>