<template>
  <div class="col-sm-12 col-md-6">
      <div class="panel panel-success">
        <div class="panel-heading">
          <strong>
              {{ stock.name }}
          </strong>
          (Price: {{ stock.price }})
        </div>
        <div class="panel-body">
          <div class="row">
            <div class="col-sm-12 col-md-4">
              <input
                type="text"
                class="form-control"
                placeholder="Quantity"
                v-model="quantity">
            </div>
            <div class="col-sm-12 col-md-offset-6 col-md-2">
              <button @click="buyStocks" class="btn btn-default btn-success">Buy</button>
            </div>
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
  methods: {
    ...mapActions({}),
    buyStocks () {
      let payload = {
        stockSumm: this.quantity * this.stock.price,
        stockName: this.stock.name,
        stockQuantity: this.quantity
      }
      this.$store.dispatch('buyStocksAsync', payload)
    }
  }
}
</script>
