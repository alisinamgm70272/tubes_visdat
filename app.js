// 1. DATA MENTAH DARI API (Disimpan lokal agar tidak kena blokir CORS)
const dataNegara = [
  {
    name: { common: "Indonesia" },
    population: 273523615,
    area: 1904569,
    region: "Asia",
  },
  {
    name: { common: "India" },
    population: 1380004385,
    area: 3287590,
    region: "Asia",
  },
  {
    name: { common: "Amerika Serikat" },
    population: 331449281,
    area: 9372610,
    region: "Americas",
  },
  {
    name: { common: "Tiongkok" },
    population: 1411778724,
    area: 9706961,
    region: "Asia",
  },
  {
    name: { common: "Brasil" },
    population: 212559417,
    area: 8515767,
    region: "Americas",
  },
  {
    name: { common: "Nigeria" },
    population: 206139589,
    area: 923768,
    region: "Africa",
  },
  {
    name: { common: "Jepang" },
    population: 125836021,
    area: 377930,
    region: "Asia",
  },
  {
    name: { common: "Rusia" },
    population: 144104080,
    area: 17098242,
    region: "Europe",
  },
  {
    name: { common: "Meksiko" },
    population: 128932753,
    area: 1964375,
    region: "Americas",
  },
  {
    name: { common: "Mesir" },
    population: 102334404,
    area: 1002450,
    region: "Africa",
  },
  {
    name: { common: "Jerman" },
    population: 83240525,
    area: 357114,
    region: "Europe",
  },
  {
    name: { common: "Inggris" },
    population: 67215293,
    area: 242900,
    region: "Europe",
  },
  {
    name: { common: "Prancis" },
    population: 67391582,
    area: 551695,
    region: "Europe",
  },
  {
    name: { common: "Afrika Selatan" },
    population: 59308690,
    area: 1221037,
    region: "Africa",
  },
  {
    name: { common: "Australia" },
    population: 25687041,
    area: 7692024,
    region: "Oceania",
  },
];

// 2. FUNGSI UNTUK MEMBUAT GRAFIK
function jalankanDashboard() {
  // --- CHART 1: POPULASI (Bar Chart) ---
  const populasiTerbesar = [...dataNegara]
    .sort((a, b) => b.population - a.population)
    .slice(0, 10);
  const labelPopulasi = populasiTerbesar.map((n) => n.name.common);
  const isiPopulasi = populasiTerbesar.map((n) => n.population);

  new Chart(document.getElementById("populasiChart"), {
    type: "bar",
    data: {
      labels: labelPopulasi,
      datasets: [
        {
          label: "Jumlah Penduduk",
          data: isiPopulasi,
          backgroundColor: "rgba(54, 162, 235, 0.7)", // Warna Biru
        },
      ],
    },
  });

  // --- CHART 2: BENUA (Doughnut Chart) ---
  const benuaCount = {};
  dataNegara.forEach((n) => {
    const benua = n.region;
    benuaCount[benua] = (benuaCount[benua] || 0) + 1;
  });

  new Chart(document.getElementById("benuaChart"), {
    type: "doughnut",
    data: {
      labels: Object.keys(benuaCount),
      datasets: [
        {
          label: "Jumlah Negara",
          data: Object.values(benuaCount),
          backgroundColor: [
            "#FF6384",
            "#36A2EB",
            "#FFCE56",
            "#4BC0C0",
            "#9966FF",
          ],
        },
      ],
    },
  });

  // --- CHART 3: LUAS WILAYAH (Bar Chart) ---
  const luasTerbesar = [...dataNegara]
    .sort((a, b) => b.area - a.area)
    .slice(0, 10);
  const labelLuas = luasTerbesar.map((n) => n.name.common);
  const isiLuas = luasTerbesar.map((n) => n.area);

  new Chart(document.getElementById("luasChart"), {
    type: "bar",
    data: {
      labels: labelLuas,
      datasets: [
        {
          label: "Luas Wilayah (km²)",
          data: isiLuas,
          backgroundColor: "rgba(75, 192, 192, 0.7)", // Warna Hijau Tosca
        },
      ],
    },
  });
}

// 3. JALANKAN FUNGSINYA
jalankanDashboard();
