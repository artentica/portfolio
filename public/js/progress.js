var options = {
  //segmentShowStroke: false,
  percentageInnerCutout: 0,
  //animation: true,
  animationEasing: 'easeOutQuint',
  //animateRotate: false,
  animateScale: true
};
var data = {
  html5: [
  	{ value : 90, color : "hsl(120, 33%, 50%)" },
  	{ value : 10, color : "hsl(180, 1%, 81%)" }
  ],
  css3: [
  	{ value : 85, color : "hsl(120, 33%, 50%)" },
  	{ value : 15, color : "hsl(180, 1%, 81%)" }
  ],
  php: [
  	{ value : 35, color : "hsl(120, 33%, 50%)" },
  	{ value : 65, color : "hsl(180, 1%, 81%)" }
  ],
  javascript: [
    { value : 60, color : "hsl(120, 33%, 50%)" },
    { value : 40, color : "hsl(180, 1%, 81%)" }
  ],
  jquery: [
    { value : 40, color : "hsl(120, 33%, 50%)" },
    { value : 60, color : "hsl(180, 1%, 81%)" }
  ],
  angularjs: [
    { value : 35, color : "hsl(120, 33%, 50%)" },
    { value : 65, color : "hsl(180, 1%, 81%)" }
  ],
  nodejs: [
    { value : 20, color : "hsl(120, 33%, 50%)" },
    { value : 80, color : "hsl(180, 1%, 81%)" }
  ],
   apache: [
    { value : 85, color : "hsl(120, 33%, 50%)" },
    { value : 15, color : "hsl(180, 1%, 81%)" }
  ],
  java: [
  	{ value : 45, color : "hsl(120, 33%, 50%)" },
  	{ value : 55, color : "hsl(180, 1%, 81%)" }
  ],
  c: [
    { value : 85, color : "hsl(120, 33%, 50%)" },
    { value : 15, color : "hsl(180, 1%, 81%)" }
  ],
  cpp: [
    { value : 20, color : "hsl(120, 33%, 50%)" },
    { value : 80, color : "hsl(180, 1%, 81%)" }
  ],
  python: [
    { value : 20, color : "hsl(120, 33%, 50%)" },
    { value : 80, color : "hsl(180, 1%, 81%)" }
  ],
 ccna1: [
    { value : 79, color : "hsl(120, 33%, 50%)" },
    { value : 21, color : "hsl(180, 1%, 81%)" }
  ],
  ccna2: [
    { value : 10, color : "hsl(120, 33%, 50%)" },
    { value : 90, color : "hsl(180, 1%, 81%)" }
  ],
  linux: [
    { value : 50, color : "hsl(120, 33%, 50%)" },
    { value : 50, color : "hsl(180, 1%, 81%)" }
  ],
  windows: [
    { value : 90, color : "hsl(120, 33%, 50%)" },
    { value : 10, color : "hsl(180, 1%, 81%)" }
  ],
  git: [
    { value : 90, color : "hsl(120, 33%, 50%)" },
    { value : 10, color : "hsl(180, 1%, 81%)" }
  ],
  mysql: [
    { value : 60, color : "hsl(120, 33%, 50%)" },
    { value : 40, color : "hsl(180, 1%, 81%)" }
  ],
  photoshop: [
    { value : 30, color : "hsl(120, 33%, 50%)" },
    { value : 70, color : "hsl(180, 1%, 81%)" }
  ],
  premierepro: [
    { value : 80, color : "hsl(120, 33%, 50%)" },
    { value : 20, color : "hsl(180, 1%, 81%)" }
  ],
  aftereffect: [
    { value : 90, color : "hsl(120, 33%, 50%)" },
    { value : 10, color : "hsl(180, 1%, 81%)" }
  ],
  c4d: [
    { value : 85, color : "hsl(120, 33%, 50%)" },
    { value : 15, color : "hsl(180, 1%, 81%)" }
  ],
  audacity: [
    { value : 55, color : "hsl(120, 33%, 50%)" },
    { value : 45, color : "hsl(180, 1%, 81%)" }
  ]  
};

var offset = 0;
$.each(data, function(key, data) {
  var canvas = document.querySelector('#' + key);
  if(canvas) {
    offset += 65;
    setTimeout(function() {
      var ctx = canvas.getContext('2d');
      var chart = new Chart(ctx);
      chart.Doughnut(data, options);
    }, offset);
  }
});