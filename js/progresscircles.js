'use strict';


function generateCircle(container, color) {
    return new ProgressBar.Circle(container, {
        color: color,
        strokeWidth: 2,
        trailWidth: 1,
        duration: 1500,
        text: {
            value: '0'
        },
        step: function (state, bar) {
            bar.setText((bar.value() * 100).toFixed(0));
        }
    });

}