<template>
  <article class="contact">
    <aside class="contact__imgContainer">
      <img v-bind:src="contact.image" class="contact__img" alt="Maria carrillo" />
    </aside>
    <header class="contact__main">
      <h3 class="contact__name">
        {{contact.name}}
        <small @click="deleteContact(1)" class="contact__delete">Eliminar</small>
      </h3>
      <p class="contact__description">{{contact.description}}</p>
    </header>
    <aside class="contact__iconContainer">
      <i class="contact__icon fa fa-pencil-alt" @click="editContact(1)"></i>
    </aside>
  </article>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Contact",
  methods: {
    ...mapActions(["deleteContact", "editContact"])
  },
  props: {
    contact: {}
  }
};
</script>
<style>
.contact__icon {
  cursor: pointer;
  color: #194C89;
  font-size: 2em;
}
.contact {
  display: flex;
  align-items: center;
  background: white;
  border-radius: 12px;
  padding: 20px;
  box-shadow: 3px 3px 3px #a0a0a0bf;
  justify-content: space-between;
}

.contact .contact__delete {
  cursor: pointer;
  visibility: hidden;
  color: #7f7f7f;
  display: block;
}
.contact:hover .contact__delete {
  visibility: visible;
}
.contact__delete:hover {
  color: #f89110;
}
.contact:not(:last-child) {
  margin-bottom: 20px;
}
.contact__main {
  flex: 1;
  display: flex;
  padding: 0 20px;
  justify-content: space-between;
  align-items: center;
}
.contact__main > * {
  margin: 0;
}
.contact__name,
.contact__description {
  color: #353535;
}
.contact__name {
  flex: 0.2;
  padding-right: 35px;
  font-size: 20px;
}
.contact__description {
  flex: 0.8;
}
.contact__img {
  width: 70px;
  border-radius: 50%;
}

@media (max-width: 400px) {
    .contact, .contact__main {
        display: block;
    }
    .contact__imgContainer, .contact__main, .contact__iconContainer {
        text-align: center;
    }
    .contact__iconContainer {
        margin-top: 30px;
    }
    .contact__name {
        padding: 0;
        margin-bottom: 20px;
    }
}
</style>