<template>
  <div id="signin" class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <div class="form">
        <form @submit.prevent="onSubmit">
          <div class="form-group">
            <label for="email">Mail</label>
            <input
              class="form-control"
              type="email"
              id="email"
              v-model="email">
          </div>
          <div class="form-group">
            <label for="password">Password</label>
            <input
              class="form-control"
              type="password"
              id="password"
              v-model="password">
          </div>
          <div class="form-group">
            <button class="btn btn-default" type="submit">Submit</button>
          </div>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        email: '',
        password: ''
      }
    },
    methods: {
      onSubmit () {
        const formData = {
          email: this.email,
          password: this.password,
        }
        console.log(formData)
      }
    }
  }
</script>

<style>
</style>