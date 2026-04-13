document.addEventListener("DOMContentLoaded", () => {
  const semestres = [
    "2021-I", "2021-II", "2022-I", "2022-II", "2023-I", "2023-II",
    "2024-I", "2024-II", "2025-I", "2025-II", "2026-I"
  ];
  const matriculados = [258, 249, 268, 253, 266, 276, 309, 331, 340, 342, 338];

  const anios = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const graduados = [10, 27, 29, 35, 30, 32];

  Highcharts.chart("chart-matriculados", {
    chart: { type: "line", backgroundColor: "transparent" },
    title: { text: "Estudiantes matriculados por semestre academico" },
    subtitle: { text: "Estudiantes de la EPIS-UPT" },
    xAxis: { categories: semestres, title: { text: "Semestres" } },
    yAxis: {
      min: 225,
      max: 350,
      tickInterval: 25,
      title: { text: "Cantidad" }
    },
    legend: { enabled: true },
    credits: { enabled: true },
    series: [{
      name: "Estudiantes matriculados",
      data: matriculados,
      color: "#1685F3",
      lineWidth: 3,
      marker: { radius: 4 }
    }],
    tooltip: {
      pointFormat: "<b>Estudiantes matriculados:</b> {point.y}"
    },
    responsive: {
      rules: [{
        condition: { maxWidth: 640 },
        chartOptions: { xAxis: { labels: { rotation: -45 } } }
      }]
    }
  });

  Highcharts.chart("chart-graduados", {
    chart: { type: "column", backgroundColor: "transparent" },
    title: { text: "Graduados por Ano" },
    xAxis: { categories: anios, title: { text: "Ano" } },
    yAxis: {
      min: 0,
      max: 40,
      tickInterval: 10,
      title: { text: "Cantidad" }
    },
    legend: { enabled: true },
    plotOptions: {
      column: {
        borderRadius: 4,
        pointPadding: 0.1,
        groupPadding: 0.12
      }
    },
    series: [{ name: "Graduados", data: graduados, color: "#2266AA" }],
    tooltip: { pointFormat: "<b>Graduados:</b> {point.y}" },
    credits: { enabled: true }
  });

  const tbodyMat = document.getElementById("tbody-matriculados");
  semestres.forEach((sem, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${sem}</td><td>${matriculados[i]}</td>`;
    tbodyMat.appendChild(tr);
  });

  const tbodyEgr = document.getElementById("tbody-graduados");
  anios.forEach((anio, i) => {
    const tr = document.createElement("tr");
    tr.innerHTML = `<td>${anio}</td><td>${graduados[i]}</td>`;
    tbodyEgr.appendChild(tr);
  });
});