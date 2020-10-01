import 'bootstrap';
import $ from "jquery";

import('./reset-password.html');
import('./forgot.html');
import('./dashboard/dashboard.html');

import imageURL from './assets/ndrmaLogo-nepal.svg';
import image from './assets/mailbox.gif';

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
