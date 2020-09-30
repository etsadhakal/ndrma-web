import 'bootstrap';
import $ from "jquery";
import 'remixicon/fonts/remixicon.css';

import html from './reset.html';

import imageURL from './assets/ndrmaLogo-nepal.svg';
import image from './assets/mailbox.gif';

// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    });

}); 