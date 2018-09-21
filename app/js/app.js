var chart = new Chartist.Line('.ct-chart', {
    labels: ['1', '2', '3', '4', '5', '6', '7', '8'],
    series: [[5, 2, 4, 2, 0, 2, 5, 3]]
}, {
    fullWidth: true,
    showArea: true,
    lineSmooth: Chartist.Interpolation.none()
});
