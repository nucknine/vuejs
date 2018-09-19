<template>
  <div class="row">
    <app-portfolio-stock
      v-for="(stock, i) in stocks"
      :key="stock + i"
      :stock="stock">
    </app-portfolio-stock>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'
import PortfolioStock from './PortfolioStock'

export default {
  computed: {
    ...mapGetters({
      stocks: 'getUserStocks'
    })
  },
  components: {
    appPortfolioStock: PortfolioStock
  }
}
</script>
<style>
</style>
