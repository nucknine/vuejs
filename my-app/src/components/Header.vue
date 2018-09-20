<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <!-- Brand and toggle get grouped for better mobile display -->
    <div class="navbar-header">
      <button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">
        <span class="sr-only">Toggle navigation</span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
        <span class="icon-bar"></span>
      </button>
      <router-link :to="{name: 'home'}" tag="a" class="navbar-brand" exact>Stock Trader</router-link>
    </div>

    <!-- Collect the nav links, forms, and other content for toggling -->
    <div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">
      <ul class="nav navbar-nav">
        <router-link :to="{name: 'portfolio'}" active-class="active" tag="li" exact><a>Portfolio<span class="sr-only">(current)</span></a></router-link>
        <router-link :to="{name: 'stocks'}" active-class="active" tag="li" exact><a>Stocks</a></router-link>
      </ul>
      <p class="navbar-text navbar-right" style="font-weight: bold">Funds: {{ funds }}$</p>
      <ul class="nav navbar-nav navbar-right">
        <li><a href="#" @click.prevent="endDay(1)">End Day</a></li>
        <li class="dropdown">
          <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false">Save & Load<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="saveData">Save Data</a></li>
            <li><a href="#" @click.prevent="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div><!-- /.navbar-collapse -->
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'

export default {
  data () {
    return {
      resource: {}
    }
  },
  computed: {
    ...mapGetters({
      funds: 'getFunds',
      userStocks: 'getUserStocks'
    })
  },
  methods: {
    ...mapActions({
      endDay: 'endDayAsync',
      updateUser: 'updateUserAsync'
    }),
    saveData () {
      let data = {
        funds: this.funds,
        userStocks: this.userStocks
      }
      this.resource.update(data).then((res, err) => {
        console.log(err)
      })
    },
    loadData () {
      this.resource.get()
        .then(res => res.json())
        .then(res => {
          this.updateUser({ userFunds: res.funds, userStocks: res.userStocks })
        })
    }
  },
  created () {
    this.resource = this.$resource('data.json')
  }
}
</script>

<style>
</style>
