<template>
    <div class="offset-3 col-sm-6">
        <div class="card alert-success">
          <div class="card-body">
            <div class="card-title text-center">
                <h1>That's correct!</h1>
            </div>
            <div class="card-text text-center">
              <div
                @click="backToQuiz"
                class="btn btn-default btn-primary">
                Next Question</div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  methods: {
    backToQuiz () {
      this.$emit('changeToQuiz', true)
    }
  }
}
</script>
