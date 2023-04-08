setTimeout(function () {
    var Tawk_API = Tawk_API || {}, Tawk_LoadStart = new Date();
    if (!window.location.href.contains('bringyourdogtowork3')) {
        (function () {
            var s1 = document.createElement("script"), s0 = document.getElementsByTagName("script")[0];
            s1.async = true;
            s1.src = 'https://embed.tawk.to/5d248d5c22d70e36c2a4e201/default';
            s1.charset = 'UTF-8';
            s1.setAttribute('crossorigin', '*');
            s0.parentNode.insertBefore(s1, s0);
        })();
    }

}, 1000);

if(document.getElementById('js-try-it-out') != null){
    document.getElementById('js-try-it-out').addEventListener('ended', myHandler, false);
}
function myHandler(e) {
    // e.target.load();
    e.target.pause();
    e.target.currentTime = 0;
    $('.treatprompt').show();
}

if(document.getElementById('js-try-it-out-1') != null){
    document.getElementById('js-try-it-out-1').addEventListener('ended', myHandler, false);
}
function myHandler(e) {
    // e.target.load();
    e.target.pause();
    e.target.currentTime = 0;
    $('.treatprompt').show();
}

$(window).load(function () {
    document.getElementById('myvideo').src = 'https://www.youtube.com/embed/qKdxrGIFJyM';
})

function saveEmail(id) {
    document.getElementById(id).reportValidity();
    if (document.getElementById(id).checkValidity()) {
        $.ajax({
            url: '/php/subscribe.php',
            type: 'post',
            success: function (data) {
                window.location = '/payment'
            },
            data: {
                email: document.getElementById(id).firstElementChild.value
            }
        });
    }

}

// $(".fade-in-first").addClass("animated fadeInUp");
$(window).scroll(function () {
    var hT = $('.scroll-tracker').offset().top,
        hH = $('.scroll-tracker').outerHeight(),
        wH = $(window).height(),
        wS = $(this).scrollTop();
    if (wS > (hT + hH - wH) && (hT > wS) && (wS + wH > hT + hH)) {
        setTimeout(function () {
            $(".fade-in-second").animate({ opacity: 1 }, 1000);
            $(".btn-explore").addClass("pulse-anim");
        }, 1450);
    } else {
    }
});

Date.prototype.getMonthName = function () {
    var monthNames = ["Jan", "Feb", "Mar", "Apr", "May", "Jun",
        "Jul", "Aug", "Sep", "Oct", "Nov", "Dec"];
    return monthNames[this.getMonth()];
}

var currentDate = new Date();
$('.current-date').text(currentDate.getMonthName() + " " + currentDate.getDate() + ".");