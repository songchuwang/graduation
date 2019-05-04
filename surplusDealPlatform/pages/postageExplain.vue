<template>
  <div class="container">
    <div class="img-layout">
      <img src="../assets/img/mone_02.jpg" alt="">
    </div>
    <div class="content">
      <div class="breadcrumb">
        <p>首页 > 资费说明</p>
      </div>
      <h2><i class="blue-icon"></i> 资费说明</h2>

      <div class="help-explain">
        <p class="header">一、对请家教学员/家长的收费标准：</p>
        <p class="desc">蚂蚁家教对所有学员/家长免费推荐家教老师<span>家长请家教全部免费，只需要支付老师课时费即可！</span></p>
      </div>
      <div class="help-explain">
        <p class="header">二、对培训机构辅导班的收费标准：</p>
        <p class="desc">对于辅导机构，由于不同的机构的要求不一样，所以合作方式也不同，如有意向合作可以直接电话恰谈。</p>
      </div>
      <div class="help-explain">
        <p class="header">三、对家教老师的收费标准：</p>
        <p class="desc">对教员的收费标准，详细请教员登录教员中心查看。</p>
      </div>
      <div class="scroll-bar">推荐课时费参考标准</div>
      <div class="price-standard-desc">
        <p>以下价格是大学生家教的行情价，具体价格会根据地区、路程远近、课程的难易程度、学员年级、家教时间等客观因素会有所浮动。</p>
        <p><span>⊙ 学前、小学</span>（语文、数学、英语等文化科目）</p>
        <p>在校本科生和研究生：30-55元/时；</p>
        <p>在职离退休教师：60-110元/时起；</p>
        <p><span>⊙ 初中</span>（语文、数学、英语、物理、化学、生物、地理、政治、历史等文化科目）</p>
        <p>在校本科生和研究生：40-70元/时；</p>
        <p>在职离退休教师：80-140元/时起；</p>
        <p><span>⊙ 高中/三校生/自学考试/大学生/成人</span>（语文、数学、英语、物理、化学等文化科目）</p>
        <p>在校本科生和研究生：50-100元/时；</p>
        <p>在职离退休教师：100-200元/时起；</p>
        <p>⊙ 音乐、钢琴、绘画、体育等艺术类</p>
        <p>此类家教的课时费普遍超过50元/时，乐器普遍在80元/时以上，具体收费请直接电话咨询。</p>
        <p class="feature-tip"><i></i>课时费特别说明：</p>
        <p>⊙ 课时费用直接付给老师，蚂蚁家教不对家长收取任何费用，如果觉得价格不合适，蚂蚁家教可根据您的要求与老师协商 。合适的课酬是对老师工作的肯定，更是安排到优秀老师的有力保障。</p>
        <p>⊙一般家教课时费里面包含交通费。但如果学员地理位置过于偏僻或离教员过于遥远。学员可以考虑为教员支付交通费</p>
        <p>⊙此收费标准为大学生家教的基础价格，若课程内容要求较高或对老师要求较高，建议把课时费用提高，一次课程的时间一般为2小时，如果一次时间低于2小时，费用会略有上浮。</p>
        <p class="feature-tip"><i></i>影响课时费高低的因素：</p>
        <p>⊙ 年级高低（小学、初中、高中、大学）</p>
        <p>⊙ 课程难度（入门型、补差型、提高型）</p>
        <p>⊙ 教员专业（专业教员、非专业教员）</p>
        <p>⊙ 教员经验（经验少、经验多、多年执教经验）</p>
        <p>⊙ 教员学历（本科生、研究生）</p>
        <p>⊙ 所在学校（普通学校、重点学校、名牌学校）</p>
        <p>⊙ 教员身份（本科生、研究生、签约教员、专职教师、外国留学生、留学归国人员、外籍教师）</p>
        <p>⊙ 授课地点（市中心、市区、市郊、市郊城镇、偏远郊区）</p>
        
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

      .help-explain {
        box-sizing: border-box;
        padding-left: 60px;

        .header {
          color: #0000ff;
        }

        .desc {
          height: 20px;
          line-height: 20px;

          span {
            color: #ff0000;
            padding-left: 10px;
          }
        }
      }

      .scroll-bar {
        width: 100%;
        height: 42px;
        line-height: 42px;
        background: #6699ff;
        color: #fff;
        font-size: 20px;
        font-weight: bold;
        text-align: center;
      }

      .price-standard-desc {
        box-sizing: border-box;
        padding-left: 60px;

      }
    }
  }

</style>
