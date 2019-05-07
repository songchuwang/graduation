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
            <span class="kind-teacher" v-for="(item, index) in kind_teachers" :key="index"
              @click="selectKindTeacher(index)">{{item.name}}</span>
          </p>
        </div>
        <div class="inner-screen">
          <span class="teacher-kind">选择科目：</span>
          <p>
            <span class="kind-subject" v-for="(item, index) in teacherSubjects" :key="index"
              @click="selectKindSubject(item.value,index)">{{item.label}}</span>
          </p>
        </div>
        <div class="inner-screen">
          <span class="teacher-kind">性&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;别：</span>
          <p>
            <span class="kind-sex" v-for="(item, index) in sexs" :key="index"
              @click="selectSex(index)">{{item.name}}</span>
          </p>
        </div>
      </div>
      <div class="teacher-list">
        <ul>
          <li v-for="(item,index) in filterTeacheres" :key="index">
            <div class="header-img">
              <!-- <img src="http://placehold.it/146x146" alt=""> -->
              <img :src="`data:image/jpg;base64,${item.img}`" alt="">
            </div>
            <div class="content">
              <h3>{{item.name}}<span>（{{item.sex == '1'?'男':'女'}}）</span></h3>
              <h4>
                <img src="../assets/img/yellow_03.png" alt="">
                <span class="desc">{{item.name}}-{{item.experience}}</span>
                <img class="tabs-icon" src="../assets/img/xingxing_07.png" alt="">
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
                <span class="tabs">独领风骚</span>
              </h4>
              <p><span class="introduce">自我介绍：</span><span>{{item.desc}}</span></p>
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
              <p><span
                  class="introduce">自我介绍：</span><span>自我介绍:本人从小担任班干部，大一大二期间担任班级班长，现为学院学生会主席，已成为共产党员，擅长沟通交流，表达能力较强。从事家教三年多，带过较多学生，成效突出，可针对不同学生制定对应学习方案，教学目标为提高学生积极主动性，优化结题思维。
                  大学获奖情况: 全国大学生节能减排竞赛国家三等奖，优秀班长，寝室建设先进个人，武汉理工大学法士特齿轮奖学金，发表三篇英文论文，申请两项发明专利 家教经历:
                  1.2014年8月，洪山区初二数学，期终学员从50分上升至85分。 2.2015年5月，武昌区高一综合（数理化），期终学员从全班第45名上升至第10名。
                  3.2016年5月，洪山区初三物理，期终学员从35分上升至80分。</span></p>
            </div>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        teachers: [],
        select_subject: '0',
        teacherSubjects: [{
            label: '语文',
            value: 'chinese'
          },
          {
            label: '数学',
            value: 'math'
          },
          {
            label: '英语',
            value: 'english'
          },
          {
            label: '理综',
            value: 'science'
          },
          {
            label: '文综',
            value: 'art'
          },
        ],
        kind_teachers: [{
            name: "不限",
            value: '0'

          },
          {
            name: "小学",
            value: '1'

          },
          {
            name: "初中",
            value: '2'

          },
          {
            name: "高中",
            value: '3'

          },
          {
            name: "大学",
            value: '4'

          }
        ],
        select_sex: '0',
        sexs: [{
            name: "不限",
            value: '0'

          },
          {
            name: "男",
            value: '1'

          },
          {
            name: "女",
            value: '2'

          }
        ],
        select_kind_teacher: '0',
      }
    },
    created() {
      this.getTeacherData();
    },
    computed: {
      filterTeacheres() {
        // console.log(this.teachers);
        // console.log(this.select_sex, this.select_kind_teacher);

        if (this.select_sex == '0' && this.select_kind_teacher == '0' && this.select_subject == '0') {
          return this.teachers
        } else if (this.select_sex == '0' && this.select_subject == '0' && this.select_kind_teacher != '0') {
          return this.teachers.filter((item) => {
            return item.teacherType == this.select_kind_teacher;
          })
        } else if (this.select_sex != '0' && this.select_kind_teacher == '0' && this.select_subject == '0') {
          return this.teachers.filter((item) => {
            return item.sex == this.select_sex;
          })
        } else if (this.select_sex == '0' && this.select_kind_teacher == '0' && this.select_subject != '0') {
          return this.teachers.filter((item) => {
            return item.subject == this.select_subject;
          })
        } else if (this.select_sex == '0' && this.select_kind_teacher != '0' && this.select_subject != '0') {
          return this.teachers.filter((item) => {
            return item.subject == this.select_subject && item.teacherType == this.select_kind_teacher;
          })
        } else if (this.select_sex != '0' && this.select_kind_teacher != '0' && this.select_subject == '0') {
          return this.teachers.filter((item) => {
            return item.sex == this.select_sex && item.teacherType == this.select_kind_teacher;
          })
        } else if (this.select_sex != '0' && this.select_kind_teacher == '0' && this.select_subject != '0') {
          return this.teachers.filter((item) => {
            return item.sex == this.select_sex && item.subject == this.select_subject;
          })
        } else {

          return this.teachers.filter((item) => {
            return item.sex == this.select_sex && item.teacherType == this.select_kind_teacher && item.subject ==
              this.select_subject;
          })
        }
      }
    },
    methods: {
      selectKindSubject(value, index) {
        this.select_subject = value
        let select_dom = document.querySelectorAll('.kind-subject');
        for (let i = 0; i < select_dom.length; i++) {
          select_dom[i].classList.remove('select-kind-subject')
        }
        select_dom[index].classList.add('select-kind-subject');
      },
      selectSex(index) {
        if (index == 0) {
          this.select_sex = '0'
        } else if (index == 1) {
          this.select_sex = '1'
        } else {
          this.select_sex = '2'
        }
        console.log(this.select_sex);
        let select_dom = document.querySelectorAll('.kind-sex');
        for (let i = 0; i < select_dom.length; i++) {
          select_dom[i].classList.remove('select-kind-sex')
        }
        select_dom[index].classList.add('select-kind-sex');

      },
      getTeacherData() {
        this.$axios.post('/users/getdata').then(res => {
          this.teachers = res.data.data;
          console.log(this.teachers);


        })
      },
      selectKindTeacher(kind) {
        if (kind == 1) {
          this.select_kind_teacher = '1'
        } else if (kind == 2) {
          this.select_kind_teacher = "2"
        } else if (kind == 3) {
          this.select_kind_teacher = "3"
        } else if (kind == 4) {
          this.select_kind_teacher = "4"
        } else {
          this.select_kind_teacher = "0"
        }

        let select_dom = document.querySelectorAll('.kind-teacher');
        for (let i = 0; i < select_dom.length; i++) {
          select_dom[i].classList.remove('select-kind-teacher')
        }
        // console.log(select_dom[index]);

        select_dom[kind].classList.add('select-kind-teacher');

      },
    },
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

          .select-kind-teacher {
            color: red;
          }

          .select-kind-sex {
            color: red;
          }

          .select-kind-subject {
            color: red;
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
                width: 146px;
                height: 146px;
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

                .tabs {
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

              p {
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
