// import ReactHighcharts from "react-highcharts";
import priceData from "../../lib/btcdata.json";
import moment from "moment";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
// https://github.com/highcharts/highcharts-react#options-details

const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);
const configPrice = {
  plotBackgroundColor: null,
  yAxis: [
    {
      gridLineColor: "transparent",
      visible: false,
    },
  ],
  tooltip: {
    shared: true,
    formatter: () => {
      return (
        numberFormat.format(1) +
        "</b><br/>" +
        moment(new Date()).format("MMMM Do YYYY, h:mm")
      );
    },
  },
  plotOptions: {
    series: {
      showInNavigator: true,
      gapSize: 6,
    },
  },
  title: {
    text: "",
  },
  chart: {
    height: 350,
    backgroundColor: null,
  },

  credits: {
    enabled: false,
  },

  legend: {
    enabled: false,
  },

  xAxis: {
    visible: false,
  },
  rangeSelector: {
    buttonPosition: {
      align: "right",
    },
    buttonTheme: {
      // styles for the buttons
      fill: "none",
      stroke: "none",
      "stroke-width": 0,
      r: 13,
      style: {
        color: "#6b7280",
        fontWeight: "bold",
      },
      states: {
        hover: {},
        select: {
          fill: "#d4d4d8",
          style: {
            color: "#6b7280",
          },
        },
      },
    },
    buttons: [
      {
        type: "day",
        count: 1,
        text: "1d",
      },
      {
        type: "day",
        count: 7,
        text: "7d",
      },
      {
        type: "month",
        count: 1,
        text: "1m",
      },
      {
        type: "month",
        count: 3,
        text: "3m",
      },
      {
        type: "all",
        text: "All",
      },
    ],
    labelStyle: {
      display: "none",
    },
    x: 0,
    selected: 4, // option initally selected
    inputEnabled: false, // removes date input
  },

  navigator: {
    // selector on the x-axis
    enabled: false,
  },
  scrollbar: { enabled: false },
  series: [
    {
      name: "Price",
      type: "spline",

      data: priceData,
      tooltip: {
        valueDecimals: 2,
      },
    },
  ],
};
const Chart = () => (
  <HighchartsReact
    highcharts={Highcharts}
    constructorType={"stockChart"}
    options={configPrice}
  />
);

export { Chart };
