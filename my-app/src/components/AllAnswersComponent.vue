<template>
    <div class="offset-3 col-sm-6">
        <div class="card">
          <div class="card-body">
            <div class="card-title text-center">
              What's {{ question }} ?
            </div>
            <div class="card-text">
              <div class="row">
                <slot></slot>
              </div>
            </div>
          </div>
        </div>
      </div>
</template>

<script>
export default {
  props: ['question']
}
</script>
<style>

</style>
