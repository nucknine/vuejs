<template>
    <div class="container">
        <quote-header :quoteLimit="quoteLimit">
        </quote-header>
        <new-quote
            :quotesArray="quotesArray">
        </new-quote>
        <all-quotes>
            <quote
                v-for="(quote, i) in quotesArray"
                :index="i"
                :key="i+quote"
                @deleteQ="deleteQuote($event)">
                {{quote}}
            </quote>
        </all-quotes>
    </div>
</template>

<script>
import Quote from './components/QuoteComponent.vue';
import AllQuotes from './components/AllQuotesComponent.vue';
import NewQuote from './components/NewQuoteComponent.vue';
import Header from './components/HeaderComponent.vue';

import { EventBus } from './main.js'

export default {
    data: function() {
        return {
            newQuote: '',
            quoteLimit: 10,
            quotesArray: []
        }
    },
    methods: {
        deleteQuote(i) {
            this.quotesArray.splice(i, 1);
            EventBus.decreseCnt();
            EventBus.barWidth -= 10;
        }
    },
    components: {
        'quote': Quote,
        'all-quotes': AllQuotes,
        'new-quote': NewQuote,
        'quote-header': Header,
    }
}
</script>

<style>
.bar-box {
    border: 1px solid #ccc;
}
</style>
