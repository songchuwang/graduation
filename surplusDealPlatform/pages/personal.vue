<template>
  <div class="container">
    <div class="content">
      <div class="fore">
        <h4>个人中心</h4>
        <div @click="showPage('0')" class="toPage">个人资料</div>
        <div @click="showPage('1')" class="toPage">发布需求信息</div>
        <div @click="showPage('2')" class="toPage">查看预约信息</div>
        <div @click="showPage('3')" class="toPage">忘记密码</div>
      </div>
      <div class="page">
        <div v-if="isShowPage == 0" class="page-switch page-one">
          <section class="header">
            <div class="header-img">
              <div class="img">
                <img src="../assets/img/personal.jpg" alt="">
              </div>
              <div class="name">songchuwang</div>
            </div>
            <div class="header-content">
              <div class="header">我的管理</div>
              <div></div>
            </div>
          </section>

          <section class="content">
            <div class="surplus" style="margin-bottom:20px">我的资料</div>
            <el-row>
              <el-col :span="12">
                <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
                  <el-form-item label="昵称" prop="name">
                    <el-input v-model="ruleForm.name" />
                  </el-form-item>
                  <el-form-item label="性别" prop="radio">
                    <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
                    <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
                  </el-form-item>
                  <el-form-item label="年龄" prop="age">
                    <el-input v-model="ruleForm.age" />
                  </el-form-item>
                  <el-form-item label="联系电话" prop="age">
                    <el-input v-model="ruleForm.age" />
                  </el-form-item>
                  <el-form-item label="电子邮箱" prop="age">
                    <el-input v-model="ruleForm.age" />
                  </el-form-item>
                  <el-form-item label="联系地址" prop="age">
                    <el-input type="textarea" v-model="ruleForm.age" />
                  </el-form-item>
                  <el-form-item label="个人简介" prop="age">
                    <el-input :rows="4" type="textarea" v-model="ruleForm.age" />
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="register">保存修改
                    </el-button>
                    <div class="error">{{ error }}</div>
                  </el-form-item>
                </el-form>
              </el-col>
            </el-row>
            <div class="content-inner"></div>
          </section>

        </div>
        <div v-if="isShowPage == 1" class="page-switch page-one">
          <section class="content">
            <div class="surplus">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
                <el-breadcrumb-item>发布需求信息</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="select">
              <el-tabs type="border-card">
                <el-tab-pane label="发布页">
                  <div class="release-page">
                    <el-row>
                      <el-col :span="12">
                        <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px"
                          class="demo-ruleForm">
                          <el-form-item label="辅导科目" prop="name">
                            <el-input v-model="ruleForm.name" />
                          </el-form-item>
                          <el-form-item label="性别要求" prop="radio">
                            <el-radio v-model="ruleForm.radio" label="1">男</el-radio>
                            <el-radio v-model="ruleForm.radio" label="2">女</el-radio>
                          </el-form-item>
                          <el-form-item label="费用/时" prop="age">
                            <el-input v-model="ruleForm.age" />
                          </el-form-item>
                          <el-form-item label="联系地址" prop="age">
                            <el-input type="textarea" v-model="ruleForm.age" />
                          </el-form-item>
                          <el-form-item label="备注" prop="age">
                            <el-input type="textarea" v-model="ruleForm.age" />
                          </el-form-item>
                          <el-form-item>
                            <el-button type="primary" @click="register">发布需求
                            </el-button>
                            <div class="error">{{ error }}</div>
                          </el-form-item>
                        </el-form>
                      </el-col>
                    </el-row>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="已发布">
                  <template>
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column label="辅导科目" width="180">
                        <template slot-scope="scope">
                          <i class="el-icon-time"></i>
                          <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="性别要求" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="费用" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="地址要求" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="备注" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="content-inner"></div>
          </section>

        </div>
        <div v-if="isShowPage == 2" class="page-switch page-one">
          <section class="content">
            <div class="surplus">
              <el-breadcrumb separator-class="el-icon-arrow-right">
                <el-breadcrumb-item :to="{ path: '/' }">个人中心</el-breadcrumb-item>
                <el-breadcrumb-item>预约信息</el-breadcrumb-item>
              </el-breadcrumb>
            </div>
            <div class="select">
              <el-tabs type="border-card">
                <el-tab-pane label="成功预约信息">
                  <div class="release-page">
                    <template>
                      <el-table :data="tableData" stripe style="width: 100%">
                        <el-table-column prop="date" label="科目" width="180">
                        </el-table-column>
                        <el-table-column prop="name" label="教员姓名" width="180">
                        </el-table-column>
                        <el-table-column prop="address" label="性别">
                        </el-table-column>
                        <el-table-column prop="name" label="联系电话">
                        </el-table-column>
                         <el-table-column prop="name" label="教员地址">
                        </el-table-column>
                      </el-table>
                    </template>
                  </div>
                </el-tab-pane>
                <el-tab-pane label="未被预约信息">
                  <template>
                    <el-table :data="tableData" style="width: 100%">
                      <el-table-column label="辅导科目" width="180">
                        <template slot-scope="scope">
                          <i class="el-icon-time"></i>
                          <span style="margin-left: 10px">{{ scope.row.date }}</span>
                        </template>
                      </el-table-column>
                      <el-table-column label="性别要求" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="费用" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="地址要求" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="备注" width="180">
                        <template slot-scope="scope">
                          <el-popover trigger="hover" placement="top">
                            <p>姓名: {{ scope.row.name }}</p>
                            <p>住址: {{ scope.row.address }}</p>
                            <div slot="reference" class="name-wrapper">
                              <el-tag size="medium">{{ scope.row.name }}</el-tag>
                            </div>
                          </el-popover>
                        </template>
                      </el-table-column>
                      <el-table-column label="操作">
                        <template slot-scope="scope">
                          <el-button size="mini" type="danger" @click="handleDelete(scope.$index, scope.row)">删除
                          </el-button>
                        </template>
                      </el-table-column>
                    </el-table>
                  </template>
                </el-tab-pane>
              </el-tabs>
            </div>
            <div class="content-inner"></div>
          </section>

        </div>
        <div v-if="isShowPage == 3" class="page-switch page-three">
          <div class="content">
            <div class="header">
              忘记密码
            </div>
            <div class="content-detail">
              <p>请联系客服 400-612-2333</p>
              <p>或发送邮件至 lidongqing@paipai.com <span class="round-btn">发送邮件</span></p>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    data() {
      return {
        isShowPage: 1,
        activeName: 'second',
        goodsInfor: '',
        tableData: [{
          date: '2016-05-02',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1518 弄'
        }, {
          date: '2016-05-04',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1517 弄'
        }, {
          date: '2016-05-01',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1519 弄'
        }, {
          date: '2016-05-03',
          name: '王小虎',
          address: '上海市普陀区金沙江路 1516 弄'
        }],
        orders: '',
        order_infor: [],
        my_surplus: '',
        ruleForm: {
          name: "",
          code: "",
          pwd: "",
          cpwd: "",
          email: "",
          radio: '1',
          age: ''
        },
      }
    },
    created() {
      this.getOrder()
      this.mySurplus()

    },
    methods: {
      // 我发布的商品
      mySurplus() {
        this.$axios.post('goods/getGoods').then(res => {
          //   console.log(res.data.data.filter((item)=>{

          //   return this.$store.state.geo.userId == item.publisher
          // }));

          this.my_surplus = res.data.data.filter((item) => {

            return this.$store.state.geo.userId == item.publisher
          })

        })

        console.log(this.my_surplus);

      },
      remind() {
        this.$message.success('已提醒卖家')
      },
      payoff() {
        this.$message.success('付款成功')
        // if(this.ord)
      },
      receiving() {
        this.$message.success('收货成功')
      },
      cancelOrder() {
        this.$message.success('订单已取消')
      },
      showPage(index) {
        this.isShowPage = index;
      },
      handleClick(tab, event) {},
      getOrder() {
        let id = this.$store.state.geo.userId
        this.$axios.post('/goods/getorder', {
          id
        }).then(res => {
          this.order_infor = res.data.data
        })
      }
    },
    mounted() {
      this.$axios.post('/goods/getGoodInfor', {
        _id: this.$route.query.buy
      }).then(res => {
        this.goodsInfor = res.data.data
        // console.log(this.goodsInfor);
        this.isShowPage = 0;
      })

      this.mySurplus();
    },
  }

</script>

<style lang="scss" scoped>
  .container {
    .content {
      width: 1190px;
      position: relative;

      .fore {
        width: 170px;
        height: 180px;
        box-sizing: border-box;
        padding: 15px 20px;
        position: absolute;
        top: -20px;
        margin-right: 20px;
        background: #fff;

        h4 {
          font-size: 16px;
          font-weight: bolder;
          margin-bottom: 10px;
        }

        div {
          width: 130px;
          height: 32px;
          line-height: 32px;
          font-size: 14px;
          cursor: pointer;

          &:hover {
            color: #01c30b;
          }
        }
      }

      .page {
        width: 1000px;
        margin-left: 190px;
        margin-top: 20px;
        position: relative;

        .page-one {
          width: 100%;

          .header {
            width: 100%;
            height: 250px;
            box-sizing: border-box;
            display: flex;
            flex-direction: row;
            justify-content: flex-start;
            align-items: center;

            .header-img {
              width: 250px;
              height: 250px;
              background: #01c30b;
              position: relative;

              .img {
                width: 56px;
                height: 56px;
                position: absolute;
                top: 38%;
                left: 50%;
                transform: translate(-50%, -50%);
                border-radius: 50%;
                border: 4px solid #fff;
                display: flex;
                flex-direction: row;
                justify-content: center;
                align-items: center;

                img {
                  width: 56px;
                  height: 56px;
                  border-radius: 50%;
                }
              }

              .name {
                font-size: 18px;
                font-weight: 700;
                color: #fff;
                position: absolute;
                top: 62%;
                left: 50%;
                transform: translate(-50%, -50%);
              }
            }

            .header-content {
              width: 750px;
              height: 225px;
              background: #fff;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;

              .header {
                width: 100%;
                height: 55px;
                line-height: 55px;
                box-sizing: border-box;
                padding-left: 20px;
                border-bottom: 1px solid #f0f3ef;
              }
            }
          }

          .content {
            width: 1000px;
            background: #fff;

            .container {
              width: 1000px;
              display: flex;
              flex-direction: column;
              justify-content: flex-start;
              box-sizing: border-box;
              // border-bottom: 1px dashed #dfdfdf;
            }

            .order-header {
              width: 100%;
              height: 50px;
              line-height: 50px;
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              border-bottom: 1px dashed #dfdfdf;
              padding-left: 12px;
            }

            .content {
              width: 100%;
              height: 100px;
              box-sizing: border-box;
              padding: 12px 0;
              // line-height: 76px;
              display: flex;
              flex-direction: row;
              justify-content: flex-start;
              align-items: center;
              padding-left: 12px;

              border-bottom: 1px dashed #dfdfdf;

              // align-items: center;
              .desc {
                width: 800px;
                height: 100%;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                box-sizing: border-box;
                padding-left: 10px;
              }

              .price {
                font-size: 14px;
                height: 100%;
                font-family: jdZhengHeiRegular;
                font-weight: 600;
              }
            }

            .footer {
              width: 100%;
              height: 72px;
              padding: 17px 0;
              line-height: 38px;
              box-sizing: border-box;
              display: flex;
              flex-direction: row;
              justify-content: flex-end;
              padding-left: 12px;

              .cancel-order {
                width: 90px;
                height: 38px;
                line-height: 38px;
                background: #fff;
                border: 1px solid #d9d9d9;
                box-sizing: border-box;
                color: #333333;
                text-align: center;
                border-radius: 20px;
                margin-right: 20px;
                cursor: pointer;
              }

              .payoff {
                width: 90px;
                height: 38px;
                line-height: 38px;
                background: #ff3434;
                cursor: pointer;
                box-sizing: border-box;
                color: #fff;
                text-align: center;
                border-radius: 20px;
                margin-right: 30px;
              }
            }

            .surplus {
              width: 100%;
              box-sizing: border-box;
              height: 55px;
              line-height: 55px;
              padding-left: 20px;
              border-bottom: 1px solid #f0f3ef;
              font-size: 16px;
            }

            .select {}

            .content-inner {
              width: 100%;
            }

          }

        }

        .page-two {
          width: 100%;
          height: auto;
          background: #fff;

          .content {
            .header {
              width: 100%;
              height: 90px;
              padding: 20px 0 20px 20px;
              box-sizing: border-box;
              font-size: 22px;
              line-height: 50px;
            }

            .header-nav {
              display: flex;
              flex-direction: row;
              justify-content: space-between;
              width: 1000px;

              /deep/ .el-tabs__content {
                padding: 0;
                box-sizing: border-box;
              }

              .container {
                width: 1000px;
                display: flex;
                flex-direction: column;
                justify-content: flex-start;
                box-sizing: border-box;
                border-bottom: 1px dashed #dfdfdf;

                .order-header {
                  width: 100%;
                  height: 50px;
                  line-height: 50px;
                  display: flex;
                  flex-direction: row;
                  justify-content: space-between;
                  border-bottom: 1px solid #dfdfdf;
                  padding-left: 12px;

                  .wait {
                    margin-right: 80px;
                    color: goldenrod;
                  }
                }

                .content {
                  width: 100%;
                  height: 100px;
                  box-sizing: border-box;
                  padding: 12px 0;
                  // line-height: 76px;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-start;
                  align-items: center;
                  padding-left: 12px;

                  border-bottom: 1px solid #dfdfdf;

                  img {
                    width: 72px;
                    height: 72px;
                  }

                  .desc {
                    width: 800px;
                    height: 100%;
                    display: flex;
                    flex-direction: column;
                    justify-content: flex-start;
                    box-sizing: border-box;
                    padding-left: 10px;
                  }

                  .price {
                    font-size: 14px;
                    height: 100%;
                    font-family: jdZhengHeiRegular;
                    font-weight: 600;
                  }
                }

                .footer {
                  width: 100%;
                  height: 72px;
                  padding: 17px 0;
                  line-height: 38px;
                  box-sizing: border-box;
                  display: flex;
                  flex-direction: row;
                  justify-content: flex-end;
                  padding-left: 12px;

                  .cancel-order {
                    width: 90px;
                    height: 38px;
                    line-height: 38px;
                    background: #fff;
                    border: 1px solid #d9d9d9;
                    box-sizing: border-box;
                    color: #333333;
                    text-align: center;
                    border-radius: 20px;
                    margin-right: 20px;
                    cursor: pointer;
                  }

                  .payoff {
                    width: 90px;
                    height: 38px;
                    line-height: 38px;
                    background: #ff3434;
                    cursor: pointer;
                    box-sizing: border-box;
                    color: #fff;
                    text-align: center;
                    border-radius: 20px;
                    margin-right: 30px;
                  }
                }
              }

              ul {
                display: flex;
                flex-direction: row;
                justify-content: space-between;
                width: 1000px;

                li {
                  list-style: none;
                  width: 20%;
                  height: 66px;
                  line-height: 66px;
                  text-align: center;
                  font-size: 20px;
                  font-weight: 600;
                }
              }

            }
          }
        }

        .page-three {
          //   margin-top: -20px;
          position: relative;
          width: 1000px;
          height: 400px;
          background: #fff;

          .content {
            .header {
              width: 100%;
              height: 90px;
              padding: 20px 0 20px 20px;
              box-sizing: border-box;
              font-size: 22px;
              line-height: 50px;
            }

            .content-detail {
              box-sizing: border-box;
              padding-left: 20px;

              p {
                line-height: 28px;
                font-size: 14px;
                color: #666;

                .round-btn {
                  display: inline-block;
                  width: 64px;
                  height: 20px;
                  line-height: 20px;
                  font-size: 12px;
                  border: 1px solid #979797;
                  color: #979797;
                  text-align: center;
                  border-radius: 10px;
                  margin-left: 10px;
                  cursor: pointer;
                }
              }
            }
          }
        }
      }
    }
  }

</style>
