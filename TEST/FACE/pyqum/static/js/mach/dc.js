// Variables first:
var VSP_ticks = [0,2,4,6,8,10,12];
var gaugeVSP = new LinearGauge({
    //Plate
    renderTo: 'canvas-VSP', width: 100, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 10, "color": "rgba(100, 255, 100, .2)"}, {"from": 10, "to": 12, "color": "rgb(33, 247, 26)"}],
    //value box
    valueBox: true, fontValueSize: 35, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit //units: "Vs+(V)", 
    fontNumbersWeight: 800, fontNumbersSize: 35, colorUnits: 'blue', minValue: 0, maxValue: 12, minorTicks: 2, strokeTicks: true,
    majorTicks: VSP_ticks, tickSide: "left", numberSide: "left", needleSide: "left", barStrokeWidth: 2.5, barBeginCircle: false, barWidth: 20,
    colorBarStroke: 'blue', colorBar: 'lightyellow', colorBarProgress: 'purple',
    // Needle
    needleType: "arrow", needleWidth: 3.5, animationDuration: 800, animationRule: "linear"
}).draw();

var VSN_ticks = ['-12','-10','-8','-6','-4','-2','0'];
var gaugeVSN = new LinearGauge({
    //Plate
    renderTo: 'canvas-VSN', width: 100, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": -10, "to": 0, "color": "rgba(100, 255, 100, .2)"}, {"from": -12, "to": -10, "color": "rgb(33, 247, 26)"}],
    //value box
    valueBox: true, fontValueSize: 35, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit //units: "Vs+(V)", 
    fontNumbersWeight: 800, fontNumbersSize: 35, colorUnits: 'blue', minValue: -12, maxValue: 0, minorTicks: 2, strokeTicks: true,
    majorTicks: VSN_ticks, tickSide: "right", numberSide: "right", needleSide: "right", barStrokeWidth: 2.5, barBeginCircle: false, barWidth: 20,
    colorBarStroke: 'blue', colorBar: 'purple', colorBarProgress: 'lightyellow',
    // Needle
    needleType: "arrow", needleWidth: 3.5, animationDuration: 800, animationRule: "linear"
}).draw();

var Rb_ticks = ["100","1K","10K","100K","1M","10M","100M","1G","10G","100G"];
var gaugeRb = new RadialGauge({
    title: 'Rb', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-Rb', width: 250, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 7, "color": "rgba(100, 255, 100, .2)"}, {"from": 7, "to": 9, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: true, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "Ohm", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 9, minorTicks: 2, strokeTicks: true,
    majorTicks: Rb_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear"
}).draw();

var Div_ticks = ['1','3','10','30','100','300','1K','3K','10K','30K','100K'];
var gaugeDiv = new RadialGauge({
    title: 'Divided', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-Div', width: 250, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 8, "color": "rgba(100, 255, 100, .2)"}, {"from": 8, "to": 10, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: true, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "by", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 10, minorTicks: 2, strokeTicks: true,
    majorTicks: Div_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear"
}).draw();

var Vg1_ticks = ["OFF", "1/100", "1/50", "1/10", "I", "Vext"];
var gaugeVg1 = new RadialGauge({
    title: 'Vg 1', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-Vg1', width: 250, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 4, "color": "rgba(100, 255, 100, .2)"}, {"from": 4, "to": 5, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: true, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "by", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 5, minorTicks: 2, strokeTicks: true,
    majorTicks: Vg1_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear",
    // Angle
    startAngle: 90, ticksAngle: 180
}).draw();

var Vg2_ticks = ["OFF", "1/100", "1/50", "1/10", "I", "Vext"];
var gaugeVg2 = new RadialGauge({
    title: 'Vg 2', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-Vg2', width: 250, height: 250, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 4, "color": "rgba(100, 255, 100, .2)"}, {"from": 4, "to": 5, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: true, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "by", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 5, minorTicks: 2, strokeTicks: true,
    majorTicks: Vg2_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear",
    // Angle
    startAngle: 90, ticksAngle: 180
}).draw();

var gain1_ticks = ['1','10','100','1K','5K','10K'];
var gaugegain1 = new RadialGauge({
    title: 'Gain 1', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-gain1', width: 210, height: 210, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 0, "to": 3, "color": "rgba(100, 255, 100, .2)"}, {"from": 3, "to": 5, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: false, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "by", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 5, minorTicks: 2, strokeTicks: true,
    majorTicks: gain1_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear",
    // Angle
    startAngle: 0, ticksAngle: 180
}).draw();

var gain2_ticks = ['1','10','100','1K','5K','10K'].reverse();
var gaugegain2 = new RadialGauge({
    title: 'Gain 2', colorTitle: 'purple', fontTitleSize: 30, fontTitleWeight: 777,
    //Plate
    renderTo: 'canvas-gain2', width: 210, height: 210, colorPlate: "#fff", borderShadowWidth: 0, borders: false, 
    highlights: [{"from": 2, "to": 5, "color": "rgba(100, 255, 100, .2)"}, {"from": 0, "to": 2, "color": "rgba(220, 200, 0, .75)"}],
    //value box
    valueBox: false, fontValueSize: 27, colorValueText: 'black', colorValueBoxBackground: 'red', fontValueWeight: 777,
    // Numbers & Unit
    fontNumbersWeight: 800, fontNumbersSize: 27, fontUnitsWeight: 700, units: "by", fontUnitsSize: 18, colorUnits: 'blue', minValue: 0, maxValue: 5, minorTicks: 2, strokeTicks: true,
    majorTicks: gain2_ticks, 
    // Needle
    needleType: "arrow", needleWidth: 2, needleCircleSize: 7, needleCircleOuter: true, needleCircleInner: false,
    animationDuration: 800, animationRule: "linear",
    // Angle
    startAngle: 180, ticksAngle: 180
}).draw();

//when page is loading:
$(document).ready(function(){
    $('div.dccontent').hide();
    $('a.dc.ampscan').hide();
});

//show amplifier's page
$(function() {
    $('button.dc#amplifier').bind('click', function() {
        $('div.dc-ind').hide();
        $('div.dccontent').hide();
        $('div.dccontent#amplifier').show();
        $('button.dc').removeClass('selected');
        $('button.dc#amplifier').addClass('selected');
        return false;
    });
});

//toggle amplifier status
$(function () {
    $('input.dc#on-amplifier').click(function () { 
        //indicate it is still running:
        $( "i.dc" ).remove(); //clear previous
        $('button.dc#amplifier').prepend("<i class='dc fa fa-cog fa-spin fa-3x fa-fw' style='font-size:15px;color:purple;'></i> ");
        var ampstat = $('input.dc#on-amplifier').is(':checked'); //use css to respond to click / touch
        $.getJSON('/mach'+'/dc/amplifier', {
            ampstat: ampstat
        }, function (data) {
            console.log('Amplifier-state: ' + data.ampstat);
            // indicate finished running
            $( "i.dc" ).remove(); //clear processing animation
            if (ampstat == true) {
                $('a.dc.ampscan').show(); //showing scan button
                // LIVE AMPLIFIER SENSING:
                var amploop = setInterval( function() {
                    $.getJSON('/mach'+'/dc/amplifier/sense', {
                    }, function (data) {
                        $('canvas.dc.ampgauges').show();
                        if (data.state == true) {
                            $('div.dc-ind').hide();
                            // display button indicator based on backend
                            if (data.Sym == "Single-end") { $('div.dc-ind.SE').show(); };
                            if (data.Sym == "differential") { $('div.dc-ind.DIFF').show(); };
                            if (data.BM == "Current") { $('div.dc-ind.Current').show(); };
                            if (data.BM == "Voltage") { $('div.dc-ind.Voltage').show(); };

                            // Update the Gauge based on backend
                            gaugeVSP.update({
                                valueText: data.VSP + 'V',
                                colorValueBoxBackground: 'lightblue'
                            });
                            gaugeVSP.value = data.VSP; // needle position
                            gaugeVSN.update({
                                valueText: data.VSN + 'V',
                                colorValueBoxBackground: 'lightblue'
                            });
                            gaugeVSN.value = data.VSN; // needle position

                            gaugeRb.update({
                                valueText: data.Rb,
                                colorValueBoxBackground: 'rgb(6, 233, 63)'
                            });
                            gaugeRb.value = Rb_ticks.indexOf(data.Rb);
                            gaugeDiv.update({
                                valueText: data.Div,
                                colorValueBoxBackground: 'lightblue'
                            });
                            gaugeDiv.value = Div_ticks.indexOf(data.Div); // needle position
                    
                            gaugeVg1.update({
                                valueText: data.Vg1,
                                colorValueBoxBackground: 'rgb(250, 210, 30)'
                            });
                            gaugeVg1.value = Vg1_ticks.indexOf(data.Vg1);
                            gaugeVg2.update({
                                valueText: data.Vg2,
                                colorValueBoxBackground: 'rgb(240, 122, 220)'
                            });
                            gaugeVg2.value = Vg2_ticks.indexOf(data.Vg2);
                            gaugegain1.value = gain1_ticks.indexOf(data.gain1);
                            gaugegain2.value = gain2_ticks.indexOf(data.gain2);

                        } else {
                            //in case other user close the instrument:
                            console.log('Amplifier-state: ' + data.state);
                            $('input.dc#on-amplifier').prop('checked',false);
                            gaugeDiv.update({colorValueBoxBackground: 'red' });
                            gaugeRb.update({colorValueBoxBackground: 'red' });
                            gaugeVSP.update({colorValueBoxBackground: 'red' });
                            gaugeVSN.update({colorValueBoxBackground: 'red' });
                            gaugeVg1.update({colorValueBoxBackground: 'red' });
                            gaugeVg2.update({colorValueBoxBackground: 'red' });
                            clearInterval(amploop);
                        };
                    });
                }, 1200);
                $('input.dc#on-amplifier').click(function () {
                    clearInterval(amploop); 
                });
            } else { 
                $('a.dc.ampscan').hide();
                gaugeRb.update({colorValueBoxBackground: 'grey' });
                gaugeDiv.update({colorValueBoxBackground: 'grey' });
                gaugeVSP.update({colorValueBoxBackground: 'grey' });
                gaugeVSN.update({colorValueBoxBackground: 'grey' });
                gaugeVg1.update({colorValueBoxBackground: 'grey' });
                gaugeVg2.update({colorValueBoxBackground: 'grey' }); }
        });
    });
});


// on-fly settings
$(function () {
    $('select.dc#history').on('change', function () {
        var P_Ch = $('select.dc[name="P_Ch"]').val();
        var T_Ch = $('select.dc[name="T_Ch"]').val();
        var P_Ch2 = $('select.dc[name="P_Ch2"]').val();
        var T_Ch2 = $('select.dc[name="T_Ch2"]').val();
        $.getJSON('/mach/dc/history', {
            // input value here:
            wday: $('select.dc[name="wday"]').val(),
            P_Ch: P_Ch, T_Ch: T_Ch, P_Ch2: P_Ch2, T_Ch2: T_Ch2
        }, function (data) {
            
            let traceP = {x: [], y: [], mode: 'lines', type: 'scatter', 
                name: 'P' + P_Ch,
                line: {color: 'rgb(23, 151, 6)', width: 3} };
            let traceP2 = {x: [], y: [], mode: 'lines', type: 'scatter', 
                name: 'P' + P_Ch2,
                line: {color: 'blue', width: 3} };

            let traceT = {x: [], y: [], mode: 'lines', type: 'scatter', 
                name: 'T' + T_Ch,
                line: {color: 'brown', width: 3}, yaxis: 'y2' };
            let traceT2 = {x: [], y: [], mode: 'lines', type: 'scatter', 
                name: 'T' + T_Ch2,
                line: {color: 'red', width: 3}, yaxis: 'y2' };
            
            let layout = {
                legend: {x: 1.08},
                height: $(window).height()*0.8,
                width: $(window).width()*0.75,
                xaxis: {
                    zeroline: false,
                    title: "<b>time(hr)</b>",
                    titlefont: {size: 18},
                    tickfont: {size: 18},
                    tickwidth: 3,
                    linewidth: 3 
                },
                yaxis: {
                    zeroline: false,
                    //title: "<b>P(mbar)</b><br>",
                    titlefont: {size: 18},
                    tickfont: {size: 18},
                    tickwidth: 3,
                    linewidth: 3
                },
                yaxis2: {
                    zeroline: false,
                    title: '<b>T(K)</b>', 
                    titlefont: {color: 'rgb(148, 103, 189)', size: 18}, 
                    tickfont: {color: 'rgb(148, 103, 189)', size: 18},
                    tickwidth: 3,
                    linewidth: 3, 
                    overlaying: 'y', 
                    side: 'right'
                },
                title: '',
                annotations: [{
                    xref: 'paper',
                    yref: 'paper',
                    x: 0.03,
                    xanchor: 'right',
                    y: 1.05,
                    yanchor: 'bottom',
                    text: '<b>P(mbar)</b>',
                    font: {size: 18},
                    showarrow: false,
                    textangle: 0
                  }]
                };
            
            $.each(data.tp, function(i, val) {traceP.x.push(val);});
            $.each(data.P, function(i, val) {traceP.y.push(val);});
            $.each(data.tt, function(i, val) {traceT.x.push(val);});
            $.each(data.T, function(i, val) {traceT.y.push(val);});
            if (P_Ch2 > 0 && T_Ch2 > 0) {
                $.each(data.tp2, function(i, val) {traceP2.x.push(val);});
                $.each(data.P2, function(i, val) {traceP2.y.push(val);});
                $.each(data.tt2, function(i, val) {traceT2.x.push(val);});
                $.each(data.T2, function(i, val) {traceT2.y.push(val);});
                var Trace = [traceP, traceT].concat([traceP2, traceT2]);
            } else if (P_Ch2 > 0) {
                $.each(data.tp2, function(i, val) {traceP2.x.push(val);});
                $.each(data.P2, function(i, val) {traceP2.y.push(val);});
                var Trace = [traceP, traceT].concat([traceP2]);
            } else if (T_Ch2 > 0) {
                $.each(data.tt2, function(i, val) {traceT2.x.push(val);});
                $.each(data.T2, function(i, val) {traceT2.y.push(val);});
                var Trace = [traceP, traceT].concat([traceT2]);
            } else {
                var Trace = [traceP, traceT]
            };
            
            Plotly.newPlot('dc-chart-01', Trace, layout, {showSendToCloud: true});
            console.log(traceP.x);
            console.log(traceP.y);
            console.log(traceT.y);
            $('div.dc#startP').empty();
            $('div.dc#startP').append($('<h4 style="color: darkblue;"></h4>').text("starting: ")).
            append($('<span style="color: red;"></span>').text(data.startimeP));
            $('div.dc#startT').empty();
            $('div.dc#startT').append($('<h4 style="color: darkblue;"></h4>').text("starting: ")).
            append($('<span style="color: red;"></span>').text(data.startimeT));;
        });
        return false;
    });
});






    

