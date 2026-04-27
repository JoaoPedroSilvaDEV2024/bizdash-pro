import { useEffect, useState } from "react";
import { getMetrics } from "../api";

import {
  Chart as ChartJS,
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
} from "chart.js";

import { Bar, Line, Doughnut } from "react-chartjs-2";

import "./dashboard.css";

ChartJS.register(
  BarElement,
  LineElement,
  PointElement,
  ArcElement,
  CategoryScale,
  LinearScale,
  Tooltip,
  Legend
);

export default function Dashboard() {
  const [data, setData] = useState(null);

  useEffect(() => {
    getMetrics()
      .then(setData)
      .catch(err => console.error(err));
  }, []);

  if (!data) return <p className="loading">Carregando...</p>;

  // 📊 BAR
  const barData = {
    labels: ["Leads", "Conversões"],
    datasets: [
      {
        label: "Performance",
        data: [data.leads || 0, data.conversions || 0]
      }
    ]
  };

  // 📈 LINE
  const lineData = {
    labels: data.daily?.map(d => d.date) || [],
    datasets: [
      {
        label: "Atividade semanal",
        data: data.daily?.map(d => d.value) || []
      }
    ]
  };

  // 🍩 DOUGHNUT
  const doughnutData = {
    labels: ["Convertidos", "Não Convertidos"],
    datasets: [
      {
        data: [
          data.conversions || 0,
          (data.leads || 0) - (data.conversions || 0)
        ]
      }
    ]
  };

  return (
    <div className="container">
      <h1 className="title">📊 BizDash Pro</h1>

      {/* 🧠 Insights */}
      <div className="insights">
        <p>
          📈 Crescimento:{" "}
          <strong>{data.growth?.toFixed(2) || "0.00"}%</strong>
        </p>
        <p>
          💰 ROI: <strong>{data.roi?.toFixed(2) || "0.00"}</strong>
        </p>
        <p>
          🎯 Conversão:{" "}
          <strong>
            {(data.conversion_rate * 100)?.toFixed(2) || "0.00"}%
          </strong>
        </p>
      </div>

      {/* 📊 Cards */}
      <div className="cards">
        <div className="card">
          <h3>Leads</h3>
          <p>{data.leads || 0}</p>
        </div>

        <div className="card">
          <h3>Conversões</h3>
          <p>{data.conversions || 0}</p>
        </div>

        <div className="card">
          <h3>Receita</h3>
          <p>R$ {data.revenue || 0}</p>
        </div>

        <div className="card">
          <h3>Marketing</h3>
          <p>R$ {data.marketing_spend || 0}</p>
        </div>
      </div>

      {/* 📊 Gráficos */}
      <div className="charts">
        <div className="chart">
          <h3>Performance</h3>
          <Bar key="bar" data={barData} />
        </div>

        <div className="chart">
          <h3>Conversão</h3>
          <Doughnut key="doughnut" data={doughnutData} />
        </div>

        <div className="chart">
          <h3>Atividade semanal</h3>
          <Line key="line" data={lineData} />
        </div>
      </div>
    </div>
  );
}