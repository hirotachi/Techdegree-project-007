$.switcher();

// graph changer if clicked on filter buttons
const $filterList =  $(".filter");

$filterList.on("click"," li", function(e){
    $(".filter li").removeClass("filter_btn");
    $(this).addClass("filter_btn");

    new Chart(line, {
    type: 'line',
    data: {
        labels: createDateLabels(7, 'days', 11),
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
})

function createRandomData(min, max, enteries)  {
    let data = [];
    for (let i = 0; i <= enteries; i++) {
        data.push(Math.floor(Math.random() * max + min));
    }
    return data;
}

function createDateLabels(number){
    let labels = [];
    for (let i = 1; i< number; i++){
        labels.push("label");
    }

    return labels;
}
// ==============================================================
