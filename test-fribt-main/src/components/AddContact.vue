<template>
  <section class="modalContainer" id="modal">
    <article class="modal">
      <header class="modal__header">
        <h2>Agregar nuevo contacto</h2>
      </header>
      <aside>
        <form class="modal__form" @submit="onSubmit">
          <div class="form-group-file">
            <div class="info-file">Cargar imagen</div>
            <label class="file-container-icon" for="image"><i class="fa fas fa-user-graduate"></i><span>Icon</span></label>
            <input type="file" name="image" id="image" style="display:none;" />
          </div>
          <div class="form-group">
            <label>
              <b>Nombre</b>
              <span class="obligatory">*</span>
            </label>
            <input class="form-control" type="text" name="name" v-model="name" />
          </div>
          <div class="form-group">
            <label>
              <b>Descripción</b>
              <span class="obligatory">*</span>
            </label>
            <textarea
              class="form-control"
              name="description"
              v-model="description"
              cols="30"
              rows="5"
            ></textarea>
          </div>
          <div class="text-center">
            <button type="submit" class="btn btn__primary">Guardar</button>
          </div>
        </form>
      </aside>
    </article>
  </section>
</template>

<script>
import { mapActions } from "vuex";

export default {
  name: "AddContact",
  data() {
    return {
      name: "",
      description: "",
      editing: false,
      image: "/logo.png",
      wrapper: null,
      id: 1
    };
  },
  mounted() {
    const modal = document.getElementById("modal");
    this.wrapper = document.querySelector(".wrapper");
    this.wrapper.classList.add("blur");
    modal.addEventListener("click", e => {
      if (e.target.attributes[1].value === "modal") {
        this.ocultarWidget();
      }
    });
  },
  methods: {
    ...mapActions(["addContact"]),
    onSubmit(e) {
      e.preventDefault();
      const data = {
        name: this.name,
        description: this.description,
        editing: this.editing,
        image: this.image,
        id: this.id
      };
      this.addContact(data);
      this.ocultarWidget();
    },
    ocultarWidget() {
      this.wrapper.classList.remove("blur");
      this.$emit("close");
    }
  }
};
</script>

<style scoped>
.form-group-file {
    display: flex;
align-items: center;
}
.info-file {
    margin-right: 15px;
}
.file-container-icon {
    padding: 20px;
border: 1px dashed #888889;
}
.modalContainer {
  position: fixed;
  height: 100vh;
  width: 100vw;
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 90;
}

.modalContainer::after {
  content: "";
  position: absolute;
  width: 100%;
  height: 100%;
}
.modal {
  position: relative;
  z-index: 50;
  background: #f9f9f9;
  box-sizing: border-box;
  box-shadow: 1px 0px 7px #a0a0a0bf;
  border: 1px solid #a4a4a4a5;
}
.modal__header {
  padding: 20px;
  background: white;
}
.modal__header > * {
  margin: 0;
}
.modal__form {
  padding: 40px;
  border-top: 1px solid #d3d3d3;
}
.modal__form .form-group:not(:last-child) {
  margin-bottom: 10px;
}
.form-control {
  display: block;
  width: 100%;
}
.form-group .obligatory {
  color: #f78841;
}
.btn.btn__primary {
  background: #f6b43d;
  border: none;
  color: white;
  padding: 5px 40px;
  font-size: 1em;
  border-radius: 4px;
}

.text-center {
  text-align: center;
}

@media (max-width: 400px) {
    .modal {
        max-width: 250px;
    }
}
</style>
