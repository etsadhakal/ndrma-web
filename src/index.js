import 'bootstrap';
import $ from "jquery";

import imageURL from './assets/ndrmaLogo-nepal.svg';

// JQuery
$(document).ready(() => {

    // bootstrap tooltips
    $(() => {
        $('[data-toggle="tooltip"]').tooltip({ trigger: "hover" })
    });

});