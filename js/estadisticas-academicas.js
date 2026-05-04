document.addEventListener("DOMContentLoaded", () => {
  const semestres = [
    "2021-I", "2021-II", "2022-I", "2022-II", "2023-I", "2023-II",
    "2024-I", "2024-II", "2025-I", "2025-II", "2026-I"
  ];
  const matriculados = [258, 249, 268, 253, 266, 276, 309, 331, 340, 342, 338];

  const anios = ["2020", "2021", "2022", "2023", "2024", "2025"];
  const graduados = [10, 27, 29, 35, 30, 32];

  // Configuración global de Highcharts
  Highcharts.setOptions({
    lang: {
      decimalPoint: '.',
      thousandsSep: ','
    },
    chart: {
      style: {
        fontFamily: '"Public Sans", system-ui, sans-serif'
      }
    }
  });

  Highcharts.chart("chart-matriculados", {
    chart: { 
      type: "areaspline", 
      backgroundColor: "transparent",
      marginTop: 30
    },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { 
      categories: semestres, 
      lineColor: '#e0e0e0',
      tickColor: '#e0e0e0',
      labels: {
        style: { color: '#666', fontSize: '11px' }
      }
    },
    yAxis: {
      min: 200,
      max: 360,
      gridLineColor: '#f0f0f0',
      title: { text: "Nº Estudiantes", style: { color: '#999' } },
      labels: {
        style: { color: '#666' }
      }
    },
    legend: { enabled: false },
    plotOptions: {
      areaspline: {
        fillColor: {
          linearGradient: { x1: 0, y1: 0, x2: 0, y2: 1 },
          stops: [
            [0, 'rgba(22, 133, 243, 0.2)'],
            [1, 'rgba(22, 133, 243, 0)']
          ]
        },
        marker: {
          radius: 4,
          fillColor: '#FFFFFF',
          lineWidth: 2,
          lineColor: '#1685F3'
        },
        lineWidth: 3,
        color: '#1685F3'
      }
    },
    series: [{
      name: "Matriculados",
      data: matriculados
    }],
    tooltip: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      shadow: true,
      useHTML: true,
      headerFormat: '<small style="color:#999;font-size:10px">{point.key}</small><br/>',
      pointFormat: '<span style="color:#1685F3;font-weight:bold;font-size:14px">{point.y}</span> <span style="color:#666">estudiantes</span>'
    }
  });

  Highcharts.chart("chart-graduados", {
    chart: { 
      type: "column", 
      backgroundColor: "transparent",
      marginTop: 30
    },
    title: { text: null },
    credits: { enabled: false },
    xAxis: { 
      categories: anios,
      lineColor: '#e0e0e0',
      tickColor: '#e0e0e0',
      labels: {
        style: { color: '#666' }
      }
    },
    yAxis: {
      min: 0,
      max: 40,
      gridLineColor: '#f0f0f0',
      title: { text: "Nº Graduados", style: { color: '#999' } },
      labels: {
        style: { color: '#666' }
      }
    },
    legend: { enabled: false },
    plotOptions: {
      column: {
        borderRadius: 6,
        borderWidth: 0,
        color: '#2266AA',
        pointWidth: 35,
        dataLabels: {
          enabled: true,
          style: { fontWeight: 'bold', color: '#2266AA' }
        }
      }
    },
    series: [{ name: "Graduados", data: graduados }],
    tooltip: {
      backgroundColor: '#ffffff',
      borderWidth: 1,
      borderColor: '#e0e0e0',
      shadow: true,
      useHTML: true,
      headerFormat: '<small style="color:#999;font-size:10px">Año {point.key}</small><br/>',
      pointFormat: '<span style="color:#2266AA;font-weight:bold;font-size:14px">{point.y}</span> <span style="color:#666">graduados</span>'
    }
  });

  // Llenar tablas con estilos
  const tbodyMat = document.getElementById("tbody-matriculados");
  semestres.forEach((sem, i) => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-primary/5 transition-colors";
    tr.innerHTML = `
      <td class="p-4 text-on-surface">${sem}</td>
      <td class="p-4 font-bold text-primary">${matriculados[i]}</td>
    `;
    tbodyMat.appendChild(tr);
  });

  const tbodyEgr = document.getElementById("tbody-graduados");
  anios.forEach((anio, i) => {
    const tr = document.createElement("tr");
    tr.className = "hover:bg-primary/5 transition-colors";
    tr.innerHTML = `
      <td class="p-4 text-on-surface">${anio}</td>
      <td class="p-4 font-bold text-primary">${graduados[i]}</td>
    `;
    tbodyEgr.appendChild(tr);
  });
});
