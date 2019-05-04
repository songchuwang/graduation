<template>
  <div>
    <div class="header-container">
      <div class="top-header">
        <div class="inner-top-header">
          <div class="phone">服务咨询热线：15347351156</div>
          <template v-if="user">
            <nuxt-link to="/personal">
              欢迎您，<span class="username">{{ user }}（{{this.type =  this.$store.state.geo.userid==2?'教员':'学员'}}）</span>
            </nuxt-link>
            <nuxt-link to="/exit">[退出]</nuxt-link>
          </template>

          <template v-else>
          <div class="loginin">请
            <nuxt-link to="/login">
              <div>登录</div>
            </nuxt-link>
          </div>
          <nuxt-link to="/register">
            <div class="loginup">立即注册</div>
          </nuxt-link>
          </template>
        </div>
      </div>
      <div class="bottom-header">
        <div class="inner-bottom-header">
          <div class="logo">
            <img src="../../../assets/img/logo_03.png" alt="">
          </div>
          <ul>
            <nuxt-link to="/">
              <li>首页</li>
            </nuxt-link>
            <nuxt-link to="/tutorPower">
              <li>师资力量</li>
            </nuxt-link>
            <nuxt-link to="/newStudent">
              <li>最新学员</li>
            </nuxt-link>
            <nuxt-link to="/postageExplain">
              <li>资费说明</li>
            </nuxt-link>
            <nuxt-link to="/help">
              <li>帮助中心</li>
            </nuxt-link>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        user:'',
        type:''
      }
    },
    async mounted(){
          const {status, data:{ user }} = await this.$axios.get('/users/getUser');
          if(status === 200) {
            this.user = decodeURIComponent(user) ;
          }

        }
  }

</script>

<style lang="scss" scoped>
  .header-container {
    margin: 0;
    padding: 0;

    .top-header {
      margin: 0;
      padding: 0;
      width: 100%;
      height: 44px;
      line-height: 74px;
      background: #000;

      .inner-top-header {
        width: 1200px;
        height: 100%;
        line-height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-end;
        align-items: center;

        div {
          color: #fff;
          font-size: 14px;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;

          div {
            color: #3680ea;
          }
        }

        .loginin {
          margin-right: 10px;
        }

        .phone {
          margin-right: 10px;
        }
      }
    }

    .bottom-header {
      background: #fff;
      height: 74px;
      line-height: 74px;

      img {
        margin-top: 10px;
      }

      .inner-bottom-header {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .logo {
          width: auto;
          height: 74px;
          ;
        }

        ul {
          width: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-end;
          align-items: center;

          li {
            list-style: none;
            margin-left: 40px;
            font-size: 16px;
            cursor: pointer;
          }
        }
      }
    }
  }

</style>
