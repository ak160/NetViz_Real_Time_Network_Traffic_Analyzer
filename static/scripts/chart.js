// Fetch packet data from the server and create the chart
fetch('/api/packets')
    .then(response => response.json())
    .then(data => {
        const labels = data.map((_, i) => `Packet ${i + 1}`);
        const packetLengths = data.map(packet => packet.length);

        const ctx = document.getElementById('trafficChart').getContext('2d');
        const trafficChart = new Chart(ctx, {
            type: 'line',
            data: {
                labels: labels,
                datasets: [{
                    label: 'Packet Length',
                    data: packetLengths,
                    borderColor: 'rgba(75, 192, 192, 1)',
                    borderWidth: 1,
                    fill: false
                }]
            },
            options: {
                scales: {
                    x: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Packet Number'
                        }
                    },
                    y: {
                        beginAtZero: true,
                        title: {
                            display: true,
                            text: 'Packet Length'
                        }
                    }
                }
            }
        });
    });
