/**
 * Created by feng on 2018/11/06.
 */
require(["jquery", "echarts","artTemplate", "bootstrap"], function ($, echarts,template) {
    $(function () {
        var myChart = echarts.init(document.querySelector(".panel-body"));
        option = {
            title: {
                text: '折线图堆叠'
            },
            tooltip: {
                trigger: 'axis'
            },
            legend: {
                data: ['转化趋势率', '销量走势']
            },
            grid: {
                left: '3%',
                right: '4%',
                bottom: '3%',
                containLabel: true
            },
            xAxis: {
                type: 'category',
                boundaryGap: false,
                data: [0, 5, 10, 15, 20, 25, 30]
            },
            yAxis: {
                type: 'value'
            },
            series: [{
                    name: '转化趋势率',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                },
                {
                    name: '销量走势',
                    type: 'line',
                    stack: '总量',
                    data: [820, 932, 901, 934, 1290, 1330, 1320]
                }
            ]
        };
        myChart.setOption(option);
        
        $.ajax({
            type: 'get',
            url: 'http://192.168.3.20:7777/tao?&dateTime=2018-09-24&pid=666',
            dataType: 'json',
            success: function (res) {
				console.log(res)
				var result = res.sort(function(a,b){
					return parseInt(b.payAmt)-parseInt(a.payAmt)
				})
				
				
                $('tbody').html(template('tpl', {res}));
            }
        });


    })
})