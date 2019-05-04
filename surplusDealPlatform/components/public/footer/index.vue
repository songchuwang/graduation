<template>
  <div class="footer">
    <div class="footer-top">
      <div class="inner-top-footer">
        <img src="../../../assets/img/foot_30.jpg" alt="">
        <div class="content-center">
          <div class="content">
            <div class="content-wrap">
              <div class="img-header"><img src="../../../assets/img/foot_25.jpg" alt="">
                <h4>帮助中心</h4>
              </div>
              <p>家长常见问题</p>
              <p>教员常见问题</p>
              <p>机构合作</p>

            </div>
          </div>
          <div class="content">
            <div class="content-wrap">
              <div class="img-header"><img src="../../../assets/img/foot_25.jpg" alt="">
                <h4>关于我们</h4>
              </div>
              <p>公司简介</p>
              <p>联系我们</p>
              <p>用户协议</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="footer-bottom">
      <div class="inner-top-footer">
          Copyright 2016.厦门凌致教育咨询有限公司 All rights reserved.闽ICP备16015311号
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .footer {
    width: 100%;
    background: #333;
    height: 280px;

    .footer-top {
      height: 240px;
      background: #535353;

      .inner-top-footer {
        width: 1200px;
        height: 100%;
        margin: 0 auto;
        display: flex;
        flex-direction: row;
        justify-content: flex-start;
        align-items: center;

        img {
          width: 239px;
          height: 83px;
        }

        .content-center {
          width: 600px;
          height: 100%;
          margin-left: 40px;
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          .content {
            width: 290px;
            height: 100%;
            position: relative;

            .content-wrap {
              width: 215px;
              height: 190px;
                margin-top: 50px;
                margin-left: 75px;

              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              align-items: flex-start;

              flex-wrap: nowrap;

              .img-header {
                width: 215px;
                height: 28px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;

                img {
                  width: 26px;
                  height: 26px;
                  margin-right: 10px;
                }

                h4 {
                  width: 180px;
                  height: 28px;
                  line-height: 28px;
                  font-size: 20px;
                  color: #fff;
                }

                
              }
              p {
                  font-size: 16px;
                  color: #fff;
                  margin-left: 36px;
                  margin-top: 10px;
                }

            }

          }
        }
      }
    }

    .footer-bottom {
      height: 40px;

      .inner-top-footer {
        width: 1200px;
        height: 100%;
        line-height: 40px;
        margin: 0 auto;
        font-size: 12px;
        text-align: center;
        color: #fff;
      }
    }
  }

</style>
