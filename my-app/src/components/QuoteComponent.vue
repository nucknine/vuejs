<template>
    <div class="col-sm-6 col-md-4 col-lg-3">
        <div class="card">
            <div class="card-body quote">
                <slot></slot>
            </div>
        </div>
    </div>
</template>

<script>
    export default {
        props: ['index'],
        data: function() {
            return {
            }
        },
        methods: {}
    }
</script>

<style lang="scss">
    .card-body {
        font-family: 'Arizonia','Gill Sans', 'Gill Sans MT', Calibri, 'Trebuchet MS', sans-serif;
        border: 1px solid gray;
        font-size: 48px;
    }

    .quote {
        cursor: pointer;
        &:hover {
            background-color: crimson;
        }
    }
</style>
