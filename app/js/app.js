$.switcher();

// graph changer if clicked on filter buttons
const $filterList =  $(".filter");

$filterList.on("click"," li", function(e){
    $(".filter li").removeClass("filter_btn");
    $(this).addClass("filter_btn");

    new Chart(line, {
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


// Notifcation==============================================================
const $notify = $(".notification");
const messages = ["hey i want to say something good to you", "can you add me as a friend", "your account has been deleted"];

// add list of messages on icon-bell click
$(".icon-bell").on("click", function(e){
    if($(".messages").length < 1){
        $notify.append(`<ul class="messages"></ul>`);
        for (let i = 0; i<messages.length; i++){
            $(".messages").append(`<li class="message">${messages[i]}<i class="fas fa-times"></i></li>`);
        }
        $(".messages").hide();
        $(".notify").remove();
        $(".messages").slideDown();
    }else{
        $(".messages").slideToggle();
    }
    
});
// remove list item on X click if there is only one list item left remove list from document
$(".notification").on("click", ".message i", function(){
    if($(".messages").children().length < 2){
        $(".messages").remove();
    }else{
    $(this).parent().remove();
    }

});

// add selected class to clicked sidebar option
$(".sidebar").on("click", "svg", function(){
    $(".sidebar svg").removeClass("selected");
    $(this).addClass("selected");
});

// ==========================================================
// remove alert box when the X is clicked
$(".dashboard_alert").on("click", "i", function(){
    $(".dashboard_alert").slideUp();
});
// =========================================================