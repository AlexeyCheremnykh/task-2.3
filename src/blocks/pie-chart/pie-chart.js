var ctx = $(".pie-chart__chart");
var pc = $(".pie-chart");
var myDoughnutChart = new Chart(ctx, {
    type: 'doughnut',
    showTooltips: false,
    data: {        
        datasets: [{
            data: [pc.data("val1"), pc.data("val2"), pc.data("val3"), pc.data("val4")],
            backgroundColor: [                
                "#747474",
                "#e75735",
                "#4eb7a8",
                "#e5e5e5"
            ],
            borderWidth: 0            
        }] 
    },
    options: {
        legend: {
            display: false
        },
        cutoutPercentage: 65,
        maintainAspectRatio: false,
        tooltips: { 
            enabled: false 
        },
        hover: { 
            mode: null 
        },              
    }
});
