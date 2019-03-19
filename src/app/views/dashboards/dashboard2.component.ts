import { Component, OnDestroy, OnInit, } from '@angular/core';

import { FlotChartDirective } from '../../components/charts/flotChart';

declare var jQuery:any;

@Component({
  selector: 'dashboard2',
  templateUrl: 'dashboard2.template.html'
})

export class Dashboard2Component implements OnDestroy, OnInit {

  public nav:any;
  public todos: any;

  public constructor() {
    this.nav = document.querySelector('nav.navbar');

  }

  public ngOnInit():any {
    this.nav.className += " white-bg";
  }


  public ngOnDestroy():any {
    this.nav.classList.remove("white-bg");
  }

  // Flot chart data and options

  private gd(year, month, day) {
    return new Date(year, month - 1, day).getTime();
  }

  private data1 = [
    [this.gd(2012, 1, 1), 7], [this.gd(2012, 1, 2), 6], [this.gd(2012, 1, 3), 4], [this.gd(2012, 1, 4), 8],
    [this.gd(2012, 1, 5), 9], [this.gd(2012, 1, 6), 7], [this.gd(2012, 1, 7), 5], [this.gd(2012, 1, 8), 4],

  ];

  private data2 = [
    [this.gd(2012, 1, 1), 800], [this.gd(2012, 1, 2), 500], [this.gd(2012, 1, 3), 600], [this.gd(2012, 1, 4), 700],
    [this.gd(2012, 1, 5), 500], [this.gd(2012, 1, 6), 456], [this.gd(2012, 1, 7), 800], [this.gd(2012, 1, 8), 589],


  ];


  public flotDataset:any = [
    {
      label: "Number of orders",
      data: this.data2,
      color: "#1ab394",
      bars: {
        show: true,
        align: "center",
        barWidth: 24 * 60 * 60 * 600,
        lineWidth: 0
      }

    }, {
      label: "Payments",
      data: this.data1,
      yaxis: 2,
      color: "#1C84C6",
      lines: {
        lineWidth: 1,
        show: true,
        fill: true,
        fillColor: {
          colors: [{
            opacity: 0.2
          }, {
            opacity: 0.4
          }]
        }
      },
      splines: {
        show: false,
        tension: 0.6,
        lineWidth: 1,
        fill: 0.1
      },
    }
  ];

  public flotOptions:any =
  {
    xaxis: {
      mode: "time",
      tickSize: [3, "day"],
      tickLength: 0,
      axisLabel: "Date",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Arial',
      axisLabelPadding: 10,
      color: "#d5d5d5"
    },
    yaxes: [{
      position: "left",
      max: 1070,
      color: "#d5d5d5",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: 'Arial',
      axisLabelPadding: 3
    }, {
      position: "right",
      clolor: "#d5d5d5",
      axisLabelUseCanvas: true,
      axisLabelFontSizePixels: 12,
      axisLabelFontFamily: ' Arial',
      axisLabelPadding: 67
    }
    ],
    legend: {
      noColumns: 1,
      labelBoxBorderColor: "#000000",
      position: "nw"
    },
    grid: {
      hoverable: false,
      borderWidth: 0
    }
  };

  // jVector Map options

  public mapOptions:any = {
    map: 'world_mill_en',
    backgroundColor: "transparent",
    regionStyle: {
      initial: {
        fill: '#e4e4e4',
        "fill-opacity": 0.9,
        stroke: 'none',
        "stroke-width": 0,
        "stroke-opacity": 0
      }
    },
    series: {
      regions: [{
        values: {
          "US": 298,
          "SA": 200,
          "DE": 220,
          "FR": 540,
          "CN": 120,
          "AU": 760,
          "BR": 550,
          "IN": 200,
          "GB": 120
        },
        scale: ["#1ab394", "#22d6b1"],
        normalizeFunction: 'polynomial'
      }]
    },
  }

}
