<template>
    <div class="offset-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <app-answers-header :question="question"></app-answers-header>
            <div class="card-text">
              <div class="row">
                <app-answer
                  @click.native="checkAnswer($event)"
                  v-for="(answ, index) in answers"
                  :key="answ + index">
                  {{ index == operation ? answer : answ }}
                </app-answer>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
import Answer from './AnswerComponent'
import AnswersHeaderComponent from './HeaderAnswersComponent'

export default {
  components: {
    'app-answer': Answer,
    'app-answers-header': AnswersHeaderComponent
  },
  methods: {
    checkAnswer (ev) {
      if (ev.target.innerText === this.answer + '') {
        this.$emit('rightAnswer', true)
      } else {
        window.confirm('Answer isnt right')
      }
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
  computed: {
    answer () {
      switch (this.operation) {
        case 0 : return this.firstNumber - this.secondNumber
        case 1 : return this.firstNumber + this.secondNumber
        case 2 : return this.firstNumber * this.secondNumber
        case 3 : return this.firstNumber % this.secondNumber
        default : return 0
      }
    },
    question () {
      let operation
      switch (this.operation) {
        case 0 : operation = '-'; break
        case 1 : operation = '+'; break
        case 2 : operation = '*'; break
        case 3 : operation = '%'; break
      }
      return this.firstNumber + ' ' + operation + ' ' + this.secondNumber
    }
  },
  created () {
    this.init()
  }
}
</script>
<style>

</style>
