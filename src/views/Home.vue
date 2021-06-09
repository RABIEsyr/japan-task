<template>
<div>
  <div class="container">

    <div class="back1">
      <div class="row"></div>
    </div>

    <div class="back2"></div>

    <div class="row">
      <div class="back3 col-1">
         <img :class="['pagelogo',
           windowWidth2 < 885 ? 'pagelogo-1' : 'pagelogo',
           windowWidth2 < 843 ? 'pagelogo-2' : 'pagelogo',
           windowWidth2 < 543 ? 'pagelogo-3' : 'pagelogo']"
            src="../assets/pagelogo.png" alt="">
         <img :class="['phoneimg',
           windowWidth2 < 1106 ? 'phoneimg-1' : 'phoneimg',
           windowWidth2 < 880 ? 'phoneimg-2' : 'phoneimg',
           windowWidth2 < 534 ? 'phoneimg-3' : 'phoneimg',
           windowWidth2 < 483 ? 'phoneimg-4' : 'phoneimg']"
            src="../assets/phone.png" alt="">
      </div>
      <div class=" back3 col">
          <div class="row">
            <div class="col">
              <button class="btn-1">今すぐ資料請求する</button>
            </div> 
          </div>

          <div class="row text-center">
            <div 
              style="margin-left: 40%;
                     margin-top: 80px"
              class="col">
              <p class="ptext">Facebookページ向けチャットボット</p>
              <p class="ptext">忙しいあなたにかわりチャットボットが</p>
              <p class="ptext" style="color:yellow; size:73px">24時間<span class="ptext">お客様対応</span> </p>
              <p style="margin-top:20px" class="ptext">業界最安値！2021年8月まで今なら</p>
              <p class="ptext">導入費が <span style="color: yellow"> 0円 </span></p>
              <p class="ptext">利用料金は月々たったの</p>
              <p class="ptext" style="color:yellow">1,500<span class="ptext">お客様対応</span> </p>
            </div> 
          </div>

          <div class="row">
            <div class="col">
              <button class="btn-2">今すぐ資料請求する</button>
            </div>
          </div>
      </div>
    </div>
   </div>


<div class="container text-center" style="margin-top:100px">
  <p style="color:#006EBB">より多くのリード顧客を獲得</p>
  <p style="color:#006EBB; font-size: 11px;">メールマーケティングよりも「簡単」「効率的」「格安」で多くのリード顧客を獲得し、売上UPに繋がる！</p>
  
  <div class="row">
    <div class="col-5" style="border-raduis:50%">
      <img src="../assets/point1.png" alt="" style="border-radius: 50%;float:right; ">
    </div>
    <div class="col-7">
      <p  style="color:#006EBB">SNSならではの貴重な顧客情報</p>
      <p style="color:#006EBB; font-size: 11px;">SNSだからこそ、関係性の近いフランクな状態の顧客情報を獲得</p>
    </div>
  </div>

  <div class="row" style="margin-top:30px">
    <div class="col-5" style="border-raduis:50%">
      <img src="../assets/point2.png" alt="" style="border-radius: 50%; float:right">
    </div>
    <div class="col-7 text-center" >
      <p  style="color:#006EBB">ややこしいツールの導入は不要</p>
      <p style="color:#006EBB; font-size: 11px;">ツール管理が一切不要なので、マーケティング業務の効率化</p>
    </div>
  </div>

</div>
  </div>
</template>

<script>
import {mix} from '../mix.js'
export default {
  mixins: [mix],
  // data() {
  //   return {
  //         windowWidth2: window.innerWidth,
  //   }
  // },
  // methods: {
  //   onResize() {
  //     console.log("App.vue-onResize()", this.windowWidth2);
  //     this.windowWidth2 = window.innerWidth;
  //   }
  // },
  // mounted() {
  //   this.$nextTick(() => {
  //     window.addEventListener("resize", this.onResize);
  //   });
  // },
  
  // beforeDestroy() {
  //   window.removeEventListener("resize", this.onResize);
  // }
}
</script>

<style scoped>
#home {
    height: 100vh;
}
.back1, .back2 {
  background-color: #67AEF9;
  position: absolute;
   width: 100%;
  height: 100%;
}

.back2 {
  z-index: 2;
  width: 50%;
  background-color: #006EBB; 
  border-top-right-radius: 30em 50em
}

.back3 {
  z-index: 3;
}

.pagelogo {
  margin-top: 10px;
}
.pagelogo-1 {
  margin-top: 10px;
  width: 100px;
}
.pagelogo-2 {
  margin-top: 10px;
  width: 70px;
}
.pagelogo-3 {
  margin-top: 10px;
  width: 50px;
}

.phoneimg {
  margin-top: 100px;
}
.phoneimg-1 {
  margin-top: 100px;
  width: 300px;
}
.phoneimg-2 {
  margin-top: 100px;
  width: 200px;
}
.phoneimg-3 {
  margin-top: 100px;
  width: 100px;
}
.phoneimg-4 {
  margin-top: 100px;
  width: 80px;
}

.btn-1 {
  float: right;
  color: #fff;
  border: 2px solid var(--unnamed-color-ffffff);
  background: #5856FF 0% 0% no-repeat padding-box;
  border: 2px solid #FFFFFF;
  border-radius: 48px;
  opacity: 1; 
}

.ptext {
  letter-spacing: 1.2px;
  color: #FFFFFF;
  opacity: 1;
  width: 353px;
  height: 32px;
}

.btn-2 {
  border: 2px solid var(--unnamed-color-ffffff);
  background: #5856FF 0% 0% no-repeat padding-box;
  border: 2px solid #FFFFFF;
  border-radius: 48px;
  opacity: 1;
  text-align: left;
  font: normal normal  Noto Sans JP;
  letter-spacing: 0px;
  color: #FFFFFF;
  opacity: 1;
  margin-left: 60%;
  margin-top: 100px
}
</style>