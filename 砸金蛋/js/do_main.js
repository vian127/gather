/**
 * Created by feng on 2018-11-20.
 */
require.config({
    baseUrl:'js',
    paths:{
        "jquery":"jquery-2.1.0.min",
        "alert":"alert",
        "resize":"resize",
        "carousel":"jinDanCarousel"
    }
});
require(['jquery','carousel','alert'],function($,carousel,alert){
    $(function(){
        // 金蛋轮播
        setInterval(function(){
            carousel.carouselAutoPlay();
        },2000);
        
        // 金蛋榜单
        setInterval(function(){
            carousel.roll();
        },50);


        // 点击抽奖
        $('body').on('click','.list_EggsDiv ul li',function(){
            alert.clickDan(); //砸蛋
        })

        //登录
		$('body').on('click','.tishiChouJiang .loginSpan',function(){
			alert.alertLogin();
        });
        //关闭登录窗口
		$('body').on('click','.colseLogin',function(){
			$('.bg-mask').remove();
			$('.inputInfo').remove();
        });
        
		//退出登录
		$('body').on('click','.tishiChouJiang .loginOutSpan',function(){
			$('.tishiChouJiang').html('您好,请<span class="loginSpan">登录</span>');
        });
        //关闭抽奖结果
		$('body').on('click','.colseJiangPin',function(){
			$('.bg-mask').remove();
			$('.jiangPinResult').remove();
		});


    })
})