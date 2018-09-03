<template>
    <form>
        <div class="row">

            <div class="col-sm-8 offset-sm-2 col-xs-12 offset-md-3 col-md-6 form-group">
                <div class="form-group">
                    <label for="textarea">New quote</label>
                    <textarea
                        v-model="newQuote"
                        class="form-control"
                        id="textarea"
                        rows="3"></textarea>
                </div>
            </div>

            <div class="col-sm-8 offset-sm-2 col-xs-12 offset-md-3 col-md-6 form-group">
                <div class="form-group">
                    <button class="btn btn-primary" @click.prevent="addQuote">Add Quote</button>
                </div>
            </div>

        </div>

    </form>
</template>

<script>
    import { EventBus } from '../main.js'

    export default {
        props: ['quotesArray', 'quoteLimit'],
        data: function() {
            return {
                newQuote: '',
                quoteCounter: 0,
            }
        },
        methods: {
            addQuote() {
                this.$emit('quoteAdded', this.newQuote);
                this.newQuote = '';
            }
        },
        created() {
            EventBus.$on('incCnt', () => {
                this.quoteCounter++;
            });
            EventBus.$on('decCnt', () => {
                this.quoteCounter--;
            });
        }
    }
</script>

<style lang="scss" scoped>
</style>
