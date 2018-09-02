<template>
    <div>
        <h2>Quotes Added</h2>
        <div class="progress">
            <div class="progress-bar progress-bar-striped progress-bar-animated"
            role="progressbar"
            :aria-valuenow="bar"
            aria-valuemin="0"
            aria-valuemax="100"
            :style="barStyle">
                {{quoteCounter}}/{{quoteLimit}}
            </div>        
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../main.js'

    export default {
        props:
        [
            'quoteLimit',
        ],
        data: function() {
            return {
                quoteCounter: 0,
                bar: EventBus.barWidth
            }
        },
        computed: {
            barStyle() {
                return {
                    width: EventBus.barWidth + '%'
                }
            },
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
