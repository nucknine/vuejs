<template>
    <div class="container">
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            :aria-valuenow="barWidth"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="barStyle">
                {{quoteCounter}}/{{quoteLimit}}
            </div>
        </div>
        <div class="container input-box">
            <div class="form-group">
                <label for="textarea">Text your quote</label>
                <textarea
                    v-model="newQuote"
                    class="form-control"
                    id="textarea"
                    rows="3"></textarea>
            </div>
            <div class="form-group">
                <button class="btn btn-primary" @click="addQuote">Add Quote</button>
            </div>
        </div>

        <div class="container quotes-box">
            <quote
                style="border: 20px solid yellow;"
                v-for="(quote, i) in quotesArray"
                :index="i"
                :key="quote"
                @deleteQ="deleteQuote($event)"
                >
                {{i + ' ' + quote}}
            </quote>
        </div>
    </div>
</template>

<script>
import Quote from './components/QuoteComponent.vue';

export default {
    data: function() {
        return {
            newQuote: '',
            quoteCounter: 0,
            quoteLimit: 10,
            barWidth: 0,
            quotesArray: []
        }
    },
    methods: {
        deleteQuote(i) {
            this.quotesArray.splice(i, 1);
            this.quoteCounter--;
            this.barWidth -= 10;
        },
        addQuote() {
            if(this.newQuote == '') {
                return
            } else {
                this.quoteCounter++;
                this.quotesArray.push(this.newQuote);
                this.barWidth += 10;
                this.newQuote = '';
            }
        },
    },
    computed: {
        barStyle() {
            return {
                width: this.barWidth + '%'
            }
        },
    },
    components: {
        'quote': Quote
    }
}
</script>

<style>
.bar-box {
    border: 1px solid #ccc;
}
.bar {
    background-color: lightblue;
}
</style>
