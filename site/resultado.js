const ctx = document.getElementById('myChart')

const labels = [
    '2022',
    '2023',
    '2024',
    '2025',
    '2026',
    '2027',
    '2028',
    '2029',
    '2030',
    '2031',
    '2032',
    '2033',
    '2034',
    '2035',
    '2036',
    '2037',
    '2038',
    '2039',
    '2040',
    '2041',
    '2042',
    '2043',
    '2044',
    '2045',
    '2046'
]

const data ={
    labels,
    datasets: [{
        data: [211, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220, 220],
        label: "Geração"
    }]
}

const config = {
    type: 'line',
    data: data,
    options: {
        resposive: true
    }
  };

  const myChart = new Chart(ctx, config)