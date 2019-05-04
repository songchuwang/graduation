<template>
  <div class="container">
    <div class="slide">
      <div class="block">
        <div class="container">
          <div class="left-bar">
            <ul>
              <li>
                找老师
              </li>
              <li v-for="(item, index) in nav_list_name" :key="index">
                <span>{{item}}</span>
                <div class="nav">
                  <a href="#">语文</a>
                  <a href="#">数学</a>
                  <a href="#">英语</a>
                  <a href="#">理综</a>
                  <a href="#">文综</a>
                </div>
              </li>
            </ul>
          </div>
        </div>
        <el-carousel height="455px">
          <el-carousel-item v-for="(item, index) in slide_imgs" :key="index">
            <img :src="item" alt="">
          </el-carousel-item>
        </el-carousel>
      </div>
    </div>
    <div class="process">
      <div class="header">
        服务流程
      </div>
      <div class="content">
        <ul>
          <li>
            <div class="img-icon">
              <img src="../assets/img/zuico_03.png" alt="">
            </div>
            <div class="desc">
              <h3>1.在线预约</h3>
              <p>详细描述孩子的基本情况，辅导时间和对老师的要求等</p>
            </div>
          </li>
          <li>
            <div class="img-icon">
              <img src="../assets/img/zuico_03.png" alt="">
            </div>
            <div class="desc">
              <h3>1.在线预约</h3>
              <p>详细描述孩子的基本情况，辅导时间和对老师的要求等</p>
            </div>
          </li>
          <li>
            <div class="img-icon">
              <img src="../assets/img/zuico_03.png" alt="">
            </div>
            <div class="desc">
              <h3>1.在线预约</h3>
              <p>详细描述孩子的基本情况，辅导时间和对老师的要求等</p>
            </div>
          </li>
          <li>
            <div class="img-icon">
              <img src="../assets/img/zuico_03.png" alt="">
            </div>
            <div class="desc">
              <h3>1.在线预约</h3>
              <p>详细描述孩子的基本情况，辅导时间和对老师的要求等</p>
            </div>
          </li>
        </ul>
      </div>
    </div>
    <div class="advantage">
      <div class="header">
        教学优势
      </div>
      <div class="my-value">
        <ul>
          <li class="first-item">
            <span>为什么云梦家教值得选择</span>
          </li>
          <li class="other">
            <p class="header">价格优惠，辅导成本更低</p>
            <p class="desc">蚂蚁家教对学员免收服务费，大学生家教课时费用仅为机构1/3-1/2，不用预付课时费用，最大程度的节省成本支出。</p>
          </li>
          <li class="other">
            <p class="header">海量教员，老师质量更高</p>
            <p class="desc">蚂蚁家教建立完善的校园教员渠道体系，在全国各重点本科、师范院校皆有海量教员，本科生、研究生可供选择。</p>
          </li>
          <li class="other">
            <p class="header">一对一辅导，教学个性化</p>
            <p class="desc">蚂蚁家教推荐大学生一对一上门辅导，省时省力，个性化教学，可培养学习习惯，掌握学习方法，全面提高学习成绩。</p>
          </li>
          <li class="other">
            <p class="header">专业团队，响应速度更快</p>
            <p class="desc">蚂蚁家教是全国连锁，专业的大学生家教品牌，7*24小时服务，快速响应您的需求，一般48小时内，最快1小时安排到老师。</p>
          </li>
          <li class="other">
            <p class="header">一站式服务，便捷找老师</p>
            <p class="desc">蚂蚁家教提供一站式服务，只需通过网站、微信或者电话预约，我们即将安排老师上门辅导，免费试讲，满意为止。</p>
          </li>
        </ul>
      </div>
    </div>
    <div class="star">
      <div class="header">明星教员</div>
      <div v-for="(item, index) in star_list" :key="index">
        <div class="header-top">
          <span>{{item}}</span>
        </div>
        <div class="person-list">
          <ul>
            <li>
              <div class="header">
                <img src="http://placehold.it/150x150" alt="">
              </div>
              <div class="content">
                <h4>宋楚望</h4>
                <p><span>湖南文理学院</span>|<span>大四，信息管理</span></p>
                <p class="desc">本人毕业于湖南文理学院计算机与电信工程学院</p>
              </div>
            </li>
            <li></li>
            <li></li>
            <li></li>
            <li></li>
          </ul>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    layouts: 'dafault',
    data() {
      return {
        nav_list_name: [
          '小学',
          '初中',
          '高中',
          '大学',
          '其他'
        ],
        slide_imgs: [
          require('../assets/img/slide_1.jpg'),
          require('../assets/img/slide_2.jpg'),
          require('../assets/img/slide_3.jpg'),
        ],
        star_list: [
          '小学',
          '初中',
          '高中'
        ]
      }
    }
  }

</script>

<style lang="scss" scoped>
  .container {
    .slide {
      .block {
        position: relative;

        .container {
          width: 1200px;
          height: 455px;
          position: absolute;
          left: 50%;
          transform: translate(-50%, 0);
          z-index: 1000;

          .left-bar {
            width: 240px;
            height: 455px;
            position: absolute;
            background: rgba(250, 250, 250, 0.6);
            z-index: 1000;

            ul {
              width: 100%;
              background: rgba(250, 250, 250, 0.6);

              li:first-child {
                width: 100%;
                text-align: center;
                height: 45px;
                line-height: 45px;
                padding: 0;
                background: #3680ea;
                color: #fff;
                display: flex;
                justify-content: center;
                flex-direction: row;
              }

              li:last-child {
                height: 70px;

              }

              li {
                border-bottom: 1px solid #fff;
                color: #3680ea;
                list-style: none;
                width: 100%;
                text-align: center;
                height: 85px;
                box-sizing: border-box;
                padding: 20px 12px;
                display: flex;
                flex-direction: column;
                justify-content: space-between;
                align-items: flex-start;

                .nav {
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;

                  a {
                    display: flex;
                    width: 40px;
                  }
                }
              }
            }
          }
        }
      }
    }

    .process {
      width: 1200px;
      height: 193px;
      margin: 40px auto;

      .header {
        font-size: 22px;
      }

      .content {
        width: 100%;
        height: 163px;
        box-sizing: border-box;
        padding: 40px 0;

        ul {
          width: 100%;
          height: 100%;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;

          li {
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            width: 300px;
            height: 100%;

            .img-icon {
              width: 67px;
              height: 67px;
              border-radius: 50%;
              display: flex;
              margin-right: 20px;
              flex-direction: row;
              justify-content: center;
              align-items: center;
              border: 1px solid #dfdfdf;
            }

            .desc {
              width: 180px;
              position: relative;

              h3 {
                color: #2b2b2b;

              }

              p {
                font-size: 12px;
                color: #797979;
              }

              &::after {
                content: '';
                position: absolute;
                width: 0;
                height: 0;
                left: 100%;
                margin-left: 10px;
                top: 50%;
                margin-top: -20px;

                border-width: 10px;
                border-color: transparent transparent transparent #3680ea;
                border-style: solid;
              }
            }

          }
        }
      }
    }

    .advantage {
      width: 1200px;
      margin: 40px auto;

      .header {
        font-size: 22px;
      }

      .my-value {
        width: 1200px;
        height: 260px;
        margin: 0;
        padding: 0;

        ul {
          margin: 0;
          padding: 0;
          width: 1200px;
          height: 260px;
          display: flex;
          flex-direction: row;
          flex-wrap: wrap;

          li {
            width: 400px;
            height: 130px;
            box-sizing: border-box;
            padding: 30px;
            border: 1px solid #dfdfdf;
            position: relative;

            .header {
              margin-bottom: 10px;
              padding-left: 45px;
              box-sizing: border-box;

            }

            .desc {
              font-size: 12px;
            }
          }

          .other {
            position: relative;

            &::after {
              position: absolute;
              width: 40px;
              height: 40px;
              line-height: 40px;
              color: #fff;
              font-size: 18px;
              text-align: center;
              content: '1';
              border-radius: 50%;
              background: #f9b04e;
              top: 30px;
              left: 30px;
            }

            &:nth-child(3):after {
              content: '2'
            }

            &:nth-child(4):after {
              content: '3'
            }

            &:nth-child(5):after {
              content: '4'
            }

            &:nth-child(6):after {
              content: '5'
            }

          }

          .first-item {
            span {
              display: inline-block;
              width: 340px;
              font-size: 26px;
              color: #f9b04e;
              text-align: center;
              line-height: 70px;
            }
          }
        }
      }
    }

    .star {
      width: 1200px;
      margin: 40px auto;

      .header {
        font-size: 22px;
      }

      .header-top {
        width: 100%;
        height: 42px;
        margin-top: 35px;
        border-bottom: 1px solid #77c37e;

        span {
          display: inline-block;
          width: 130px;
          height: 42px;
          line-height: 42px;
          background: #77c37e;
          color: #fff;
          text-align: center;
          font-size: 18px;
          font-weight: bold;
        }
      }

      .person-list {
        width: 100%;
        height: 330px;
        margin-top: 20px;

        ul {
          display: flex;
          flex-direction: row;
          justify-content: space-between;

          li {
            width: 228px;
            height: 330px;
            box-sizing: border-box;
            border: 1px solid #dfdfdf;

            .header {
              width: 100%;
              height: 190px;
              display: flex;
              flex-direction: row;
              justify-content: center;
              align-items: center;

              img {
                border-radius: 50%;
              }
            }

            .content {
              width: 100%;
              height: 108px;
              box-sizing: border-box;
              padding: 0 23px;

              h4 {
                text-align: center;
              }

              p {
                color: #7f7f7f;
                font-size: 14px;
                text-align: center;
              }

              .desc {
                font-size: 12px;
              }

            }
          }
        }
      }
    }
  }

</style>
