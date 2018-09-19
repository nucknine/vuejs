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
  data () {
    return {
      stockArr: [
        { name: 'BMW', price: 75 },
        { name: 'Apple', price: 250 },
        { name: 'Google', price: 200 },
        { name: 'Twitter', price: 25 }
      ]
    }
  },
  components: {
    appStock: Stock
  }
}
</script>
<style>
</style>
