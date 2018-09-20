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
                v-model="quantity">
            </div>
            <div class="pull-right">
              <button
                @click="buyStocks"
                class="btn btn-success">Buy
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
      quantity: 1
    }
  },
  methods: {
    ...mapActions({}),
    buyStocks () {
      if (this.quantity === 0) {
        return
      }
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
