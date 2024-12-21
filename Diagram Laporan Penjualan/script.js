        var data2022 = {
            x: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            y: [4017, 6135, 7091, 5841, 5036, 4547, 3467, 3970, 6313, 3595, 9207, 5945],
            name: '2022',
            type: 'bar',
            marker: {
                color: 'rgba(165, 55, 253, 1)',
                line: {
                    color: 'rgba(90, 34, 139, 1)',
                    width: 1.5
                }
            }
        };

        var data2023 = {
            x: ['Januari', 'Februari', 'Maret', 'April', 'Mei', 'Juni', 'Juli', 'Agustus', 'September', 'Oktober', 'November', 'Desember'],
            y: [2416, 4136, 7935, 8004, 9505, 5026, 6108, 6343, 9404, 9280, 9287, 8689],
            name: '2023',
            type: 'bar',
            marker: {
                color: 'rgba(0, 181, 204, 1)',
                line: {
                    color: 'rgba(30, 81, 123, 1)',
                    width: 1.5
                }
            }
        };

        var layout = {
            title: 'Laporan Penjualan',
            barmode: 'group',
            scene: {
                xaxis: {title: 'Bulan'},
                yaxis: {title: 'Penjualan'},
                zaxis: {title: 'Tahun'}
            }
        };

        Plotly.newPlot('salesChart', [data2022, data2023], layout);