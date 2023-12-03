$(".bars").click(function () { 
    $(".nav-links").css("width","250");
    $(".bars").addClass("ml");
});


$(".close-btn").click(function () { 
    $(".nav-links").css("width","0");
    $(".bars").removeClass("ml");
})


// section slidedown

$(".toggle").click(function(){
    
    $(this).next().slideToggle(500);

    $(".inner").not($(this).next()).slideUp()
   
})

// section counter 

var d = new Date()
console.log(d.getDay());




(function($){
$.fn.countdown = function(options) {

    var settings = { date: null };

    if (options) {
        $.extend(settings, options);
    }

    this_sel = $(this);

    function count_exec () {
        eventDate = Date.parse(settings['date']) / 1000;
        currentDate = Math.floor($.now () / 1000);

        seconds = eventDate - currentDate

        days = Math.floor(seconds / (60 * 60 * 24));
        months = Math.floor(seconds / (60 * 60 * 12));
        alert(days);
    }

    var currentDate = new Date();
var eventDate = new Date(2016, 3, 6); // months start from 0
var milliseconds = eventDate.getTime() - currentDate.getTime();
var seconds = parseInt(milliseconds / 1000);
var minutes = parseInt(seconds / 60);
var hours = parseInt(minutes / 60);
var days = parseInt(hours / 24);
var months = parseInt(days / 30);
seconds -= minutes * 60;
minutes -= hours * 60;
hours -= days * 24;
days -= months * 30;