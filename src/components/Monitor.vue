<template>
    <div>
        Monitor
    </div>
</template>

<script>
    import Request from '../util/request'
    export default {
        mounted() {
            this._getData()
        },
        methods: {
            _getData() {
                Request.ajax({
                    // url: "/table/list",
                    url: '/test/exception',
                    // method: 'post',
                    data: { params: { page: 1 } }
                })
                    .then(response => {
                        console.log(response)
                    });
            }
        }
    }
</script>

<style>

</style>
