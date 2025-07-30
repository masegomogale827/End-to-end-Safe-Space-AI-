const ctx = document.getElementById('trendChart').getContext('2d');
let moodData = JSON.parse(localStorage.getItem('moodEntries')) || [];

function saveMood(mood) {
  const today = new Date().toLocaleDateString();
  moodData.push({ day: today, mood });
  localStorage.setItem('moodEntries', JSON.stringify(moodData));
  renderChart();
}

function renderChart() {
  const labels = moodData.map(e => e.day);
  const data = moodData.map(e => e.mood);
  new Chart(ctx, {
    type: 'line',
    data: {
      labels: labels,
      datasets: [{
        label: 'Mood Trend',
        data: data,
        borderColor: 'blue',
        fill: false
      }]
    }
  });
}

renderChart();
