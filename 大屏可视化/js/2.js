$(function(){ 
    // 组合图表 - Chart1
    var chart1 = echarts.init(document.getElementById('chart1'));
    var option1 = {
        title: {
            text: '每月销售出库数量及预测误差'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'cross' }
        },
        legend: {
            data: ['预测销售出库数量', '实际销售出库数量', '预测误差率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["2020-06", "2020-07", "2020-08", "2020-09"]
        },
        yAxis: [
            {
                type: 'value',
                name: '销售出库数量'
            },
            {
                type: 'value',
                name: '预测误差率',
                axisLabel: {
                    formatter: '{value} %'
                }
            }
        ],
        series: [
            {
                name: '预测销售出库数量',
                type: 'bar',
                data: [1877652887, 1863042832, 1848409763, 1492593648]
            },
            {
                name: '实际销售出库数量',
                type: 'bar',
                data: [2434202680, 2498378836, 2452366469, 1904417394]
            },
            {
                name: '预测误差率',
                type: 'line',
                yAxisIndex: 1,
                data: [1.5766666666666667, 1.5703225806451613, 1.5106451612903224, 1.55375]
            }
        ]
    };
    chart1.setOption(option1);

    // 添加定时器逻辑，每隔1秒切换展示数据
    var currentIndex = -1;
    setInterval(function () {
        var dataLen = option1.series[0].data.length;
        // 取消之前高亮的图形
        chart1.dispatchAction({
            type: 'downplay',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        currentIndex = (currentIndex + 1) % dataLen;
        // 高亮当前图形
        chart1.dispatchAction({
            type: 'highlight',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
        // 显示 tooltip
        chart1.dispatchAction({
            type: 'showTip',
            seriesIndex: 0,
            dataIndex: currentIndex
        });
    }, 1000);
    
    // 柱状图 - Chart2
    var chart2 = echarts.init(document.getElementById('chart2'));
    var option2 = {
        title: {
            text: '物料等级分布'
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        xAxis: {
            type: 'category',
            data: ["c", "b", "a"]
        },
        yAxis: {
            type: 'value'
        },
        series: [{
            data: [107, 80, 80],
            type: 'bar'
        }]
    };
    chart2.setOption(option2);

    // 饼图 - Chart3
    var chart3 = echarts.init(document.getElementById('chart3'));
    var option3 = {
        title: {
            text: '负责人占比'
        },
        tooltip: {
            trigger: 'item',
            formatter: '{a} <br/>{b}: {c} ({d}%)'
        },
        series: [{
            name: '负责人',
            type: 'pie',
            radius: '50%',
            data: [{"name": "wsd", "value": 54}, {"name": "dkj", "value": 53}, {"name": "kkl", "value": 53}, {"name": "dsa", "value": 53}, {"name": "dd", "value": 27}, {"name": "zy", "value": 27}],
            emphasis: {
                itemStyle: {
                    shadowBlur: 10,
                    shadowOffsetX: 0,
                    shadowColor: 'rgba(0, 0, 0, 0.5)'
                }
            }
        }]
    };
    chart3.setOption(option3);



    // 切换主题
    var currentTheme = 'default';

    // 切换主题的函数
    function toggleTheme() {
        // 切换当前主题
        currentTheme = currentTheme === 'default' ? 'infographic' : 'default';

        // 重新初始化图表
        chart1.dispose();
        chart1 = echarts.init(document.getElementById('chart1'), currentTheme);
        chart2.dispose();
        chart2 = echarts.init(document.getElementById('chart2'), currentTheme);
        chart3.dispose();
        chart3 = echarts.init(document.getElementById('chart3'), currentTheme);

        // 设置主题
        chart1.setOption(option1);
        chart2.setOption(option2);
        chart3.setOption(option3);
    }

    // 绑定按钮点击事件
    $('#themeButton').click(toggleTheme);








});