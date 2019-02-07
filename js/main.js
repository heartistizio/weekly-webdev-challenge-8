'use strict';

let circle1 = generateCircle(projects, '#F34739');
let circle2 = generateCircle(clients, '#009989');
let circle3 = generateCircle(months, '#152B3C');
let menubar = menu();


menubar.init();
circle1.text.style.top = '40%';
circle2.text.style.top = '40%';
circle3.text.style.top = '40%';
circle1.animate(0.5);
circle2.animate(0.35);
circle3.animate(0.8);

