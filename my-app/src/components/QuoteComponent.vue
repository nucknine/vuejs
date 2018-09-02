<template>
    <div class="container">
        <p>{{quote}}</p>
    </div>
</template>

<script>
    export default {
        data: function() {
            return {
                quote: 'Example'
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        border: 1px solid gray;
    }
</style>
