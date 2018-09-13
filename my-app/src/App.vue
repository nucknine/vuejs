<template>
  <div class="container">
    <div class="row">
      <app-quiz-header></app-quiz-header>
      <hr>
      <transition name="flip" mode="out-in">
        <component
          @changeToQuiz="newQuiz"
          @rightAnswer="selected = 'app-success'"
          :is="selected">
        </component>
      </transition>
    </div>
  </div>
</template>

<script>

import AllAnswers from './components/AllAnswersComponent'
import Success from './components/SuccessComponent'
import Header from './components/QuizHeaderComponent'

export default {
  data () {
    return {
      selected: 'app-all-answers'
    }
  },
  methods: {
    newQuiz(){
      this.selected = 'app-all-answers';
    }
  },
  components: {
    'app-all-answers': AllAnswers,
    'app-success': Success,
    'app-quiz-header': Header
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
  opacity: 1;
}

.flip-enter-active {
  animation: flip-out .5s ease-out forwards;
  transition: opacity .5s ease-in-out;
  opacity: 1;
}

.flip-leave {
  opacity: 1;
}

.flip-leave-active {
  animation: flip-in .5s ease-out forwards;
  transition: opacity .5s ease-in-out;
  opacity: 1;
}

@keyframes flip-in {
        from {
            transform: rotateY(0deg);
        }
        to {
            transform: rotateY(90deg);
        }
    }

@keyframes flip-out {
        from {
            transform: rotateY(90deg);
        }
        to {
            transform: rotateY(0deg);
        }
    }

</style>
