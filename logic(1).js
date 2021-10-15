setInterval(function() {
  fetchData()
}, 1000);
var xhttp, erpm, rrpm, speed, pitVal, failVal, norVal, lapCount, gTemp, flsus, frsus, rlsus, rrsus, steer, lWang, rWang, gRatio;

var erpmData = [0],
  rrpmData = [0];
var ctxERPMRRPM = "ERPMRRPM";
var dataERPMRRPM, timeLabel = [];
var dataFirstERPMRRPM = {
  label: "ERPM",
  data: erpmData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: '#ffffff',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataSecondERPMRRPM = {
  label: "RRPM",
  data: rrpmData,
  fill: false,
  borderColor: '#FF9E98',
  backgroundColor: 'transparent',
  pointBorderColor: '#FF9E98',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataERPMRRPM = {
  labels: timeLabel,
  datasets: [dataFirstERPMRRPM, dataSecondERPMRRPM]
};

var optionERPMRRPM = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'ERPM & RRPM vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "ERPM & RRPM"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartERPMRRPM = new Chart(ctxERPMRRPM, {
  type: 'line',
  data: dataERPMRRPM,
  options: optionERPMRRPM
});

var speedData = [0];
var ctxERPMSPEED = "ERPMSPEED";
var dataERPMSPEED;
var dataFirstERPMSPEED = {
  label: "ERPM",
  data: erpmData,
  yAxisID: "y-axis-0",
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataSecondERPMSPEED = {
  label: "Speed",
  data: speedData,
  yAxisID: "y-axis-1",
  fill: false,
  borderColor: '#FF9E98',
  backgroundColor: 'transparent',
  pointBorderColor: '#FF9E98',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataERPMSPEED = {
  labels: timeLabel,
  datasets: [dataFirstERPMSPEED, dataSecondERPMSPEED]
};

var optionERPMSPEED = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'ERPM & Speed vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      position: "left",
      id: "y-axis-0",
      scaleLabel: {
        display: true,
        labelString: "ERPM"
      }
    }, {
      position: "right",
      id: "y-axis-1",
      scaleLabel: {
        display: true,
        labelString: "Speed"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartERPMSPEED = new Chart(ctxERPMSPEED, {
  type: 'line',
  data: dataERPMSPEED,
  options: optionERPMSPEED
});

var gRatioData = [0];
var ctxGRATIO = "GRATIO";
var dataGRATIO;
var dataFirstGRATIO = {
  label: "G-Ratio",
  data: gRatioData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataGRATIO = {
  labels: timeLabel,
  datasets: [dataFirstGRATIO]
};

var optionGRATIO = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'G-Ratio vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "G-Ratio"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartGRATIO = new Chart(ctxGRATIO, {
  type: 'line',
  data: dataGRATIO,
  options: optionGRATIO
});

var gTempData = [0];
var ctxGTEMP = "chartGTEMP";
var dataGTEMP;
var dataFirstGTEMP = {
  label: "GEARBOX",
  data: gTempData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataGTEMP = {
  labels: timeLabel,
  datasets: [dataFirstGTEMP]
};

var optionGTEMP = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'GRPM vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "GRPM"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartGTEMP = new Chart(ctxGTEMP, {
  type: 'line',
  data: dataGTEMP,
  options: optionGTEMP
});

var flsusData = [0];
var ctxFLSUS = "chartFLSUS";
var dataFLSUS;
var dataFirstFLSUS = {
  label: "FLSUS",
  data: flsusData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataFLSUS = {
  labels: timeLabel,
  datasets: [dataFirstFLSUS]
};

var optionFLSUS = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'FLSUS vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "FLSUS"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartFLSUS = new Chart(ctxFLSUS, {
  type: 'line',
  data: dataFLSUS,
  options: optionFLSUS
});

var frsusData = [0];
var ctxFRSUS = "chartFRSUS";
var dataFRSUS;
var dataFirstFRSUS = {
  label: "FRSUS",
  data: frsusData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataFRSUS = {
  labels: timeLabel,
  datasets: [dataFirstFRSUS]
};

var optionFRSUS = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'FRSUS vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "FRSUS"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartFRSUS = new Chart(ctxFRSUS, {
  type: 'line',
  data: dataFRSUS,
  options: optionFRSUS
});

var rlsusData = [0];
var ctxRLSUS = "chartRLSUS";
var dataRLSUS;
var dataFirstRLSUS = {
  label: "RLSUS",
  data: rlsusData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataRLSUS = {
  labels: timeLabel,
  datasets: [dataFirstRLSUS]
};

var optionRLSUS = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'RLSUS vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "RLSUS"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartRLSUS = new Chart(ctxRLSUS, {
  type: 'line',
  data: dataRLSUS,
  options: optionRLSUS
});

var rrsusData = [0];
var ctxRRSUS = "chartRRSUS";
var dataRRSUS;
var dataFirstRRSUS = {
  label: "RRSUS",
  data: rrsusData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataRRSUS = {
  labels: timeLabel,
  datasets: [dataFirstRRSUS]
};

var optionRRSUS = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'RRSUS vs TIME',
    fontSize: 15,
    fontColor: ''

  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "RRSUS"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartRRSUS = new Chart(ctxRRSUS, {
  type: 'line',
  data: dataRRSUS,
  options: optionRRSUS
});

var steerData = [0];
var ctxSTEER = "chartSTEER";
var dataSTEER;
var dataFirstSTEER = {
  label: "STEER",
  data: steerData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataSTEER = {
  labels: timeLabel,
  datasets: [dataFirstSTEER]
};

var optionSTEER = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: 'STEER vs TIME',
    fontSize: 15,
    fontColor: ''
  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "STEER"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};
console.log('got the data');

var lineChartSTEER = new Chart(ctxSTEER, {
  type: 'line',
  data: dataSTEER,
  options: optionSTEER
});

var rWangData = [0];
var ctxRWANG = "chartRWANG";
var dataRWANG;
var dataFirstRWANG = {
  label: "RWANG",
  data: rWangData,
  fill: false,
  borderColor: '#37A4DD',
  backgroundColor: 'transparent',
  pointBorderColor: '#98A9FF',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataRWANG = {
  labels: timeLabel,
  datasets: [dataFirstRWANG]
};



var ctxLSUS = "chartLSUS";
var dataLSUS;
var dataFirstLSUS = {
  label: "FLSUS",
  data: flsusData,
  borderColor: '#98A9FF',
  backgroundColor: 'transparent',
  pointBorderColor: '#98A9FF',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataSecondLSUS = {
  label: "FRSUS",
  data: frsusData,
  fill: false,
  borderColor: '#FF9E98',
  backgroundColor: 'transparent',
  pointBorderColor: '#FF9E98',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataThirdLSUS = {
  label: "RLSUS",
  data: rlsusData,
  fill: false,
  borderColor: '#61FF33',
  backgroundColor: 'transparent',
  pointBorderColor: '#61FF33',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataFourthLSUS = {
  label: "RRSUS",
  data: rrsusData,
  fill: false,
  borderColor: '#FFEC33',
  backgroundColor: 'transparent',
  pointBorderColor: '##37A4DD',
  pointBackgroundColor: 'lightgreen',
  pointRadius: 0,
  pointHoverRadius: 2,
  pointHitRadius: 5,
  pointBorderWidth: 0
};

var dataLSUS = {
  labels: timeLabel,
  datasets: [dataFirstLSUS, dataSecondLSUS, dataThirdLSUS, dataFourthLSUS]
};

var optionLSUS = {
  legend: {
    display: true,
    position: 'right',
    labels: {
      boxWidth: 40,
      fontColor: '#37A4DD'
    }
  },
  title: {
    display: true,
    position: 'top',
    text: ' ',
    fontSize: 15,
    fontColor: ''

  },
  scales: {
    yAxes: [{
      scaleLabel: {
        display: true,
        labelString: "FLSUS & FRSUS & RLSUS & RRSUS"
      }
    }],
    xAxes: [{
      scaleLabel: {
        display: true,
        labelString: "Time"
      }
    }]
  }
};

var lineChartLSUS = new Chart(ctxLSUS, {
  type: 'line',
  data: dataLSUS,
  options: optionLSUS
});



function fetchData() {
  xhttp = new XMLHttpRequest();

  xhttp.onreadystatechange = function () {
    if (this.readyState == 4 && this.status == 200) {
      input = this.responseText;
      inputArray = input.split(",");
      erpm = parseInt(inputArray[0]);
      rrpm = parseInt(inputArray[1]);
      
      speed = (58.42 * rrpm * 0.001885).toFixed(2);
      pitVal = parseInt(inputArray[2]);
      failVal = parseInt(inputArray[3]);
      norVal = parseInt(inputArray[4]);
      lapCount = parseInt(inputArray[5]);
      
      flsus = parseInt(inputArray[8]);
      frsus = parseInt(inputArray[9]);
      rlsus = parseInt(inputArray[10]);
      rrsus = parseInt(inputArray[11]);
      steer = parseInt(inputArray[12]);
  
      document.getElementById('ERPM').setAttribute('data-value', erpm);
      document.getElementById('ERPM').setAttribute('data-value-text', erpm);
      document.getElementById('RRPM').setAttribute('data-value', rrpm);
      document.getElementById('RRPM').setAttribute('data-value-text', rrpm);
      document.getElementById('speed').setAttribute('data-value', speed);
      document.getElementById('speed').setAttribute('data-value-text', speed);
      document.getElementById('steer').setAttribute('data-value', steer);
      document.getElementById('steer').setAttribute('data-value-text', steer);
      document.getElementById('FLSUS').setAttribute('data-value', flsus);
      document.getElementById('FLSUS').setAttribute('data-value-text', flsus);
      document.getElementById('FRSUS').setAttribute('data-value', frsus);
      document.getElementById('FRSUS').setAttribute('data-value-text', frsus);
      document.getElementById('RLSUS').setAttribute('data-value', rlsus);
      document.getElementById('RLSUS').setAttribute('data-value-text', rlsus);
      document.getElementById('RRSUS').setAttribute('data-value', rrsus);
      document.getElementById('RRSUS').setAttribute('data-value-text', rrsus);
      // if (pitVal == 0) {
      //   document.getElementById('PITVALRED').style.background = 'radial-gradient(#FFAF02, red)';
      //   document.getElementById('PITVALGREEN').style.background = 'radial-gradient(#DBDBDB, gray)';
      // } else {
      //   document.getElementById('PITVALRED').style.background = 'radial-gradient(#DBDBDB, gray)';
      //   document.getElementById('PITVALGREEN').style.background = 'radial-gradient(#B9FF00, green)';
      // }
      // document.getElementById('pitVal').innerHTML = pitVal;
      // if (failVal == 0) {
      //   document.getElementById('FAILVALRED').style.background = 'radial-gradient(#FFAF02, red)';
      //   document.getElementById('FAILVALGREEN').style.background = 'radial-gradient(#DBDBDB, gray)';
      // } else {
      //   document.getElementById('FAILVALRED').style.background = 'radial-gradient(#DBDBDB, gray)';
      //   document.getElementById('FAILVALGREEN').style.background = 'radial-gradient(#B9FF00, green)';
      // }
      // document.getElementById('failVal').innerHTML = failVal;
      // if (norVal == 0) {
      //   document.getElementById('NORVALRED').style.background = 'radial-gradient(#FFAF02, red)';
      //   document.getElementById('NORVALGREEN').style.background = 'radial-gradient(#DBDBDB, gray)';
      // } else {
      //   document.getElementById('NORVALRED').style.background = 'radial-gradient(#DBDBDB, gray)';
      //   document.getElementById('NORVALGREEN').style.background = 'radial-gradient(#B9FF00, green)';
      // }
      // document.getElementById('norVal').innerHTML = norVal;
      // document.getElementById('LAPCOUNT').innerHTML = lapCount;

      if (erpmData.length >= 900) {
        erpmData.shift();
        rrpmData.shift();
        speedData.shift();
        
        flsusData.shift();
        frsusData.shift();
        rlsusData.shift();
        rrsusData.shift();
        steerData.shift();
        timeLabel.shift();
      } else {

        erpmData.push(erpm);
        rrpmData.push(rrpm);
        var today = new Date();
        var time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds();
        timeLabel.push(time);
        speedData.push(speed);
      
        flsusData.push(flsus);
        frsusData.push(frsus);
        rlsusData.push(rlsus);
        rrsusData.push(rrsus);
        steerData.push(steer);
        lineChartERPMRRPM.update();
        lineChartERPMSPEED.update();
       
        lineChartFLSUS.update();
        lineChartFRSUS.update();
        lineChartRLSUS.update();
        lineChartRRSUS.update();
        lineChartSTEER.update();
        lineChartLSUS.update();
      }
    }
  };
  xhttp.open("GET", "fetch-data.php", true);
  xhttp.send();
}