//line graph============================================
const line = document.getElementById("trafficChart");
const myChart = new Chart(line, {
    type: 'line',
    data: {
        labels: createDateLabels(11),
        datasets: [{
            backgroundColor: 'rgba(115, 119, 191, 0.2)',
            borderColor: 'rgba(115, 119, 191, 1)',
            data: createRandomData(500, 2500, 11),
            borderWidth: 1,
            pointRadius: 5,
            pointBorderWidth: 2,
            pointBackgroundColor: '#fff'
        }]
    },
    options: {
        legend: {
            display: false
        },
        elements: {
            line: {
                tension: 0,
            }
        },
        responsive: true,
        maintainAspectRatio: false,
    }
});


function createRandomData(min, max, enteries)  {
    let data = [];
    for (let i = 0; i <= enteries; i++) {
        data.push(Math.floor(Math.random() * max + min));
    }
    return data;
}

function createDateLabels(number){
    let labels = [];
    let current = 7;
    for (let i = 1; i< number; i++){
        labels.push(`${current}-${current+6}`);
        if(current < 31){
            current += 6;
        }else{
            current = 6;
        }
    }

    return labels;
}

//Bar chart=====================================================================
const bar = document.querySelector(".trafficBar");
const myBarChart = new Chart(bar, {
    type: 'bar',
    data: {
        labels: ["S", "M", "T", "W", "T", "F", "S"],
        datasets: [{
            backgroundColor: "#7f5bbf",
            data: createRandomData(50, 250, 7)
        }]
    },
    options: {
        responsive: true,
        legend: {
            display: false
        },
        scales: {
            xAxes:[{
                barPercentage: 0.3
            }]
        },
        tooltips: {
            cornerRadius: 6
        }
    }
});

//donut chart=====================================================================
const donut = document.querySelector(".donutChart");

const myDonutChart= new Chart(donut, {
    type: "pie",
    data: {
        labels: ["Phones", "Tablets", "Desktops"],
        datasets: [{
            data: [50, 100, 300],
            backgroundColor: ["#71afc0", "#6ed78f", "#7e5bc0"]
        }]
    },
    options: {
        cutoutPercentage: 50,
        legend: {
            position: "right",
            boxWidth: 40,
            labels: {
                padding: 20
            }
        }
    }
});
