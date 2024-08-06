document.addEventListener('DOMContentLoaded', function() {
    const algorithmSelect = document.getElementById('algorithm-select');
    const timeCtx = document.getElementById('time-complexity-chart').getContext('2d');
    const spaceCtx = document.getElementById('space-complexity-chart').getContext('2d');
    const timeComplexityText = document.getElementById('time-complexity-text');

    let timeChart = new Chart(timeCtx, {
        type: 'line',
        data: {},
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Input Size (n)',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Operations',
                    },
                },
            },
        },
    });

    let spaceChart = new Chart(spaceCtx, {
        type: 'line',
        data: {},
        options: {
            scales: {
                x: {
                    title: {
                        display: true,
                        text: 'Input Size (n)',
                    },
                },
                y: {
                    title: {
                        display: true,
                        text: 'Space Requirements',
                    },
                },
            },
        },
    });

    algorithmSelect.addEventListener('change', function() {
        const algorithm = algorithmSelect.value;
        updateCharts(algorithm);
    });
    function updateCharts(algorithm) {
        const data = {
            fibonacci: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [2, 4, 8, 16, 32, 64, 128, 256, 512, 1024] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(2^n), O(n)'
            },
            binomial: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(2^n), O(n)'
            },
            subset_sum: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(2^n), O(n)'
            },
            coin_change: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(n*m), O(n)'
            },
            fast_power: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [0, 0.3010, 0.477, 0.602, 0.69, 0.77, 0.84, 0.9, 0.95, 1] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 2, 2, 2, 3, 3, 3, 4] },
                complexity: 'O(log n), O(log n)'
            },
            knapsack: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
                complexity: 'O(n*W), O(n*W)'
            },
            tsp: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 6, 24, 120, 720, 5040, 40320, 362880, 3628800] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(n!), O(n)'
            },
            lcs: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 4, 8, 16, 32, 64, 128, 256, 512] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 2, 3, 4, 5, 6, 7, 8, 9, 10] },
                complexity: 'O(n*m), O(n*m)'
            },
            tower_of_hanoi: {
                time: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 3, 7, 15, 31, 63, 127, 255, 511, 1023] },
                space: { labels: ['n=1', 'n=2', 'n=3', 'n=4', 'n=5', 'n=6', 'n=7', 'n=8', 'n=9', 'n=10'], values: [1, 1, 1, 1, 1, 1, 1, 1, 1, 1] },
                complexity: 'O(2^n), O(n)'
            }
        };
    
        const selectedData = data[algorithm];
    
        timeChart.data = {
            labels: selectedData.time.labels,
            datasets: [{
                label: 'Time Complexity',
                data: selectedData.time.values,
                borderColor: 'rgba(75, 192, 192, 1)',
                borderWidth: 2,
                fill: false
            }]
        };
    
        spaceChart.data = {
            labels: selectedData.space.labels,
            datasets: [{
                label: 'Space Complexity',
                data: selectedData.space.values,
                borderColor: 'rgba(153, 102, 255, 1)',
                borderWidth: 2,
                fill: false
            }]
        };
    
        timeComplexityText.innerText = `Time Complexity of ${algorithm.replace('_', ' ')}: ${selectedData.complexity}`;
    
        timeChart.update();
        spaceChart.update();
    }

    // Initialize with the first algorithm
    updateCharts(algorithmSelect.value);
});