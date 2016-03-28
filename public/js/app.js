/* ==========================================================================
   Author: XHTMLmaster.com
   ========================================================================== */
$(function() {
	$('#menu-opener').sidr({
		name: 'menu',
    side: 'left'
	});
  
  
  $('#gauges .alerts div').matchHeight({
      target: $('#gauges article figure'),
      property: 'min-height'
  });
});

function setMenu() {
  ww = $(window).width()
  if(ww>1023) {
		$.sidr('open', 'menu');	    
  } else {
	  $.sidr('close', 'menu');	
  }
}

// Load the Visualization API and the corechart package.
google.charts.load('current', {'packages':['gauge','corechart']});
google.charts.setOnLoadCallback(drawChart);

// Callback that creates and populates a data table,
// instantiates the pie chart, passes in the data and
// draws it.
function drawChart() {

  //Solar
  var dataSolarVoltage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Volts', 220],
  ]);

  var dataSolaramperage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Amps', 5]
  ]);

  var dataSolarTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temp', 35]
  ]);

  var optionsSolarVolts = {
    min: 0, max: 260,
    greenFrom: 200, greenTo: 240,
    yellowFrom:180, yellowTo: 200,
    redFrom: 240, redTo: 260,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsSolarAmps = {
    min: 0, max: 10,
    greenFrom: 3, greenTo: 6,
    redFrom: 6, redTo: 10,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsSolarTemp = {
    min: 0, max: 200,
    greenFrom: 20, greenTo: 60,
    yellowFrom:60, yellowTo: 120,
    redFrom: 120, redTo: 200,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var chartSolarVoltage = new google.visualization.Gauge(document.getElementById('solarvoltage_gauge'));
  var chartSolarVAmperage = new google.visualization.Gauge(document.getElementById('solaramperage_gauge'));
  var chartSolartemp = new google.visualization.Gauge(document.getElementById('solartemp_gauge'));

  chartSolarVoltage.draw(dataSolarVoltage, optionsSolarVolts);
  chartSolarVAmperage.draw(dataSolaramperage, optionsSolarAmps);
  chartSolartemp.draw(dataSolarTemp, optionsSolarTemp);

  //Generator
  var dataGeneratorVoltage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Volts', 0],
  ]);

  var dataGeneratoramperage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Amps', 0]
  ]);

  var dataGeneratorTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temp', 5]
  ]);

  var optionsGeneratorVolts = {
    min: 0, max: 260,
    greenFrom: 200, greenTo: 240,
    yellowFrom:180, yellowTo: 200,
    redFrom: 240, redTo: 260,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsGeneratorAmps = {
    min: 0, max: 10,
    greenFrom: 3, greenTo: 6,
    redFrom: 6, redTo: 10,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsGeneratorTemp = {
    min: 0, max: 200,
    greenFrom: 20, greenTo: 60,
    yellowFrom:60, yellowTo: 120,
    redFrom: 120, redTo: 200,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var chartGeneratorVoltage = new google.visualization.Gauge(document.getElementById('generatorvoltage_gauge'));
  var chartGeneratorVAmperage = new google.visualization.Gauge(document.getElementById('generatoramperage_gauge'));
  var chartGeneratortemp = new google.visualization.Gauge(document.getElementById('generatortemp_gauge'));

  chartGeneratorVoltage.draw(dataGeneratorVoltage, optionsGeneratorVolts);
  chartGeneratorVAmperage.draw(dataGeneratoramperage, optionsGeneratorAmps);
  chartGeneratortemp.draw(dataGeneratorTemp, optionsGeneratorTemp);

  //Grid
  var dataGridVoltage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Volts', 100],
  ]);

  var dataGridamperage = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Amps', 2]
  ]);

  var dataGridTemp = google.visualization.arrayToDataTable([
    ['Label', 'Value'],
    ['Temp', 60]
  ]);

  var optionsGridVolts = {
    min: 0, max: 260,
    greenFrom: 200, greenTo: 240,
    yellowFrom:180, yellowTo: 200,
    redFrom: 240, redTo: 260,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsGridAmps = {
    min: 0, max: 10,
    greenFrom: 3, greenTo: 6,
    redFrom: 6, redTo: 10,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var optionsGridTemp = {
    min: 0, max: 200,
    greenFrom: 20, greenTo: 60,
    yellowFrom:60, yellowTo: 120,
    redFrom: 120, redTo: 200,
    redColor: '##FB5470',
    greenColor: '#2EC6C8',
    yellowColor: '#FFC637',
    minorTicks: 5
  };

  var chartGridVoltage = new google.visualization.Gauge(document.getElementById('gridvoltage_gauge'));
  var chartGridVAmperage = new google.visualization.Gauge(document.getElementById('gridamperage_gauge'));
  var chartGridtemp = new google.visualization.Gauge(document.getElementById('gridtemp_gauge'));

  chartGridVoltage.draw(dataGridVoltage, optionsGridVolts);
  chartGridVAmperage.draw(dataGridamperage, optionsGridAmps);
  chartGridtemp.draw(dataGridTemp, optionsGridTemp);

  var historydata = new google.visualization.DataTable();
      historydata.addColumn('number', 'Day of Month');
      historydata.addColumn('number', 'Grid');
      historydata.addColumn('number', 'Solar');
      historydata.addColumn('number', 'Generator');

      historydata.addRows([
        [1,  37.8, 80.8, 41.8],
        [2,  30.9, 69.5, 32.4],
        [3,  25.4,   57, 25.7],
        [4,  11.7, 18.8, 10.5],
        [5,  11.9, 17.6, 10.4],
        [6,   8.8, 13.6,  7.7],
        [7,   7.6, 12.3,  9.6],
        [8,  12.3, 29.2, 10.6],
        [9,  16.9, 42.9, 14.8],
        [10, 12.8, 30.9, 11.6],
        [11,  5.3,  20,  4.7],
        [12,  6.6,  25,  5.2],
        [13,  4.8,  13,  30.6],
        [14,  4.2,  50,  10.4],
        [15,  4.2,  52,  13.4],
        [16,  6,  54,  4.4],
        [17,  5.2,  54,  3.4],
        [18,  5.2,  54,  3.4],
        [19,  4.8,  40,  3.4],
        [20,  4.6,  42,  3.4],
        [21,  4.4,  25,  3.4],
      ]);

      var options = {
        /*chart: {
          title: 'Box Office Earnings in First Two Weeks of Opening',
          subtitle: 'in millions of dollars (USD)'
        },*/
        hAxis: {
          title: 'Day of Month'
        },
        vAxis: {
          title: 'Kwh / day'
        },
        'legend':{
          'position':'bottom'
        },
        backgroundColor: '#F2F4F5',
        'chartArea': {
          'top': 0,
          'left': 20,
          'width': '96.1%', 'height': '75%',
          'backgroundColor': {
            'fill': '#F2F4F5',
            'opacity': 100,
            'left': 0,

          },
        }
      };

      var historychart = new google.visualization.LineChart(document.getElementById('linechart_material'));

      historychart.draw(historydata, options);

  function resizeHandler () {
    chartSolarVoltage.draw(dataSolarVoltage, optionoptionsSolarVoltss);
    chartSolarVAmperage.draw(dataSolaramperage, optionsSolarAmps);
    chartSolartemp.draw(dataSolarTemp, optionsSolarTemp);

    chartGeneratorVoltage.draw(dataGeneratorVoltage, optionsGeneratorVolts);
    chartGeneratorVAmperage.draw(dataGeneratoramperage, optionsGeneratorAmps);
    chartGeneratortemp.draw(dataGeneratorTemp, optionsGeneratorTemp);

    chartGridVoltage.draw(dataGridVoltage, optionsGridVolts);
    chartGridVAmperage.draw(dataGridamperage, optionsGridAmps);
    chartGridtemp.draw(dataGridTemp, optionsGridTemp);

    historychart.draw(historydata, options);
}
if (window.addEventListener) {
    window.addEventListener('resize', resizeHandler, false);
}
else if (window.attachEvent) {
    window.attachEvent('onresize', resizeHandler);
}
}
