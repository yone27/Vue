<template>
  <div>
    <template v-if="type === 'delete'">
      <div class="animated slideInLeft notify delete">
        <h4 class="notify__text">Registro Eliminado</h4>
        <span class="notify__icon">notify</span>
      </div>
    </template>
    <template v-else-if="type === 'complete'">
      <div class="animated slideInLeft notify complete">
        <h4 class="notify__text">Registro Completado</h4>
        <span class="notify__icon">notify</span>
      </div>
    </template>
    <template v-else-if="type === 'updated'">
      <div class="animated slideInLeft notify update">
        <h4 class="notify__text">Registro Actualizado</h4>
      </div>
    </template>
  </div>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "Notifications",
  props: {
    type: String
  },
  mounted() {
    setTimeout(() => {
      this.clearNotify()
    }, 2000);
  },
   methods: {
    ...mapActions(["clearNotify"])
  }
};
</script>
<style>
.delete {
  background-color: #c6112b;
}
.complete {
  background-color: #629d20;
}
.update {
  background-color: #441f8b;
}
.notify {
  transition: all 0.3s ease-in-out;
  left: -100%;
  border: 1px solid #f4f4f4;
  box-shadow: 2px 2px 2px #686868bf;
  border-radius: 12px;
  position: fixed;
  bottom: 30px;
  left: 30px;
  width: 330px;
  color: white;
  font-size: 1.7em;
  padding: 20px 20px;
  display: flex;
}
.notify__text {
  margin: 0;
  flex: 1;
}
.notify__icon {
  position: absolute;
  right: 20px;
}
</style>
