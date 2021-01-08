<template>
  <div class="search__input">
    <i class="search__inputIcon fa fa-search"></i>
    <input @input="filterContacts($event)" type="text" placeholder="Buscar persona" />
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "FilterContacts",
  methods: mapActions(["filterContacts"])
};
</script>

<style scoped>
.search__input {
  display: flex;
  align-items: center;
  padding: 10px 20px 10px 15px;
  border: 1px solid #f4f4f4;
  border-radius: 12px;
  background: white;
  width: 320px;
  height: 50px;
  box-sizing: border-box;
  overflow: hidden;
}

.search__input > input {
  flex: 1;
  padding: 0 15px;
  font-size: medium;
  border: none;
  color: #6d6d6d;
  height: 28px;
  font-size: 24.88px;
}

.search__input > input:focus {
  outline-width: 0;
}

.search__inputIcon {
  color: #f89110;
  width: 25px;
  height: 25px;
  font-size: 23px;
  text-align: center;
}

@media (max-width: 768px) {
  .search__input {
    width: auto;
    height: auto;
  }
}
</style>
