﻿// Set the chart width and height
function updateLayout() {
    var BODY_PADDING = 20;
    $("#cnvChart")
        .outerWidth($(window).width() - BODY_PADDING)
        .outerHeight($(window).height() - $("#divHeader").outerHeight() - BODY_PADDING);
}

$(document).ready(function () {
    // chart parameters must be defined in Chart.aspx
    var chart = new scada.chart.Chart($("#cnvChart"));
    chart.displaySettings = displaySettings;
    chart.timeRange = timeRange;
    chart.chartData = chartData;

    setTimeout(function () {
        updateLayout();
        chart.draw();
        chart.bindHintEvents();
    }, 0); // timeout is needed to open chart in a popup window in Firefox

    $(window).resize(function () {
        updateLayout();
        chart.draw();
    });
});