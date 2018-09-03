<template>
    <div class="row">
        <div class="col-sm-12">

            <h2>Quotes Added</h2>
            <div class="progress">
                <div class="progress-bar progress-bar-striped progress-bar-animated"
                role="progressbar"
                :aria-valuenow="quoteCounter"
                aria-valuemin="0"
                aria-valuemax="100"
                :style="{width: (quoteCounter / quoteLimit) * 100 + '%'}">
                    {{quoteCounter}}/{{quoteLimit}}
                </div>
            </div>
        </div>
    </div>
</template>

<script>
    import { EventBus } from '../main.js'

    export default {
        props:
        ['quoteCounter','quoteLimit'],
        data: function() {
            return {}
        }
    }
</script>

<style lang="scss" scoped>
</style>
