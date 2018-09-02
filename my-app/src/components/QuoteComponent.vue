<template>
    <div class="container" @click="deleteQuote(index)">
        <slot></slot>
    </div>
</template>

<script>
    export default {
        props: ['index'],
        data: function() {
            return {
                // quote: ''
            }
        },
        methods: {
            deleteQuote(i){
                this.$emit('deleteQ', i);
            }
        }
    }
</script>

<style lang="scss" scoped>
    div {
        font-family: 'Arizonia','Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border: 1px solid gray;
        font-size: 48px;
        cursor: pointer;
    }
</style>
