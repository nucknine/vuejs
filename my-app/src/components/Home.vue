<template>
  <div>
    <div>
      <h2>Trade or View your Portfolio</h2>
      <p>You may Save & Load your Data
        <br>
        Click on 'End Day' to begin a new Day!
      </p>
      <hr>
      <p>
        <strong>
          Your funds {{ funds | funds-filter }}
        </strong>
      </p>
    </div>
  </div>
</template>
<script>
import { mapGetters } from 'vuex'

export default {
  data () {
    return {
    }
  },
  computed: {
    ...mapGetters({
      funds: 'getFunds'
    })
  }
}
</script>
<style>
</style>
