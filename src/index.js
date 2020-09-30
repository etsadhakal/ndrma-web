import 'bootstrap';
import $ from "jquery";


import html from './reset.html';
// import ('./reset.html');

import 'remixicon/fonts/remixicon.css';

import imageURL from './assets/ndrmaLogo-nepal.svg';

// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    });

}); 