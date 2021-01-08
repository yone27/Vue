<template>
  <header class="header">
    <h1 class="header__title">AMOBASOFTWARE</h1>
  </header>
</template>

<script>
export default {
  name: "Header"
};
</script>

<style scoped>
.header {
  display: flex;
  justify-content: flex-end;
}
.header__title {
  color: #000000;
  font-size: 30.76px;
}

@media (max-width: 768px) {
  .header {
    justify-content: center;
  }
  .header__title {
    font-size: 20px;
  }
}
</style>
