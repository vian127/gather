/**
 * Created by feng on 2018/11/06.
 */
require.config({
  baseUrl: 'E:/EcmohoSVN/其它平台页面/bootstrap/js',
  paths: {
    "jquery": ["../lib/jquery/jquery.min"],
    "bootstrap": ["../lib/bootstrap/js/bootstrap.min"],
    "vue": ["../lib/vue/vue.min"],
    "echarts": ["../lib/echarts/echarts.min"],
    "common": ["common"],
    "artTemplate":["../lib/artTemplate/template-web"]
  },
  shim: {
    "bootstrap": {
      deps: ["jquery"]
    },
    "common": {
      deps: ["jquery"]
    }
  }
});

require(['jquery'], function ($) {
  $(function () {
    //二级菜单显示隐藏的功能
    $(".second").prev().on("click", function () {
      $(this).next().slideToggle();
      console.log(3243)
    })

    //侧边栏显示隐藏
    $(".icon_menu").on("click", function () {
      $(".lt_aside").toggleClass("now");
      $(".lt_main").toggleClass("now");
      $(".lt_header").toggleClass("now");
      console.log(3243)
    })
    //退出功能
    $(".logout").on("click", function () {
      $("#logoutModal").modal("show");
    });

  });
});