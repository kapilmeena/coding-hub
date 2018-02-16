//jQuery Stuff
$(document).ready(
    function() {

        //Go btn-animation
        $('#go-btn').on('click',
            function() {
                $('#landing-page').slideUp(1200);
            }
        );

        //landing page loading stuff
        $(window).load(
            function() {
                setTimeout(
                    function() {
                        $('#home-wrapper').css('opacity', 1);
                        $children = $('#landing-page #home-wrapper').children();
                        $children.each((i, val) => {
                            setTimeout(function(i) {
                                    $(val).addClass("anime");
                                },
                                i * 700);
                        });
                    }
                ,1000);
            }
        );

        //navigation custom active class
        $('#main-navbar li').on('click',
            function() {
                if (!$(this).hasClass('active')) {
                    $('#main-navbar li.active').removeClass('active').children('span').remove();
                    $(this).addClass('active').append('<span class="sr-only">(current)</span>');
                    target = $(this).children('a').attr('href');
                    $('.navbar-toggle').click();
                }
            }
        );
    }
);

//Javascript Stuff
(function() {
    let paths = document.querySelectorAll('#home-wrapper svg path');
    paths.forEach(
        function(path) {
            path.style.strokeDasharray = path.getTotalLength();
        }
    );
})();


//timer-js
function getTimeRemaining(endtime) {
    var t = Date.parse(endtime) - Date.parse(new Date());
    var seconds = Math.floor((t / 1000) % 60);
    var minutes = Math.floor((t / 1000 / 60) % 60);
    var hours = Math.floor((t / (1000 * 60 * 60)) % 24);
    var days = Math.floor(t / (1000 * 60 * 60 * 24));
    return {
        'total': t,
        'days': days,
        'hours': hours,
        'minutes': minutes,
        'seconds': seconds
    };
}

function initializeClock(id, endtime) {
    var clock = document.getElementById(id);
    var daysSpan = clock.querySelector('.days');
    var hoursSpan = clock.querySelector('.hours');
    var minutesSpan = clock.querySelector('.minutes');
    var secondsSpan = clock.querySelector('.seconds');

    function updateClock() {
        var t = getTimeRemaining(endtime);

        daysSpan.innerHTML = t.days;
        hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
        minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
        secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);

        if (t.total <= 0) {
            clearInterval(timeinterval);
        }
    }

    updateClock();
    var timeinterval = setInterval(updateClock, 1000);
}

var deadline = new Date(2018, 1, 22);
initializeClock('clockdiv', deadline);