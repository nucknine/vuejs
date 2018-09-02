<template>
    <div>
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
    </div>
</template>

<script>
    import { EventBus } from '../main.js'

    export default {
        props: ['quotesArray'],
        data: function() {
            return {
                newQuote: ''
            }
        },
        methods: {
            addQuote() {
                if(this.newQuote == '') {
                    return
                } else {
                    EventBus.increseCnt();
                    EventBus.barWidth += 10;
                    this.quotesArray.push(this.newQuote);
                    this.newQuote = '';
                }
            }
    },
    }
</script>

<style lang="scss" scoped>
</style>
