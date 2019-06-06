<template>
  <div class='skills'>
    <div class='closeBar'>
      <button
        class="popoutClose"
        @click="confirmclose"
      >
        <!-- 綁定點擊事件執行method: confirmclose -->
      </button>
    </div>
    <div class="content">
      <div
        class='skillsAll'
        v-for="skill in skillList"
        :key="skill.name"
      >
        <div
          class="tox-progress"
          data-size="120"
          data-speed="1800"
          data-background="#ffffff"
          data-thickness="10"
          :data-color="skill.color"
          :data-progress="skill.progress"
        >
          <div
            class="tox-progress-content"
            data-vcenter="true"
          >
            <p v-html="skill.name"></p>
          </div>

        </div>
        <div class='skillContent'>
          <p v-html="skill.content"></p>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "skills",
  data() {
    return {
      skillList: [
        {
          name: "JavaScript",
          progress: 55,
          color: "#324DAD",
          content: "串接API、基礎網頁動畫與運算，初學Vue框架"
        },
        {
          name: "PHP</br>MySQL",
          progress: 60,
          color: "#324DAD",
          content: "伺服器基本架設，撰寫後台與資料庫存取程式"
        },
        {
          name: "Git</br>SourcTree",
          progress: 50,
          color: "#324DAD",
          content: "開發專案時搭配Github，使用基本指令做版本控管"
        },
        {
          name: "Google Analytics",
          progress: 70,
          color: "#324DAD",
          content: "考取Google Analytics Qualification，將其應用於Pixnet部落格"
        },
        {
          name: "Proto.io </br>InVision",
          progress: 70,
          color: "#32A6DB",
          content: "設計遊戲與軟體雛形功開發模擬與使用者測試"
        },
        {
          name: "TOEIC",
          progress: 90,
          color: "#32A6DB",
          content: "Listen: 420 Read: 420 </br>Total: 840"
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
  .skills {
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
    background-color: #5a92af;
  }
  .content {
    height: 100%;
    z-index: 99;
    left: 20%;
    top: 0;
    position: absolute;
    width: 80%;
    background-color: #ffffff;
    display: flex;
    justify-content: flex-start;
    align-items: center;
    align-content: center;
    flex-wrap: wrap;
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

  .skillsAll {
    width: 450px;
    margin: 10px 0 10px 20px;
    display: flex;
    align-items: center;
    align-content: center;
  }
  .tox-progress {
    font-size: 16px;
    margin: 25px auto 25px 50px;
  }
  .skillsAll .skillContent {
    /* background-color: gray; */
    float: left;
    width: 250px;
    height: 150px;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .skills {
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .closeBar > .popoutClose {
    width: 80px;
    height: 80px;
    float: right;
    background-image: url("../assets/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: unset;
    border: unset;
  }
  .closeBar > .popoutClose:hover {
    opacity: 0.6;
  }

  .skillsAll {
    width: 450px;
    margin: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    align-content: center;
  }
  .tox-progress {
    font-size: 16px;
    margin: 25px 25px 25px 25px;
  }
  .skillsAll .skillContent {
    /* background-color: gray; */
    float: left;
    width: 250px;
    height: 150px;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 10px 20px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
@media only screen and (max-width: 480px) {
  .skills {
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
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .closeBar > .popoutClose {
    width: 60px;
    height: 60px;
    float: right;
    background-image: url("../assets/back.png");
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-color: unset;
    border: unset;
  }
  .closeBar > .popoutClose:hover {
    opacity: 0.6;
  }

  .skillsAll {
    width: 360px;
    margin: 10px 10px 10px 10px;
    display: flex;
    align-items: center;
    align-content: center;
  }
  .tox-progress {
    font-size: 16px;
    margin: 25px 25px 25px 25px;
  }
  .skillsAll .skillContent {
    /* background-color: gray; */
    float: left;
    width: 250px;
    height: 150px;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 10px 10px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
}
</style>