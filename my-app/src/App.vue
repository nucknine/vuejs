<template>
    <div class="container">
        <h2>Quotes Added</h2>
        <div class="container">
            <div class="bar" :style="barStyle">{{quoteCounter}}/{{quoteLimit}}</div>
        </div>
        <p>{{ newQuote }}</p>
        <div class="container input-box">
            <div class="form-group">
                <label for="textarea"> textarea</label>
                <textarea
                    v-model="newQuote"
                    class="form-control"
                    id="textarea"
                    rows="3"></textarea>
                <button @click="addQuote">Add Quote</button>
            </div>
        </div>

        <div class="container quotes-box">
            <quote></quote>
            <quote></quote>
            <quote></quote>
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
            barWidth: 0
        }
    },
    methods: {
        addQuote() {
            console.log(this.newQuote);

            this.newQuote = '';
            this.quoteCounter++;
            this.barWidth=+10;
        },
    },
    computed: {
        barStyle() {
            width: this.barWidth + '%'
        }
    },
    components: {
        'quote': Quote
    }
}
</script>

<style>
.bar {
    background-color: lightblue;
}
</style>
