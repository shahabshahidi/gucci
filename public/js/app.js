class StickyEffect {
    constructor() {

        $(window).scroll(() => {
            StickyEffect.scroll();
            StickyEffect.checkOffset();
        })
    }

    static stickySize() {
        return 100;
    }

    static scroll() {
        if ($(window).scrollTop() > 50) {
            $("body").removeClass("is__effect");
        } else {
            $("body").addClass("is__effect");
        }
        StickyEffect.checkOffset();

    }

    static scrollTop() {
        return $(window).scrollTop();
    }

    static checkOffset() {
        const offsetTop = $('.sticky-banner').offset().top;
        const height = $('.sticky-banner').height();
        let offsetBottom;

        if ($(window).scrollTop() > 50) {
            offsetBottom = offsetTop + height + 60;
            if ($(window).scrollTop() > offsetBottom - 390) {
                // $('.sticky-container').css('bottom',  100);
                $('.sticky-container').css('bottom', 0);
            } else {
                // $('.sticky-container').css('bottom', (offsetBottom / height + $(window).scrollTop()));
                $('.sticky-container').css('bottom', $(window).scrollTop());
            }
        } else {
            offsetBottom = offsetTop + height + 385;
            $('.sticky-container').css('bottom', offsetBottom / 3);
        }

    }

}

new StickyEffect();

$(document).ready(function () {
    StickyEffect.scroll();
    StickyEffect.checkOffset()
})