<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center"><h1>Super Quiz</h1></div>
      <app-all-answers
        :question="question"
        :operation="operation"
        :answers="answers"
        :answer="answer">
      </app-all-answers>
      <app-success></app-success>
    </div>
  </div>
</template>

<script>

import AllAnswers from './components/AllAnswersComponent'
import Success from './components/SuccessComponent'

export default {
  data () {
    return {
      firstNumber: Math.floor(Math.random() * 30),
      secondNumber: Math.floor(Math.random() * 30),
      operation: Math.floor(Math.random() * 4),
      answers: []
    }
  },
  created () {
    for (let i = 0; i < 4; i++) {
      this.answers.push(Math.floor(Math.random() * 100))
    }
  },
  computed: {
    question () {
      let operation
      switch (this.operation) {
        case 0 : operation = '-'; break
        case 1 : operation = '+'; break
        case 2 : operation = '*'; break
        case 3 : operation = '%'; break
      }
      return this.firstNumber + ' ' + operation + ' ' + this.secondNumber
    },
    answer () {
      switch (this.operation) {
        case 0 : return this.firstNumber - this.secondNumber
        case 1 : return this.firstNumber + this.secondNumber
        case 2 : return this.firstNumber * this.secondNumber
        case 3 : return this.firstNumber % this.secondNumber
        default : return 0
      }
    }
  },
  components: {
    'app-all-answers': AllAnswers,
    'app-success': Success
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
