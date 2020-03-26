$(function () {
    // Custom JS
    $(document).on('af_complete', function (event, response) {
        var form = response.form;
        if (response.success) {
            $('.closeModal').trigger('click');
            //var param = {loadpage: 'Отправка формы'};
            //yaCounter49355807.reachGoal('FORM_GOAL', param);
            // site order
            //gtag('event', 'form_order', { 'event_category': 'form_order', 'event_action': 'sendForm' });

        }
    });
});

/* Owl Carousel Configs */

$(document).ready(function () {
    $('#owl-demo').owlCarousel({
        loop: false,
        autoHeight : false,
        margin: 0,
        nav: true,
        dots: true,
        navText: ["<img src='assets/templates/default/img/leftArrow.png'>","<img src='assets/templates/default/img/rightArrow.png'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 1
            }
        }
    });

    $('#owl-demo1').owlCarousel({
        loop: false,
        autoHeight : false,
        margin: 0,
        nav: true,
        dots: false,
        navText: ["<img src='assets/templates/default/img/leftArrowRed.png'>","<img src='assets/templates/default/img/rightArrowRed.png'>"],
        responsive: {
            0: {
                items: 1
            },
            600: {
                items: 1
            },
            1000: {
                items: 3
            }
        }
    });
});