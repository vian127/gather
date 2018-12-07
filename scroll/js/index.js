$(function () {

    ;
    (function () {
        var r1 = new DigitRoll({
            container: '#num-roll',
            width: 3
        });

        r1.roll(785545412);

        var arr = [
            {
                shopname: "Gerber官方海外旗舰店",
                uv: "86320",
                zzExpendAmt: "42249.32",
                cartCnt: "11690",
                p4pExpendAmt: "38670.04",
                payByrCnt: "4440",
                olderPayAmt: "167139.86",
                cartByrCnt: "4865",
                pv: "1201921",
                payRate: "5.14",
                payOrdCnt: "5906",
                payAmt: "336406.87",
                payOldByrCnt: "1703",
                tkExpendAmt: "277.36",
                payPct: "75.77",
                payItmCnt: "6466",
                rfdSucAmt: "18534.89",
                cltItmCnt: "4578",
                time: "2018-10-20"
            },
            {
                shopname: "lansinoh兰思诺旗舰店",
                uv: "11844",
                zzExpendAmt: "822.22",
                cartCnt: "995",
                p4pExpendAmt: "1784.96",
                payByrCnt: "182",
                olderPayAmt: "3041.00",
                cartByrCnt: "842",
                pv: "102327",
                payRate: "1.54",
                payOrdCnt: "191",
                payAmt: "13618.00",
                payOldByrCnt: "27",
                tkExpendAmt: "97.83",
                payPct: "74.82",
                payItmCnt: "195",
                rfdSucAmt: "2168.00",
                cltItmCnt: "1331",
                time: "2018-10-20"
            },
            {
                shopname: "Vitabiotics海外旗舰店",
                uv: "5705",
                zzExpendAmt: "8942.21",
                cartCnt: "345",
                p4pExpendAmt: "3786.96",
                payByrCnt: "105",
                olderPayAmt: "1692.00",
                cartByrCnt: "221",
                pv: "47920",
                payRate: "1.84",
                payOrdCnt: "108",
                payAmt: "9042.23",
                payOldByrCnt: "48",
                tkExpendAmt: "67.75",
                payPct: "86.12",
                payItmCnt: "121",
                rfdSucAmt: "534.13",
                cltItmCnt: "417",
                time: "2018-10-20"
            },
            {
                shopname: "kgc官方旗舰店",
                uv: "10659",
                zzExpendAmt: "9096.39",
                cartCnt: "246",
                p4pExpendAmt: "9733.08",
                payByrCnt: "39",
                olderPayAmt: "18986.00",
                cartByrCnt: "209",
                pv: "31580",
                payRate: "0.37",
                payOrdCnt: "51",
                payAmt: "192126.00",
                payOldByrCnt: "3",
                tkExpendAmt: "2741.24",
                payPct: "4926.31",
                payItmCnt: "37010",
                rfdSucAmt: "23199.00",
                cltItmCnt: "341",
                time: "2018-10-20"
            },
            {
                shopname: "强生医疗器械旗舰店",
                uv: "8639",
                zzExpendAmt: "11423.12",
                cartCnt: "546",
                p4pExpendAmt: "6153.28",
                payByrCnt: "420",
                olderPayAmt: "54030.00",
                cartByrCnt: "454",
                pv: "45815",
                payRate: "4.86",
                payOrdCnt: "434",
                payAmt: "127220.00",
                payOldByrCnt: "199",
                tkExpendAmt: "230.46",
                payPct: "302.90",
                payItmCnt: "490",
                rfdSucAmt: "6637.90",
                cltItmCnt: "322",
                time: "2018-10-20"
            },
            {
                shopname: "perrier海外旗舰店",
                uv: "4644",
                zzExpendAmt: "0",
                cartCnt: "120",
                p4pExpendAmt: "0",
                payByrCnt: "68",
                olderPayAmt: "795.85",
                cartByrCnt: "85",
                pv: "33919",
                payRate: "1.46",
                payOrdCnt: "69",
                payAmt: "1565.50",
                payOldByrCnt: "27",
                tkExpendAmt: "17.90",
                payPct: "23.02",
                payItmCnt: "69",
                rfdSucAmt: "132.33",
                cltItmCnt: "245",
                time: "2018-10-20"
            },
            {
                shopname: "圣培露海外旗舰店",
                uv: "2355",
                zzExpendAmt: "0",
                cartCnt: "0",
                p4pExpendAmt: "0",
                payByrCnt: "22",
                olderPayAmt: "7.00",
                cartByrCnt: "0",
                pv: "16891",
                payRate: "0.93",
                payOrdCnt: "22",
                payAmt: "67.00",
                payOldByrCnt: "7",
                tkExpendAmt: "0.04",
                payPct: "3.05",
                payItmCnt: "22",
                rfdSucAmt: "30.00",
                cltItmCnt: "119",
                time: "2018-10-20"
            },
            {
                shopname: "Heinz亨氏海外旗舰店",
                uv: "11178",
                zzExpendAmt: "56290.23",
                cartCnt: "489",
                p4pExpendAmt: "17475.94",
                payByrCnt: "158",
                olderPayAmt: "921.01",
                cartByrCnt: "291",
                pv: "73632",
                payRate: "1.41",
                payOrdCnt: "199",
                payAmt: "4747.27",
                payOldByrCnt: "74",
                tkExpendAmt: "22.93",
                payPct: "30.05",
                payItmCnt: "210",
                rfdSucAmt: "986.21",
                cltItmCnt: "244",
                time: "2018-10-20"
            },
            {
                shopname: "惠氏营养品海外旗舰店",
                uv: "14605",
                zzExpendAmt: "22928.76",
                cartCnt: "573",
                p4pExpendAmt: "6340.22",
                payByrCnt: "97",
                olderPayAmt: "11977.20",
                cartByrCnt: "384",
                pv: "88580",
                payRate: "0.66",
                payOrdCnt: "100",
                payAmt: "25786.00",
                payOldByrCnt: "47",
                tkExpendAmt: "175.56",
                payPct: "265.84",
                payItmCnt: "102",
                rfdSucAmt: "1635.48",
                cltItmCnt: "464",
                time: "2018-10-20"
            },
            {
                shopname: "雷允上旗舰店",
                uv: "7323",
                zzExpendAmt: "961.24",
                cartCnt: "91",
                p4pExpendAmt: "909.96",
                payByrCnt: "79",
                olderPayAmt: "891.00",
                cartByrCnt: "72",
                pv: "35395",
                payRate: "1.08",
                payOrdCnt: "84",
                payAmt: "3424.00",
                payOldByrCnt: "31",
                tkExpendAmt: "128.55",
                payPct: "43.34",
                payItmCnt: "88",
                rfdSucAmt: "1072.00",
                cltItmCnt: "443",
                time: "2018-10-20"
            },
            {
                shopname: "北京同仁堂健康旗舰店",
                uv: "54754",
                zzExpendAmt: "2422.83",
                cartCnt: "4686",
                p4pExpendAmt: "7295.36",
                payByrCnt: "560",
                olderPayAmt: "36767.00",
                cartByrCnt: "2799",
                pv: "301739",
                payRate: "1.02",
                payOrdCnt: "805",
                payAmt: "158379.00",
                payOldByrCnt: "112",
                tkExpendAmt: "318.77",
                payPct: "282.82",
                payItmCnt: "996",
                rfdSucAmt: "7460.00",
                cltItmCnt: "1894",
                time: "2018-10-20"
            },
            {
                shopname: "恒寿堂旗舰店",
                uv: "2459",
                zzExpendAmt: "0",
                cartCnt: "406",
                p4pExpendAmt: "987.58",
                payByrCnt: "127",
                olderPayAmt: "3031.00",
                cartByrCnt: "284",
                pv: "13723",
                payRate: "5.16",
                payOrdCnt: "139",
                payAmt: "10658.30",
                payOldByrCnt: "34",
                tkExpendAmt: "1081.71",
                payPct: "83.92",
                payItmCnt: "158",
                rfdSucAmt: "1483.16",
                cltItmCnt: "93",
                time: "2018-10-20"
            },
        ]
        var str1 = '',
            str2 = '';
        for (var i = 0; i < arr.length; i++) {
            if (i < 6) {
                if (i < 3) {
                    str1 += `
                <li> 123${arr[i].shopname}</li>
                `
                } else {
                    str1 += `
                <li>${arr[i].shopname}</li>
                `
                }

            } else {
                str2 += `
            <li>${arr[i].shopname}</li>
            `
            }
        }
        $('.left').html(str1)
        $('.right').html(str2)
        var arr2 = [
            {
                id: 1,
                name: 'xs',
                age: 18,
                score: 1,
                tend: 11
            },
            {
                id: 2,
                name: 'xs',
                age: 18,
                score: 2,
                tend: 12
            },
            {
                id: 3,
                name: 'xs',
                age: 18,
                score: 3,
                tend: 13
            },
            {
                id: 3,
                name: 'xs',
                age: 18,
                score: 4,
                tend: 14
            },
            {
                id: 1,
                name: 'xs',
                age: 18,
                score: 5,
                tend: 15
            },
            {
                id: 4,
                name: 'xs',
                age: 18,
                score: 6,
                tend: 16
            },
            {
                id: 3,
                name: 'xs',
                age: 18,
                score: 7,
                tend: 17
            },
            {
                id: 2,
                name: 'xs',
                age: 18,
                score: 8,
                tend: 18
            },
            {
                id: 4,
                name: 'xs',
                age: 18,
                score: 9,
                tend: 19
            },
            {
                id: 1,
                name: 'xs',
                age: 18,
                score: 10,
                tend: 20
            },
            {
                id: 1,
                name: 'xs',
                age: 18,
                score: 11,
                tend: 21
            },
        ];
    })()
    //时间倒计时 
    ;(function () {
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
            var time = "";
            if (month < 10) month = "0" + month;
            if (date < 10) date = "0" + date;
            if (hour < 10) hour = "0" + hour;
            if (minu < 10) minu = "0" + minu;
            if (sec < 10) sec = "0" + sec;
            time = year + "-" + month + "-" + date + " " + hour + ":" + minu + ":" + sec;
            $(".time-new").text(time);
        }

        lastTime();
        function lastTime() {
            var newsTime = new Date().getTime(); //当前时间
            var deadLine = new Date('2020-11-15 02:29:00').getTime(); //最终时间
            if (newsTime >= deadLine) {
                $(".time-new").text('2020-11-11 02:29:00');
                clearInterval(tirme);
            } else {
                clockon();
            }
        }
        var tirme = setInterval(lastTime, 1000);
    })()



    ;(function () {
        var data1 = [
            {
                shopName: "哈药官方旗舰店",
                item: "1189"
            },
            {
                shopName: "昂立旗舰店",
                item: "977"
            },
            {
                shopName: "QualityFirst海外旗舰店",
                item: "432"
            },
            {
                shopName: "TesoridOriente海外旗舰店",
                item: "47"
            },
            {
                shopName: "雷允上旗舰店",
                item: "314"
            },
            {
                shopName: "强生医疗器械旗舰店",
                item: "588"
            },
            {
                shopName: "Kgc官方旗舰店",
                item: "56868"
            },
            {
                shopName: "京都念慈庵海外旗舰店",
                item: "782"
            },
            {
                shopName: "Gerber官方海外旗舰店",
                item: "9646"
            },
            {
                shopName: "Heinz亨氏海外旗舰店",
                item: "1281"
            },
            {
                shopName: "LittleRemedies海外旗舰店",
                item: "28"
            },
            {
                shopName: "普丽普莱海外旗舰店",
                item: "8077"
            },
            {
                shopName: "惠氏健康生活馆",
                item: "76"
            },
            {
                shopName: "Perrier海外旗舰店",
                item: "267"
            },
            {
                shopName: "圣培露海外旗舰店",
                item: "13"
            },
            {
                shopName: "Vitabiotics海外旗舰店",
                item: "330"
            },
            {
                shopName: "Lansinoh海外旗舰店",
                item: "625"
            },
            {
                shopName: "Lansinoh兰思诺旗舰店",
                item: "96"
            },
            {
                shopName: "惠氏营养品海外旗舰店",
                item: "3980"
            },
            {
                shopName: "雀巢母婴海外旗舰店",
                item: "11"
            },
            {
                shopName: "北京同仁堂健康旗舰店",
                item: "3707"
            },
            {
                shopName: "Glanbia海外旗舰店",
                item: "50"
            },
            {
                shopName: "恒寿堂旗舰店",
                item: "72423"
            },
            {
                shopName: "Uncletobys海外旗舰店",
                item: "62"
            },
            {
                shopName: "Nulax海外旗舰店",
                item: "146"
            }
        ]
        var data2 = [
            {
                shopname: "哈药官方旗舰店",
                uv: 120644,
                zzExpendAmt: 97963.42000000001,
                cartCnt: 15781,
                p4pExpendAmt: 146673.84,
                payByrCnt: 1788.58,
                olderPayAmt: 32441.020000000004,
                cartByrCnt: 11320,
                pv: 619514,
                payRate: 29.210000000000008,
                payOrdCnt: 1772,
                payAmt: 203334.59,
                payOldByrCnt: 366.18,
                tkExpendAmt: 9863.150000000001,
                payPct: 2202.22,
                payItmCnt: 7606,
                rfdSucAmt: 55297.18000000001,
                cltItmCnt: 5463
            },
            {
                shopname: "Gerber官方海外旗舰店",
                uv: 1050899,
                zzExpendAmt: 433570.31000000006,
                cartCnt: 217283,
                p4pExpendAmt: 855767.98,
                payByrCnt: 22433,
                olderPayAmt: 784187.8499999999,
                cartByrCnt: 100419,
                pv: 17450107,
                payRate: 42.050000000000004,
                payOrdCnt: 31217,
                payAmt: 1710167.1899999997,
                payOldByrCnt: 8527,
                tkExpendAmt: 4392.230000000001,
                payPct: 1693.1499999999999,
                payItmCnt: 33670,
                rfdSucAmt: 131690.99000000005,
                cltItmCnt: 52738
            },
            {
                shopname: "Lansinoh兰思诺旗舰店",
                uv: 132428,
                zzExpendAmt: 5919.419999999999,
                cartCnt: 19769,
                p4pExpendAmt: 32528.56,
                payByrCnt: 2770,
                olderPayAmt: 37391.01,
                cartByrCnt: 15743,
                pv: 986885,
                payRate: 45.24999999999999,
                payOrdCnt: 2851,
                payAmt: 169862.05000000002,
                payOldByrCnt: 478,
                tkExpendAmt: 1048.63,
                payPct: 1205.9100000000003,
                payItmCnt: 2903,
                rfdSucAmt: 26693.41,
                cltItmCnt: 11571
            },
            {
                shopname: "Lansinoh海外旗舰店",
                uv: 291504,
                zzExpendAmt: 13790.750000000004,
                cartCnt: 37820,
                p4pExpendAmt: 36445.2,
                payByrCnt: 4409,
                olderPayAmt: 49083.770000000004,
                cartByrCnt: 30093,
                pv: 3714547,
                payRate: 32.129999999999995,
                payOrdCnt: 4580,
                payAmt: 316011.85000000003,
                payOldByrCnt: 645,
                tkExpendAmt: 1613.9499999999996,
                payPct: 1478.7399999999998,
                payItmCnt: 4656,
                rfdSucAmt: 46622.94,
                cltItmCnt: 23949
            },
            {
                shopname: "Vitabiotics海外旗舰店",
                uv: 79607,
                zzExpendAmt: 62542.509999999995,
                cartCnt: 8321,
                p4pExpendAmt: 57933.780000000006,
                payByrCnt: 2367.25,
                olderPayAmt: 49761.64000000001,
                cartByrCnt: 5789,
                pv: 689225,
                payRate: 61.22999999999999,
                payOrdCnt: 2367,
                payAmt: 136699.91,
                payOldByrCnt: 1087.47,
                tkExpendAmt: 9541.44,
                payPct: 1243.7900000000002,
                payItmCnt: 7317,
                rfdSucAmt: 20545.810000000005,
                cltItmCnt: 4718
            },
            {
                shopname: "Kgc官方旗舰店",
                uv: 511593,
                zzExpendAmt: 222130.50999999998,
                cartCnt: 13199,
                p4pExpendAmt: 237762.16999999998,
                payByrCnt: 1369,
                olderPayAmt: 1429329,
                cartByrCnt: 10460,
                pv: 961602,
                payRate: 10.469999999999997,
                payOrdCnt: 1563,
                payAmt: 3480126.2,
                payOldByrCnt: 83,
                tkExpendAmt: 25472.63,
                payPct: 60851.619999999995,
                payItmCnt: 794413,
                rfdSucAmt: 208745,
                cltItmCnt: 6673
            },
            {
                shopname: "强生医疗器械旗舰店",
                uv: 466708,
                zzExpendAmt: 94615.01000000001,
                cartCnt: 14468,
                p4pExpendAmt: 146021.62,
                payByrCnt: 2255,
                olderPayAmt: 246489,
                cartByrCnt: 10386,
                pv: 1029344,
                payRate: 24.239999999999995,
                payOrdCnt: 2336,
                payAmt: 613538,
                payOldByrCnt: 1023,
                tkExpendAmt: 1761.9499999999998,
                payPct: 5202.55,
                payItmCnt: 3599,
                rfdSucAmt: 64730.380000000005,
                cltItmCnt: 4625
            },
            {
                shopname: "Perrier海外旗舰店",
                uv: 52592,
                zzExpendAmt: 0,
                cartCnt: 3427,
                p4pExpendAmt: 0,
                payByrCnt: 612,
                olderPayAmt: 13774.55,
                cartByrCnt: 2427,
                pv: 445712,
                payRate: 24.689999999999998,
                payOrdCnt: 667,
                payAmt: 35296.95,
                payOldByrCnt: 236,
                tkExpendAmt: 164.46,
                payPct: 1362.95,
                payItmCnt: 667,
                rfdSucAmt: 1962.09,
                cltItmCnt: 2455
            },
            {
                shopname: "圣培露海外旗舰店",
                uv: 25728,
                zzExpendAmt: 0,
                cartCnt: 0,
                p4pExpendAmt: 35.57,
                payByrCnt: 257,
                olderPayAmt: 33,
                cartByrCnt: 0,
                pv: 173603,
                payRate: 24.520000000000003,
                payOrdCnt: 257,
                payAmt: 302,
                payOldByrCnt: 33,
                tkExpendAmt: 23.55,
                payPct: 23.05,
                payItmCnt: 257,
                rfdSucAmt: 157.63,
                cltItmCnt: 935
            },
            {
                shopname: "Heinz亨氏海外旗舰店",
                uv: 117794,
                zzExpendAmt: 240745.05999999994,
                cartCnt: 16851,
                p4pExpendAmt: 157895.30000000002,
                payByrCnt: 2570,
                olderPayAmt: 28413.34,
                cartByrCnt: 6730,
                pv: 1306696,
                payRate: 49.11999999999999,
                payOrdCnt: 3111,
                payAmt: 70429.7,
                payOldByrCnt: 1013,
                tkExpendAmt: 317.27,
                payPct: 624.1900000000002,
                payItmCnt: 3326,
                rfdSucAmt: 10557.060000000001,
                cltItmCnt: 3598
            },
            {
                shopname: "惠氏营养品海外旗舰店",
                uv: 327275,
                zzExpendAmt: 236090.03999999998,
                cartCnt: 12341,
                p4pExpendAmt: 382896.56999999995,
                payByrCnt: 2460,
                olderPayAmt: 274002.67,
                cartByrCnt: 8253,
                pv: 1706454,
                payRate: 16.999999999999996,
                payOrdCnt: 2579,
                payAmt: 496051.39,
                payOldByrCnt: 1202,
                tkExpendAmt: 6750.1399999999985,
                payPct: 4531.45,
                payItmCnt: 2869,
                rfdSucAmt: 90687.09999999999,
                cltItmCnt: 6704
            },
            {
                shopname: "雷允上旗舰店",
                uv: 90181,
                zzExpendAmt: 25924.69,
                cartCnt: 3883,
                p4pExpendAmt: 30019.190000000006,
                payByrCnt: 702,
                olderPayAmt: 16944.9,
                cartByrCnt: 2793,
                pv: 424508,
                payRate: 16.32,
                payOrdCnt: 740,
                payAmt: 43920.600000000006,
                payOldByrCnt: 215,
                tkExpendAmt: 3497.37,
                payPct: 1278.17,
                payItmCnt: 857,
                rfdSucAmt: 9782.99,
                cltItmCnt: 4618
            },
            {
                shopname: "北京同仁堂健康旗舰店",
                uv: 1485549,
                zzExpendAmt: 48507.92999999999,
                cartCnt: 149899,
                p4pExpendAmt: 136035.34999999998,
                payByrCnt: 12523,
                olderPayAmt: 592436,
                cartByrCnt: 85800,
                pv: 6102131,
                payRate: 19.08,
                payOrdCnt: 16999,
                payAmt: 2847753,
                payOldByrCnt: 1869,
                tkExpendAmt: 6267.45,
                payPct: 5232.929999999999,
                payItmCnt: 24601,
                rfdSucAmt: 269336.07,
                cltItmCnt: 35996
            },
            {
                shopname: "恒寿堂旗舰店",
                uv: 55739,
                zzExpendAmt: 2374,
                cartCnt: 13906,
                p4pExpendAmt: 40307.83,
                payByrCnt: 2515,
                olderPayAmt: 44659.700000000004,
                cartByrCnt: 10114,
                pv: 320695,
                payRate: 100.85999999999999,
                payOrdCnt: 2694,
                payAmt: 181282.80000000002,
                payOldByrCnt: 666,
                tkExpendAmt: 22250.479999999992,
                payPct: 1492.78,
                payItmCnt: 3115,
                rfdSucAmt: 12339.33,
                cltItmCnt: 5410
            },
            {
                shopname: "普丽普莱海外旗舰店",
                uv: 704413,
                zzExpendAmt: 203186.39,
                cartCnt: 68209,
                p4pExpendAmt: 235015.98,
                payByrCnt: 8108,
                olderPayAmt: 228794.46000000005,
                cartByrCnt: 38341,
                pv: 4557817,
                payRate: 35.02,
                payOrdCnt: 8819,
                payAmt: 813649.71,
                payOldByrCnt: 2440,
                tkExpendAmt: 26867.88,
                payPct: 2193.9300000000003,
                payItmCnt: 9510,
                rfdSucAmt: 100838.07000000002,
                cltItmCnt: 30867
            },
            {
                shopname: "惠氏健康生活馆",
                uv: 4212923,
                zzExpendAmt: 253526.66,
                cartCnt: 48870,
                p4pExpendAmt: 47576.219999999994,
                payByrCnt: 1840,
                olderPayAmt: 47075.700000000004,
                cartByrCnt: 29463,
                pv: 6099892,
                payRate: 11.299999999999999,
                payOrdCnt: 1950,
                payAmt: 228081.7,
                payOldByrCnt: 376,
                tkExpendAmt: 14649.98,
                payPct: 2337.8,
                payItmCnt: 2466,
                rfdSucAmt: 35784.03,
                cltItmCnt: 16398
            },
            {
                shopname: "昂立旗舰店",
                uv: 58910,
                zzExpendAmt: 47855.42,
                cartCnt: 7989,
                p4pExpendAmt: 45528.17,
                payByrCnt: 741,
                olderPayAmt: 33897.8,
                cartByrCnt: 4546,
                pv: 474141,
                payRate: 27.639999999999997,
                payOrdCnt: 755,
                payAmt: 86689.6,
                payOldByrCnt: 340,
                tkExpendAmt: 1860.0900000000004,
                payPct: 2503.14,
                payItmCnt: 885,
                rfdSucAmt: 22047,
                cltItmCnt: 3270
            },
            {
                shopname: "LittleRemedies海外旗舰店",
                uv: 117536,
                zzExpendAmt: 26239.11,
                cartCnt: 20836,
                p4pExpendAmt: 44712.59,
                payByrCnt: 4556,
                olderPayAmt: 49786.75,
                cartByrCnt: 14382,
                pv: 851289,
                payRate: 76.27000000000001,
                payOrdCnt: 4765,
                payAmt: 344673.05,
                payOldByrCnt: 658,
                tkExpendAmt: 22198.73,
                payPct: 1574.4699999999998,
                payItmCnt: 5489,
                rfdSucAmt: 23840.08,
                cltItmCnt: 6627
            },
            {
                shopname: "雀巢母婴海外旗舰店",
                uv: 80816,
                zzExpendAmt: 225131.83,
                cartCnt: 6514,
                p4pExpendAmt: 78514.01000000001,
                payByrCnt: 1458,
                olderPayAmt: 177823.71000000002,
                cartByrCnt: 4031,
                pv: 582132,
                payRate: 39,
                payOrdCnt: 1577,
                payAmt: 312097.55999999994,
                payOldByrCnt: 709,
                tkExpendAmt: 11905.54,
                payPct: 4540.110000000001,
                payItmCnt: 1838,
                rfdSucAmt: 38203.39,
                cltItmCnt: 2472
            },
            {
                shopname: "京都念慈庵海外旗舰店",
                uv: 352140,
                zzExpendAmt: 7951.669999999999,
                cartCnt: 6059,
                p4pExpendAmt: 32646.62,
                payByrCnt: 1027,
                olderPayAmt: 22554.350000000006,
                cartByrCnt: 3655,
                pv: 1145949,
                payRate: 19.900000000000006,
                payOrdCnt: 1194,
                payAmt: 142374.19999999998,
                payOldByrCnt: 152,
                tkExpendAmt: 4246.539999999999,
                payPct: 2913.1300000000006,
                payItmCnt: 1358,
                rfdSucAmt: 6076.53,
                cltItmCnt: 2228
            },
            {
                shopname: "TesoridOriente海外旗舰店",
                uv: 248928,
                zzExpendAmt: 12592.25,
                cartCnt: 32918,
                p4pExpendAmt: 49616.80000000001,
                payByrCnt: 2368.71,
                olderPayAmt: 20343.01,
                cartByrCnt: 26807,
                pv: 1609639,
                payRate: 19.28,
                payOrdCnt: 2505,
                payAmt: 173696,
                payOldByrCnt: 302.74,
                tkExpendAmt: 1590.2499999999998,
                payPct: 1617.9399999999996,
                payItmCnt: 34664,
                rfdSucAmt: 8959.61,
                cltItmCnt: 19506
            },
            {
                shopname: "QualityFirst海外旗舰店",
                uv: 307210,
                zzExpendAmt: 86792.14000000001,
                cartCnt: 53729,
                p4pExpendAmt: 63776.149999999994,
                payByrCnt: 3881,
                olderPayAmt: 24440.030000000006,
                cartByrCnt: 27973,
                pv: 2924076,
                payRate: 25.300000000000004,
                payOrdCnt: 4046,
                payAmt: 99892.26,
                payOldByrCnt: 889,
                tkExpendAmt: 19571.81,
                payPct: 731.4800000000001,
                payItmCnt: 4117,
                rfdSucAmt: 12595.060000000003,
                cltItmCnt: 28198
            },
            {
                shopname: "Glanbia海外旗舰店",
                uv: 27713,
                zzExpendAmt: 7612.679999999999,
                cartCnt: 3739,
                p4pExpendAmt: 11087.370000000003,
                payByrCnt: 134,
                olderPayAmt: 27298.309999999994,
                cartByrCnt: 1061,
                pv: 110773,
                payRate: 10.450000000000001,
                payOrdCnt: 241,
                payAmt: 51300.96999999999,
                payOldByrCnt: 54,
                tkExpendAmt: 8740.430000000002,
                payPct: 7025.340000000001,
                payItmCnt: 2546,
                rfdSucAmt: 8482.52,
                cltItmCnt: 999
            },
            {
                shopname: "Uncletobys海外旗舰店",
                uv: 15729,
                zzExpendAmt: 0,
                cartCnt: 1093,
                p4pExpendAmt: 8665.93,
                payByrCnt: 415,
                olderPayAmt: 605.98,
                cartByrCnt: 190,
                pv: 137228,
                payRate: 36.790000000000006,
                payOrdCnt: 420,
                payAmt: 3903.76,
                payOldByrCnt: 14,
                tkExpendAmt: 0,
                payPct: 1070.45,
                payItmCnt: 430,
                rfdSucAmt: 1893.7600000000002,
                cltItmCnt: 529
            },
            {
                shopname: "Nulax海外旗舰店",
                uv: 109104,
                zzExpendAmt: 17680.890000000003,
                cartCnt: 17552,
                p4pExpendAmt: 31936.84,
                payByrCnt: 4956,
                olderPayAmt: 115372.46,
                cartByrCnt: 10635,
                pv: 1138324,
                payRate: 77.99,
                payOrdCnt: 5156,
                payAmt: 385414.51999999996,
                payOldByrCnt: 957,
                tkExpendAmt: 2215.4599999999996,
                payPct: 2115.73,
                payItmCnt: 6348,
                rfdSucAmt: 23923.15,
                cltItmCnt: 7156
            },
            {
                shopname: "易恒健康医疗器械旗舰店",
                uv: 6811,
                zzExpendAmt: 0,
                cartCnt: 715,
                p4pExpendAmt: 6825.14,
                payByrCnt: 291,
                olderPayAmt: 14704.4,
                cartByrCnt: 594,
                pv: 16892,
                payRate: 91.37,
                payOrdCnt: 299,
                payAmt: 54590.310000000005,
                payOldByrCnt: 65,
                tkExpendAmt: 194.88,
                payPct: 3876.01,
                payItmCnt: 329,
                rfdSucAmt: 3748.3100000000004,
                cltItmCnt: 188
            }
        ]
        var shop = {
            "money": [{
                    "shopName": "雷允上旗舰店",
                    "item": "4000000"
                },
                {
                    "shopName": "北京同仁堂健康旗舰店",
                    "item": "34000000"
                },
                {
                    "shopName": "恒寿堂旗舰店",
                    "item": "800000"
                },
                {
                    "shopName": "普丽普莱海外旗舰店",
                    "item": "15000000"
                },
                {
                    "shopName": "惠氏健康生活馆",
                    "item": "8880000"
                },
                {
                    "shopName": "昂立旗舰店",
                    "item": "8000000"
                },
                {
                    "shopName": "哈药官方旗舰店",
                    "item": "5000000"
                },
                {
                    "shopName": "Gerber官方海外旗舰店",
                    "item": "20000000"
                },
                {
                    "shopName": "Lansinoh兰思诺旗舰店",
                    "item": "3000000"
                },
                {
                    "shopName": "Lansinoh海外旗舰店",
                    "item": "5000000"
                },
                {
                    "shopName": "Vitabiotics海外旗舰店",
                    "item": "3000000"
                },
                {
                    "shopName": "Kgc官方旗舰店",
                    "item": "12000000"
                },
                {
                    "shopName": "强生医疗器械旗舰店",
                    "item": "4700000"
                },
                {
                    "shopName": "QualityFirst海外旗舰店",
                    "item": "10000000"
                },
                {
                    "shopName": "Perrier海外旗舰店",
                    "item": "1200000"
                },
                {
                    "shopName": "惠氏营养品海外旗舰店",
                    "item": "10000000"
                },
                {
                    "shopName": "雀巢母婴海外旗舰店",
                    "item": "2000000"
                },
                {
                    "shopName": "京都念慈庵海外旗舰店",
                    "item": "600000"
                },
                {
                    "shopName": "LittleRemedies海外旗舰店",
                    "item": "1200000"
                },
                {
                    "shopName": "TesoridOriente海外旗舰店",
                    "item": "3000000"
                },
                {
                    "shopName": "Heinz亨氏海外旗舰店",
                    "item": "1000000"
                },
                // {"shopName": "易恒健康医疗器械旗舰店","item": "150000"},
                {
                    "shopName": "Glanbia海外旗舰店",
                    "item": "1000000"
                },
                {
                    "shopName": "Uncletobys海外旗舰店",
                    "item": "150000"
                },
                {
                    "shopName": "Nulax海外旗舰店",
                    "item": "4000000"
                },
                {
                    "shopName": "圣培露海外旗舰店",
                    "item": "100000"
                }
            ]
        };
        
        /*    第一种实现方式
        // 新数据老数据对应的金额汇总
        data1.forEach(function(v){
            data2.forEach(function(m){
                if(v.shopName == m.shopname){
                v.item = +v.item + m.payAmt
                }
            })
        })
        data1.sort(function(a,b){
            return a.item - b.item;
        })
        
        //数据汇总并计算百分比
        var targetAll = 0,nowTarget=0;
        data1.forEach(function(c){
            shop.money.forEach(function(d){
                if(c.shopName == d.shopName){
                    targetAll += +d.item;   // 目标总金额
                    nowTarget += c.item;    // 已售总金额
                    d.totals = ((c.item/d.item)*100).toFixed(2);
                }
            })
        })
        shop.money.sort(function(a,b){
            return b.totals - a.totals
        })
        console.log(targetAll,nowTarget)   */
        
        /* //第二种写法  生成一个最新的新数据数组*/ 
        var nowData = [];
        data1.forEach(function(v,i){
            var obj = {};
            data2.forEach(function(n,m){
                if(v.shopName == n.shopname){
                    obj.shopName = v.shopName;
                    obj.item = +v.item + n.payAmt;
                    // obj.item = parseInt(obj.item);
                }
            });
            nowData.push(obj);
        })
        // 给目标数组里添加一个完成百分比的totals属性 
        var line = shop.money,targetAll = 0,nowTarget=0;;
        nowData.forEach(function(v){
            line.forEach(function(n){
                if(v.shopName == n.shopName){
                    targetAll += +n.item;
                    nowTarget +=v.item;
                    n.totals = ((v.item/n.item)*100).toFixed(2);
                }
            })
        })

      console.log(targetAll,nowTarget)
  
    })()

    ;(function(){
        var obj ={a:'zs',b:'li',c:'ww'};
        var obj1 =$.extend(true,{},obj);  //深拷贝
        obj.d="ml";
        obj1.e = 'tq'
        console.log(obj,obj1)

        // map方法不会改变原数组
        var a = [1,2,3,4,5]
        var result = a.map(function(v,i){
          return v*10
        })
        
        // find方法会返回第一个符合条件的数据
        var ages = [
            {id:1,name:'zs',age:11},
            {id:2,name:'ls',age:32},
            {id:3,name:'ws',age:31},
            {id:4,name:'ms',age:35},
        ];
        var result = ages.find(function(v,i){
            return v.id == 2
        });
        //filter方法不会改变原数组
        var b = [1,2,3,4,5,6,7,8,9]
        var result1 = b.filter(function(v){
            return v > 3 && v < 8
        });

        var str='';
        ages.forEach(function(v){
            str+=`<p>id:${v.id}=原始数据=>name:${ v.name }==>age:${v.age}</p>`
        })
        $('.data1').html(str);

        var result2=ages.sort(function(a,b){
            return b.id - a.id
        })
       var str1 ='';
       result2.forEach(function(v,i){
        //    str1 +=`<p>${ v.id }==id排序==>${v.name}</p>`
              str1 +='<p>' +v.id+'=按id排序==>'+v.name+'==>age'+v.age+'</p>'
       })

       $('.data2').html(str1)
       var str2= '';
       var result3 = ages.sort(function(a,b){
           return b.age - a.age
       })
        result3.forEach(function(v){
            str2+=`<strong>${ v.id } ===按年龄排序===> ${ v.name }</strong></br>`
        })
        $('.data3').append(str2);
        console.log(ages)
    })()

    ;(function(){
        var set = new Set([1,2,3,4,5,2,5,3]);
        var result = [...set];
        console.log(result); //[1,2,3,4,5]
    })()

})