<template>
  <button class="pagination">
    <span>Siguiente Pagina</span>
    <span class="pagination__icon">-</span>
  </button>
</template>

<script>
export default {
  name: "Pagination"
};
</script>
<style>
.pagination {
  border: 1px solid #000000;
  border-radius: 18px;
  text-transform: capitalize;
  background: none;
  align-self: flex-end;
  box-shadow: inset 0px 0px 3px 0px rgba(0, 0, 0, 0.75);
  position: relative;
  font-size: 16px;
  padding: 10px 60px 10px 30px;
  cursor:pointer;
}
.pagination__icon {
  background: #f5e616;
  width: 38px;
  height: 37px;
  box-shadow: 2px 2px 10px rgba(0, 0, 0, 0.75);
  border-radius: 50%;
  position: absolute;
  right: 0;
  top: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 1em;
}

@media (max-width: 768px) {
  .pagination {
    align-self: center;
  }
}
</style>