<template>
  <div class="container">
    <div class="top-header">
      <div class="header">
        <section class="header-left">
          <div class="logo">
            <img src="../assets/img/logo_03.png" alt="">
          </div>
          <div class="desc">欢迎 {{this.$store.state.geo.userid==2?'教员':'学员'}}进入个人中心！</div>
        </section>
        <div class="to-index">
          <nuxt-link to="/">返回首页</nuxt-link>
        </div>
      </div>
    </div>
    <div class="bottom-header">
      <div class="tip">{{this.$store.state.geo.userid==2?'教员':'学员'}}中心</div>
    </div>
    <div class="content">
      <template>
        <el-tabs tab-position="left">
          <el-tab-pane v-if="this.$store.state.geo.userid==2" label="我的订单">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="全部订单" name="first">
                <el-table :data="getMyOrders" style="width: 1200px">
                  <el-table-column label="预约日期" width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="地址" width="220">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.address }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员要求" width="200">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.demand }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.demand }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员简介" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.desc }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="联系方式" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.phone }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button type="danger" size="mini" @click="handleDeleteOrder(scope.$index, scope.row)">删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="带学员确认" name="second">
                <el-table :data="getMyOrders" style="width: 1200px">
                  <el-table-column label="预约日期" width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="地址" width="220">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.address }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员要求" width="200">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.demand }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.demand }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员简介" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.desc }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="联系方式" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.phone }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button type="danger" size="mini" @click="handleDeleteOrder(scope.$index, scope.row)">删除
                      </el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="预约成功" name="third">
                <el-table :data="getCompleteData2" style="width: 1200px">
                  <el-table-column label="预约日期" width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="地址" width="160">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.address }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员要求" width="220">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.demand }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.demand }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员简介" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.desc }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="联系方式" width="140">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.phone }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="180">
                    <template>
                      <p>订单已完成</p>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane v-if="this.$store.state.geo.userid==2" label="个人资料">
            <el-form ref="ruleForm" :model="ruleForm" :rules="rules" label-width="100px" class="demo-ruleForm">
              <el-form-item prop="imgs">
                <div>上传商品图片 <span>多角度拍摄商品细节，全面展示商品；图片大小不能超过2M哦~</span></div>
                <el-upload :on-success="handleImgSuccess" :on-remove="handleRemove"
                  :on-preview="handlePictureCardPreview" accept=".jpeg, .jpg, .png" :file-list="ruleForm.imgs"
                  list-type="picture-card" action="https://jsonplaceholder.typicode.com/posts/">
                  <i class="el-icon-plus"></i>
                </el-upload>
                <el-dialog :visible.sync="dialogVisible">
                  <img width="100%" :src="dialogImageUrl" alt="">
                </el-dialog>
              </el-form-item>
              <el-form-item label="真实姓名" prop="name">
                <el-input v-model="ruleForm.name" />
              </el-form-item>
              <el-form-item label="性别" prop="sex">
                <el-radio v-model="ruleForm.sex" label="1">男</el-radio>
                <el-radio v-model="ruleForm.sex" label="2">女</el-radio>
              </el-form-item>

              <el-form-item label="教育经历" prop="experience">
                <el-input v-model="ruleForm.experience" />
              </el-form-item>

              <el-form-item label="教员类型">
                <el-select v-model="teacherType" placeholder="请选择文章标签">
                  <el-option v-for="item in teacherTypes" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="教授科目">
                <el-select v-model="subject" placeholder="请选择文章标签">
                  <el-option v-for="item in teacherSubjects" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>

              <el-form-item label="个人标签">
                <el-select v-model="value10" multiple filterable allow-create default-first-option
                  placeholder="请选择文章标签">
                  <el-option v-for="item in options5" :key="item.value" :label="item.label" :value="item.value">
                  </el-option>
                </el-select>
              </el-form-item>
              <el-form-item label="个人简介" prop="desc">
                <el-input type="textarea" :rows="4" placeholder="请输入内容" v-model="ruleForm.desc">
                </el-input>
              </el-form-item>
              <el-form-item>
                <el-button type="primary" @click="savePersonalData">保存资料
                </el-button>
              </el-form-item>

            </el-form>
          </el-tab-pane>
          <el-tab-pane v-if="this.$store.state.geo.userid==1" label="需求信息">
            <el-tabs v-model="activeName2" type="card" @tab-click="handleClick">
              <el-tab-pane label="发布需求" name="first">
                <el-form ref="ruleForm2" :model="ruleForm2" style="width:500px" :rules="rules" label-width="100px"
                  class="demo-ruleForm">
                  <el-form-item label="联系方式" prop="phone">
                    <el-input placeholder="请输入手机号码" v-model="ruleForm2.phone" />
                  </el-form-item>
                  <el-form-item label="家教地址" prop="address">
                    <el-input placeholder="请输入家教地址" v-model="ruleForm2.address" />
                  </el-form-item>
                  <el-form-item label="学员简介" prop="desc">
                    <el-input type="textarea" :rows="4" placeholder="请说明您的个人情况" v-model="ruleForm2.desc">
                    </el-input>
                  </el-form-item>
                  <el-form-item label="学员要求" prop="demand">
                    <el-input type="textarea" :rows="4" placeholder="对教员的要求" v-model="ruleForm2.demand">
                    </el-input>
                  </el-form-item>
                  <el-form-item>
                    <el-button type="primary" @click="releaseDemand">发布需求
                    </el-button>
                  </el-form-item>
                </el-form>
              </el-tab-pane>
              <el-tab-pane label="已发布" name="second">
                <el-table :data="alreadyReleaseData" style="width: 1000px">
                  <el-table-column label="日期" width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="地址" width="220">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.address }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员要求" width="300">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.demand }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.demand }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员简介" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.desc }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作">
                    <template slot-scope="scope">
                      <el-button type="danger" size="mini" @click="handleDelete(scope.$index, scope.row)">删除</el-button>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
              <el-tab-pane label="订单完成" name="third">
                <el-table :data="getCompleteData" style="width: 1200px">
                  <el-table-column label="预约日期" width="180">
                    <template slot-scope="scope">
                      <i class="el-icon-time"></i>
                      <span style="margin-left: 10px">{{ scope.row.date }}</span>
                    </template>
                  </el-table-column>
                  <el-table-column label="地址" width="160">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <!-- <p>姓名: {{ scope.row.name }}</p> -->
                        <p>住址: {{ scope.row.address }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.address }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员要求" width="220">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.demand }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.demand }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="学员简介" width="180">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.desc }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="预约教员" width="140">
                    <template slot-scope="scope">
                      <el-popover trigger="hover" placement="top">
                        <p>住址: {{ scope.row.desc }}</p>
                        <div slot="reference" class="name-wrapper">
                          {{ scope.row.order }}
                        </div>
                      </el-popover>
                    </template>
                  </el-table-column>
                  <el-table-column label="操作" width="180">
                    <template>
                      <p>订单已完成</p>
                    </template>
                  </el-table-column>
                </el-table>
              </el-tab-pane>
            </el-tabs>
          </el-tab-pane>
          <el-tab-pane v-if="this.$store.state.geo.userid==1" label="查看预约信息">
            <el-table :data="getStudentOrders " style="width: 1200px">
              <el-table-column label="预约日期" width="180">
                <template slot-scope="scope">
                  <i class="el-icon-time"></i>
                  <span style="margin-left: 10px">{{ scope.row.date }}</span>
                </template>
              </el-table-column>
              <el-table-column label="地址" width="160">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <!-- <p>姓名: {{ scope.row.name }}</p> -->
                    <p>住址: {{ scope.row.address }}</p>
                    <div slot="reference" class="name-wrapper">
                      {{ scope.row.address }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="学员要求" width="220">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>住址: {{ scope.row.demand }}</p>
                    <div slot="reference" class="name-wrapper">
                      {{ scope.row.demand }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="学员简介" width="180">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>住址: {{ scope.row.desc }}</p>
                    <div slot="reference" class="name-wrapper">
                      {{ scope.row.desc }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="预约教员" width="140">
                <template slot-scope="scope">
                  <el-popover trigger="hover" placement="top">
                    <p>住址: {{ scope.row.desc }}</p>
                    <div slot="reference" class="name-wrapper">
                      {{ scope.row.order }}
                    </div>
                  </el-popover>
                </template>
              </el-table-column>
              <el-table-column label="操作" width="180">
                <template slot-scope="scope">
                  <el-button type="danger" size="mini" @click="handleDeleteOrder(scope.$index, scope.row)">拒绝
                  </el-button>
                  <el-button type="primary" size="mini" @click="acceptOrder(scope.$index, scope.row)">接受预约
                  </el-button>
                </template>
              </el-table-column>
            </el-table>
          </el-tab-pane>
        </el-tabs>
      </template>
    </div>
  </div>
</template>

<script>
  export default {
    layout: 'blank',
    data() {
      return {
        my_orders: [],
        activeName2: '2',
        dialogVisible: false,
        complete_order: [],
        dialogImageUrl: '',
        subject: '',
        base64_img: [],
        textarea: '',
        imageUrl: '',
        alreadyReleaseData: [],
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
        options5: [{
          value: 'HTML',
          label: 'HTML'
        }, {
          value: 'CSS',
          label: 'CSS'
        }, {
          value: 'JavaScript',
          label: 'JavaScript'
        }],
        teacherType: '',
        teacherTypes: [{
          value: '1',
          label: '小学'
        }, {
          value: '2',
          label: '初中'
        }, {
          value: '3',
          label: '高中'
        }, {
          value: '4',
          label: '大学'
        }, {
          value: '5',
          label: '其他'
        }],
        value10: [],
        ruleForm: {
          name: "",
          experience: '',
          desc: '',
          imgs: [],
          sex: '1'
        },
        ruleForm2: {
          phone: '',
          address: "",
          desc: '',
          demand: '',
        },
        rules: {

        }
      }
    },
    created() {
      this.getMyOrder()
      this.getCompleteOrder()
    },
    mounted() {
      this.$axios.post('/users/getmydemand', {
        publisher: this.$store.state.geo.username
      }).then(res => {
        this.alreadyReleaseData = res.data.data

      })
    },
    methods: {
      getCompleteOrder() {
        this.$axios.post('/users/getCompleteOrder').then(res => {
          this.complete_order = res.data.data;
          console.log(this.complete_order);
        })
      },
      getMyOrder() {
        this.$axios.post('/users/getOrder').then(res => {
          this.my_orders = res.data.data;
          console.log(this.my_orders);


        })
      },
      releaseDemand() {
        let date = new Date().toLocaleDateString()
        this.$axios.post('/users/releasedemand', {
          publisher: this.$store.state.geo.username,
          phone: this.ruleForm2.phone,
          address: this.ruleForm2.address,
          desc: this.ruleForm2.desc,
          demand: this.ruleForm2.demand,
          date

        }).then(res => {
          if (res.status == 200) {
            this.$message.success('发布成功')
          }

        })
      },
      handleDelete(index, row) {
        console.log(index, row);
        this.$axios.post('/users/removemydemand', {
          _id: row._id
        }).then(res => {
          if (res.status == 200) {
            this.$message.success('删除成功')
            window.location.reload()
          }


        })
      },
      acceptOrder(index, row) {
        console.log(index, row);
        this.$axios.post('/users/acceptOrder', row).then(res => {
          if (res.status == 200) {
            this.$message.success('预约成功')
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }
        })
      },
      handleDeleteOrder(index, row) {
        console.log(index, row);
        this.$axios.post('/users/removemyOrder', {
          _id: row._id
        }).then(res => {
          if (res.status == 200) {
            this.$message.success('删除成功')
            setTimeout(() => {
              window.location.reload()
            }, 1000)
          }
        })
      },
      savePersonalData() {
        console.log(this.imageUrl);
        console.log(this.base64_img[0].url);


        this.$axios.post('/users/savedata', {
          user: this.$store.state.geo.username,
          name: this.ruleForm.name,
          experience: this.ruleForm.experience,
          desc: this.ruleForm.desc,
          img: this.base64_img[0].url,
          teacherType: this.teacherType,
          sex: this.ruleForm.sex,
          subject: this.subject

        }).then(res => {
          console.log(res.data);

        })
      },
      handlePictureCardPreview(file) {
        this.dialogImageUrl = file.url;
        this.dialogVisible = true;
      },
      handleImgSuccess(response, file, fileList) {
        console.log(response, file, fileList);

        let reader = new FileReader(file.url);
        reader.readAsDataURL(file.raw)
        reader.onload = () => {
          let _base64 = reader.result
          let BASE64 = _base64.split(',')
          this.base64_img.push({
            name: 'base64图片',
            url: BASE64[1]
          })
          console.log(this.base64_img);
        }
        this.ruleForm['imgs'].push({
          name: '文件',
          url: file.url
        })
        console.log(this.ruleForm['imgs']);

      },
      handleRemove(file, fileList) {
        this.ruleForm.imgs.map((item, index) => {
          if (item.uid === file.uid) {
            this.ruleForm.imgs.splice(index, 1)
          }
        })
      },
      handleClick(tab, event) {
        console.log(tab, event);
      },
      handleAvatarSuccess(res, file) {
        this.imageUrl = URL.createObjectURL(file.raw);
      },
      beforeAvatarUpload(file) {
        const isJPG = file.type === 'image/jpeg' || 'image/png';
        const isLt2M = file.size / 1024 / 1024 < 2;

        if (!isJPG) {
          this.$message.error('上传头像图片只能是 JPG 格式!');
        }
        if (!isLt2M) {
          this.$message.error('上传头像图片大小不能超过 2MB!');
        }
        return isJPG && isLt2M;
      }
    },
    computed: {
      getMyOrders() {
        return this.my_orders.filter((item) => {
          return item.order == this.$store.state.geo.username;
        })
      },
      getStudentOrders() {
        return this.my_orders.filter((item) => {
          return item.publisher == this.$store.state.geo.username;
        })
      },
      getCompleteData() {
        return this.complete_order.filter((item) => {
          return item.publisher == this.$store.state.geo.username;
        })
      },
      getCompleteData2() {
        return this.complete_order.filter((item) => {
          return item.order == this.$store.state.geo.username;
        })
      }

    }
  }

</script>
<style>
  .avatar-uploader .el-upload {
    border: 1px dashed #d9d9d9;
    border-radius: 6px;
    cursor: pointer;
    position: relative;
    overflow: hidden;
  }

  .avatar-uploader .el-upload:hover {
    border-color: #409EFF;
  }

  .avatar-uploader-icon {
    font-size: 28px;
    color: #8c939d;
    width: 80px;
    height: 80px;
    line-height: 80px;
    text-align: center;
  }

  .avatar {
    width: 80px;
    height: 80px;
    display: block;
  }

</style>

<style lang="scss" scoped>
  .container {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;

    .top-header {
      display: flex;
      flex-direction: row;
      justify-content: center;
      align-items: center;
      //   width: 1200px;
      height: 75px;

      .header {
        width: 1200px;
        display: flex;
        flex-direction: row;
        justify-content: space-between;
        align-items: center;

        .header-left {
          display: flex;
          flex-direction: row;
          justify-content: flex-start;
          align-items: center;
        }

        .logo {
          width: 250px;
          height: 75px;
          display: flex;
          flex-direction: row;
          align-items: center;

        }

        .desc {
          // margin-left: -100px;
        }

        .to-index {
          display: flex;

        }
      }

    }

    .bottom-header {
      width: 1200px;
      margin-top: 10px;

      // width: 152px;
      height: 35px;
      line-height: 35px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      border-bottom: 2px solid #439bff;

      .tip {
        width: 152px;
        text-align: center;
        background: #439bff;
        color: #fff;
        margin-left: 10px;
      }
    }

    .content {
      width: 1200px;
      display: flex;
      flex-direction: row;
      justify-content: flex-start;
      margin-top: 10px;

      .header-img {
        text-align: center;
        margin-bottom: 20px;

        img {}

        h5 {
          color: #ccc;
        }
      }
    }
  }

</style>
