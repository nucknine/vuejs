<template>
    <div class="container">
        <quote-header
            :quoteCounter="quotesArray.length"
            :quoteLimit="quoteLimit">
        </quote-header>
        <new-quote
            @quoteAdded="addQuote"
            :quoteLimit="quoteLimit">
        </new-quote>
        <all-quotes
            :quotesArray="quotesArray"
            @deleteQ="deleteQuote"
            ></all-quotes>
        <div class="row">
            <div class="col-sm-12 text-center">
                <div class="alert alert-info">
                    info: Click on a cuote to delete it
                </div>
            </div>
        </div>
    </div>
</template>

<script>

import AllQuotes from './components/AllQuotesComponent.vue';
import NewQuote from './components/NewQuoteComponent.vue';
import Header from './components/HeaderComponent.vue';

import { EventBus } from './main.js'

export default {
    data: function() {
        return {
            newQuote: '',
            quoteLimit: 10,
            quoteCounter: 0,
            quotesArray: []
        }
    },
    methods: {
        addQuote(quote) {
            if(quote == '' || this.quotesArray.length >= this.quoteLimit) {
                    return
                } else {
                    this.quotesArray.push(quote);
                }
        },
        deleteQuote(i) {
                this.quotesArray.splice(i, 1);
        },
    },
    components: {
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
