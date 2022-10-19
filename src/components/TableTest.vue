<template>
  <b-table :data="productos" :columns="columns"></b-table>
</template>

<script>
import axios from "axios";
export default {
  data() {
    return {
      productos: [],
      columns: [
        {
          field: "title",
          label: "Title",
        },
        {
          field: "description",
          label: "Description",
        },
        {
          field: "price",
          label: "Price",
          numeric: true,
        },
      ],
    };
  },
  mounted() {
    axios
      .get("https://dummyjson.com/products")
      .then(resp => {
        console.log("HOLA", resp);
        this.productos = resp.data.products});
  },
};
</script>
