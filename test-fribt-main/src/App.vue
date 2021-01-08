<template>
  <div>
    <AddContact v-if="showModal" @close="showModal = false" />
    <main class="wrapper container">
      <Header />
      <section class="wrapper__top">
        <FilterContacts />
        <button class="buttonPrimary" @click="showModal = true">
          <i class="buttonPrimary__icon fa fa-plus-circle"></i>
          <span class="buttonPrimary__text">Nuevo Contacto</span>
        </button>
      </section>
      <Contacts />
        <Notifications :type="notify" v-if="notify"/>
      <Pagination />
    </main>
  </div>
</template>

<script>
import Header from "./components/Header.vue";
import AddContact from "./components/AddContact.vue";
import Contacts from "./components/Contacts.vue";
import FilterContacts from "./components/FilterContacts.vue";
import Pagination from "./components/Pagination.vue";
import Notifications from "./components/Notifications.vue";
import { mapGetters } from "vuex";

export default {
  name: "app",
  components: {
    Header,
    AddContact,
    Contacts,
    FilterContacts,
    Pagination,
    Notifications
  },
  data() {
    return {
      showModal: false,
      type: null
    };
  },
  computed: mapGetters(["notify"])
};
</script>

<style>
.blur {
  filter: blur(5px);
}
.buttonPrimary {
  background: #f89110 0% 0% no-repeat padding-box;
  border-radius: 12px;
  opacity: 1;
  width: 190px;
  height: 50px;
  border: none;
  color: white;
  font-size: 20px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}
.buttonPrimary__icon {
  padding-right: 7px;
}
.wrapper {
  display: flex;
  flex-direction: column;
}
.wrapper > * {
  margin-bottom: 30px;
}
body {
  background: #d3d3d3;
  margin: 0;
  padding: 0;
}
.wrapper__top {
  display: flex;
  justify-content: space-between;
  align-items: center;
}
.container {
  max-width: 1100px;
  margin: auto;
  overflow: auto;
  padding: 0 2rem;
}

@media (max-width: 768px) {
    .wrapper__top {
        display: block;
    }
    .wrapper__top > * {
        margin-left: auto;
        margin-right: auto;
    }
    .wrapper__top > :not(:last-child) {
        margin-bottom: 20px;
    }
}
</style>
