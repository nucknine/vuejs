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
                  :key="answ">
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
  props: ['question', 'answers', 'operation', 'answer'],
  components: {
    'app-answer': Answer,
    'app-answers-header': AnswersHeaderComponent
  },
  methods: {
    checkAnswer (ev) {
      if (ev.target.innerText === this.answer + '') {
        console.log('right')
      } else {
        console.log('not')
      }
    }
  }
}
</script>
<style>

</style>
