/*global $, console*/

$(function () {
   
    'use strict';
    
    $('.pCard_add').click(function () {
        $('.pCard_card').toggleClass('pCard_on');
        // todo 
        // $(this).parent().parent().addClass("pCard_on");
        $('.pCard_add i').toggleClass('fa-minus');
    });

});