<template>
  <div id="app">
    <div
      class="wrap"
      v-show="category === ''"
    >
      <a class="
      logo"></a>
      <ul>
        <li
          v-for="(item, index) in itemlist"
          :key="item.name"
          class="itemblock"
          @click='popClick(item.name); ifAnimate(index)'
        >{{item.title}}
        </li>
      </ul>
    </div>
    <!-- v-on:自訂事件名稱 = "執行的method名稱" -->
    <!-- 父組件使用v-on:監聽子組件發生的自定義popConformClose事件，當事件發生時，執行popoutConfirmClose1 -->
    <transition>
      <aboutme
        v-show="category === 'aboutme'"
        v-on:popConfirmClose="popoutConfirmClose"
      />
    </transition>
    <transition>
      <skills
        v-show="category === 'skills'"
        v-on:popConfirmClose="popoutConfirmClose"
      />
    </transition>
    <transition>
      <experience
        v-show="category === 'experience'"
        v-on:popConfirmClose="popoutConfirmClose"
      />
    </transition>
    <transition>
      <projects
        v-show="category === 'projects'"
        v-on:popConfirmClose="popoutConfirmClose"
      />
    </transition>
  </div>

</template>
<script>
import aboutme from "./components/aboutme";
import skills from "./components/skills";
import experience from "./components/experience";
import projects from "./components/projects";

export default {
  name: "App",
  components: {
    aboutme,
    skills,
    experience,
    projects
  },
  data() {
    return {
      logo: require("@/assets/logo.png"),
      // 原先各跳出區塊為false，v-show不顯示
      popIsShow1: false,
      popIsShow2: false,
      popIsShow3: false,
      popIsShow4: false,
      popIsShow: {
        aboutme: false,
        skills: false,
        experience: false,
        projects: false
      },
      itemlist: [
        {
          name: "aboutme",
          title: "About me",
          color: "#d9f9f4"
        },
        {
          name: "experience",
          title: "Experience",
          color: "#9cd9de"
        },
        {
          name: "skills",
          title: "Skills",
          color: "#86c1d4"
        },
        {
          name: "projects",
          title: "Projects",
          color: "#5a92af"
        }
      ],
      category: ""
    };
  },

  methods: {
    popoutConfirmClose: function(data) {
      this.category = data;
      //  將vue實體的popIsShow1改成子組件傳入的值data
    },
    //  當點擊對應區塊時，將對應的popIsShow設為true，其他為false
    popClick: function(pagename) {
      this.category = pagename;
    },
    ifAnimate: function(index) {
      if (index === 2) {
        console.log("success");
        ToxProgress.create();
        ToxProgress.animate();
      }
    },
    popAboutmeClick: function() {
      this.popIsShow.aboutme = true;
      this.popIsShow.experience = false;
      this.popIsShow.skills = false;
      this.popIsShow.projects = false;
    },
    popSkillsClick: function() {
      this.popIsShow.aboutme = false;
      this.popIsShow.experience = false;
      this.popIsShow.skills = true;
      this.popIsShow.projects = false;
    },
    popExperienceClick: function() {
      this.popIsShow.aboutme = false;
      this.popIsShow.experience = true;
      this.popIsShow.skills = false;
      this.popIsShow.projects = false;
    },
    popProjectsClick: function() {
      this.popIsShow.aboutme = false;
      this.popIsShow.experience = false;
      this.popIsShow.skills = false;
      this.popIsShow.projects = true;
    }
  }
};
</script>
<style>
/*Initial css*/
@media only screen and (min-width: 769px) and (max-width: 1920px) {
  #app {
    font-family: "Noto Sans TC", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  .wrap {
    width: 100%;
    height: 480px;
    text-align: center;
    margin: 80px auto;
    box-sizing: border-box;
  }
  .logo {
    background-image: url("./assets/logo.png");
    height: 120px;
    width: 120px;
    display: block;
    text-indent: -9999px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 130px auto 0 auto;
  }

  .itemblock {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 20px;
    line-height: 140px;
    width: 140px;
    height: 140px;
    margin: 40px 20px auto;
    border-radius: 2px;
    box-sizing: border-box;
  }
  .itemblock:nth-child(1) {
    background-color: #bedbd7;
  }
  .itemblock:nth-child(2) {
    background-color: #92ccd1;
  }
  .itemblock:nth-child(3) {
    background-color: #86c1d4;
  }
  .itemblock:nth-child(4) {
    background-color: #5a92af;
  }
  .itemblock:hover {
    background-color: rgb(121, 121, 121);
    color: white;
  }
  .v-enter-active {
    animation: go 1s;
  }
  .v-leave-active {
    animation: back 1s;
  }
  @keyframes go {
    from {
      transform: translate(100vw);
      opacity: 0.5;
    }
    to {
      transform: translate(0vw);
      opacity: 1;
    }
  }

  @keyframes back {
    from {
      transform: translate(0vw);
      opacity: 1;
    }
    to {
      transform: translate(100vw);
      opacity: 0.5;
    }
  }
}
@media only screen and (min-width: 480px) and (max-width: 768px) {
  #app {
    font-family: "Noto Sans TC", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  .wrap {
    width: 70%;
    height: 480px;
    text-align: center;
    margin: 60px auto;
    box-sizing: border-box;
  }
  .logo {
    background-image: url("./assets/logo.png");
    height: 150px;
    width: 150px;
    display: block;
    text-indent: -9999px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 150px auto 80px auto;
  }

  .itemblock {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 24px;
    line-height: 140px;
    width: 140px;
    height: 140px;
    margin: 40px 20px auto;
    border-radius: 2px;
    box-sizing: border-box;
  }
  .itemblock:nth-child(1) {
    background-color: #bedbd7;
  }
  .itemblock:nth-child(2) {
    background-color: #92ccd1;
  }
  .itemblock:nth-child(3) {
    background-color: #86c1d4;
  }
  .itemblock:nth-child(4) {
    background-color: #5a92af;
  }
  .itemblock:hover {
    background-color: rgb(121, 121, 121);
    color: white;
  }
  .v-enter-active {
    animation: go 1s;
  }
  .v-leave-active {
    animation: back 1s;
  }
  @keyframes go {
    from {
      transform: translate(100vw);
      opacity: 0.5;
    }
    to {
      transform: translate(0vw);
      opacity: 1;
    }
  }

  @keyframes back {
    from {
      transform: translate(0vw);
      opacity: 1;
    }
    to {
      transform: translate(100vw);
      opacity: 0.5;
    }
  }
}

@media only screen and (max-width: 480px) {
  #app {
    font-family: "Noto Sans TC", sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    text-align: center;
    margin-top: 60px;
  }
  .wrap {
    width: 80%;
    height: 400px;
    text-align: center;
    margin: 80px auto;
    box-sizing: border-box;
  }
  .logo {
    background-image: url("./assets/logo.png");
    height: 120px;
    width: 120px;
    display: block;
    text-indent: -9999px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    background-position: center center;
    margin: 110px auto 20px auto;
  }

  .itemblock {
    display: inline-block;
    text-align: center;
    vertical-align: middle;
    font-size: 16px;
    line-height: 100px;
    width: 100px;
    height: 100px;
    margin: 40px 20px auto;
    border-radius: 2px;
    box-sizing: border-box;
  }
  .itemblock:nth-child(1) {
    background-color: #bedbd7;
  }
  .itemblock:nth-child(2) {
    background-color: #92ccd1;
  }
  .itemblock:nth-child(3) {
    background-color: #86c1d4;
  }
  .itemblock:nth-child(4) {
    background-color: #5a92af;
  }
  .itemblock:hover {
    background-color: rgb(121, 121, 121);
    color: white;
  }
  .v-enter-active {
    animation: go 1s;
  }
  .v-leave-active {
    animation: back 1s;
  }
  @keyframes go {
    from {
      transform: translate(100vw);
      opacity: 0.5;
    }
    to {
      transform: translate(0vw);
      opacity: 1;
    }
  }

  @keyframes back {
    from {
      transform: translate(0vw);
      opacity: 1;
    }
    to {
      transform: translate(100vw);
      opacity: 0.5;
    }
  }
}
</style>
