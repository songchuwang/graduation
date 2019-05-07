<template>
  <div class="container">
    <div class="img-layout">
      <img src="../assets/img/newxueyuan_02.jpg" alt="">
    </div>
    <div class="content">
      <div class="breadcrumb">
        <p>首页 > 师资力量</p>
      </div>
      <!-- <div class="top-bar"> -->
      <el-table :data="tableData" style="width: 1200px">
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
            <el-button type="primary" size="mini" @click="handleEdit(scope.$index, scope.row)">预约</el-button>
          </template>
        </el-table-column>
      </el-table>
      <!-- </div> -->
    </div>

  </div>
</template>

<script>
  export default {
    data() {
      return {
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
      }
    },
    created() {
      this.getDemandData()
    },
    methods: {
      getDemandData() {
        this.$axios.post('/users/getdemand').then(res => {
          this.tableData = res.data.data
        })
      },
      handleEdit(index, row) {
        let data = row;
        data.order = this.$store.state.geo.username;
        data.id = row._id;
        console.log(data);
        
        if(this.$store.state.geo.userid!=2){
          this.$message.error("您不是教员，不能预约")
        }else{
          this.$axios.post('/users/order',
            data
          ).then(res=>{
            if(res.data.code == -1){
              this.$message.error(res.data.msg)
            }else {
              this.$message.success("预约成功")
              setTimeout(()=>{
                window.location.reload()
              },1000)
              
            }
          })
        }
        
        console.log(index, row);
      },
      handleDelete(index, row) {
        console.log(index, row);
      }
    }

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

      .top-bar {
        width: 100%;
        height: 42px;
        line-height: 42px;
        background: #439bff;

        /deep/ .demo-table-expand {
          font-size: 0;
        }

        /deep/ .demo-table-expand label {
          width: 90px;
          color: #99a9bf;
        }

        /deep/ .demo-table-expand .el-form-item {
          margin-right: 0;
          margin-bottom: 0;
          width: 50%;
        }
      }
    }
  }

</style>
