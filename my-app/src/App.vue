<template>
  <div class="container">
    <div class="row">
      <div class="col-sm-12 text-center"><h1>Super Quiz</h1></div>
      <transition name="flip" mode="out-in">
        <component
          @changeToQuiz="newQuiz"
          @rightAnswer="selected = 'app-success'"
          :question="question"
          :operation="operation"
          :answers="answers"
          :answer="answer"
          :is="selected">
        </component>
      </transition>
    </div>
  </div>
</template>

<script>

import AllAnswers from './components/AllAnswersComponent'
import Success from './components/SuccessComponent'

export default {
  data () {
    return {
      selected: '',
      firstNumber: 0,
      secondNumber: 0,
      operation: '',
      answers: []
    }
  },
  methods: {
    newQuiz () {
      this.init()
    },
    init () {
      this.answers = []
      this.selected = 'app-all-answers'
      this.firstNumber = Math.floor(Math.random() * 30)
      this.secondNumber = Math.floor(Math.random() * 30)
      this.operation = Math.floor(Math.random() * 4)

      for (let i = 0; i < 4; i++) {
        this.answers.push(Math.floor(Math.random() * 100))
      }
    }
  },
  created () {
    this.init()
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

.flip-enter {
  opacity: 0;
}

.flip-enter-active {
  /* animation: flip-in 1s ease-out forwards; */
  transition: opacity 1s ease-in-out;
  opacity: 1;
}

.flip-leave {
  opacity: 1;
}

.flip-leave-active {
  animation: flip-in 1s ease-out forwards;
  transition: opacity 1s ease-in-out;
  opacity: 0;
}

@keyframes flip-in {
        from {
            transform: rotate3d(0, 1, 0, 0deg);
        }
        to {
            transform: rotate3d(0, 1, 0, 180deg);
        }
    }

</style>
