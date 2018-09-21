<template>
  <div class="col-sm-12 col-md-4">
      <div class="panel panel-info">
        <div class="panel-heading">
          <strong>
              {{ stock.name }}
          </strong>
          <small>
            (Price: {{ price }} | Quantity: {{ stock.quantity }})
          </small>
        </div>
        <div class="panel-body">
          <div class="pull-left">
            <input
              type="text"
              class="form-control"
              placeholder="Quantity"
              v-model="quantity">
          </div>
          <div class="pull-right">
            <button
              @click="sellStocks"
              :disabled="quantity <= 0 || !Number.isInteger(quantity * 1)"
              class="btn btn-default btn-danger">Sell</button>
          </div>
        </div>
      </div>
    </div>
</template>
<script>
import { mapActions } from 'vuex'

export default {
  props: ['stock', 'price'],
  data () {
    return {
      quantity: 1
    }
  },
  methods: {
    ...mapActions([
      'sellStocksAsync'
    ]),
    sellStocks () {
      if (this.quantity === 0) {
        return
      }
      let payload = {
        stockSumm: this.quantity * this.price,
        stockName: this.stock.name,
        stockQuantity: this.quantity
      }
      this.sellStocksAsync(payload)
      this.quantity = 1
    }
  }
}
</script>
