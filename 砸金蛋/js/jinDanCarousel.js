/**
 * Created by feng on 2018-11-20.
 */
define(function(){
    // 金蛋榜单生成假数据
    $('.ul_List1>li').clone().appendTo($('.ul_List2'));
    var index=0;
    // 金蛋自动轮播
    function carouselAutoPlay(){
        var width = $('.list_EggsDiv').width();
        $(".list_EggsDiv ul").eq(0).animate({left:'-'+width},1200,function(){
			$(this).css({
						left: width,
					}).parent().appendTo($('.list_EggsDiv'));
		}).parent().next().find('ul').animate({left:0},1200);
    }

    // 金蛋榜单
    function roll() {
        if ($('.all_List_Div').scrollTop() >= $('.ul_List1').height()) {
            index = 0;
        } else {
            index++;
        }
        $('.all_List_Div').scrollTop(index);
    }

    return {
        carouselAutoPlay:carouselAutoPlay, //鸡蛋自动轮播
        roll:roll,  // 金蛋榜单轮播
 
    }
})  