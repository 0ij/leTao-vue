<template>
  <div class="app-container">
    <el-form ref="form" :model="form" label-width="120px">
      <el-form-item label="商品图片">
        <div style="display: flex;flex-direction: row;align-items: flex-end">
          <img class="img" :src="form.gpic" style="width: 20%;height: 20%">

          <el-upload
            class="upload-demo"
            action="http://localhost/upload/"
            :before-upload="beforeUpload"
            :on-preview="handlePreview"
            :on-remove="handleRemove"
            :on-success="uploadImgSuc"
            :before-remove="beforeRemove"
            multiple
            :limit="3"
            :on-exceed="handleExceed"
            :file-list="fileList">
              <el-button size="small" type="primary" >点击上传</el-button>
              <div slot="tip" class="el-upload__tip">只能上传jpg/png文件，且不超过500kb</div>
          </el-upload>
        </div>

      </el-form-item>
      <el-form-item label="商品名称">
        <el-input v-model="form.gname" style="width: 70%"/>
      </el-form-item>
      <el-form-item label="商品类型">
        <el-input v-model="form.gtype" style="width: 70%"/>
      </el-form-item>
      <el-form-item label="商品价格">
        <el-input v-model="form.gprice" style="width: 70%"/>
      </el-form-item>
      <el-form-item label="商品状态">
        <el-select v-model="form.onsale" placeholder="选择商品状态">
          <el-option label="未下架" value="1"/>
          <el-option label="已下架" value="0"/>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="onSubmit">保存</el-button>
        <el-button @click="onCancel">取消</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  data() {
    return {
      form: {
        gid:'121',
        gpic:'https://booklibimg.kfzimg.com/data/book_lib_img_v2/user/0/1c6c/1c6c4b391281ad7fc1e937bce01e6c3b_0_0_0_0_water.jpg',
        gname:'衣服',
        gtype:'11',
        price:'134',
        inventory:'890',
        sid:'12',
        onsale:'1'
      },
      fileList:[]
    }
  },
  created() {
    this.setGoodsInfo();
  },
  methods: {
    setGoodsInfo(){
      this.form=this.$store.state.goodsmanageInfo
    },
    onSubmit() {
      this.$message('submit!')
    },
    onCancel() {
      this.$message({
        message: 'cancel!',
        type: 'warning'
      })
    },
    handleRemove(file, fileList) {
      console.log(file, fileList);
    },
    //已上传的文件的钩子
    handlePreview(file) {
      console.log(file);
      // let i=0
      // for(i=0;i<this.fileList.length;i++){
      //   console.log("this.fileList"+i+":", this.fileList[i]);
      // }
    },
    handleExceed(files, fileList) {
      this.$message.warning(`当前限制选择 3 个文件，本次选择了 ${files.length} 个文件，共选择了 ${files.length + fileList.length} 个文件`);
    },
    beforeRemove(file, fileList) {
      return this.$confirm(`确定移除 ${ file.name }？`);
    },
    beforeUpload (file) {
      let _this = this
      const is1M = file.size / 1024 / 1024 < 1; // 限制小于1M
      // const isSize = new Promise(function (resolve, reject) {
      //   // let width = 654; // 限制图片尺寸为654X270
      //   // let height = 270;
      //   let _URL = window.URL || window.webkitURL;
      //   let img = new Image();
      //   // img.onload = function () {
      //   //   let valid = img.width === width && img.height === height;
      //   //   valid ? resolve() : reject();
      //   // }
      //   img.src = _URL.createObjectURL(file);
      // }).then(() => {
      //   return file;
      // }, () => {
      //   _this.$message.error('图片尺寸限制为654 x 270，大小不可超过1MB')
      //   return Promise.reject();
      // });
      if (!is1M) {
        _this.$message.error('图片大小不可超过1MB')
      }
      // return isSize&is1M
      return is1M
    },
    uploadImgSuc(){

    }
  }
}
</script>

<style scoped>
.line{
  text-align: center;
}
</style>

