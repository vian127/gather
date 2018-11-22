
var compute = {
    'city':['包头','北海','广州','郑州','长春','重庆','长沙','成都','丹东','大连','福州','海口','合肥','哈尔滨','舟山','银川','昆明','贵阳','兰州','拉萨','连云港','临沂','柳州','宁波','南宁','北京','沈阳','秦皇岛','西安','石家庄','汕头','深圳','青岛','济南','天津','太原','潍坊','威海','温州','武汉','厦门','西宁','徐州','烟台','珠海']
}
 var r1=new DigitRoll({
    container:'#xse_num',
    //width:9
});

//这里开始
// function getAjaxData () {
//     $.ajax({
//         //请求方式为get
//         type:"GET",
//         //json文件位置
//         url:"test.json",
//         //返回数据格式为json
//         dataType: "json",
//         //请求成功完成后要执行的方法
//         success: function(data){
//             addBox(data);
//         },
//         error:function (err) {  
//             console.log(err)
//         }
//     });
// };
function twoJson() {
    var arrFirst = [];
    $.ajax({
        type: "get",
        url: "use1.json",
        dataType: "json",
        success: function (res) {
            arrFirst = res.list;
            anotherAjax(arrFirst);
        },
        error:function (err) {  
            // console.log(err)
        }
    });
}
function anotherAjax(arr) {
    var arrSecond = [];
    $.ajax({
        type: "get",
        url: "use2.json",
        dataType: "json",
        success: function (res) {
            arrSecond = res.list;
            arr = arr.concat(arrSecond);
            otherAjax(arr);
        },
        error:function (err) {  
            console.log(err)
        }
    });
}
function otherAjax(arr) {
    var arrThrid = [];
    $.ajax({
        type: "get",
        url: "use3.json",
        dataType: "json",
        success: function (res) {
            arrThrid = res.list;
            arr = arr.concat(arrThrid);
            lastAjax(arr)
        }
    });
}
function lastAjax(arr) {
    var arrFourth = [];
    $.ajax({
        type: "get",
        url: "use4.json",
        dataType: "json",
        success: function (res) {
            arrFourth = res.list;
            arr = arr.concat(arrFourth);
            yesterday(arr);
        }
    });
}
// 昨日最高数据 文件 array.json
function yesterday(data) {  
    $.ajax({
        type: "get",
        url: "http://192.168.2.19/elevenday/server/array.json",
        dataType: "json",
        success: function (res) {
            addBox(data,res)
        }
    });
}


function addBox(data,beforeData){
    var shop = {
        "money":[
            {"shopName":"雷允上旗舰店","item":"1360000"},
            {"shopName":"北京同仁堂健康旗舰店","item":"11600000"},
            {"shopName":"恒寿堂旗舰店","item":"700000"},
            {"shopName":"普丽普莱海外旗舰店","item":"10777607"},
            {"shopName":"惠氏健康生活馆","item":"3000000"},
            {"shopName":"昂立旗舰店","item":"1500000"},
            {"shopName":"哈药官方旗舰店","item":"2005106"},
            {"shopName":"Gerber海外旗舰店","item":"9200000"},
            {"shopName":"Lansinoh兰思诺旗舰店","item":"1200000"},
            {"shopName":"Lansinoh海外旗舰店","item":"2000000"},
            {"shopName":"Vitabiotics海外旗舰店","item":"800000"},
            {"shopName":"KGC官方旗舰店","item":"12100000"},
            {"shopName":"强生医疗器械旗舰店","item":"4241235"},
            {"shopName":"Qualityfirst海外旗舰店","item":"3000000"},
            {"shopName":"Perrier海外旗舰店","item":"1200000"},
            {"shopName":"惠氏营养品海外旗舰店","item":"2000000"},
            {"shopName":"雀巢母婴海外旗舰店","item":"200000"},
            {"shopName":"京都念慈菴海外旗舰店","item":"400000"},
            {"shopName":"LittleRemedies海外旗舰店","item":"800000"},
            {"shopName":"TesoridOriented海外旗舰店","item":"1800000"},
            {"shopName":"heinz亨氏海外旗舰店","item":"450000"},
            {"shopName":"emergenc海外旗舰店","item":"1600000"},
            {"shopName":"KGC农仁专卖店","item":"200000"},
            {"shopName":"圣培海外露旗舰店","item":"200000"}]
        }; 
    
        
    var goodsSortData = $('.goodsSortData');
        goodsSortData.html("");
        goodsSortData.remove('.dn');

    // 截取最后金额
    (function lastTimeJudge() {  
        var lastTime = new Date();
        
        lastTime = lastTime.toLocaleTimeString('chinese',{hour12:false});
        // alert(11)
        if (lastTime == "23:59:00" || lastTime == "23:59:01" || lastTime == "23:59:02") {
            sendJson();
        }
        return beforeData;
    })();
    // sendJson();
    function sendJson() {
        var lastItem = [];
        $.each(beforeData.list, function (i, v) { 
            var obj = {};
            $.each(data, function (index, value) {
                if (beforeData.list[i].shopName == data[index].shopName) {
                    obj.shopName = beforeData.list[i].shopName;
                    obj.item = beforeData.list[i].item*1 + data[index].item*1;
                    obj.item = parseInt(obj.item);
                }
            });
            lastItem.push(obj);
        });
        beforeData.list = lastItem;
        $.ajax({
            type: "post",
            url: "http://127.0.0.1:3000/shenmegui",
            data: JSON.stringify(beforeData),
            contentType:"application/json",
            dataType: "json",
            success: function (res) {
                console.log(res)
                console.log(beforeData);
            },
            error:function (err) {
                console.log(err)
            }
        });
    }


    var rows = [];
    $.each(beforeData.list, function (i, v) { 
        var obj = {};
        $.each(data, function (index, value) { 
            if (beforeData.list[i].shopName == data[index].shopName) {
                obj.shopName = beforeData.list[i].shopName;
                obj.item = beforeData.list[i].item*1 + data[index].item*1;
                obj.item = parseInt(obj.item);
            }
        });
        rows.push(obj)
    });
    // console.log(rows)
    // console.log("asdasdasdasdasdasdas",rows)
    
    rows.sort(function(a,b){
        return b.item - a.item;
    });    

    $.each(rows,function(i,n){
        var strs = "";
        var shopName = rows[i].shopName;                
        var item = rows[i].item;

        if(shopName){              
            strs = $("<li class='dn'>"+
            "<div class='number'>"+
            "<span class='mark'>"+(i+1)+"</span>"+
            "</div>"+
            "<div class='shopName'>"+shopName+"</div>"+
            "<div class='money00'>"+item+"</div>"+
            "</li>");
            if(i==0){
                strs.addClass('first-l');                    
            }
            if(i==1){
                strs.addClass('first-s');                    
            }
            if(i==2){
                strs.addClass('first-t');                    
            }           
        }
        
        goodsSortData.append(strs);
    });
    // function formatNumber(num) {   
    // if(num.length <= 3){   
    //     return num;   
    // } else {   
    //     return formatNumber(num.substring(0,num.length-3))+','+num.substring(num.length-3);   
    // }   
//}   
    //达成率榜
    var shopsort = $('.shopsort');
        shopsort.html("");        
    var line = shop.money;

    $.each(rows,function(i,v){
        line.forEach((item) => {
            rows.forEach((a) => {
            if (item.shopName == a.shopName) {
                item.total = ((parseInt(a.item) / item.item) * 100).toFixed(2);
            }
        });
    });
    
    shop.money.sort((a, b) => {
        return b.total - a.total;
    });

    var str = "";
    var shopName = line[i].shopName;
    var shopId = line[i].total; 

        if(shopId){              
            str = $("<li class='dn'>"+
                "<div class='number'>"+
                "<span class='mark'>"+(i+1)+"</span>"+
                "</div>"+
                "<div class='shopName'>"+shopName+"</div>"+
                "<div class='money00'>"+shopId+"%"+"</div>"+
                "</li>");
            if(i==0){
                str.addClass('first-l');                    
            }
            if(i==1){
                str.addClass('first-s');                    
            }
            if(i==2){
                str.addClass('first-t');                    
            }
            
        }
        shopsort.append(str); 
    });

    /* 计算加总数据 */
    var totalV = $('#xse_num');
    //totalV.html("");
    var totolnub = 0;
    var totoltgt = 0;

    for(var i = 0; i < rows.length ; i++){
        /* 计算综合 */
        totolnub += Number(rows[i].item);
        if([line[i].item]){
            totoltgt += Number([line[i].item]);
        }
    }
    console.log(rows)
    //var result ='';
    //var str = String(totolnub);
    //var totalarr = str.split('');
    //for(var i = 0; i < totalarr.length ; i++ ) {
        //var temp = '<li class="li-bg">'+totalarr[i]+'</li>';
        //result = result + temp;
    //}
    //数字补零滚动
   
    r1.roll(totolnub);
     

    /* 进度条 */
     var barnum =((totolnub/totoltgt)*100).toFixed(2);
     bars(barnum);
    // compute.bars(60);
    /*进度条*/
    function bars (dataperc) {
        var t = $('#progressbar');
        var barperc = (dataperc*4).toFixed(2);
        t.find('.bar').animate({width:barperc}, dataperc*25);
        t.find('.label').append('<div class="perc"></div>');

        function perc() {
            var length = t.find('.bar').css('width'),
                perc = (parseInt(length)/4).toFixed(2),
                labelpos = (parseInt(length)-2);
            $('#line-num').text(perc+'%');
        }
        perc();
        setInterval(perc, 0);
    }
}
/**
 * 计算达成率&总额&总的达成率
 */
function gettarget() {

    
}


/**
 * 背景地图渲染
 */
function mapshow() {
    var arry_city = [];

    /* 产生随机的数据*/
    for (var i = 1; i <= 12; i++) {
        /* 产生随机数 */
        var val_n = parseInt(Math.floor(Math.random()*3+1)) ;
        var city_n = parseInt(Math.floor(Math.random()*45)) ;

        /* 构建数据 */
        var jsond = {}
        jsond.name = compute.city[city_n];
        jsond.value = val_n;

        /* 插入数组 */
        arry_city.push(jsond)
    }

    /* 加载js */
    require.config({
        paths:{
            "echarts":"build/dist/echarts",
            "echarts/chart/map":"build/dist/chart/map"
        }
    });
    //using
    require(
        [
            "echarts",
            "echarts/chart/map"
        ],
        function(ec){
            var myChart=ec.init(document.getElementById("map"));
            var option = {
                backgroundColor: 'rgba(0,0,0,0)',
                color: ['gold','aqua','lime'],
                title : {
                    // text: '模拟迁徙',
                    // subtext:'数据纯属虚构',
                    x:'center',
                    textStyle : {
                        color: '#fff'
                    }
                },
                tooltip : {
                    trigger: 'item',
                    formatter: '{b}'
                },
                areaStyle:{
                    color:"rgba(75,216,232,.5)"
                },
                series : [
                    {
                        name: '全国',
                        type: 'map',
                        roam: true,
                        hoverable: false,
                        mapType: 'china',
                        itemStyle:{
                            normal:{
                                borderColor:'rgba(100,149,237,1)',
                                borderWidth:0.5,
                                areaStyle:{
                                    color: 'rgba(75,216,232,.3)'
                                }
                            }
                        },
                        data:[],
                        markLine : {
                            smooth:true,
                            symbol: ['none', 'circle'],
                            symbolSize : 1,
                            itemStyle : {
                                normal: {
                                    color:'#fff',
                                    borderWidth:1,
                                    borderColor:'rgba(30,144,255,0.8)'
                                }
                            },
                            data : [                                
                                [{name:'上海'},{name:'包头'}],
                                [{name:'上海'},{name:'北海'}],
                                [{name:'上海'},{name:'广州'}],
                                [{name:'上海'},{name:'郑州'}],
                                [{name:'上海'},{name:'长春'}],
                                [{name:'上海'},{name:'重庆'}],
                                [{name:'上海'},{name:'长沙'}],
                                [{name:'上海'},{name:'成都'}],
                                [{name:'上海'},{name:'丹东'}],
                                [{name:'上海'},{name:'大连'}],
                                [{name:'上海'},{name:'福州'}],
                                [{name:'上海'},{name:'海口'}],
                                [{name:'上海'},{name:'呼和浩特'}],
                                [{name:'上海'},{name:'合肥'}],
                                [{name:'上海'},{name:'哈尔滨'}],
                                [{name:'上海'},{name:'舟山'}],
                                [{name:'上海'},{name:'银川'}],
                                [{name:'上海'},{name:'南昌'}],
                                [{name:'上海'},{name:'昆明'}],
                                [{name:'上海'},{name:'贵阳'}],
                                [{name:'上海'},{name:'兰州'}],
                                [{name:'上海'},{name:'拉萨'}],
                                [{name:'上海'},{name:'连云港'}],
                                [{name:'上海'},{name:'临沂'}],
                                [{name:'上海'},{name:'柳州'}],
                                [{name:'上海'},{name:'宁波'}],
                                [{name:'上海'},{name:'南宁'}],
                                [{name:'上海'},{name:'北京'}],
                                [{name:'上海'},{name:'沈阳'}],
                                [{name:'上海'},{name:'秦皇岛'}],
                                [{name:'上海'},{name:'西安'}],
                                [{name:'上海'},{name:'石家庄'}],
                                [{name:'上海'},{name:'汕头'}],
                                [{name:'上海'},{name:'深圳'}],
                                [{name:'上海'},{name:'青岛'}],
                                [{name:'上海'},{name:'济南'}],
                                [{name:'上海'},{name:'天津'}],
                                [{name:'上海'},{name:'太原'}],
                                [{name:'上海'},{name:'乌鲁木齐'}],
                                [{name:'上海'},{name:'潍坊'}],
                                [{name:'上海'},{name:'威海'}],
                                [{name:'上海'},{name:'温州'}],
                                [{name:'上海'},{name:'武汉'}],
                                [{name:'上海'},{name:'厦门'}],
                                [{name:'上海'},{name:'西宁'}],
                                [{name:'上海'},{name:'徐州'}],
                                [{name:'上海'},{name:'烟台'}],
                                [{name:'上海'},{name:'珠海'}],
                            ],
                        },
                        geoCoord: {
                            '上海': [121.4648,31.2891],
                            '东莞': [113.8953,22.901],
                            '东营': [118.7073,37.5513],
                            '中山': [113.4229,22.478],
                            '临汾': [111.4783,36.1615],
                            '临沂': [118.3118,35.2936],
                            '丹东': [124.541,40.4242],
                            '丽水': [119.5642,28.1854],
                            '乌鲁木齐': [87.9236,43.5883],
                            '佛山': [112.8955,23.1097],
                            '保定': [115.0488,39.0948],
                            '兰州': [103.5901,36.3043],
                            '包头': [110.3467,41.4899],
                            '北京': [116.4551,40.2539],
                            '北海': [109.314,21.6211],
                            '南京': [118.8062,31.9208],
                            '南宁': [108.479,23.1152],
                            '南昌': [116.0046,28.6633],
                            '南通': [121.1023,32.1625],
                            '厦门': [118.1689,24.6478],
                            '台州': [121.1353,28.6688],
                            '合肥': [117.29,32.0581],
                            '呼和浩特': [111.4124,40.4901],
                            '咸阳': [108.4131,34.8706],
                            '哈尔滨': [127.9688,45.368],
                            '唐山': [118.4766,39.6826],
                            '嘉兴': [120.9155,30.6354],
                            '大同': [113.7854,39.8035],
                            '大连': [122.2229,39.4409],
                            '天津': [117.4219,39.4189],
                            '太原': [112.3352,37.9413],
                            '威海': [121.9482,37.1393],
                            '宁波': [121.5967,29.6466],
                            '宝鸡': [107.1826,34.3433],
                            '宿迁': [118.5535,33.7775],
                            '常州': [119.4543,31.5582],
                            '广州': [113.5107,23.2196],
                            '廊坊': [116.521,39.0509],
                            '延安': [109.1052,36.4252],
                            '张家口': [115.1477,40.8527],
                            '徐州': [117.5208,34.3268],
                            '德州': [116.6858,37.2107],
                            '惠州': [114.6204,23.1647],
                            '成都': [103.9526,30.7617],
                            '扬州': [119.4653,32.8162],
                            '承德': [117.5757,41.4075],
                            '拉萨': [91.1865,30.1465],
                            '无锡': [120.3442,31.5527],
                            '日照': [119.2786,35.5023],
                            '昆明': [102.9199,25.4663],
                            '杭州': [119.5313,29.8773],
                            '枣庄': [117.323,34.8926],
                            '柳州': [109.3799,24.9774],
                            '株洲': [113.5327,27.0319],
                            '武汉': [114.3896,30.6628],
                            '汕头': [117.1692,23.3405],
                            '江门': [112.6318,22.1484],
                            '沈阳': [123.1238,42.1216],
                            '沧州': [116.8286,38.2104],
                            '河源': [114.917,23.9722],
                            '泉州': [118.3228,25.1147],
                            '泰安': [117.0264,36.0516],
                            '泰州': [120.0586,32.5525],
                            '济南': [117.1582,36.8701],
                            '济宁': [116.8286,35.3375],
                            '海口': [110.3893,19.8516],
                            '淄博': [118.0371,36.6064],
                            '淮安': [118.927,33.4039],
                            '深圳': [114.5435,22.5439],
                            '清远': [112.9175,24.3292],
                            '温州': [120.498,27.8119],
                            '渭南': [109.7864,35.0299],
                            '湖州': [119.8608,30.7782],
                            '湘潭': [112.5439,27.7075],
                            '滨州': [117.8174,37.4963],
                            '潍坊': [119.0918,36.524],
                            '烟台': [120.7397,37.5128],
                            '玉溪': [101.9312,23.8898],
                            '珠海': [113.7305,22.1155],
                            '盐城': [120.2234,33.5577],
                            '盘锦': [121.9482,41.0449],
                            '石家庄': [114.4995,38.1006],
                            '福州': [119.4543,25.9222],
                            '秦皇岛': [119.2126,40.0232],
                            '绍兴': [120.564,29.7565],
                            '聊城': [115.9167,36.4032],
                            '肇庆': [112.1265,23.5822],
                            '舟山': [122.2559,30.2234],
                            '苏州': [120.6519,31.3989],
                            '莱芜': [117.6526,36.2714],
                            '菏泽': [115.6201,35.2057],
                            '营口': [122.4316,40.4297],
                            '葫芦岛': [120.1575,40.578],
                            '衡水': [115.8838,37.7161],
                            '衢州': [118.6853,28.8666],
                            '西宁': [101.4038,36.8207],
                            '西安': [109.1162,34.2004],
                            '贵阳': [106.6992,26.7682],
                            '连云港': [119.1248,34.552],
                            '邢台': [114.8071,37.2821],
                            '邯郸': [114.4775,36.535],
                            '郑州': [113.4668,34.6234],
                            '鄂尔多斯': [108.9734,39.2487],
                            '重庆': [107.7539,30.1904],
                            '金华': [120.0037,29.1028],
                            '铜川': [109.0393,35.1947],
                            '银川': [106.3586,38.1775],
                            '镇江': [119.4763,31.9702],
                            '长春': [125.8154,44.2584],
                            '长沙': [113.0823,28.2568],
                            '长治': [112.8625,36.4746],
                            '阳泉': [113.4778,38.0951],
                            '青岛': [120.4651,36.3373],
                            '韶关': [113.7964,24.7028]
                        }
                    },
                    {
                        name: '上海 Top10',
                        type: 'map',
                        mapType: 'china',
                        data:[],
                        markLine : {
                            smooth:true,
                            effect : {
                                show: true,
                                scaleSize: 1,
                                period: 30,
                                color: '#fff',
                                shadowBlur: 10
                            },
                            itemStyle : {
                                normal: {
                                    borderWidth:1,
                                    lineStyle: {
                                        type: 'solid',
                                        shadowBlur: 10
                                    }
                                }
                            },
                            data : [
                                [{name:'上海'},arry_city[0]],
                                [{name:'上海'},arry_city[1]],
                                [{name:'上海'},arry_city[2]],
                                [{name:'上海'},arry_city[3]],
                                [{name:'上海'},arry_city[4]],
                                [{name:'上海'},arry_city[5]],
                                [{name:'上海'},arry_city[6]],
                                [{name:'上海'},arry_city[7]],
                                [{name:'上海'},arry_city[8]],
                                [{name:'上海'},arry_city[9]],
                                [{name:'上海'},arry_city[10]],
                                [{name:'上海'},arry_city[11]]
                            ]
                        },
                        markPoint : {
                            symbol:'emptyCircle',
                            symbolSize : function (v){
                                return 5 + v/5
                            },
                            effect : {
                                show: true,
                                shadowBlur : 0
                            },
                            itemStyle:{
                                normal:{
                                    label:{show:false}
                                },
                                emphasis: {
                                    label:{position:'top'}
                                }
                            },
                            data : arry_city
                        }
                    },
                ]
            };


            //loading data
            myChart.setOption(option,true);
        }
    );
}


/**
 * 数据本地存储
 * @param  {[type]} mark [description]
 * @param  {[type]} key  [description]
 * @param  {[type]} val  [description]
 * @return {[type]}      [description]
 */
compute.localData = function (mark, key, val) {
    if (window.localStorage) {
        if (mark == 0) {
            // 设置值
            localStorage.setItem(key, val);
        }
        if (mark == 1) {
            // 取值
            return localStorage.getItem(key);
        }
    } else {
        console.error('不支持本地存储');
    }
}

/**
 * 处理排序 & 计算总的payment
 * @param  {[type]} arr [description]
 * @return {[type]}     [description]
 */
function bubbleSort(arr,n) {
    if(n === 0){
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (Number(arr[j].payment) < Number(arr[j + 1].payment)) {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }

        }
        return arr;
    }else {
        var len = arr.length;
        for (var i = 0; i < len - 1; i++) {
            for (var j = 0; j < len - 1 - i; j++) {
                if (Number(arr[j].targets) < Number(arr[j + 1].targets)) {
                    var temp = arr[j + 1];
                    arr[j + 1] = arr[j];
                    arr[j] = temp;
                }
            }

        }
        return arr;
    }

}



/**
 *
 * @param id
 * @returns {number}
 */
function pdsex(id) {
    var last = id[id.length - 2];
    if (last % 2 != 0) {
        return 1;
    } else {
        return 0;
    }
}

/**
 *
 * @param num
 * @returns {string}
 */



/**
 * 获取时间  格式：2017-04-04 14:20:20
 */
 function clockon() {
    var now = new Date();
    var year = now.getFullYear();
    var month = now.getMonth();
    var date = now.getDate();
    var day = now.getDay();
    var hour = now.getHours();
    var minu = now.getMinutes();
    var sec = now.getSeconds();
    month = month + 1;
    if (month < 10) month = "0" + month;
    if (date < 10) date = "0" + date;
    if (hour < 10) hour = "0" + hour;
    if (minu < 10) minu = "0" + minu;
    if (sec < 10) sec = "0" + sec;
    var time = "";
    time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;

    $(".time-new").text(time);

}



/**
 * 初始化
 * @return {[type]} [description]
 */
// var timeEnd = setInterval(function () {
//     endtime();
// }, 1000);
$(function () {
    // getAjaxData();
    mapshow();
    clockon();
    // endtime();
    // twoJson();
    // setInterval(function(){     
    //     // getAjaxData();
    //     twoJson();
    // },3000);
    setInterval(function(){
        mapshow(); // 背景地图
    },10000);

    /* 加载时间 */
    setInterval(function () {
        clockon();
    }, 1000);

    /* 加载时间 */


})
