<template>
  <div>
    <div>
      <my-header />
    </div>
    <div>
      <nuxt />
    </div>
    <div>
      <my-footer />
    </div>
  </div>
</template>
<script>
  import MyHeader from "@/components/public/header/index"
  import MyFooter from "@/components/public/footer/index"
  export default {
    components: {
      MyHeader,
      MyFooter
    }
  }

</script>

<style lang="scss">
@import '../assets/css/main.css';
  
</style>
<style lang="scss" scoped>

</style>

