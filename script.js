document.addEventListener("DOMContentLoaded", function() {
  // Define months for the x-axis labels
  const months = ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];

  // Generate simulated data for call volumes (e.g., between 500 and 1500 calls)
  const callVolumes = months.map(() => Math.floor(Math.random() * 1000) + 500);
  // Generate simulated data for drop rates (e.g., a percentage between 0 and 5)
  const dropRates = months.map(() => parseFloat((Math.random() * 5).toFixed(2)));

  // Initialize the Call Volume Bar Chart
  const ctx1 = document.getElementById('callVolumeChart').getContext('2d');
  const callVolumeChart = new Chart(ctx1, {
    type: 'bar',
    data: {
      labels: months,
      datasets: [{
        label: 'Call Volume',
        data: callVolumes,
        backgroundColor: 'rgba(0, 123, 255, 0.5)',
        borderColor: 'rgba(0, 123, 255, 1)',
        borderWidth: 1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Call Volume'
        }
      },
      scales: {
        y: {
          beginAtZero: true
        }
      }
    }
  });

  // Initialize the Call Drop Rate Line Chart
  const ctx2 = document.getElementById('dropRateChart').getContext('2d');
  const dropRateChart = new Chart(ctx2, {
    type: 'line',
    data: {
      labels: months,
      datasets: [{
        label: 'Call Drop Rate (%)',
        data: dropRates,
        fill: false,
        borderColor: 'rgba(220, 53, 69, 1)',
        tension: 0.1
      }]
    },
    options: {
      responsive: true,
      plugins: {
        title: {
          display: true,
          text: 'Monthly Call Drop Rate'
        }
      },
      scales: {
        y: {
          beginAtZero: true,
          max: 10
        }
      }
    }
  });
});
