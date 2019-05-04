<template>
  <div class="container">
    <div class="img-layout">
      <img src="../assets/img/teacher_02.jpg" alt="">
    </div>
    <div class="content">
      <div class="breadcrumb">
        <p>首页 > 师资力量</p>
      </div>
      <div class="screen">
        <div class="inner-screen">
          <span class="teacher-kind">老师类型：</span>
          <p>
            <span>不限</span>
            <span>大学生</span>
            <span>专职老师</span>
            <span>金牌名师</span>
            <span>金牌教员</span>
          </p>
        </div>
        <div class="inner-screen">
          <span class="teacher-kind">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
          <p>
            <span>不限</span>
            <span>男</span>
            <span>女</span>
          </p>
        </div>
      </div>
      <div class="teacher-list">
        <ul>
          <li>
            <div class="header-img">
              <img src="http://placehold.it/146x146" alt="">
            </div>
            <div class="content">
              <h3>宋楚望<span>（男）</span></h3>
              <h4>
                <img src="../assets/img/yellow_03.png" alt="">
                <span class="desc">宋楚望-湖南文理学院-计算机与电信工程学院</span>
                <img class="tabs-icon" src="../assets/img/xingxing_07.png" alt="">
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
              </h4>
              <p><span class="introduce">自我介绍：</span><span>自我介绍:本人从小担任班干部，大一大二期间担任班级班长，现为学院学生会主席，已成为共产党员，擅长沟通交流，表达能力较强。从事家教三年多，带过较多学生，成效突出，可针对不同学生制定对应学习方案，教学目标为提高学生积极主动性，优化结题思维。 大学获奖情况: 全国大学生节能减排竞赛国家三等奖，优秀班长，寝室建设先进个人，武汉理工大学法士特齿轮奖学金，发表三篇英文论文，申请两项发明专利 家教经历: 1.2014年8月，洪山区初二数学，期终学员从50分上升至85分。 2.2015年5月，武昌区高一综合（数理化），期终学员从全班第45名上升至第10名。 3.2016年5月，洪山区初三物理，期终学员从35分上升至80分。</span></p>
            </div>
          </li>
          <li>
            <div class="header-img">
              <img src="http://placehold.it/146x146" alt="">
            </div>
            <div class="content">
              <h3>宋楚望<span>（男）</span></h3>
              <h4>
                <img src="../assets/img/yellow_03.png" alt="">
                <span class="desc">宋楚望-湖南文理学院-计算机与电信工程学院</span>
                <img class="tabs-icon" src="../assets/img/xingxing_07.png" alt="">
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
              </h4>
              <p><span class="introduce">自我介绍：</span><span>自我介绍:本人从小担任班干部，大一大二期间担任班级班长，现为学院学生会主席，已成为共产党员，擅长沟通交流，表达能力较强。从事家教三年多，带过较多学生，成效突出，可针对不同学生制定对应学习方案，教学目标为提高学生积极主动性，优化结题思维。 大学获奖情况: 全国大学生节能减排竞赛国家三等奖，优秀班长，寝室建设先进个人，武汉理工大学法士特齿轮奖学金，发表三篇英文论文，申请两项发明专利 家教经历: 1.2014年8月，洪山区初二数学，期终学员从50分上升至85分。 2.2015年5月，武昌区高一综合（数理化），期终学员从全班第45名上升至第10名。 3.2016年5月，洪山区初三物理，期终学员从35分上升至80分。</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {

  }

</script>

<style lang="scss" scoped>
  .container {
    .img-layout {
      width: 100%;
      height: 330px;

      img {
        height: 330px;
      }
    }

    .content {
      width: 1200px;
      margin: 0 auto;

      .breadcrumb {
        padding: 35px 0;
        width: 100%;
        height: 22px;
        line-height: 22px;
        border-bottom: 2px solid #439bff;

        p {
          font-size: 14px;

        }
      }

      .screen {
        width: 100%;
        box-sizing: border-box;
        padding: 0 20px;
        display: flex;
        flex-direction: column;
        justify-content: space-between;
        border-bottom: 2px solid #439bff;

        .inner-screen {
          width: 100%;
          height: 53px;
          box-sizing: border-box;
          padding: 15px 0;
          border-bottom: 1px dashed #dfdfdf;
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;

          .teacher-kind {
            color: #858585;
            margin-right: 20px;
          }

          p {
            span {
              margin: 0 15px;
            }
          }
        }

      }

      .teacher-list {
        margin-top: 20px;
        width: 100%;

        ul {
          display: flex;
          flex-direction: column;
          justify-content: flex-start;
          width: 100%;

          li {
            display: flex;
            width: 100%;
            // height: 188px;
            flex-direction: row;
            justify-content: flex-start;
            padding: 20px 30px;
            box-sizing: border-box;
            border: 1px solid #dfdfdf;
            margin-bottom: 20px;

            .header-img {
              width: 146px;
              height: 146px;
              margin-right: 20px;

              img {
                border-radius: 50%;
              }
            }

            .content {
                width: 970px;
              h3 {
                width: 970px;
                height: 28px;
                line-height: 28px;
              }

              h4 {
                width: 970px;
                height: 28px;
                margin: 20px 0;
                line-height: 28px;
                display: flex;
                flex-direction: row;
                justify-content: flex-start;
                align-items: center;

                img {
                  width: 16px;
                  height: 18px;
                }

                .desc {
                  padding: 0 30px 0 10px;
                }

                .tabs-icon {
                  width: 14px;
                  height: 18px;
                }
                .tabs{
                    display: inline-block;
                    text-align: center;
                    width: 72px;
                    height: 28px;
                    box-sizing: border-box;
                    line-height: 28px;
                    padding: 0 5px;
                    background: #c7c7c7;
                    color: #fff;
                    margin-left: 10px;
                }


              }
              p{
                  color: #7f7f7f;
                  font-size: 13px;

              }
            }
          }
        }
      }
    }
  }

</style>
