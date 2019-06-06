<template>
  <div class='aboutme'>
    <div class='closeBar'>
      <button
        class="popoutClose"
        @click="confirmclose"
      >
        <!-- 綁定點擊事件執行method: confirmclose -->
      </button>
    </div>
    <div class="content">
      <div class="profile">
        <img
          :src="profile"
          alt=""
        >
      </div>
      <div class="profileInfo">
        <h2>Jamie Hsieh</h2>
        <h3>軟體工程師</h3>
        <h3>國立高雄大學資訊管理學系碩士</h3>
        <p>喜歡社會⼼理學的新鮮⼈，過去專案主要擔任企劃與PM，也會寫些程式。<br>
          使用Google Cloud Platform測試Squid、Outline VPN等服務，並摸索前後端框架與Docker中。</p>
        <ul class="linkItemList">
          <li
            v-for="item in linkitems"
            :key="item.name"
          ><a
              :href="item.link"
              target="blank"
            >
              <img
                class='linkItems'
                :src="item.src"
                alt=""
              ></a>
          </li>
        </ul>
      </div>
    </div>
  </div>
</template>
<script>
export default {
  name: "aboutme",
  data() {
    return {
      profile: require("../assets/profile.png"),
      linkitems: [
        {
          name: "github",
          src: require("../assets/github.png"),
          link: "https://github.com/jh9210743"
        },
        {
          name: "linkedin",
          src: require("../assets/linkedin.png"),
          link: "https://www.linkedin.com/in/jh9210743/"
        },
        {
          name: "cakeresume",
          src: require("../assets/cake-resume.png"),
          link:
            "https://www.cakeresume.com/s--0Tv4NPMF5JcI9eAiHUK9tg--/jamie-hsieh-6d8c37"
        },
        {
          name: "kaohsiungmap",
          src: require("../assets/profile-website.png"),
          link: "/"
        }
      ]
    };
  },
  methods: {
    confirmclose: function() {
      this.$emit("popConfirmClose", "");
      // 使用emit方法觸發自訂事件popConfirmClose給父組件，並且傳值false帶入父組件執行的function
    }
  }
};
</script>
<style scoped>
/* scoped 限制css範圍在此組件 */
@media only screen and (min-width: 769px) and (max-width: 1920px) {
  .aboutme {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 100%;
    position: absolute;
    width: 20%;
    background-color: #bedbd7;
  }
  .content {
    height: 100%;
    z-index: 99;
    left: 20%;
    top: 0;
    position: absolute;
    width: 80%;
    background-color: #ffffff;
  }
  .closeBar > .popoutClose {
    width: 60px;
    height: 60px;
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
  .content > .profile {
    width: 120px;
    height: 120px;
    max-width: 100%;
    margin: 100px auto auto 50px;
  }
  .content > .profileInfo {
    width: 60%;
    margin: 0 auto;
    float: left;
    text-align: left;
  }
  .content > .profile img {
    width: 100%;
    height: 100%;
  }
  .content > .profileInfo h2 {
    font-size: 28px;
    line-height: 42px;
    margin: 15px auto 15px 50px;
  }
  .content > .profileInfo h3 {
    font-size: 22px;
    margin: 15px auto 15px 50px;
  }
  .content > .profileInfo p {
    font-size: 16px;
    line-height: 24px;
    margin: 30px auto 15px 50px;
  }
  .content > .profileInfo > .linkItemList {
    width: auto;
    margin: 30px auto auto 30px;
  }
  .linkItems {
    float: left;
    width: 50px;
    height: 50px;
    margin: auto auto auto 20px;
  }
  .linkItems:hover {
    opacity: 0.8;
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  .aboutme {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 20%;
    position: absolute;
    width: 100%;
    background-color: #bedbd7;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .content {
    height: 80%;
    z-index: 2;
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
  .content > .profile {
    width: 120px;
    height: 120px;
    max-width: 100%;
    margin: 80px auto 20px auto;
  }
  .content > .profileInfo {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .content > .profile img {
    width: 100%;
    height: 100%;
  }
  .content > .profileInfo h2 {
    font-size: 28px;
    line-height: 42px;
    margin: 15px 25px 15px 25px;
  }
  .content > .profileInfo h3 {
    font-size: 22px;
    margin: 15px 20px 15px 20px;
  }
  .content > .profileInfo p {
    font-size: 16px;
    line-height: 24px;
    margin: 30px 15px 15px 15px;
  }
  .content > .profileInfo > .linkItemList {
    width: auto;
    margin: 30px 10px 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .linkItems {
    width: 50px;
    height: 50px;
    margin: 0 10px auto 10px;
  }
  .linkItems:hover {
    opacity: 0.8;
  }
}
@media only screen and (max-width: 480px) {
  .aboutme {
    height: 100%;
    z-index: 99;
    left: 0;
    top: 0;
    position: absolute;
    width: 100%;
  }
  .closeBar {
    height: 20%;
    position: absolute;
    width: 100%;
    background-color: #bedbd7;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .content {
    height: 80%;
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
  .content > .profile {
    width: 120px;
    height: 120px;
    max-width: 100%;
    margin: 40px auto;
  }
  .content > .profileInfo {
    width: 80%;
    margin: 0 auto;
    text-align: center;
  }
  .content > .profile img {
    width: 100%;
    height: 100%;
  }
  .content > .profileInfo h2 {
    font-size: 26px;
    line-height: 39px;
    margin: 15px 25px 15px 25px;
  }
  .content > .profileInfo h3 {
    font-size: 20px;
    margin: 15px 20px 15px 20px;
  }
  .content > .profileInfo p {
    font-size: 16px;
    line-height: 24px;
    margin: 30px 15px 15px 15px;
  }
  .content > .profileInfo > .linkItemList {
    width: auto;
    margin: 20px 10px 30px 10px;
    display: flex;
    justify-content: center;
    align-items: center;
    align-content: center;
  }
  .linkItems {
    width: 40px;
    height: 40px;
    margin: 0 10px auto 10px;
  }
  .linkItems:hover {
    opacity: 0.8;
  }
}
</style>
