import React from "react";
import { Bar } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
  Tooltip,
  Legend,
} from "chart.js";

// ثبت پلاگین‌ها
ChartJS.register(CategoryScale, LinearScale, BarElement, Title, Tooltip, Legend);

function ProgressBarChart({ data }) {
  // مرتب‌سازی داده‌ها بر اساس تاریخ
  const sorted = [...data].sort((a, b) => new Date(a.date) - new Date(b.date));
  const labels = sorted.map(item => item.date);
  const calories = sorted.map(item => Number(item.calories));

  const chartData = {
    labels,
    datasets: [
      {
        label: "کالری سوزانده شده",
        data: calories,
        backgroundColor: "rgba(37, 99, 235, 0.7)",
        borderRadius: 6,
      }
    ]
  };

  const options = {
    responsive: true,
    plugins: {
      legend: { position: "top" },
      title: { display: true, text: "کالری سوزانده شده بر اساس تاریخ تمرین" }
    },
    scales: {
      y: { beginAtZero: true }
    }
  };

  return (
    <div className="bg-white shadow-md px-6 py-3 rounded-xl m-4">
      <Bar data={chartData} options={options} />
    </div>
  );
}

export default ProgressBarChart;
