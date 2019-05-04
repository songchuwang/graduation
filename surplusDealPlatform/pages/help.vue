<template>
  <div class="container">
    <div class="img-layout">
      <img src="../assets/img/help_02.jpg" alt="">
    </div>
    <div class="content">
      <div class="breadcrumb">
        <p>首页 > 帮助中心 > 家长常见问题</p>
      </div>
      <h2><i class="blue-icon"></i> 帮助中心</h2>
      <el-tabs v-model="activeName" @tab-click="handleClick">
        <el-tab-pane label="家长常见问题" name="first">
          <ul class="tabs">
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，预约老师流程是怎么样呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>1、在线预约：家长/学员可通过电话、QQ、微信等方式联系我们便捷预约，也可以通过网站（www.mjiajiao.com）预约老师。为安排到更合适的老师，预约时请详细介绍学员的情况，辅导的时间安排，辅导地址，对老师的要求等。</p>
                        <p>2、安排老师：预约后我们将立即着手安排老师，安排老师时会根据孩子的情况、辅导的时间安排以及您的要求综合匹配合适的老师，所有过程人工把控，保证老师质量，一般会在48小时内安排到老师。</p>
                        <p>3、双方沟通：安排好老师后会先让老师与您电话联系，您可以了解老师情况，并约定试讲的时间、地点，若觉得老师不合适可以联系我们重新安排老师。</p>
                        <p>4、免费试讲：双方按约定的时间、地点进行试讲，并签署家教协议。试讲时间为1小时，如果超过1小时，应正常与教员结算课时费用，若试讲不满意可联系我们重新安排老师。</p>
                        <p>5、正式授课：试讲成功，则按与老师约定的时间正常授课即可，家教中心定期进行回访，对教员进行监督，保证教员的教学质量。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，在蚂蚁家教预约老师是否要收服务费呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>蚂蚁家教对家长/学员，免收服务费。大学生家教课时费一般只为机构、在职老师价格1/3至1/2，具体课时费根据不同地区、不同年级、不同科目、不同学员情况有所差异，预约过程中我们会根据具体情况给出参考介绍，如有什么要求或者觉得价格不合适，蚂蚁家教会根据您的要求，尽量与老师沟通协商</p>
                        
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">上门辅导安全吗？是否有保障？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>蚂蚁家教对老师身份均有经过严格的审核，精心筛选，老师上门辅导时会带好学生证、身份证，相比外出的诸多不确定因素，辅导的过程家长可以更好的监督，更加安全。如确实担心，首次辅导见面也可以约在公共场所，双方都有保障。辅导过程中有任何问题欢迎拨打电话：400-882-1008，我们会尽心为您服务。</p>
                        
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">试讲是否要收费呢？如果老师不合适怎么办呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>所有老师，无论录用与否，我们都提供1小时的免费试讲。无论是试讲前、试讲时，还是辅导过程中，任何时间觉得老师不合适都可以联系我们帮您更换老师，直到您满意为止。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">大学生老师和在职老师、机构老师比有什么优势？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>1、大学生家教价格仅为机构、在职老师1/3-1/2左右，更为实惠。</p>
                        <p>2、大学生家教老师与学员年龄接近，沟通无代沟，学员更易接受老师，更能激发学习兴趣。</p>
                        <p>3、大学生家教时间安排更灵活，可以一个老师胜任多个科目的辅导，可以更加个性化教学。</p>
                        <p>4、我们都筛选在校品学兼优的大学生，能够给孩子树立榜样，相信榜样的力量。</p>
                    </div>
                </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="教员常见问题" name="second">
            <ul class="tabs">
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
          </ul>
        </el-tab-pane>
        <el-tab-pane label="机构合作" name="third">
            <ul class="tabs">
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
            <li>
                <h4><img src="../assets/img/bule_wenhao_03.png" alt="">我是家长，我需要怎么预约老师呢？</h4>
                <div class="content">
                    <img src="../assets/img/hui_a_03.png" alt="">
                    <div class="desc">
                        <p>为了方便家长/学员方便的预约老师，我们提供以下方式供您选择</p>
                        <p>（1）电话预约，您可以直接致电：400-882-1008，电话预约是最为便捷的方式。</p>
                        <p>（2）网站预约，直接在网站找家教栏目里填写您的需求情况情况，我们将安排工作人员第一时间联系您！</p>
                        <p>（3）通过QQ：2898428881，微信：collegejiajiao，微信公众号：collegejiajiao123预约。在网站下方有微信公众号以及微信的二维码，方便您添加。</p>
                        <p>备注：为方便您更便捷的了解安排进度以及详细了解老师的资料，我们建议您加微信：collegejiajiao。</p>
                    </div>
                </div>
            </li>
          </ul>
        </el-tab-pane>
      </el-tabs>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        activeName: 'second'
      };
    },
    methods: {
      handleClick(tab, event) {
        console.log(tab, event);
      }
    }
  };

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
      }

      h2 {
        height: 20px;
        line-height: 20px;
        display: flex;
        flex-direction: row;
        align-items: center;
        margin-bottom: 20px;

        .blue-icon {
          width: 20px;
          height: 20px;
          display: inline-block;
          background: #439bff;
          margin-right: 40px;
        }

        color: #439bff;
        font-size: 16px;
        font-weight: bold;
      }

      .tabs {
          width: 100%;
          display: flex;
          flex-direction: column;
          li{
              padding: 40px;
              box-sizing: border-box;
              border-bottom: 1px solid #dfdfdf;
              h4{
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  align-items: center;
                  font-size: 16px;
                  color: #333;
                  font-weight: bold;
                  img{
                      width: 28px;
                      height: 28px;
                      margin-right: 10px;
                  }
              }
              .content{
                  margin-top: 10px;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  box-sizing: border-box;
                //   padding-left: 40px;
                img{
                    width: 20px;
                    height: 20px;
                }
                  .desc{
                      padding-left: 20px;
                      p{
                          color: #969696;
                          font-size: 14px;
                      }
                  }
              }
          }
      }

    }
  }

</style>
