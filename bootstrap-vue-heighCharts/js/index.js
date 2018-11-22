/**
 * Created by feng on 2018/11/06.
 */

require(["jquery","vue","echarts","highcharts","bootstrap"], function ($,Vue,echarts,Highcharts) {
    $(function () {
        var vm = new Vue({
            el:"#app",
            data:{
                list:[],  //整体面板数据
            },
            mounted() {
                this.getData(),
                this.drawLine()
            },
            methods:{
                getData(){
                    $.ajax({
                        type: 'get',
                        url: 'http://192.168.3.20:7777/tao?&dateTime=2018-09-14&pid=666',
                        dataType: 'json',
                        success: res=> {
                            this.list = res;
                        }
                    });
                },
                drawLine(){
                    var chart = Highcharts.chart('panel-body', {
                        chart: {
                            type: 'line',
                            margin:[25,15,20,50],

                        },
                        title: {
                            text: '',
                            align:'left'
                        },
                        subtitle: {
                            text: ''
                        },
                        xAxis: {
                            // categories: [0,1,2,3,4,5,6,7,8,9,10,11,12,13,14],
                            lineColor: '#FF0000',
                            lineWidth: 1,
                            minPadding:0, 
                            startOnTick:false
                        },
                        yAxis: {
                            title: {
                                text: ''
                            },
                            // categories: [0,2000,4000,6000,8000,10000,12000],
                            lineColor: '#FF0000',
                            lineWidth: 1,
                            minPadding:0, 
                            startOnTick:false
                        },
                        plotOptions: {
                            line: {
                                dataLabels: {
                                    // 开启数据标签
                                    enabled: true          
                                },
                                // 关闭鼠标跟踪，对应的提示框、点击事件会失效
                                enableMouseTracking: false
                            }
                        },
                        series: [{
                            name: '转化趋势',
                            data: [135,5684,556,974,3564,8854,6754,3468,648,8552,7501,673,992,884,5684,556]
                        }, {
                            name: '销量走势',
                            data: [3468,648,8552,7501,673,992,884,135,5684,556,974,3564,8854,6754,673,1922],
                          
                        }],
                        legend:{
                            align:'right',
                            verticalAlign:'top',
                            y:-30
                        },
                        credits: {  
                            enabled: false     //不显示LOGO 
                        }  
                    });
                }
            }
        })
    })
})