// import ReactHighcharts from "react-highcharts";
import priceData from "../../lib/btcdata.json";
import moment from "moment";
import Highcharts from "highcharts/highstock";
import HighchartsReact from "highcharts-react-official";
import { config } from "dotenv";
// https://github.com/highcharts/highcharts-react#options-details

// https://www.highcharts.com/docs/stock/range-selector -- docs for buttons
const options = { style: "currency", currency: "USD" };
const numberFormat = new Intl.NumberFormat("en-US", options);

interface ChartProps {
  stockChartData?: number[][];
}

const Chart = ({ stockChartData }: ChartProps) => {
  console.log(stockChartData);

  const configPrice = {
    plotBackgroundColor: null,
    yAxis: [
      {
        gridLineColor: "transparent",
        visible: false,
      },
    ],
    tooltip: {
      formatter: function (this: { x: number; y: number }): string {
        return (
          numberFormat.format(this.y) +
          "</b><br/>" +
          moment(new Date(this.x)).format("MMMM Do YYYY, h:mm")
        );
      },
    },
    plotOptions: {
      area: {
        // color: "#22c55e",
        fillColor: {
          linearGradient: {
            x1: 0,
            y1: 0,
            x2: 0,
            y2: 1,
          },

          stops: [
            [0, "#22c55e"],
            [1, "#ecfdf5"],
          ],
        },
        marker: {
          radius: 2,
        },
        lineWidth: 2,
        states: {
          hover: {
            lineWidth: 2,
          },
        },
        threshold: null,
      },
    },
    title: {
      text: "",
    },
    chart: {
      height: 350,
      backgroundColor: null,
      margin: 0, // fixed sizing where chart was filling the container
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
      x: -38,
      buttonTheme: {
        // styles for the buttons
        fill: "transparent",
        r: "50%",
        height: 25,
        width: 25,
        style: {
          color: "#1f2937",
          fontWeight: "bold",
        },
        states: {
          hover: {
            fill: null,
          },
          select: {
            fill: "#1f2937",
            style: {
              color: "#ffffff",
            },
          },
        },
      },
      buttons: [
        {
          type: "day",
          count: 1,
          text: "1D",
        },
        {
          type: "day",
          count: 7,
          text: "7D",
        },
        {
          type: "month",
          count: 1,
          text: "1M",
        },
        {
          type: "month",
          count: 3,
          text: "3M",
        },
        {
          type: "all",
          text: "All",
        },
      ],
      labelStyle: {
        display: "none",
      },
      selected: 1, // option initally selected
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
        type: "area",
        data: stockChartData,
        tooltip: {
          valueDecimals: 2,
        },
        color: "#22c55e",
      },
    ],
  };

  return (
    <HighchartsReact
      highcharts={Highcharts}
      constructorType={"stockChart"}
      options={configPrice}
    />
  );
};

export { Chart };
