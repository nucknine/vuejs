<template>
  <div class="row">
    <app-portfolio-stock
      v-for="(stock, i) in userStocks"
      :key="stock + i"
      :stock="stock"
      :price="getStockPrice(userStocks[i].name)">
    </app-portfolio-stock>
    <div class="row" v-if="email">
      <div class="col-sm-4">
        <strong>{{ email }}</strong>
      </div>
    </div>
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
    }),
    email () {
      return !this.$store.getters.user ? false : this.$store.getters.user.email
    }
  },
  methods: {
    getStockPrice (name) {
      return this.allStocks.find(x => x.name === name).price
    }
  },
  created () {
    this.$store.dispatch('fetchUser')
  },
  components: {
    appPortfolioStock: PortfolioStock
  }
}
</script>
<style>
</style>
