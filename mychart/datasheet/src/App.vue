<template>
  <div id="app">
    <div class="lt_aside" :class="{'now':isNow}">
      <div class="brand">
        <router-link to="/home">ecmoho Data</router-link>
      </div>
      <div class="nav">
        <ul>
          <li>
            <router-link to="/hello">
              <i class="iconfont icon-weibiaoti--"></i>
              <span>商铺</span>
            </router-link>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-shangpin1"></i>
              <span>商品</span>
            </a>
          </li>
          <li class="second-wrap">
            <a href="javascript:;" @click="secondFunc">
              <i class="iconfont icon-das"></i>
              <span>用户</span> 
              <i class="iconfont icon-jiantou1 pull-right icon_rotate" :class="{'icon_now':isShow}"></i>
            </a>
            <!--二级分类-->
            <div class="second" :class="{'now':isShow}">
              <a href="javascript:void(0);">用户资料</a>
              <a href="javascript:void(0);">用户画像</a>
            </div>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-shezhi1"></i>
              <span>营销</span>
            </a>
          </li>
          <li>
            <a href="javascript:;">
              <i class="iconfont icon-jinqian-"></i>
              <span>交易</span>
            </a>
          </li>
        </ul>
      </div>
    </div>
  <!--主体区域-->
    <div class="lt_main" :class="{'now':isNow}">
      <div class="lt_header" :class="{'now':isNow}">
        <a href="javascrpt:;" class="pull-left icon_menu" @click="isShowFunc"><i class="iconfont icon-liebiao"></i></a>
        <div class="user pull-right">
          <!-- <img src="../assets/images/photo.jpg" alt=""> -->
          <span>小李，你好</span>
          <a href="javascript:;" class="logout">退出</a>

        </div>
      </div>
        <!-- 内容区域 -->
      <div class="lt_content">
        <router-view></router-view>
      </div>
    </div>

  </div>
</template>

<script>
export default {
  data() {
    return {
      isShow: false,
      isNow: false
    };
  },
  methods: {
    isShowFunc() {
      this.isNow = !this.isNow;
    },
    secondFunc() {
      this.isShow = !this.isShow;
    }
  }
};
</script>
  
<style lang="scss" scoped>
/*侧边栏样式*/
.lt_aside {
  width: 220px;
  height: 100%;
  background: #2e3e4e;
  position: fixed;
  left: 0;
  transition: all 1s;
  z-index: 11;
  &.now {
    left: -220px;
  }
  .brand {
    width: 220px;
    height: 50px;
    background: #2e3e4e;
    a {
      display: block;
      width: 100%;
      height: 100%;
      text-align: center;
      line-height: 50px;
      font-size: 24px;
      color: #fff;
    }
  }
  .nav {
    i {
      font-size: 18px;
      margin-right: 15px;
    }
    a {
      display: block;
      height: 54px;
      line-height: 48px;
      color: #ccc;
      padding-left: 25px;
      border: 3px solid transparent;
      &:hover {
        background: #263441;
      }
    }
    .second-wrap > a .icon_rotate {
      font-size: 14px;
      transition: all 0.6s;
      -moz-transition: all 0.6s;
      -webkit-transition: all 0.6s;
      -o-transition: all 0.6s;
      -ms-transition: all 0.6s;
    }
    .second-wrap .icon_now {
      transform: rotate(-180deg);
      -ms-transform: rotate(-180deg);
      -moz-transform: rotate(-180deg);
      -webkit-transform: rotate(-180deg);
      -o-transform: rotate(-180deg);
    }
    .second {
      transition: all .3s linear;
      height: 0;
      overflow: hidden;
      background: #2a3948;
      a {
        padding-left: 60px;
      }
      &.now{
        height: 108px;
      }
    }
  }
}

/* 主体样式 */
.lt_main {
  height: 100%;
  width: 100%;
  padding-left: 220px;
  transition: all 1s;
  padding-top: 70px;
  &.now {
    padding-left: 0px;
  }
  .lt_header {
    width: 100%;
    height: 50px;
    background-color: #fff;
    margin-bottom: 20px;
    position: fixed;
    left: 0;
    top: 0;
    z-index: 10;
    padding: 0 20px 0 240px;
    transition: all 1s;
    background: url("./assets/images/body-bg.png") repeat center;
  }
  a:hover {
    color: #20c997;
  }
  .user {
    .logout {
      font-size: 14px;
    }
    img {
      width: 30px;
      height: 30px;
      border-radius: 50%;
    }
    span {
      padding: 0 10px;
    }
  }
  .now {
    padding-left: 20px;
  }
  a {
    line-height: 50px;
    color: #495057;
    font-size: 16px;
  }
}
</style>
