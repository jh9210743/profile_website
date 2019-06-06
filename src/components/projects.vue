<template>
  <div class='projects'>
    <div class='closeBar'>
      <button
        class="popoutClose"
        @click="confirmclose"
      >
        <!-- 綁定點擊事件執行method: confirmclose -->
      </button>
    </div>
    <div class="content">
      <div class='projectWrap'>
        <div
          class='projectList'
          v-for="project in projects"
          :key="project.name"
        >
          <img
            :src="project.src"
            alt=""
          >
          <div class='projectContent'>
            <h2>{{project.name}}</h2>
            <h3>專案內容</h3>
            <p>{{project.content}}</p>
            <h3>使用技術</h3>
            <p>{{project.skill}}</p>
            <a
              v-if="project.link!==''"
              :href="project.link"
              target="blank"
            >Demo Link</a>
          </div>
        </div>

      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "projects",
  data() {
    return {
      projects: [
        {
          name: "高雄市原民會旅遊便利GO",
          link: "https://jh9210743.github.io/KaohsiungMap/",
          src: require("../assets/KaohsiungMap.png"),
          content:
            "將高雄市原住民之特色旅遊景點繪製於Google Map上，並提供相關聯絡與旅遊參考資訊",
          skill:
            "使用JavaScript與ajax串接高雄市政府開放資料，使用Google Map API繪製地標與放入資訊"
        },
        {
          name: "2019 BESC Conference",
          link: "",
          src: require("../assets/BESC.png"),
          content:
            "根據BESC 2019 Conference研討會所需呈現之資訊，將研討會連絡方式、繳費資訊、議程等建置網站",
          skill:
            "多人合作專案，前端使用JavaScript、html、CSS，後端使用PHP與Laravel開發靜態網頁"
        },
        {
          name: "食刻",
          link:
            "https://www.behance.net/gallery/67141355/Dining-Time-Restaurant-Recommendation-App-Development?fbclid=IwAR272HtjLNZyaDAUSFZmf4-2wmxklh3kpGEqL-53102syrANws7jkvhNn18",
          src: require("../assets/eatingTime.png"),
          content:
            "開發手機App，根據使用者的預算、飲食喜好、所在地點，以趣味的抽選餐廳方式，提供使用者飲食選擇與餐廳資訊",
          skill: "使用Java開發Android App，後臺使用Debian、PHP、Apche建置"
        },
        {
          name: "The Way Home",
          link: "",
          src: require("../assets/KaohsiungCreate.png"),
          content:
            "建立一個提供流浪與走失動物的資訊呈現平台，讓使用者能夠找尋走失動物或提供流浪動物的領養資訊",
          skill: "使用基礎html與css，後臺使用Ubuntu、PHP、Apche建置"
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
  .projects {
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
    position: fixed;
    width: 20%;
    background-color: #86c1d4;
  }
  .content {
    z-index: 99;
    left: 20%;
    top: 0;
    position: absolute;
    width: 80%;
    height: fit-content;
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
  .projectWrap {
    width: 100%;
    margin: 20px auto auto auto;
  }
  .projectList {
    width: 80%;
    height: 300px;
    margin: 10px auto 10px 20px;
    background-repeat: no-repeat;
  }
  .projectList img {
    display: block;
    float: left;
    width: 400px;
    margin: 45px auto auto 30px;
    box-shadow: 4px 4px 2px 1px rgb(221, 221, 221);
  }
  .projectContent {
    float: left;
    margin: 40px auto auto 30px;
    width: 500px;
    height: 250px;
  }
  .projectContent h2 {
    text-align: left;
    width: fit-content;
    font-size: 24px;
    line-height: 36px;
    color: #08415f;
  }
  .projectContent h3 {
    text-align: left;
    width: fit-content;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 0 0;
    color: #085381;
  }
  .projectContent p {
    text-align: left;
    margin: 5px auto 10px auto;
    font-size: 18px;
    line-height: 24px;
  }
  .projectContent a {
    float: left;
    text-align: left;
    text-decoration: none;
    color: #1178b4;
    margin: 0 auto;
    font-size: 18px;
    line-height: 24px;
  }
  .projectContent a:hover {
    color: rgb(0, 93, 180);
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .projects {
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
    width: 100%;
    position: absolute;
    background-color: #86c1d4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .content {
    z-index: 99;
    top: 20%;
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 80px;
    height: 80px;
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
  .projectWrap {
    width: 100%;
    margin: 20px auto auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .projectList {
    width: 80%;
    height: 600px;
    margin: 10px 10px 10px 10px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .projectList img {
    display: block;
    /* float: left; */
    width: 470px;
    margin: 20px 15px 20px 15px;
    box-shadow: 4px 4px 2px 1px rgb(221, 221, 221);
  }
  .projectContent {
    /* float: left; */
    margin: 0 15px 20px 15px;
    width: 470px;
    height: 250px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .projectContent h2 {
    text-align: left;
    width: 100%;
    font-size: 24px;
    line-height: 48px;
    color: #08415f;
  }
  .projectContent h3 {
    text-align: left;
    width: fit-content;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 0 0;
    color: #085381;
  }
  .projectContent p {
    text-align: left;
    margin: 5px auto 10px auto;
    font-size: 18px;
    line-height: 24px;
  }
  .projectContent a {
    text-align: left;
    text-decoration: none;
    color: #1178b4;
    margin: 5px 0 5px 0;
    font-size: 18px;
    line-height: 24px;
  }
  .projectContent a:hover {
    color: rgb(0, 93, 180);
  }
}
@media only screen and (max-width: 480px) {
  .projects {
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
    width: 100%;
    position: absolute;
    background-color: #86c1d4;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .content {
    z-index: 99;
    top: 20%;
    position: absolute;
    width: 100%;
    height: fit-content;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 80px;
    height: 80px;
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
  .projectWrap {
    width: 100%;
    margin: 20px auto auto auto;
    display: flex;
    justify-content: center;
    align-items: center;
    flex-wrap: wrap;
  }
  .projectList {
    width: 80%;
    height: 600px;
    margin: 10px 10px 10px 10px;
    background-repeat: no-repeat;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .projectList img {
    display: block;
    width: 300px;
    margin: 10px 15px 10px 15px;
    box-shadow: 4px 4px 2px 1px rgb(221, 221, 221);
  }
  .projectContent {
    margin: 0 15px 0 15px;
    width: 350px;
    height: 300px;
    display: flex;
    justify-content: flex-start;
    align-items: flex-start;
    flex-wrap: wrap;
  }
  .projectContent h2 {
    text-align: left;
    width: 100%;
    font-size: 24px;
    color: #08415f;
    margin: 0 0 10px 0;
  }
  .projectContent h3 {
    text-align: left;
    /* width: fit-content; */
    font-size: 18px;
    line-height: 24px;
    color: #085381;
    margin: 15px 0 10px 0;
  }
  .projectContent p {
    text-align: left;
    margin: 0 auto 0 auto;
    font-size: 18px;
    line-height: 24px;
  }
  .projectContent a {
    text-align: left;
    text-decoration: none;
    color: #1178b4;
    margin: 5px 0 5px 0;
    font-size: 18px;
    line-height: 24px;
    margin: 10px 0 0 0;
  }
  .projectContent a:hover {
    color: rgb(0, 93, 180);
  }
}
</style>