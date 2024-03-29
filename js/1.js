$(function(){
    // 折线图 - Chart1
    var chart1 = echarts.init(document.getElementById('chart1'));
    var option1 = {
        title: {
            text: '物料计划指标趋势',
            padding: [20, 0, 0, 0]
        },
        tooltip: {
            trigger: 'axis'
        },
        legend: {
            data: ['物料计划准确率', '物料计划达成率']
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
            data: ["2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10", "2020-06-11", "2020-06-12", "2020-06-13", "2020-06-14", "2020-06-15", "2020-06-16", "2020-06-17", "2020-06-18", "2020-06-19", "2020-06-20", "2020-06-21", "2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26", "2020-06-27", "2020-06-28", "2020-06-29", "2020-06-30", "2020-07-01", "2020-07-02", "2020-07-03", "2020-07-04", "2020-07-05", "2020-07-06", "2020-07-07", "2020-07-08", "2020-07-09", "2020-07-10", "2020-07-11", "2020-07-12", "2020-07-13", "2020-07-14", "2020-07-15", "2020-07-16", "2020-07-17", "2020-07-18", "2020-07-19", "2020-07-20", "2020-07-21", "2020-07-22", "2020-07-23", "2020-07-24", "2020-07-25", "2020-07-26", "2020-07-27", "2020-07-28", "2020-07-29", "2020-07-30", "2020-07-31"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '物料计划准确率',
                type: 'line',
                data: [1.15, 0.88, 0.97, 1.12, 0.78, 0.83, 0.59, 0.75, 0.66, 1.07, 0.74, 0.94, 0.71, 0.63, 0.81, 0.69, 0.51, 0.68, 0.89, 1.11, 0.66, 0.82, 0.73, 0.64, 0.83, 0.72, 0.75, 1.16, 0.84, 0.67, 1.2, 1.2, 1.0, 0.88, 0.5, 1.07, 0.58, 0.56, 1.06, 0.76, 0.63, 1.0, 0.86, 0.66, 0.93, 1.08, 0.93, 0.59, 0.75, 1.02, 0.54, 0.61, 1.03, 0.51, 0.89, 0.61, 0.76, 0.58, 0.73, 0.5, 1.12]
            },
            {
                name: '物料计划达成率',
                type: 'line',
                data: [0.91, 0.88, 0.8, 0.86, 0.61, 0.85, 0.91, 1.0, 0.61, 0.64, 0.7, 0.79, 0.93, 0.69, 0.86, 0.64, 0.83, 0.62, 0.99, 0.65, 0.84, 0.76, 0.77, 0.92, 0.9, 0.81, 0.78, 0.86, 0.74, 0.93, 0.86, 0.61, 0.99, 0.85, 0.84, 0.78, 0.79, 0.77, 0.73, 0.84, 0.63, 0.64, 0.74, 0.94, 0.7, 0.85, 0.67, 0.75, 0.9, 0.81, 0.9, 0.95, 0.93, 0.65, 0.95, 0.77, 0.64, 0.66, 0.78, 0.89, 0.86]
            }
        ]
    };
    chart1.setOption(option1);

    // 柱状图 - Chart2
    var chart2 = echarts.init(document.getElementById('chart2'));
    var option2 = {
        title: {
            text: '关键指标对比',
            padding: [20, 0, 0, 0]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ['饮品预测准确率', '库存周转天期', '订单达成率']
        },
        grid: {
            left: '3%',
            right: '4%',
            bottom: '3%',
            containLabel: true
        },
        xAxis: {
            type: 'category',
            data: ["2020-06-01", "2020-06-02", "2020-06-03", "2020-06-04", "2020-06-05", "2020-06-06", "2020-06-07", "2020-06-08", "2020-06-09", "2020-06-10", "2020-06-11", "2020-06-12", "2020-06-13", "2020-06-14", "2020-06-15", "2020-06-16", "2020-06-17", "2020-06-18", "2020-06-19", "2020-06-20", "2020-06-21", "2020-06-22", "2020-06-23", "2020-06-24", "2020-06-25", "2020-06-26", "2020-06-27", "2020-06-28", "2020-06-29", "2020-06-30", "2020-07-01", "2020-07-02", "2020-07-03", "2020-07-04", "2020-07-05", "2020-07-06", "2020-07-07", "2020-07-08", "2020-07-09", "2020-07-10", "2020-07-11", "2020-07-12", "2020-07-13", "2020-07-14", "2020-07-15", "2020-07-16", "2020-07-17", "2020-07-18", "2020-07-19", "2020-07-20", "2020-07-21", "2020-07-22", "2020-07-23", "2020-07-24", "2020-07-25", "2020-07-26", "2020-07-27", "2020-07-28", "2020-07-29", "2020-07-30", "2020-07-31"]
        },
        yAxis: {
            type: 'value'
        },
        series: [
            {
                name: '饮品预测准确率',
                type: 'bar',
                data: [0.58, 0.53, 0.97, 0.67, 0.75, 0.69, 0.95, 0.8, 0.64, 0.8, 0.67, 0.74, 1.04, 0.59, 0.58, 0.83, 0.86, 0.52, 1.17, 0.99, 1.0, 0.52, 0.86, 1.0, 0.89, 0.72, 0.63, 1.02, 1.09, 1.02, 1.05, 0.77, 0.71, 0.5, 1.0, 0.81, 1.09, 0.95, 0.81, 0.96, 0.78, 0.54, 0.62, 0.52, 1.0, 0.84, 0.75, 0.74, 0.77, 0.87, 0.77, 0.56, 1.12, 0.54, 1.17, 0.84, 0.74, 1.19, 0.74, 1.09, 1.2]
            },
            {
                name: '库存周转天期',
                type: 'bar',
                data: [4, 8, 3, 4, 5, 8, 1, 10, 5, 3, 4, 8, 5, 10, 3, 5, 2, 1, 10, 5, 4, 10, 6, 10, 8, 2, 4, 7, 3, 7, 5, 3, 3, 6, 4, 7, 5, 7, 2, 6, 5, 5, 3, 9, 1, 2, 6, 10, 8, 3, 1, 5, 10, 6, 10, 8, 7, 2, 1, 3, 5]
            },
            {
                name: '订单达成率',
                type: 'bar',
                data: [0.98, 0.92, 0.81, 0.95, 0.62, 0.65, 0.76, 0.96, 0.99, 0.66, 0.8, 0.61, 0.72, 0.84, 0.72, 0.85, 0.86, 0.92, 1.0, 0.8, 0.97, 0.85, 0.9, 0.75, 0.86, 0.64, 0.69, 0.92, 0.87, 0.67, 0.66, 0.78, 0.75, 0.8, 0.8, 0.79, 0.94, 0.8, 0.92, 0.65, 1.0, 0.66, 0.67, 0.9, 0.85, 0.68, 0.95, 0.96, 0.64, 0.96, 0.63, 0.81, 0.77, 0.66, 0.87, 0.86, 0.92, 0.93, 0.91, 0.64, 0.97]
            }
        ]
    };
    chart2.setOption(option2);


    // 堆叠柱状图 - Chart3
    var chart3 = echarts.init(document.getElementById('chart3'));
    var option3 = {
        title: {
            text: '按月份展示物料分类的出库汇总',
            padding: [20, 0, 0, 0]
        },
        tooltip: {
            trigger: 'axis',
            axisPointer: { type: 'shadow' }
        },
        legend: {
            data: ["\u5305\u88c5", "\u5976\u7c7b", "\u6c34\u679c", "\u98df\u6750"]
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
        yAxis: {
            type: 'value'
        },
        series: [{"name": "\u5305\u88c5", "type": "bar", "stack": "\u603b\u91cf", "data": [27736230, 27716726, 29390410, 21005385]}, {"name": "\u5976\u7c7b", "type": "bar", "stack": "\u603b\u91cf", "data": [28188722, 34180404, 35872041, 17761030]}, {"name": "\u6c34\u679c", "type": "bar", "stack": "\u603b\u91cf", "data": [29356163, 30215472, 29010635, 20523890]}, {"name": "\u98df\u6750", "type": "bar", "stack": "\u603b\u91cf", "data": [31404468, 35078207, 32390051, 17786460]}]
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