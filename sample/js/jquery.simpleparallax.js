/**
 * Created by kopo4e.web@gmail.com on 09.02.2016.
 */

(function ($) {
    $.fn.simpleParallax = function (options) {

        var settings = $.extend({
            parallaxArea: 60,
            parallaxStart: 20,
            parallaxRun: 'up',
            parallaxZoom: ''
        }, options);

        var eh = 0,     // element height
            pv = 0,     // how many pixels in a single cent
            bp = 0,     // balance percent
            dst = 0,    // document scroll top
            eot = 0,    // element offset top
            eotc = 0,   // element offset top cache
            eob = 0,    //element offset bottom
            wst = 0,    // window height and scroll the document
            wh = 0;     // window heught

        return this.each(function () {

            var $el = $(this);
            eotc = $el.offset().top;

            function simpleParallaxInit() {

                eh = $el.outerHeight();
                wh = $(window).height();
                eot = $el.offset().top;
                eob = eot + wh + eh;

            };

            function simpleParallaxCalculate() {

                dst = $(document).scrollTop();

                if ($el.offset().top != eotc) {
                    simpleParallaxInit();
                }

                wst = wh + dst; // calculate
                pv = parseFloat((eob - eot) / settings.parallaxArea); // calculate

                if (eot <= wst && wst <= eob) {

                    bp = (eob - wst) / pv;

                    if (settings.parallaxRun === 'up') {
                        $el.css('background-position', '50% ' + (100 - (bp + settings.parallaxStart)) + '%');
                    } else {
                        $el.css('background-position', '50% ' + (bp + settings.parallaxStart) + '%');
                    }

                    if (settings.parallaxZoom === '+') {
                        $el.css('background-size', (100 + (settings.parallaxArea - bp)) + '%');
                    } else {
                        if (settings.parallaxZoom === '-') {
                            $el.css('background-size', ((settings.parallaxArea + 100) - (settings.parallaxArea - bp)) + '%');
                        }
                    }
                }

            };

            simpleParallaxInit();
            simpleParallaxCalculate();

            $(document).scroll(function () {
                simpleParallaxCalculate();
            });

            $(window).resize(function () {
                simpleParallaxCalculate();
            });

        });

    };
})(jQuery);
