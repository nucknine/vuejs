<template>
  <div class="row">
    <app-stock
      v-for="(stock, i) in stockArr"
      :key="stock + i"
      :stock="stock">
    </app-stock>
  </div>
</template>
<script>
import Stock from './Stock'
export default {
  computed: {
    stockArr () {
      return this.$store.getters.getAllStocks
    }
  },
  components: {
    appStock: Stock
  }
}
</script>
<style>
</style>
