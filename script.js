//cookie stuff                
let x = document.cookie;
//jQuery Stuff
$(document).ready(
    function() {

        //Go btn-animation
        if(x.includes("alreadyVisited=True")){
            $('#landing-page').css('display','none');
        }
        else{
            document.cookie = "alreadyVisited=True";
        }
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
                                i * 800);
                        });
                    }
                ,500);
            }
        );
    }
);

//timer-js
function timer(){
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

            if (t.total>0){
                daysSpan.innerHTML = t.days;
                hoursSpan.innerHTML = ('0' + t.hours).slice(-2);
                minutesSpan.innerHTML = ('0' + t.minutes).slice(-2);
                secondsSpan.innerHTML = ('0' + t.seconds).slice(-2);
            }
            else{
                document.getElementById(id).style.display = 'none';
                return;
            }
        }

        updateClock();
        var timeinterval = setInterval(updateClock, 1000);
    }
    
    var deadline = new Date(2018, 2, 9);
    initializeClock('clockdiv', deadline);
}
timer();
