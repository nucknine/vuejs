<template>
  <div class="container">
    <div class="row">
      <div class="offset-2 col-sm-8">
        <div class="form-group">
          <label for="">Node name</label>
          <input type="text" v-model="node">
        </div>
        <div class="form-group">
          <label for="name">Name</label>
            <input type="text" class="form-control" id="name" v-model="user.name">
        </div>
        <div class="form-group">
          <label for="email">Email</label>
          <input type="text" class="form-control" id="email" v-model="user.email">
        </div>
        <button class="btn btn-default btn-primary" @click="submit" >Submit</button>
        <hr>
        <button class="btn btn-default btn-primary" @click="fetchData" >Fetch</button>
        <ul class="list-group">
          <li class="list-group-item" v-for="(u, i) in users" :key="u + i">{{u.name + '-' + u.email}}</li>
        </ul>
      </div>
    </div>
    <app-header></app-header>
    <router-view></router-view>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'app',
  components: {
    'app-header': Header
  },
  data () {
    return {
      user: {
        name: '',
        email: ''
      },
      users: [],
      resource: {},
      node: 'data'
      // node: 'alternative'
    }
  },
  created () {
    let customActions = {
      getData: { method: 'GET' }
    }
    this.resource = this.$resource('{node}.json', {}, customActions)
  },
  methods: {
    submit () {
      this.$http.post('alternative.json', this.user)
        .then(response => {
          console.log(response)
        }, error => {
          console.log(error)
        })
    },
    fetchData () {
      // через http
      // this.$http.get('data.json')
      //   .then(res => res.json())
      //   .then(res => {
      //     for (let key in res) {
      //       this.users.push(res[key])
      //     }
      //   })

      // через resource
      // this.resource.get('')
      //   .then(res => res.json())
      //   .then(res => {
      //     for (let key in res) {
      //       this.users.push(res[key])
      //     }
      //   })

      // через "resource customAction" getData
      // this.resource.getData('')
      //   .then(res => res.json())
      //   .then(res => {
      //     for (let key in res) {
      //       this.users.push(res[key])
      //     }
      //   })

      // через "resource customAction" getData с dynamic path
      this.resource.getData({ node: this.node })
        .then(res => res.json())
        .then(res => {
          for (let key in res) {
            this.users.push(res[key])
          }
        })
    }
  }
}
</script>

<style>
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>
