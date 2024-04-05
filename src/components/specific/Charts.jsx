import {
    ArcElement,
    CategoryScale,
    Chart as ChartJS,
    Filler,
    Legend,
    LineElement,
    LinearScale,
    PointElement,
    Tooltip,
} from "chart.js";
import React from 'react';
import { Doughnut, Line } from 'react-chartjs-2';
import { getLast7Days } from '../../lib/features';
import { green, lightBlue, purple } from '../../constants/color';

ChartJS.register(
    CategoryScale,
    Tooltip,
    LinearScale,
    LineElement,
    PointElement,
    Filler,
    ArcElement,
    Legend
);

const labels = getLast7Days();

const lineChartOptions = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
        title: {
            display: false,
        },
    },

    scales: {
        x: {
            grid: {
                display: false,
            },
        },
        y: {
            beginAtZero: true,
            grid: {
                display: false,
            },
        },
    },
};


const LineChart = ({ value = [] }) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Messages",
                fill: true,
                backgroundColor: "rgba(75,192,192,0.2)",
                borderColor: "#110116",
            },
        ],
    };

  return <Line data={data} options={lineChartOptions} />;
};

const doughnutChartOption = {
    responsive: true,
    plugins: {
        legend: {
            display: false,
        },
    },
    cutout: 115,
};

const DoughnutChart = ({value= [], labels= [] }) => {
    const data = {
        labels,
        datasets: [
            {
                data: value,
                label: "Total Chats vs Groups Chats",
                backgroundColor: [lightBlue,green],
                hoverBackgroundColor: [],
                borderColor: [lightBlue,green],
                offset: 30,
            },
        ],
    };
    return (<Doughnut style={{zIndex: 10}} data={data} options={doughnutChartOption} />);
  };

export { DoughnutChart, LineChart };
