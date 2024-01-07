$(function(){ 
    var xaData = [{"name": "\u7f3a\u8d27\u91d1\u989d", "type": "bar", "data": [1008165021]}, {"name": "\u7f3a\u8d27\u6570\u91cf", "type": "bar", "data": [1005612012]}, {"name": "\u95e8\u5e97\u8ba2\u8d27\u91cf", "type": "bar", "data": [1041610637]}, {"name": "\u5e93\u5b58\u91cf", "type": "bar", "data": [1020716935]}];
    var gdData = [{"name": "\u7f3a\u8d27\u91d1\u989d", "type": "bar", "data": [1039599720]}, {"name": "\u7f3a\u8d27\u6570\u91cf", "type": "bar", "data": [1029291397]}, {"name": "\u95e8\u5e97\u8ba2\u8d27\u91cf", "type": "bar", "data": [1031387666]}, {"name": "\u5e93\u5b58\u91cf", "type": "bar", "data": [1009517375]}];
    var szData = [{"name": "\u7f3a\u8d27\u91d1\u989d", "type": "bar", "data": [992543171]}, {"name": "\u7f3a\u8d27\u6570\u91cf", "type": "bar", "data": [1053178616]}, {"name": "\u95e8\u5e97\u8ba2\u8d27\u91cf", "type": "bar", "data": [991651154]}, {"name": "\u5e93\u5b58\u91cf", "type": "bar", "data": [1028724730]}];

    // 初始化图表
    var chart1 = echarts.init(document.getElementById('chart1'));

    // 定义更新图表的函数
    function updateChart(data) {
        var option1 = {
            title: {
                text: '仓库数据概览'
            },
            tooltip: {
                trigger: 'axis',
                axisPointer: { type: 'shadow' }
            },
            legend: {
                data: ['缺货金额', '缺货数量', '门店订货量', '库存量']
            },
            xAxis: {
                type: 'category',
                data: ['数据']
            },
            yAxis: {
                type: 'value'
            },
            series: data
        };
        chart1.setOption(option1);
    }

    // 绑定按钮事件
    document.getElementById('btnA').addEventListener('click', function () {
        updateChart(xaData);
    });
    document.getElementById('btnB').addEventListener('click', function () {
        updateChart(gdData);
    });
    document.getElementById('btnC').addEventListener('click', function () {
        updateChart(szData);
    });

    // 默认加载第一个仓库的数据
    updateChart(xaData);



    // 堆叠区域图 - Chart2
    var chart2 = echarts.init(document.getElementById('chart2'));
    var option2 = {
        title: {
            text: '水蜜桃 - 库存与订货量'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: {
                type: 'cross',
                label: {
                    backgroundColor: '#6a7985'
                }
            }
        },
        legend: {
            data: ['库存量', '门店订货量', '缺货数量']
        },
        toolbox: {
            feature: {
                saveAsImage: {}
            }
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
            data: ["2020-06-01", "2020-06-02", "2020-06-05", "2020-06-08", "2020-06-11", "2020-06-14", "2020-06-17", "2020-06-20", "2020-06-23", "2020-06-26", "2020-06-29", "2020-07-02", "2020-07-05", "2020-07-08", "2020-07-11", "2020-07-14", "2020-07-17", "2020-07-20", "2020-07-23", "2020-07-26", "2020-07-29", "2020-08-01", "2020-08-04", "2020-08-07", "2020-08-10", "2020-08-13"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '库存量',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [7848626, 15581673, 11101854, 13647565, 8623935, 12622177, 4299073, 12604721, 11662614, 18256971, 12221340, 6724219, 6776681, 21565799, 4025945, 5707311, 4509609, 15013529, 10258655, 4926427, 12219292, 13906314, 12751166, 10172955, 9977583, 7707462]
            },
            {
                name: '门店订货量',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [7044616, 10354814, 7008242, 9644740, 3632738, 9236609, 5035943, 9518229, 14602022, 10272500, 9573039, 11289307, 5779648, 16796228, 8854186, 7307188, 9955197, 17789969, 10196305, 5904558, 9004955, 8185618, 8665173, 14153672, 10340204, 18599705]
            },
            {
                name: '缺货数量',
                type: 'line',
                stack: '总量',
                areaStyle: {},
                data: [7123836, 9150539, 5677576, 12029711, 5623748, 20213858, 5934209, 7956997, 10499793, 8554901, 6495428, 7846604, 13377112, 10779363, 14565483, 7666757, 10099664, 16113678, 7582152, 3863534, 6174126, 15852176, 7054888, 5714355, 5572634, 14627005]
            }
        ]
    };
    chart2.setOption(option2);

    // 切换主题
    var currentTheme = 'default';

    // 切换主题的函数
    function toggleTheme() {
        // 切换当前主题
        currentTheme = currentTheme === 'default' ? 'infographic' : 'default';

        // 重新初始化图表
        chart1.dispose();
        chart1 = echarts.init(document.getElementById('chart1'), currentTheme);
        updateChart(xaData);
        
        chart2.dispose();
        chart2 = echarts.init(document.getElementById('chart2'), currentTheme);
        chart2.setOption(option2);
    }

    // 绑定按钮点击事件
    $('#themeButton').click(toggleTheme);



});