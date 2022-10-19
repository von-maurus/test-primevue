<template>
  <DataTable :value="productos" responsiveLayout="scroll">
    <ColumnComponent
      v-for="col of columns"
      :field="col.field"
      :header="col.header"
      :key="col.field"
    ></ColumnComponent>
  </DataTable>
</template>

<script>
import axios from "axios";
// import DataTable from "primevue/datatable";
// import Column from "primevue/column";

export default {
//   components: {
//     DataTable,
//     Column,
//   },
  data() {
    return {
      productos: [],
      columns: [
        {
          field: "title",
          header: "Title",
        },
        {
          field: "description",
          header: "Description",
        },
        {
          field: "price",
          header: "Price",
          numeric: true,
        },
      ],
    };
  },
  mounted() {
    axios.get("https://dummyjson.com/products").then((resp) => {
      console.log("HOLA", resp);
      this.productos = resp.data.products;
    });
  },
};
</script>
