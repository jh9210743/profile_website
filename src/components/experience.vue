<template>
  <div class='experience'>
    <div class='closeBar'>
      <button
        class="popoutClose"
        @click="confirmclose"
      >
        <!-- 綁定點擊事件執行method: confirmclose -->
      </button>
    </div>
    <div class="content">
      <ul class='excontent'>
        <li
          v-for="item in itemlist"
          :key="item.name"
          class='exItemList'
        >
          <h2>{{item.title}}</h2>
          <h3 class='location'>{{item.location}}</h3>
          <h3 class='time'>{{item.time}}</h3>
          <p v-html="item.content"></p>
        </li>
      </ul>
    </div>
  </div>
</template>
<script>
export default {
  name: "experience",
  data() {
    return {
      itemlist: [
        {
          name: "graduate",
          title: "研究助理",
          location: "國立高雄大學資訊管理學研究所",
          time: "Sep 2016 ~ Jun 2018",
          content: "以PHP、MySQL建置論文實驗網站</br>以SPSS、Excel分析統計數據"
        },
        {
          name: "intern2",
          title: "資訊助理",
          location: "崧致工程有限公司",
          time: "Jul 2016 ~ Aug 2016",
          content:
            "以Excel整理財務資訊</br>使用PhotoShop、Illastrator做設計圖繪製"
        },
        {
          name: "college",
          title: "資訊部部員",
          location: "國立高雄大學資訊管理學系",
          time: "Aug 2015 ~ Jul 2016",
          content:
            "使用WordPress後台，建置資訊管理學系網站</br>參與系上資訊課程討論與規劃"
        },
        {
          name: "intern1",
          title: "資訊助理",
          location: "國立高雄大學課外組",
          time: "Aug 2015 ~ Jul 2016",
          content: "使用Word、Excel進行資訊整理與文書處理"
        }
      ]
    };
  },
  methods: {
    confirmclose: function() {
      this.$emit("popConfirmClose", "");
    }
  }
};
</script>
<style scoped>
@media only screen and (min-width: 769px) and (max-width: 1920px) {
  .experience {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 100%;
    z-index: 2;
    left: 0;
    top: 0;
    position: absolute;
    width: 20%;
    background-color: #92ccd1;
  }
  .content {
    height: 100%;
    z-index: 2;
    left: 20%;
    top: 0;
    position: absolute;
    width: 80%;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 50px;
    height: 50px;
    float: right;
    margin: 20px 20px 0 0;
    background-image: url("../assets/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: unset;
    border: unset;
  }
  .closeBar > .popoutClose:hover {
    opacity: 0.6;
  }
  .excontent {
    list-style-type: none;
    background-color: #92ccd1;
    width: 6px;
    height: 95%;
    margin: 15px auto auto 100px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .exItemList {
    width: 480px;
    height: 130px;
    margin: 35px auto auto 50px;
    background-color: #d4dfe6;
    border-radius: 2px;
    float: left;
    clear: both;
    text-align: left;
    position: relative;
  }
  .exItemList::before {
    content: "";
    width: 20px;
    height: 20px;
    color: #08415f;
    background-color: #08415f;
    float: left;
    clear: both;
    display: block;
    margin-left: -60px;
    border-style: solid;
    border-radius: 50%;
  }
  .exItemList h2 {
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto 0 20px;
    color: #08415f;
  }
  .exItemList h3 {
    font-size: 16px;
    line-height: 24px;
    margin: auto auto 0 20px;
    color: #183546;
  }
  .exItemList .location,
  .time {
    display: inline-block;
  }
  .exItemList p {
    margin: 5px auto 0 20px;
    font-size: 16px;
    line-height: 24px;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .experience {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 20%;
    z-index: 2;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    background-color: #92ccd1;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .content {
    height: 100%;
    z-index: 99;
    top: 20%;
    position: absolute;
    width: 100%;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 80px;
    height: 80px;
    background-image: url("../assets/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: unset;
    border: unset;
  }
  .closeBar > .popoutClose:hover {
    opacity: 0.6;
  }
  .excontent {
    list-style-type: none;
    background-color: #92ccd1;
    width: 6px;
    height: 100%;
    margin: 15px auto auto 35px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .exItemList {
    width: 430px;
    height: 120px;
    margin: 35px auto auto 30px;
    background-color: #d4dfe6;
    border-radius: 2px;
    float: left;
    clear: both;
    text-align: left;
    position: relative;
  }
  .exItemList::before {
    content: "";
    width: 20px;
    height: 20px;
    color: #08415f;
    background-color: #08415f;
    float: left;
    clear: both;
    display: block;
    margin-left: -40px;
    border-style: solid;
    border-radius: 50%;
  }
  .exItemList h2 {
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto 0 20px;
    color: #08415f;
  }
  .exItemList h3 {
    font-size: 16px;
    line-height: 24px;
    margin: auto auto 0 20px;
    color: #183546;
  }
  .exItemList .location,
  .time {
    display: inline-block;
  }
  .exItemList p {
    margin: 5px auto 0 20px;
    font-size: 16px;
    line-height: 24px;
  }
}
@media only screen and (max-width: 480px) {
  .experience {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 20%;
    z-index: 2;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
    background-color: #92ccd1;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .content {
    /* height: 80%; */
    z-index: 99;
    top: 20%;
    position: absolute;
    width: 100%;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 60px;
    height: 60px;
    background-image: url("../assets/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: unset;
    border: unset;
  }
  .closeBar > .popoutClose:hover {
    opacity: 0.6;
  }
  .excontent {
    list-style-type: none;
    background-color: #92ccd1;
    width: 6px;
    height: 120vh;
    margin: 15px auto auto 35px;
    padding-top: 10px;
    box-sizing: border-box;
  }
  .exItemList {
    width: 300px;
    height: 180px;
    margin: 35px auto auto 30px;
    background-color: #d4dfe6;
    border-radius: 2px;
    float: left;
    clear: both;
    text-align: left;
    position: relative;
  }
  .exItemList::before {
    content: "";
    width: 20px;
    height: 20px;
    color: #08415f;
    background-color: #08415f;
    float: left;
    clear: both;
    display: block;
    margin-left: -40px;
    border-style: solid;
    border-radius: 50%;
  }
  .exItemList h2 {
    font-size: 20px;
    line-height: 30px;
    margin: 10px auto 0 20px;
    color: #08415f;
  }
  .exItemList h3 {
    font-size: 16px;
    line-height: 24px;
    margin: auto auto 0 20px;
    color: #183546;
  }
  .exItemList .location,
  .time {
    display: inline-block;
  }
  .exItemList p {
    margin: 5px auto 0 20px;
    font-size: 16px;
    line-height: 24px;
  }
}
</style>
