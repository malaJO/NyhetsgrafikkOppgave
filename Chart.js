
// Initiating the final chart showing percentage of unemployed per year
var chart3 = new Chartist.Line('#chart3', {
  labels: ['2005', '2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018'],

  series: [{
    name: 'SSB:',
    data: [3.5, 3.37, 2.55, 2.73, 3.28, 3.73, 3.41, 3.29, 3.75, 3.63, 4.51, 4.77, 4.20, 3.90]
  }, {
    name: 'NAV:',
    data: [3.50, 2.60, 1.89, 1.70, 2.70, 2.90, 2.70, 2.48, 2.60, 2.80, 3.00, 3.00, 2.7, 2.4]
  }]
}, {
  fullWidth: true,
  chartPadding: {
    right: 30
  },

  series: {
    'SSB:': {
      lineSmooth: Chartist.Interpolation.none(),
      showPoint: true,
      showArea: true
    },
    'NAV:': {
      lineSmooth: Chartist.Interpolation.none(),
      showPoint: true,
      showArea: true
    }
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
  axisY: {
  high: 5,
  low: 1,
  onlyInteger: true,
}});

// drawing the chart
chart3.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 800 * data.index,
        dur: 1200,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

// Initializing chart showing number of unemployed in 2018
var chart1 = new Chartist.Line('#chart1', {
  labels: ['Jan', 'Feb', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept'],
  series: [{
    className: 'SSBAntall',
    name: 'SSBAntall',
    data: [111000,108000,109000,105000,107000,108000,113000,113000]
  }, {
    className: 'NAVAntall',
    name: 'NAVAntall',
    data: [71849, 69789, 68835, 66797, 60008, 60738, 70558, 67086, 63472]
  }]
}, {
  fullWidth: true,
  chartPadding: {
    right: 20
  },

  series: {
    'SSBAntall': {
      lineSmooth: Chartist.Interpolation.simple(),
      showArea: true,
      showPoint: false

    },
    'NAVAntall': {
      lineSmooth: Chartist.Interpolation.simple(),
      showArea: true,
      showPoint: false
    }
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
  axisY: {
  high: 120000,
  low: 0,
  // onlyInteger: true,
   ticks: ['One', 'Two', 'Three'],
}
});

// drawing the chart
chart1.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 600 * data.index,
        dur: 800,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});

// Initializing chart showing percentage of unemployed in 2018
var chart2 = new Chartist.Line('#chart2', {
  labels: ['Jan', 'Feb', 'Mars', 'April', 'Mai', 'Juni', 'Juli', 'Aug', 'Sept'],
  series: [{
    className: 'SSBProsent',
    name: 'SSBProsent',
    data: [4.0,3.9,3.9,3.8,3.8,3.8,4.0,4.0]
  }, {
    className: 'NAVProsent',
    name: 'NAVProsent',
    data: [2.6, 2.5, 2.5, 2.4, 2.2, 2.2, 2.5, 2.4, 2.3]
  }]
}, {
  fullWidth: true,
  chartPadding: {
    right: 20
  },
  series: {
    'SSBProsent': {
      lineSmooth: Chartist.Interpolation.monotoneCubic(),
      showArea: true,
      showPoint: false

    },
    'NAVProsent': {
      lineSmooth: Chartist.Interpolation.monotoneCubic(),
      showArea: true,
      showPoint: false
    }
  },
  plugins: [
    Chartist.plugins.tooltip()
  ],
  axisY: {
  high: 5,
  low: 0,
  onlyInteger: true,
}});

// drawing the chart
chart2.on('draw', function(data) {
  if(data.type === 'line' || data.type === 'area') {
    data.element.animate({
      d: {
        begin: 400 * data.index,
        dur: 600,
        from: data.path.clone().scale(1, 0).translate(0, data.chartRect.height()).stringify(),
        to: data.path.clone().stringify(),
        easing: Chartist.Svg.Easing.easeOutQuint
      }
    });
  }
});
