<template>
    <div>
        router页面
        {{parameter}}
    </div>
</template>

<script>
    export default {
        name: "RouterPage",
        data(){
            return {
                parameter: this.$route.params.id
            }
        }
    }
</script>

<style scoped>

</style>