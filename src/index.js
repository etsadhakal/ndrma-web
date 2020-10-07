import 'bootstrap';
import $ from "jquery";
import Chart from 'chart.js';

import('./reset-password.html');
import('./forgot.html');
import('./dashboard.html');


import imageURL from './assets/ndrmaLogo-nepal.svg';
import logoOnly from './assets/ndrmaLogo.svg';
import image from './assets/mailbox.gif';
import defaultImage from './assets/default-avatar.jpg';

// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    });

});

//sidebar

$(document).ready(function () {
    $("#menu-toggle").click(function (e) {
        e.preventDefault();
        $("#wrapper").toggleClass("toggled");
    });
});

//charts
var ctx = document.getElementById('stockChart');
var myChart = new Chart(ctx, {
    type: 'bar',
    data: {
        labels: ['State 1', 'State 2', 'Gandaki', 'Bagmati', 'State 5', 'Karnali', 'SudurPaschim'],
        datasets: [{
            label: 'Stocks',
            data: [2343, 2641, 1672, 1878, 2092, 2012, 1198],
            backgroundColor: [
                '#eaeaea',
                '#eaeaea',
                '#eaeaea',
                '#eaeaea',
                '#eaeaea',
                '#eaeaea',
                '#eaeaea'
            ],
            hoverBackgroundColor: [
                '#007bff',
                '#007bff',
                '#007bff',
                '#007bff',
                '#007bff',
                '#007bff',
                '#007bff',
            ],
            borderWidth: 0,

        }]
    },
    options: {
        scales: {
            yAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                    drawBorder: false //<- set this
                },
            }],
            xAxes: [{
                ticks: {
                    display: false
                },
                gridLines: {
                    display: false,
                    drawBorder: false //<- set this
                },

            }]
        },
        legend: {
            display: false
        },
        layout: {
            padding: {
                left: 0,
                right: 0,
                top: 10,
                bottom: 0
            }
        },
        cornerRadius: 4,
        tooltips: {
            callbacks: {
                labelColor: function (tooltipItem, chart) {
                    return {
                        borderColor: '#333',
                        backgroundColor: '#333',
                        cornerRadius: 1,
                    };
                },
                labelTextColor: function (tooltipItem, chart) {
                    return '#fff';
                }
            }
        },
        hover: {
            onHover: function (e) {
                $("#stockChart").css("cursor", e[0] ? "pointer" : "default");
            }
        }
    }
});

