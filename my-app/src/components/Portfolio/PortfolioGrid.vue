<template>
  <div class="row">
    <app-portfolio-stock
      v-for="(stock, i) in userStocks"
      :key="stock + i"
      :stock="stock"
      :price="getStockPrice(userStocks[i].name)">
    </app-portfolio-stock>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PortfolioStock from './PortfolioStock'

export default {
  computed: {
    ...mapGetters({
      userStocks: 'getUserStocks',
      allStocks: 'getAllStocks'
    })
  },
  methods: {
    getStockPrice (name) {
      return this.allStocks.find(x => x.name === name).price
    }
  },
  components: {
    appPortfolioStock: PortfolioStock
  }
}
</script>
<style>
</style>
