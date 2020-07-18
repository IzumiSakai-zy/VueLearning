<template>
    <div class="pros">
      {{parameter}}
      <button @click="doclick">点我</button>
    </div>
</template>

<script>
    export default {
      name: "pros",
      // props: ["parameter"]
      props: {
        'btn': {
          type: Function,
          required: true,
          default: function () {}
        }
      },
      methods: {
        doclick(){
          this.$emit("key","value")
        }
      }
    }
</script>

<style scoped>

</style>
