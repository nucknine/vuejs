<template>
  <nav class="navbar navbar-default">
  <div class="container-fluid">
    <div class="navbar-header">
      <router-link :to="{name: 'home'}" class="navbar-brand">Stock Trader</router-link>
    </div>

    <div class="collapse navbar-collapse">
      <ul class="nav navbar-nav">
        <router-link :to="{name: 'portfolio'}" active-class="active" tag="li" exact><a>Portfolio<span class="sr-only">(current)</span></a></router-link>
        <router-link :to="{name: 'stocks'}" active-class="active" tag="li" exact><a>Stocks</a></router-link>
      </ul>
      <strong class="navbar-text navbar-right">Funds: {{ funds | funds-filter }}</strong>
      <ul class="nav navbar-nav navbar-right">
        <router-link :to="{name: 'signin'}" tag="li"><a>Sign in</a></router-link>
        <router-link :to="{name: 'signup'}" tag="li"><a>Sign up</a></router-link>
        <li
          class="dropdown"
          :class="{open: isDropdownOpen}"
          @click="isDropdownOpen = !isDropdownOpen">
          <a
            href="#"
            class="dropdown-toggle"
            data-toggle="dropdown"
            role="button"
            aria-haspopup="true"
            aria-expanded="false">Options<span class="caret"></span></a>
          <ul class="dropdown-menu">
            <li><a href="#" @click.prevent="endDay">End Day</a></li>
            <li><a href="#" @click.prevent="saveData">Save Data</a></li>
            <li><a href="#" @click.prevent="loadData">Load Data</a></li>
          </ul>
        </li>
      </ul>
    </div>
  </div><!-- /.container-fluid -->
</nav>
</template>

<script>
import { mapGetters, mapActions } from 'vuex'
import axios from 'axios'

export default {
  data () {
    return {
      // resource: {},
      isDropdownOpen: false
    }
  },
  computed: {
    ...mapGetters({
      funds: 'getFunds',
      userStocks: 'getUserStocks',
      allStocks: 'getAllStocks'
    })
  },
  methods: {
    ...mapActions({
      endDay: 'endDayAsync',
      updateUser: 'updateUserAsync',
      updateStocks: 'updateStocksAsync',
      loadDataAsync: 'loadData'
    }),
    saveData () {
      const data = {
        funds: this.funds,
        userStocks: this.userStocks,
        allStocks: this.allStocks
      }
      // this.resource.update(data).then((res, err) => {
      //   console.log(err)
      // })
      axios.put('data.json', data).then((res, err) => {
        console.log(res)
        console.log(err)
      })
    },
    loadData () {
      this.loadDataAsync()
    }
  },
  created () {
    // this.resource = this.$resource('data.json')
  }
}
</script>

<style>
</style>
