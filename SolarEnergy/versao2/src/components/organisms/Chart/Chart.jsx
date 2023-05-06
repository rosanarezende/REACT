import "./Chart.css";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
} from "chart.js";
import { useFetch } from "../../../hooks";
ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement);

export default function Chart({ filter }) {
  const { data: units } = useFetch(
    `http://localhost:3003/unidades`
  );
  const { data: generation, loading: generationLoading } = useFetch(
    "http://localhost:3003/geracoes"
  );

  const generationData = generation?.filter((gen) => {
    const unit = units?.find((unit) => unit.id === gen.unidade);
    if (filter === "all") return true;
    if (filter === "active") return unit?.ativa;
    if (filter === "inactive") return !unit?.ativa;
  });

  const convertMonthNumberToName = (monthNumber) => {
    switch (monthNumber) {
      case "01":
        return "Janeiro";
      case "02":
        return "Fevereiro";
      case "03":
        return "Março";
      case "04":
        return "Abril";
      case "05":
        return "Maio";
      case "06":
        return "Junho";
      case "07":
        return "Julho";
      case "08":
        return "Agosto";
      case "09":
        return "Setembro";
      case "10":
        return "Outubro";
      case "11":
        return "Novembro";
      case "12":
        return "Dezembro";
      default:
        return "";
    }
  };

  const groupDataByMonth = (data) => {
    const groupedData = {};
    data?.forEach((item) => {
      const month = item.data.split("-")[1];
      const monthName = convertMonthNumberToName(month);
      if (!groupedData[monthName]) {
        groupedData[monthName] = 0;
      }
      groupedData[monthName] += item.total;
    });
    return groupedData;
  };

  const groupedData = groupDataByMonth(generationData);

  const chartData = {
    labels: Object.keys(groupedData).slice(-6),
    datasets: [
      {
        label: "Energia gerada por mês",
        data: Object.values(groupedData).slice(-6),
        fill: false,
        borderColor: "#2196F3",
        lineTension: 0.5,
        pointRadius: 0,
      },
    ],
  };

  return !generationLoading && (
    <section className="chart">
      <h2>Total de energia gerada por mês</h2>
      {chartData && (
        <Line
          data={chartData}
          options={{
            scales: {
              y: {
                beginAtZero: true,
                // max: 1000,
                position: "right",
              },
              x: {
                offset: true,
                grid: {
                  display: false,
                },
              },
            },
          }}
        />
      )}
    </section>
  );
}
