/**
 * Created by feng on 2018-11-20.
 */
define(function(){
	var clickDan = function(){
		// 判断是否登录
		var isTrue = $('.tishiChouJiang span').hasClass('loginSpan');
		if(isTrue){
			alertLogin();
		}else{
			clickJinDanView();
		}
	}

	// 没有登录
	function alertLogin(){
		var str='';
		// 遮罩层
		str +='<div class="bg-mask"></div>'
		// 登录框
		str +='<div class="inputInfo">'+
			'<img class="colseLogin" src="images/close.png" alt="关闭">'+
			'<p class="inputInfoTitle">输入用户信息</p>'+
			'<div class="userNameDiv">'+
				'<label for="nameInput">用户名:</label>'+
				'<input class="nameInput" name="nameInput" id="nameInput" value="上善若水" type="text" placeholder="请输入用户名">'+
			'</div>'+
			'<div class="phoneDiv">'+
				'<label for="phoneInput">手机号:</label>'+
				'<input class="phoneInput" name="phoneInput" id="phoneInput" value="13688999988" type="text" placeholder="请输入电话号码">'+
			'</div>'+
			'<input class="submitTijiao" type="button" value="提交">'+
			'</div>';
			
		$('body').append(str);
		setTimeout(function(){
			$('.inputInfo').addClass('active');
		},200);	

		// 点击登录
		$('.submitTijiao').click(function(){
			var phoneNumber = $('.phoneInput').val();
			var userName = $('.nameInput').val();
			if(phoneNumber =='' || userName == ''){
				alert('信息不能为空');
			}else{
				if(isPhoneNumber(phoneNumber)){
					$('.bg-mask').remove();
					$('.inputInfo').remove();
					$('.tishiChouJiang').html(userName +',你好！点击金蛋抽奖<span class="loginOutSpan">退出</span>')
				}else{
					alert('电话号码格式不正确')
				}
			}
		})
	};
	// 手机号码正则校验
	function isPhoneNumber(val){
		var re=/^(13[0-9]{9})|(15[0-9][0-9]{8})|(18[0-9][0-9]{8})|(17[0][0-9]{8})|(14[7][0-9]{8})$/;   
		if(!re.test(val)){
			return 0;
		}else{
			return 1
		}
	}
	// 已登录
	function clickJinDanView(){
		var str = '';
		str +='<div class="bg-mask"></div>';
		str +='<div class="chouJiang">';
		str +='<p class="chouJiangTishi">请稍等...</p>';
		str +='<img class="caiDai" src="images/caidai.png" alt="彩带">';
		str +='<img class="imgDan" src="images/egg.png" alt="砸蛋" title="砸蛋">';
		str +='<img class="imgChuiZi" src="images/chuizi.png" alt="锤子">';
		str +='</div>';
		$('body').append(str);
		setTimeout(function(){
			$('.bg-mask').remove();
			$('.chouJiang').remove();
			jiangPinResult();
		},4500);
	}

	// 奖品
	function jiangPinResult(){
		var str = '';
		str += '<div class="bg-mask"></div>';
		str +='<div class="jiangPinResult">';
		str +='<img class="gongxi" src="images/gx.png" alt="恭喜你" title="恭喜">';
		str +='<p>获得500元现金</p>';
		str +='<img class="imgJiangPin" src="images/jiangpin.png" alt="奖品" title="奖品">';
		str +='<a href="#"><input class="btn_Get" value="领取奖品" type="button"></a>';
		str +='<img class="colseJiangPin" src="images/close.png" alt="关闭" title="关闭">';
		str +='</div>';

		$('body').append(str);
		setTimeout(function(){
			$('.jiangPinResult').addClass('active');
		},200);
	}

	return {
		clickDan:clickDan, //敲击蛋前判断是否登录
		jiangPinResult:jiangPinResult, //显示奖品的弹窗
		alertLogin:alertLogin,   //提示输入用户名
		isPhoneNumber:isPhoneNumber,   //验证电话号码
		clickJinDanView:clickJinDanView,    //显示敲击金蛋效果
	}
})