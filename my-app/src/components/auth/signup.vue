<template>
  <div id="signup" class="row">
    <div class="col-sm-6 col-sm-offset-3">
      <div class="signup-form">
        <form @submit.prevent="onSubmit">
          <div class="form-froup">
            <label for="email">Mail</label>
            <input class="form-control"
                    type="email"
                    id="email"
                    v-model="email">
          </div>
          <div class="form-froup">
            <label for="age">Your Age</label>
            <input class="form-control"
                    type="number"
                    id="age"
                    v-model.number="age">
          </div>
          <div class="form-froup">
            <label for="password">Password</label>
            <input class="form-control"
                    type="password"
                    id="password"
                    v-model="password">
          </div>
          <div class="form-froup">
            <label for="confirm-password">Confirm Password</label>
            <input class="form-control"
                    type="password"
                    id="confirm-password"
                    v-model="confirmPassword">
          </div>
          <div class="form-froup">
            <label for="country">Country</label>
            <select class="form-control" id="country" v-model="country">
              <option value="usa">USA</option>
              <option value="india">India</option>
              <option value="uk">UK</option>
              <option value="germany">Germany</option>
            </select>
          </div>
          <div class="hobbies">
            <h3>Add some Hobbies</h3>
            <button class="btn btn-default" @click="onAddHobby" type="button">Add Hobby</button>
            <div class="hobby-list">
              <div
                      class="form-froup"
                      v-for="(hobbyInput, index) in hobbyInputs"
                      :key="hobbyInput.id">
                <label :for="hobbyInput.id">Hobby #{{ index }}</label>
                <input class="form-control"
                        type="text"
                        :id="hobbyInput.id"
                        v-model="hobbyInput.value">
                <button class="btn btn-default" @click="onDeleteHobby(hobbyInput.id)" type="button">X</button>
              </div>
            </div>
          </div>
          <div class="form-check">
            <input class="form-check-input" type="checkbox" id="terms" v-model="terms">
            <label class="form-check-label" for="terms">Accept Terms of Use</label>
          </div>
          <button class="btn btn-primary" type="submit">Submit</button>
        </form>
      </div>
    </div>
  </div>
</template>

<script>
  import axios from '../../axios-auth';

  export default {
    data() {
      return {
        email: '',
        age: null,
        password: '',
        confirmPassword: '',
        country: 'usa',
        hobbyInputs: [],
        terms: false
      }
    },
    methods: {
      onAddHobby () {
        let hobby = {
          id: this.hobbyInputs.length,
          value: ''
        }
        this.hobbyInputs.push(hobby)

      },
      onDeleteHobby(id) {
        this.hobbyInputs.splice(this.hobbyInputs.findIndex(x => x.id === id), 1)
      },
      onSubmit () {
        const formData = {
          email: this.email,
          age: this.age,
          password: this.password,
          confirmPassword: this.confirmPassword,
          country: this.country,
          hobbies: this.hobbyInputs.map(hobby => hobby.value),
          terms: this.terms
        }

        this.$store.dispatch('signup', formData)
      }
    }
  }
</script>

<style>
</style>