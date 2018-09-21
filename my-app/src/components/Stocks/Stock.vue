<template>
  <div class="col-sm-6 col-md-4">
      <div class="panel panel-success">
        <div class="panel-heading">
          <strong>
              {{ stock.name }}
          </strong>
          <small>
            (Price: {{ stock.price }})
          </small>
        </div>
        <div class="panel-body">
            <div class="pull-left">
              <input
                type="number"
                class="form-control"
                placeholder="Quantity"
                :class="{danger: insufficientFunds}"
                v-model="quantity">
            </div>
            <div class="pull-right">
              <button
                @click="buyStocks"
                class="btn btn-success"
                :disabled="insufficientFunds || quantity <= 0 || !Number.isInteger(quantity * 1)"
                >{{ insufficientFunds ? 'out of funds' : 'Buy'}}
              </button>
            </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock'],
  data () {
    return {
      quantity: 0
    }
  },
  computed: {
    insufficientFunds () {
      return this.quantity * this.stock.price > this.funds
    },
    funds () {
      return this.$store.getters.getFunds
    }
  },
  methods: {
    ...mapActions({}),
    buyStocks () {
      let payload = {
        stockSumm: this.quantity * this.stock.price,
        stockName: this.stock.name,
        stockQuantity: this.quantity
      }
      this.$store.dispatch('buyStocksAsync', payload)
      this.quantity = 1
    }
  }
}
</script>
<style>
.danger {
  background-color: crimson;
}
</style>

