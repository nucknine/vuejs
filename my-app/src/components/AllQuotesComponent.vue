<template>
    <div class="row">
        <quote
            v-for="(quote, i) in quotesArray"
            :index="i"
            :key="i+quote"
            @click.native="deleteQuote(i)">
            {{quote}}
        </quote>
    </div>
</template>

<script>
    import { EventBus } from '../main.js'
    import Quote from './QuoteComponent.vue';

    export default {
        props: ['quotesArray'],
        methods: {
            deleteQuote(i){
                this.$emit('deleteQ', i);
            }
        },
        components: {
        'quote': Quote,
        }
    }
</script>

<style lang="scss" scoped>
</style>
