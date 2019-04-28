<template>
  <div class="m-user">
    <template v-if="user">
      <nuxt-link to="/personal">
      欢迎您，<span class="username">{{ user }}</span>
      ({{this.type = $store.state.geo.type == '1'?'学员':'教员'}})
      </nuxt-link>
      <nuxt-link to="/exit">[退出]</nuxt-link>
    </template>
    <template v-else>
      <nuxt-link
        to="/login"
        class="login"
      >立即登录</nuxt-link>
      <nuxt-link
        to="/register"
        class="register">
        注册</nuxt-link>
    </template>
  </div>
</template>

<script>
    export default {
        data(){
          return {
            user: '',
            type: ''
          }
        },
        async mounted(){
          const {status, data:{ user, _id, type }} = await this.$axios.get('/users/getUser');
          if(status === 200) {
            this.user = user;
            console.log(_id);
            // this.$store.commit('setType', type)
            
            // $store.dispatch('setUserId', _id)
            // $store.commit('setUserId', _id);
            
          }

        }
    }
</script>

<style scoped>
  .m-user{
    text-align: right;
  }
</style>
