(function(i, s, o, g, r, a, m) {
    i['GoogleAnalyticsObject'] = r;
    i[r] = i[r] || function() {
            (i[r].q = i[r].q || []).push(arguments)
        }, i[r].l = 1 * new Date();
    a = s.createElement(o),
        m = s.getElementsByTagName(o)[0];
    a.async = 1;
    a.src = g;
    m.parentNode.insertBefore(a, m)
})(window, document, 'script', '//www.google-analytics.com/analytics.js', 'ga');

ga('create', 'UA-34016412-14', 'auto');
ga('send', 'pageview');


function Init(a) {
    1 != a && (_afterResize(), _slider_full(), _topNav(), _sideNav(), _stickyFooter(), _infiniteScroll()), _owl_carousel(), _flexslider(), _popover(), _lightbox(), _mixitup(), _animate(), _onepageNav(), _scrollTo(!1, 0), _parallax(), _video(), _youtubeBG(), _toggle(), _placeholder(), _wrotate(), _lazyload(), _misc(), _countDown(), _masonryGallery(), _toastr(!1, !1, !1, !1), _charts(), _select2(), _form(), _pickers(), _editors(), _pajinate(), _zoom(), _autosuggest(), _stepper(), _slimScroll(), _modalAutoLoad(), _bgimage(), _widget_flickr(), _widget_twitter(), _widget_facebook(), _widget_dribbble(), _widget_media(), jQuery("a[data-toggle=tooltip], button[data-toggle=tooltip], span[data-toggle=tooltip]").tooltip()
}

function _afterResize() {
    jQuery(window).load(function() {
        "use strict";
        jQuery(window).resize(function() {
            window.afterResizeApp && clearTimeout(window.afterResizeApp), window.afterResizeApp = setTimeout(function() {
                _slider_full(), window.width = jQuery(window).width(), jQuery(".flexslider").length > 0 && jQuery(".flexslider").resize()
            }, 300)
        })
    })
}

function loadScript(a, b) {
    if (_arr[a]) b && b();
    else {
        _arr[a] = !0;
        var c = document.getElementsByTagName("body")[0],
            d = document.createElement("script");
        d.type = "text/javascript", d.src = a, d.onload = b, c.appendChild(d)
    }
}

function _slider_full() {
    _headerHeight = 0, jQuery("#header").hasClass("transparent") || jQuery("#header").hasClass("translucent") ? _headerHeight = 0 : (_headerHeight = jQuery("#header").outerHeight(), jQuery("#topBar").length > 0 && (_headerHeight += jQuery("#topBar").outerHeight())), _screenHeight = jQuery(window).height() - _headerHeight, jQuery("#slider.fullheight").height(_screenHeight)
}

function _topNav() {
    function b() {
        _scrollTop = jQuery(document).scrollTop(), _scrollTop > 100 ? jQuery("#toTop").is(":hidden") && jQuery("#toTop").show() : jQuery("#toTop").is(":visible") && jQuery("#toTop").hide()
    }

    function d() {
        jQuery("#sidepanel_overlay").unbind(), jQuery("#sidepanel_overlay").bind("click", function() {
            jQuery("a#sidepanel_btn").trigger("click")
        })
    }
    window.scrollTop = 0;
    var a = jQuery("#header");
    jQuery(window).scroll(function() {
        b()
    });
    var c = !1;
    if (jQuery("#topMain a.dropdown-toggle").bind("click", function(a) {
            "#" == jQuery(this).attr("href") && a.preventDefault(), c = jQuery(this).parent().hasClass("resp-active"), jQuery("#topMain").find(".resp-active").removeClass("resp-active"), c || jQuery(this).parents("li").addClass("resp-active")
        }), jQuery("li.search i.fa").click(function() {
            jQuery("#header .search-box").is(":visible") ? jQuery("#header .search-box").fadeOut(300) : (jQuery(".search-box").fadeIn(300), jQuery("#header .search-box form input").focus(), jQuery("#header li.quick-cart div.quick-cart-box").is(":visible") && jQuery("#header li.quick-cart div.quick-cart-box").fadeOut(300))
        }), 0 != jQuery("#header li.search i.fa").size() && (jQuery("#header .search-box, #header li.search i.fa").on("click", function(a) {
            a.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        })), jQuery(document).bind("click", function() {
            jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(300)
        }), jQuery("#closeSearch").bind("click", function(a) {
            a.preventDefault(), jQuery("#header .search-box").fadeOut(300)
        }), jQuery("button#page-menu-mobile").bind("click", function() {
            jQuery(this).next("ul").slideToggle(150)
        }), jQuery("li.quick-cart>a").click(function(a) {
            a.preventDefault();
            var b = jQuery("li.quick-cart div.quick-cart-box");
            b.is(":visible") ? b.fadeOut(300) : (b.fadeIn(300), jQuery("li.search .search-box").is(":visible") && jQuery(".search-box").fadeOut(300))
        }), 0 != jQuery("li.quick-cart>a").size() && (jQuery("li.quick-cart").on("click", function(a) {
            a.stopPropagation()
        }), jQuery("body").on("click", function() {
            jQuery("li.quick-cart div.quick-cart-box").is(":visible") && jQuery("li.quick-cart div.quick-cart-box").fadeOut(300)
        })), jQuery("#page-menu ul.menu-scrollTo>li").bind("click", function(a) {
            var b = jQuery("a", this).attr("href");
            jQuery("a", this).hasClass("external") || (a.preventDefault(), jQuery("#page-menu ul.menu-scrollTo>li").removeClass("active"), jQuery(this).addClass("active"), jQuery(b).length > 0 && (_padding_top = 0, jQuery("#header").hasClass("sticky") && (_padding_top = jQuery(b).css("padding-top"), _padding_top = _padding_top.replace("px", "")), jQuery("html,body").animate({
                scrollTop: jQuery(b).offset().top - _padding_top
            }, 800, "easeInOutExpo")))
        }), a.hasClass("bottom") ? (a.addClass("dropup"), window.homeHeight = jQuery(window).outerHeight() - 55, a.hasClass("sticky") && (window.isOnTop = !0, jQuery(window).scroll(function() {
                jQuery(document).scrollTop() > window.homeHeight / 2 ? a.removeClass("dropup") : a.addClass("dropup")
            }), jQuery(window).scroll(function() {
                jQuery(document).scrollTop() > window.homeHeight ? window.isOnTop === !0 && (jQuery("#header").addClass("fixed"), a.removeClass("dropup"), window.isOnTop = !1) : window.isOnTop === !1 && (jQuery("#header").removeClass("fixed"), a.addClass("dropup"), window.isOnTop = !0)
            }), jQuery(window).resize(function() {
                window.homeHeight = jQuery(window).outerHeight()
            }))) : a.hasClass("sticky") ? jQuery(window).scroll(function() {
                    if (window.width > 0) {
                        var b = jQuery(document).scrollTop();
                        _topBar_H = jQuery("#topBar").outerHeight() || 0, b > _topBar_H ? (a.addClass("fixed"), _header_H = a.outerHeight() || 0, a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                                "padding-top": _header_H + "px"
                            })) : (a.hasClass("transparent") || a.hasClass("translucent") || jQuery("body").css({
                                "padding-top": "0px"
                            }), a.removeClass("fixed"))
                    }
                }) : a.hasClass("static"), jQuery("#slidetop a.slidetop-toggle").bind("click", function() {
            jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop .container").is(":hidden") ? jQuery("#slidetop").removeClass("active") : jQuery("#slidetop").addClass("active")
            })
        }), jQuery(document).keyup(function(a) {
            27 == a.keyCode && jQuery("#slidetop").hasClass("active") && jQuery("#slidetop .container").slideToggle(150, function() {
                jQuery("#slidetop").removeClass("active")
            })
        }), jQuery("a#sidepanel_btn").bind("click", function(a) {
            a.preventDefault(), f = "right", jQuery("#sidepanel").hasClass("sidepanel-inverse") && (f = "left"), jQuery("#sidepanel").is(":hidden") ? (jQuery("body").append('<span id="sidepanel_overlay"></span>'), "left" == f ? jQuery("#sidepanel").stop().show().animate({
                        left: "0px"
                    }, 150) : jQuery("#sidepanel").stop().show().animate({
                        right: "0px"
                    }, 150)) : (jQuery("#sidepanel_overlay").remove(), "left" == f ? jQuery("#sidepanel").stop().animate({
                        left: "-300px"
                    }, 300) : jQuery("#sidepanel").stop().animate({
                        right: "-300px"
                    }, 300), setTimeout(function() {
                    jQuery("#sidepanel").hide()
                }, 500)), d()
        }), jQuery("#sidepanel_close").bind("click", function(a) {
            a.preventDefault(), jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery(document).keyup(function(a) {
            27 == a.keyCode && jQuery("#sidepanel").is(":visible") && jQuery("a#sidepanel_btn").trigger("click")
        }), jQuery("#menu_overlay_open").length > 0) {
        var e = !!jQuery("html").hasClass("ie9");
        1 == e && jQuery("#topMain").hide(), jQuery("#menu_overlay_open").bind("click", function(a) {
            a.preventDefault(), jQuery("body").addClass("show-menu"), 1 == e && jQuery("#topMain").show()
        }), jQuery("#menu_overlay_close").bind("click", function(a) {
            a.preventDefault(), jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == e && jQuery("#topMain").hide()
        }), jQuery(document).keyup(function(a) {
            27 == a.keyCode && (jQuery("body").hasClass("show-menu") && jQuery("body").removeClass("show-menu"), 1 == e && jQuery("#topMain").hide())
        })
    }
    if (jQuery("#sidebar_vertical_btn").length > 0 && jQuery("body").hasClass("menu-vertical-hide")) {
        if (_paddingStatusL = jQuery("#mainMenu.sidebar-vertical").css("left"), _paddingStatusR = jQuery("#mainMenu.sidebar-vertical").css("right"), parseInt(_paddingStatusL) < 0) var f = "left";
        else if (parseInt(_paddingStatusR) < 0) var f = "right";
        else var f = "left";
        jQuery("#sidebar_vertical_btn").bind("click", function(a) {
            _paddingStatus = jQuery("#mainMenu.sidebar-vertical").css(f), parseInt(_paddingStatus) < 0 ? "right" == f ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                        right: "0px"
                    }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                        left: "0px"
                    }, 200) : "right" == f ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                        right: "-263px"
                    }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                        left: "-263px"
                    }, 200)
        }), jQuery(window).scroll(function() {
            _paddingStatus = parseInt(jQuery("#mainMenu.sidebar-vertical").css(f)), _paddingStatus >= 0 && ("right" == f ? jQuery("#mainMenu.sidebar-vertical").stop().animate({
                    right: "-263px"
                }, 200) : jQuery("#mainMenu.sidebar-vertical").stop().animate({
                    left: "-263px"
                }, 200))
        })
    }
    jQuery("#topBar").length > 0 && jQuery("#topNav ul").addClass("has-topBar"), jQuery(window).scroll(function() {
        window.width < 769 && (jQuery("#header li.quick-cart div.quick-cart-box").is(":visible") && jQuery("#header li.quick-cart div.quick-cart-box").fadeOut(0), jQuery("#header li.search .search-box").is(":visible") && jQuery("#header .search-box").fadeOut(0))
    })
}

function _sideNav() {
    jQuery("div.side-nav").each(function() {
        var a = jQuery("ul", this);
        jQuery("button", this).bind("click", function() {
            a.slideToggle(300)
        })
    }), jQuery("div.side-nav>ul>li>a.dropdown-toggle").bind("click", function(a) {
        a.preventDefault(), jQuery(this).next("ul").slideToggle(200), jQuery(this).closest("li").toggleClass("active")
    })
}

function _animate() {
    if (jQuery("body").hasClass("enable-animation")) {
        var a = new WOW({
            boxClass: "wow",
            animateClass: "animated",
            offset: 90,
            mobile: !1,
            live: !0
        });
        a.init()
    }
    jQuery(".countTo").appear(function() {
        var a = jQuery(this),
            b = a.attr("data-from") || 0,
            c = a.attr("data-speed") || 1300,
            d = a.attr("data-refreshInterval") || 60;
        a.countTo({
            from: parseInt(b),
            to: a.html(),
            speed: parseInt(c),
            refreshInterval: parseInt(d)
        })
    })
}

function _onepageNav() {
    var a = jQuery("#topMain.nav-onepage");
    a.length > 0 && loadScript(plugin_path + "jquery.nav.min.js", function() {
        jQuery(a).onePageNav({
            currentClass: "active",
            changeHash: !1,
            scrollSpeed: 750,
            scrollThreshold: .5,
            filter: ":not(.external)",
            easing: "easeInOutExpo"
        })
    });
    var b = jQuery("#nav-bullet");
    b.length > 0 && loadScript(plugin_path + "jquery.nav.min.js", function() {
        jQuery(b).onePageNav({
            currentClass: "active",
            changeHash: !1,
            scrollSpeed: 750,
            scrollThreshold: .5,
            filter: ":not(.external)",
            easing: "easeInOutExpo"
        })
    })
}

function _owl_carousel() {
    var _container = jQuery("div.owl-carousel");
    _container.length > 0 && loadScript(plugin_path + "owl-carousel/owl.carousel.min.js", function() {
        _container.each(function() {
            function progressBar(a) {
                $elem = a, buildProgressBar(), start()
            }

            function buildProgressBar() {
                $progressBar = jQuery("<div>", {
                    id: "progressBar"
                }), $bar = jQuery("<div>", {
                    id: "bar"
                }), $progressBar.append($bar).prependTo($elem)
            }

            function start() {
                percentTime = 0, isPause = !1, tick = setInterval(interval, 10)
            }

            function interval() {
                isPause === !1 && (percentTime += 1 / time, $bar.css({
                    width: percentTime + "%"
                }), percentTime >= 100 && $elem.trigger("owl.next"))
            }

            function pauseOnDragging() {
                isPause = !0
            }

            function moved() {
                clearTimeout(tick), start()
            }
            var slider = jQuery(this),
                options = slider.attr("data-plugin-options"),
                $opt = eval("(" + options + ")");
            if ("true" == $opt.progressBar) var afterInit = progressBar;
            else var afterInit = !1;
            var defaults = {
                    items: 5,
                    itemsCustom: !1,
                    itemsDesktop: [1199, 4],
                    itemsDesktopSmall: [980, 3],
                    itemsTablet: [768, 2],
                    itemsTabletSmall: !1,
                    itemsMobile: [479, 1],
                    singleItem: !0,
                    itemsScaleUp: !1,
                    slideSpeed: 200,
                    paginationSpeed: 800,
                    rewindSpeed: 1e3,
                    autoPlay: !1,
                    stopOnHover: !1,
                    navigation: !1,
                    navigationText: ['<i class="fa fa-angle-left"></i>', '<i class="fa fa-angle-right"></i>'],
                    rewindNav: !0,
                    scrollPerPage: !1,
                    pagination: !0,
                    paginationNumbers: !1,
                    responsive: !0,
                    responsiveRefreshRate: 200,
                    responsiveBaseWidth: window,
                    baseClass: "owl-carousel",
                    theme: "owl-theme",
                    lazyLoad: !1,
                    lazyFollow: !0,
                    lazyEffect: "fade",
                    autoHeight: !1,
                    jsonPath: !1,
                    jsonSuccess: !1,
                    dragBeforeAnimFinish: !0,
                    mouseDrag: !0,
                    touchDrag: !0,
                    transitionStyle: !1,
                    addClassActive: !1,
                    beforeUpdate: !1,
                    afterUpdate: !1,
                    beforeInit: !1,
                    afterInit: afterInit,
                    beforeMove: !1,
                    afterMove: 0 != afterInit && moved,
                    afterAction: !1,
                    startDragging: !1,
                    afterLazyLoad: !1
                },
                config = jQuery.extend({}, defaults, options, slider.data("plugin-options"));
            slider.owlCarousel(config).addClass("owl-carousel-init");
            var elem = jQuery(this),
                time = 7
        })
    })
}

function _flexslider() {
    var a = jQuery(".flexslider");
    a.length > 0 && loadScript(plugin_path + "slider.flexslider/jquery.flexslider-min.js", function() {
        if (jQuery().flexslider) {
            var b = a.attr("data-controlNav"),
                c = a.attr("data-slideshowSpeed") || 7e3,
                d = a.attr("data-pauseOnHover") || !1;
            d = "true" == d, b = "thumbnails" == b ? "thumbnails" : "true" == b || "false" != b, "thumbnails" == b || 0 == b ? _directionNav = !1 : _directionNav = !0, jQuery(a).flexslider({
                animation: "slide",
                controlNav: b,
                slideshowSpeed: parseInt(c) || 7e3,
                directionNav: _directionNav,
                pauseOnHover: d,
                start: function(a) {
                    jQuery(".flex-prev").html('<i class="fa fa-angle-left"></i>'), jQuery(".flex-next").html('<i class="fa fa-angle-right"></i>')
                }
            }), a.resize()
        }
    })
}

function _popover() {
    jQuery("a[data-toggle=popover]").bind("click", function(a) {
        jQuery(".popover-title .close").remove(), a.preventDefault()
    });
    var a = !1,
        b = !1;
    jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function(c) {
        jQuery(this).popover("show"), b = !1, a = !0, c.preventDefault()
    }), jQuery(document).click(function(c) {
        a & b ? (jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide"), a = b = !1) : b = !0
    }), jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover({
        html: !0,
        trigger: "manual"
    }).click(function(a) {
        $(this).popover("show"), $(".popover-title").append('<button type="button" class="close">&times;</button>'), $(".close").click(function(a) {
            jQuery("a[data-toggle=popover], button[data-toggle=popover]").popover("hide")
        }), a.preventDefault()
    })
}

function _lightbox() {
    var a = jQuery(".lightbox");
    a.length > 0 && loadScript(plugin_path + "magnific-popup/jquery.magnific-popup.min.js", function() {
        return "undefined" != typeof jQuery.magnificPopup && (jQuery.extend(!0, jQuery.magnificPopup.defaults, {
                tClose: "Close",
                tLoading: "Loading...",
                gallery: {
                    tPrev: "Previous",
                    tNext: "Next",
                    tCounter: "%curr% / %total%"
                },
                image: {
                    tError: "Image not loaded!"
                },
                ajax: {
                    tError: "Content not loaded!"
                }
            }), void a.each(function() {
                var a = jQuery(this),
                    b = a.attr("data-plugin-options"),
                    c = {},
                    d = {
                        type: "image",
                        fixedContentPos: !1,
                        fixedBgPos: !1,
                        mainClass: "mfp-no-margins mfp-with-zoom",
                        closeOnContentClick: !0,
                        closeOnBgClick: !0,
                        image: {
                            verticalFit: !0
                        },
                        zoom: {
                            enabled: !1,
                            duration: 300
                        },
                        gallery: {
                            enabled: !1,
                            navigateByImgClick: !0,
                            preload: [0, 1],
                            arrowMarkup: '<button title="%title%" type="button" class="mfp-arrow mfp-arrow-%dir%"></button>',
                            tPrev: "Previous",
                            tNext: "Next",
                            tCounter: '<span class="mfp-counter">%curr% / %total%</span>'
                        }
                    };
                a.data("plugin-options") && (c = jQuery.extend({}, d, b, a.data("plugin-options"))), jQuery(this).magnificPopup(c)
            }))
    })
}

function _scrollTo(a, b) {
    0 == a ? (jQuery("a.scrollTo").bind("click", function(a) {
            a.preventDefault();
            var b = jQuery(this).attr("href"),
                c = jQuery(this).attr("data-offset") || 0;
            "#" != b && "#top" != b && jQuery("html,body").animate({
                scrollTop: jQuery(b).offset().top - parseInt(c)
            }, 800, "easeInOutExpo"), "#top" == b && jQuery("html,body").animate({
                scrollTop: 0
            }, 800, "easeInOutExpo")
        }), jQuery("#toTop").bind("click", function(a) {
            a.preventDefault(), jQuery("html,body").animate({
                scrollTop: 0
            }, 800, "easeInOutExpo")
        })) : jQuery("html,body").animate({
            scrollTop: jQuery(a).offset().top - b
        }, 800, "easeInOutExpo")
}

function _parallax() {
    jQuery().parallax && (jQuery(".parallax-1").parallax("50%", "0.1"), jQuery(".parallax-2").parallax("50%", "0.2"), jQuery(".parallax-3").parallax("50%", "0.3"), jQuery(".parallax-4").parallax("50%", "0.4"));
    var a = jQuery("#slider");
    if (a.length > 0 && a.hasClass("parallax-slider")) {
        a.offset().top;
        jQuery(window).scroll(function() {
            var a = jQuery(document).scrollTop();
            if (a < 768) {
                var b = jQuery("#slider").height();
                jQuery("#slider>div").css("top", .5 * a), jQuery("#slider>div").css("opacity", 1 - a / b * 1)
            }
        })
    }
}

function _video() {
    if (jQuery("section.section-video").length > 0) {
        var a = jQuery("section.section-video .section-container-video>video");
        _w = jQuery(window).width(), a.width(_w)
    }
}

function _youtubeBG() {
    var a = jQuery("#YTPlayer");
    a.length > 0 && loadScript(plugin_path + "jquery.mb.YTPlayer.min.js", function() {
        if (jQuery().mb_YTPlayer) {
            var a = !1;
            /Android|webOS|iPhone|iPad|iPod|BlackBerry/i.test(navigator.userAgent), a === !1 ? (jQuery(".player").mb_YTPlayer(), jQuery("#video-volume").bind("click", function(a) {
                    a.preventDefault(), jQuery("#YTPlayer").toggleVolume()
                }), jQuery("#video-volume").bind("click", function() {
                    jQuery("i.fa", this).hasClass("fa-volume-down") ? (jQuery("i.fa", this).removeClass("fa-volume-down"), jQuery("i.fa", this).removeClass("fa-volume-up"), jQuery("i.fa", this).addClass("fa-volume-up")) : (jQuery("i.fa", this).removeClass("fa-volume-up"), jQuery("i.fa", this).removeClass("fa-volume-v"), jQuery("i.fa", this).addClass("fa-volume-down"))
                })) : jQuery(".player , #video-volume").hide()
        }
    })
}

function _mixitup() {
    var a = jQuery(".mix-grid");
    a.length > 0 && loadScript(plugin_path + "mixitup/jquery.mixitup.min.js", function() {
        jQuery().mixitup && (a.mixitup(), jQuery("ul.mix-filter a").bind("click", function(a) {
            a.preventDefault()
        }))
    })
}

function _toggle() {
    var b = 25;
    jQuery("div.toggle.active > p").addClass("preview-active"), jQuery("div.toggle.active > div.toggle-content").slideDown(400), jQuery("div.toggle > label").click(function(a) {
        var c = jQuery(this).parent(),
            d = jQuery(this).parents("div.toggle"),
            e = !1,
            f = d.hasClass("toggle-accordion");
        if (f && "undefined" != typeof a.originalEvent && d.find("div.toggle.active > label").trigger("click"), c.toggleClass("active"), c.find("> p").get(0)) {
            e = c.find("> p");
            var g = e.css("height"),
                h = e.css("height");
            e.css("height", "auto"), e.css("height", g)
        }
        var i = c.find("> div.toggle-content");
        c.hasClass("active") ? (jQuery(e).animate({
                height: h
            }, 350, function() {
                jQuery(this).addClass("preview-active")
            }), i.slideDown(350)) : (jQuery(e).animate({
                height: b
            }, 350, function() {
                jQuery(this).removeClass("preview-active")
            }), i.slideUp(350))
    })
}

function _placeholder() {
    navigator.appVersion.indexOf("MSIE") != -1 && jQuery("[placeholder]").focus(function() {
        var a = jQuery(this);
        a.val() == a.attr("placeholder") && (a.val(""), a.removeClass("placeholder"))
    }).blur(function() {
        var a = jQuery(this);
        "" != a.val() && a.val() != a.attr("placeholder") || (a.addClass("placeholder"), a.val(a.attr("placeholder")))
    }).blur()
}

function _wrotate() {
    jQuery(".word-rotator").each(function() {
        var a = jQuery(this),
            b = a.find(".items"),
            c = b.find("> span"),
            d = c.eq(0),
            e = d.clone(),
            f = jQuery(this).height(),
            g = 1,
            h = 0,
            i = jQuery(this).attr("data-delay") || 2e3;
        b.append(e), a.height(f).addClass("active"), setInterval(function() {
            h = g * f, b.animate({
                top: -h + "px"
            }, 300, "easeOutQuad", function() {
                g++, g > c.length && (b.css("top", 0), g = 1)
            })
        }, i)
    });
    var a = jQuery("span.rotate");
    a.length > 0 && loadScript(plugin_path + "text-rotator/jquery.simple-text-rotator.min.js", function() {
        a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-animation") || "fade",
                c = a.attr("data-speed") || 2e3;
            a.textrotator({
                animation: b,
                speed: parseInt(c)
            })
        })
    })
}

function _lazyload() {
    var a = jQuery("img.lazy");
    a.length > 0 && loadScript(plugin_path + "lazyload/jquery.lazyload.min.js", function() {
        jQuery().lazyload && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-effect") || "fadeIn";
            a.lazyload({
                effect: b
            })
        })
    })
}

function _misc() {
    jQuery("#portfolio").length > 0 && jQuery("#portfolio .item-box .owl-carousel").each(function() {
        jQuery(this).parent().parent().find(".item-box-desc").css({
            "padding-top": "29px"
        })
    }), jQuery().masonry && jQuery(".masonry").masonry();
    var a = jQuery("#portfolio.portfolio-isotope");
    a.length > 0 && loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function() {
        function b() {
            _dw = jQuery(document).width(), a.hasClass("fullwidth") ? (_w = a.width(), _wItem = _w / _cols, _dw < 760 && (_wItem = _w / 2), _dw < 480 && (_wItem = jQuery("#portfolio").width()), jQuery("#portfolio>.portfolio-item").css({
                    width: _wItem
                })) : (_mR = parseInt(jQuery("#portfolio>.portfolio-item").css("margin-right")), _w = jQuery("#portfolio").closest(".container").width(), _wItem = _w / _cols - _mR, _dw < 760 && (_wItem = _w / 2 - _mR), _dw < 480 && (_wItem = _w), jQuery("#portfolio.portfolio-isotope").css({
                    width: _w
                }), jQuery("#portfolio>.portfolio-item").css({
                    width: _wItem
                })), jQuery(".flexslider").length > 0 && jQuery(".flexslider").resize()
        }
        if (jQuery().isotope) {
            var a = jQuery("#portfolio");
            a.hasClass("portfolio-isotope-2") ? _cols = 2 : a.hasClass("portfolio-isotope-3") ? _cols = 3 : a.hasClass("portfolio-isotope-4") ? _cols = 4 : a.hasClass("portfolio-isotope-5") ? _cols = 5 : a.hasClass("portfolio-isotope-6") ? _cols = 6 : _cols = 4, b(), jQuery(window).load(function() {
                setTimeout(function() {
                    a.isotope({
                        masonry: {},
                        filter: "*",
                        animationOptions: {
                            duration: 750,
                            easing: "linear",
                            queue: !1
                        }
                    }), jQuery("#portfolio_filter>li>a").bind("click", function(b) {
                        b.preventDefault(), jQuery("#portfolio_filter>li.active").removeClass("active"), jQuery(this).parent("li").addClass("active");
                        var c = jQuery(this).attr("data-filter");
                        a.isotope({
                            filter: c,
                            animationOptions: {
                                duration: 750,
                                easing: "linear",
                                queue: !1
                            }
                        })
                    })
                }, 50);
                setTimeout(function() {
                    a.isotope("layout")
                }, 300)
            }), jQuery(window).resize(function() {
                window.afterResizeApp2 && clearTimeout(window.afterResizeApp2), window.afterResizeApp2 = setTimeout(function() {
                    b(), setTimeout(function() {
                        a.isotope("layout")
                    }, 300)
                }, 300)
            })
        }
    });
    var b = jQuery("#blog.blog-isotope");
    if (b.length > 0 && loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function() {
            function b() {
                _dw = jQuery(document).width(), a.hasClass("fullwidth") ? (_w = jQuery(document).width(), _wItem = _w / _cols, _dw < 760 && (_wItem = _w / 2), _dw < 480 && (_wItem = jQuery("#blog").width()), jQuery("#blog>.blog-post-item").css({
                        width: _wItem
                    })) : (_mR = parseInt(jQuery("#blog>.blog-post-item").css("margin-right")), _w = jQuery("#blog").closest(".container").width(), _wItem = _w / _cols - _mR, _dw < 760 && (_wItem = _w / 2 - _mR), _dw < 480 && (_wItem = _w), jQuery("#blog.blog-isotope").css({
                        width: _w
                    }), jQuery("#blog>.blog-post-item").css({
                        width: _wItem
                    })), jQuery(".flexslider").length > 0 && jQuery(".flexslider").resize()
            }
            if (jQuery().isotope) {
                var a = jQuery("#blog");
                a.hasClass("blog-isotope-2") ? _cols = 2 : a.hasClass("blog-isotope-3") ? _cols = 3 : a.hasClass("blog-isotope-4") ? _cols = 4 : _cols = 4, b(), jQuery(window).load(function() {
                    setTimeout(function() {
                        a.isotope({
                            masonry: {},
                            filter: "*",
                            animationOptions: {
                                duration: 750,
                                easing: "linear",
                                queue: !1
                            }
                        }), jQuery("#blog_filter>li>a").bind("click", function(b) {
                            b.preventDefault(), jQuery("#blog_filter>li.active").removeClass("active"), jQuery(this).parent("li").addClass("active");
                            var c = jQuery(this).attr("data-filter");
                            a.isotope({
                                filter: c,
                                animationOptions: {
                                    duration: 750,
                                    easing: "linear",
                                    queue: !1
                                }
                            })
                        })
                    }, 50);
                    setTimeout(function() {
                        a.isotope("layout")
                    }, 300)
                }), jQuery(window).resize(function() {
                    window.afterResizeApp2 && clearTimeout(window.afterResizeApp2), window.afterResizeApp2 = setTimeout(function() {
                        b(), setTimeout(function() {
                            a.isotope("layout")
                        }, 300)
                    }, 300)
                })
            }
        }), jQuery(".box-flip").length > 0 && (jQuery(".box-flip").each(function() {
            _height1 = jQuery(".box1", this).outerHeight(), _height2 = jQuery(".box2", this).outerHeight(), _height1 >= _height2 ? _height = _height1 : _height = _height2, jQuery(this).css({
                "min-height": _height + "px"
            }), jQuery(".box1", this).css({
                "min-height": _height + "px"
            }), jQuery(".box2", this).css({
                "min-height": _height + "px"
            })
        }), jQuery(".box-flip").hover(function() {
            jQuery(this).addClass("flip")
        }, function() {
            jQuery(this).removeClass("flip")
        })), jQuery("div.sticky-side").length > 0) {
        var c = jQuery("div.sticky-side");
        _h = c.height() / 2, c.css({
            "margin-top": "-" + _h + "px"
        })
    }
    jQuery(".incr").bind("click", function(a) {
        a.preventDefault();
        var b = jQuery(this).attr("data-for"),
            c = parseInt(jQuery(this).attr("data-max")),
            d = parseInt(jQuery("#" + b).val());
        d < c && jQuery("#" + b).val(d + 1)
    }), jQuery(".decr").bind("click", function(a) {
        a.preventDefault();
        var b = jQuery(this).attr("data-for"),
            c = parseInt(jQuery(this).attr("data-min")),
            d = parseInt(jQuery("#" + b).val());
        d > c && jQuery("#" + b).val(d - 1)
    }), jQuery("a.toggle-default").bind("click", function(a) {
        a.preventDefault();
        var b = jQuery(this).attr("href");
        jQuery(b).is(":hidden") ? (jQuery(b).slideToggle(200), jQuery("i.fa", this).removeClass("fa-plus-square").addClass("fa-minus-square")) : (jQuery(b).slideToggle(200), jQuery("i.fa", this).removeClass("fa-minus-square").addClass("fa-plus-square"))
    });
    var d = jQuery("input[type=file]");
    d.length > 0 && loadScript(plugin_path + "custom.fle_upload.js"), jQuery("textarea.word-count").on("keyup", function() {
        var a = jQuery(this),
            b = this.value.match(/\S+/g).length,
            c = a.attr("data-maxlength") || 200;
        if (b > parseInt(c)) {
            var d = a.val().split(/\s+/, 200).join(" ");
            a.val(d + " ")
        } else {
            var e = a.attr("data-info");
            if ("" == e || void 0 == e) {
                var f = a.next("div");
                jQuery("span", f).text(b + "/" + c)
            } else jQuery("#" + e).text(b + "/" + c)
        }
    })
}

function _stickyFooter() {
    function d() {
        a = c.height(), b = jQuery(window).scrollTop() + jQuery(window).height() - a + "px", jQuery(document.body).height() + a > jQuery(window).height() ? c.css({
                position: "absolute"
            }).stop().animate({
                top: b
            }, 0) : c.css({
                position: "static"
            })
    }
    if (jQuery("#footer").hasClass("sticky")) {
        var a = 0,
            b = 0,
            c = jQuery("#footer.sticky");
        d(), jQuery(window).scroll(d).resize(d)
    }
}

function _countDown() {
    var a = jQuery(".countdown"),
        b = jQuery(".countdown-download");
    (a.length > 0 || b.length > 0) && loadScript(plugin_path + "countdown/jquery.countdown.pack.min.js", function() {
        a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-from"),
                c = a.attr("data-labels");
            if (c && (c = c.split(",")), b) {
                var d = new Date(b);
                jQuery(this).countdown({
                    until: new Date(d),
                    labels: c || ["Years", "Months", "Weeks", "Days", "Hours", "Minutes", "Seconds"]
                })
            }
        }), b.bind("click", function(a) {
            a.preventDefault();
            var b = jQuery(this),
                c = b.attr("data-for"),
                d = jQuery("#" + c + " span.download-wait>.countdown"),
                e = parseInt(b.attr("data-seconds")),
                f = b.attr("href");
            return b.fadeOut(250, function() {
                jQuery("#" + c).fadeIn(250, function() {
                    var a = new Date;
                    a.setSeconds(a.getSeconds() + e), d.countdown({
                        until: a,
                        format: "S",
                        expiryUrl: f,
                        onExpiry: function() {
                            jQuery("#" + c + " span.download-message").removeClass("hide"), jQuery("#" + c + " span.download-wait").addClass("hide")
                        }
                    })
                })
            }), !1
        })
    })
}

function _masonryGallery() {
    jQuery(".masonry-gallery").length > 0 && jQuery(".masonry-gallery").each(function() {
        var a = jQuery(this),
            b = 4;
        a.hasClass("columns-2") ? b = 2 : a.hasClass("columns-3") ? b = 3 : a.hasClass("columns-4") ? b = 4 : a.hasClass("columns-5") ? b = 5 : a.hasClass("columns-6") && (b = 6);
        var c = a.find("a:eq(0)").outerWidth(),
            d = a.attr("data-img-big"),
            e = a.width(),
            f = e / b;
        f = Math.floor(f), f * b >= e && a.css({
            "margin-right": "-1px"
        }), b < 6 && a.children("a").css({
            width: f + "px"
        }), parseInt(d) > 0 && (d = Number(d) - 1, a.find("a:eq(" + d + ")").css({
            width: 2 * c + "px"
        }), loadScript(plugin_path + "isotope/isotope.pkgd.min.js", function() {
            setTimeout(function() {
                a.isotope({
                    masonry: {
                        columnWidth: c
                    }
                }), a.isotope("layout")
            }, 1e3)
        }))
    })
}

function _toastr(a, b, c, d) {
    var e = jQuery(".toastr-notify");
    (e.length > 0 || 0 != a) && loadScript(plugin_path + "toastr/toastr.js", function() {
        e.bind("click", function(a) {
            a.preventDefault();
            var b = jQuery(this).attr("data-message"),
                c = jQuery(this).attr("data-notifyType") || "default",
                d = jQuery(this).attr("data-position") || "top-right",
                e = "true" == jQuery(this).attr("data-progressBar"),
                f = "true" == jQuery(this).attr("data-closeButton"),
                g = "true" == jQuery(this).attr("data-debug"),
                h = "true" == jQuery(this).attr("data-newestOnTop"),
                i = "true" == jQuery(this).attr("data-preventDuplicates"),
                j = jQuery(this).attr("data-showDuration") || "300",
                k = jQuery(this).attr("data-hideDuration") || "1000",
                l = jQuery(this).attr("data-timeOut") || "5000",
                m = jQuery(this).attr("data-extendedTimeOut") || "1000",
                n = jQuery(this).attr("data-showEasing") || "swing",
                o = jQuery(this).attr("data-hideEasing") || "linear",
                p = jQuery(this).attr("data-showMethod") || "fadeIn",
                q = jQuery(this).attr("data-hideMethod") || "fadeOut";
            toastr.options = {
                closeButton: f,
                debug: g,
                newestOnTop: h,
                progressBar: e,
                positionClass: "toast-" + d,
                preventDuplicates: i,
                onclick: null,
                showDuration: j,
                hideDuration: k,
                timeOut: l,
                extendedTimeOut: m,
                showEasing: n,
                hideEasing: o,
                showMethod: p,
                hideMethod: q
            }, toastr[c](b)
        }), 0 != a && (0 != d ? onclick = function() {
                window.location = d
            } : onclick = null, toastr.options = {
            closeButton: !0,
            debug: !1,
            newestOnTop: !1,
            progressBar: !0,
            positionClass: "toast-" + b,
            preventDuplicates: !1,
            onclick: onclick,
            showDuration: "300",
            hideDuration: "1000",
            timeOut: "5000",
            extendedTimeOut: "1000",
            showEasing: "swing",
            hideEasing: "linear",
            showMethod: "fadeIn",
            hideMethod: "fadeOut"
        }, setTimeout(function() {
            toastr[c](a)
        }, 1500))
    })
}

function _charts() {
    var a = jQuery(".piechart");
    a.length > 0 && loadScript(plugin_path + "chart.easypiechart/dist/jquery.easypiechart.min.js", function() {
        jQuery(".piechart").each(function() {
            var a = jQuery(this),
                b = a.attr("data-size") || 150,
                c = a.attr("data-animate") || "3000";
            a.easyPieChart({
                size: b,
                animate: c,
                scaleColor: !1,
                trackColor: a.attr("data-trackcolor") || "rgba(0,0,0,0.04)",
                lineWidth: a.attr("data-width") || "2",
                lineCap: "square",
                barColor: a.attr("data-color") || "#0093BF"
            }), jQuery("span", this).attr("style", "line-height:" + b + "px !important; height:" + b + "px; width:" + b + "px"), jQuery("i", this).attr("style", "line-height:" + b + "px !important; height:" + b + "px; width:" + b + "px")
        })
    })
}

function _select2() {
    var a = jQuery("select.select2");
    a.length > 0 && loadScript(plugin_path + "select2/js/select2.full.min.js", function() {
        jQuery().select2 && jQuery("select.select2").select2()
    })
}

function _form() {
    jQuery("form.validate-plugin").length > 0 && loadScript(plugin_path + "form.validate/jquery.form.min.js", function() {
        loadScript(plugin_path + "form.validate/jquery.validation.min.js")
    }), jQuery("form.validate").length > 0 && loadScript(plugin_path + "form.validate/jquery.form.min.js", function() {
        loadScript(plugin_path + "form.validate/jquery.validation.min.js", function() {
            jQuery().validate && jQuery("form.validate").each(function() {
                var a = jQuery(this),
                    b = a.attr("data-success") || "Successfully! Thank you!",
                    d = (a.attr("data-captcha") || "Invalid Captcha!", a.attr("data-toastr-position") || "top-right"),
                    e = a.attr("data-toastr-type") || "success";
                _Turl = a.attr("data-toastr-url") || !1, a.append('<input type="hidden" name="is_ajax" value="true" />'), a.validate({
                    submitHandler: function(a) {
                        jQuery(a).find(".input-group-addon").find(".fa-envelope").removeClass("fa-envelope").addClass("fa-refresh fa-spin"), jQuery(a).ajaxSubmit({
                            target: jQuery(a).find(".validate-result").length > 0 ? jQuery(a).find(".validate-result") : "",
                            error: function(a) {
                                _toastr("Sent Failed!", d, "error", !1)
                            },
                            success: function(c) {
                                var c = c.trim();
                                "_failed_" == c ? _toastr("SMTP ERROR! Please, check your config file!", d, "error", !1) : "_captcha_" == c ? _toastr("Invalid Captcha!", d, "error", !1) : (jQuery(a).find(".input-group-addon").find(".fa-refresh").removeClass("fa-refresh fa-spin").addClass("fa-envelope"), jQuery(a).find("input.form-control").val(""), _toastr(b, d, e, _Turl))
                            }
                        })
                    }
                })
            })
        })
    });
    var a = jQuery("input.masked");
    a.length > 0 && loadScript(plugin_path + "form.masked/jquery.maskedinput.js", function() {
        a.each(function() {
            var a = jQuery(this);
            _format = a.attr("data-format") || "(999) 999-999999", _placeholder = a.attr("data-placeholder") || "X", jQuery.mask.definitions.f = "[A-Fa-f0-9]", a.mask(_format, {
                placeholder: _placeholder
            })
        })
    })
}

function _pickers() {
    var a = jQuery(".datepicker");
    a.length > 0 && loadScript(plugin_path + "bootstrap.datepicker/js/bootstrap-datepicker.min.js", function() {
        jQuery().datepicker && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-lang") || "en";
            "en" != b && "" != b && loadScript(plugin_path + "bootstrap.datepicker/locales/bootstrap-datepicker." + b + ".min.js"), jQuery(this).datepicker({
                format: a.attr("data-format") || "yyyy-mm-dd",
                language: b,
                rtl: "true" == a.attr("data-RTL"),
                changeMonth: "false" != a.attr("data-changeMonth"),
                todayBtn: "false" != a.attr("data-todayBtn") && "linked",
                calendarWeeks: "false" != a.attr("data-calendarWeeks"),
                autoclose: "false" != a.attr("data-autoclose"),
                todayHighlight: "false" != a.attr("data-todayHighlight"),
                onRender: function(a) {}
            }).on("changeDate", function(a) {}).data("datepicker")
        })
    });
    var b = jQuery(".rangepicker");
    b.length > 0 && loadScript(plugin_path + "bootstrap.daterangepicker/moment.min.js", function() {
        loadScript(plugin_path + "bootstrap.daterangepicker/daterangepicker.js", function() {
            jQuery().datepicker && b.each(function() {
                var a = jQuery(this),
                    b = a.attr("data-format").toUpperCase() || "YYYY-MM-DD";
                a.daterangepicker({
                    format: b,
                    startDate: a.attr("data-from"),
                    endDate: a.attr("data-to"),
                    ranges: {
                        Today: [moment(), moment()],
                        Yesterday: [moment().subtract(1, "days"), moment().subtract(1, "days")],
                        "Last 7 Days": [moment().subtract(6, "days"), moment()],
                        "Last 30 Days": [moment().subtract(29, "days"), moment()],
                        "This Month": [moment().startOf("month"), moment().endOf("month")],
                        "Last Month": [moment().subtract(1, "month").startOf("month"), moment().subtract(1, "month").endOf("month")]
                    }
                }, function(a, b, c) {})
            })
        })
    });
    var c = jQuery(".timepicker");
    c.length > 0 && loadScript(plugin_path + "timepicki/timepicki.min.js", function() {
        jQuery().timepicki && c.timepicki()
    });
    var d = jQuery(".colorpicker");
    d.length > 0 && loadScript(plugin_path + "spectrum/spectrum.min.js", function() {
        jQuery().spectrum && d.each(function() {
            var a = jQuery(this),
                b = a.attr("data-format") || "hex",
                c = a.attr("data-palletteOnly") || "false",
                d = a.attr("data-fullpicker") || "false",
                e = a.attr("data-allowEmpty") || !1;
            if (_flat = a.attr("data-flat") || !1, "true" == c || "true" == d) var f = [
                ["#000", "#444", "#666", "#999", "#ccc", "#eee", "#f3f3f3", "#fff"],
                ["#f00", "#f90", "#ff0", "#0f0", "#0ff", "#00f", "#90f", "#f0f"],
                ["#f4cccc", "#fce5cd", "#fff2cc", "#d9ead3", "#d0e0e3", "#cfe2f3", "#d9d2e9", "#ead1dc"],
                ["#ea9999", "#f9cb9c", "#ffe599", "#b6d7a8", "#a2c4c9", "#9fc5e8", "#b4a7d6", "#d5a6bd"],
                ["#e06666", "#f6b26b", "#ffd966", "#93c47d", "#76a5af", "#6fa8dc", "#8e7cc3", "#c27ba0"],
                ["#c00", "#e69138", "#f1c232", "#6aa84f", "#45818e", "#3d85c6", "#674ea7", "#a64d79"],
                ["#900", "#b45f06", "#bf9000", "#38761d", "#134f5c", "#0b5394", "#351c75", "#741b47"],
                ["#600", "#783f04", "#7f6000", "#274e13", "#0c343d", "#073763", "#20124d", "#4c1130"]
            ];
            else f = null;
            a.attr("data-defaultColor") ? _color = a.attr("data-defaultColor") : _color = "#ff0000", a.attr("data-defaultColor") || "true" != e || (_color = null), a.spectrum({
                showPaletteOnly: "true" == c,
                togglePaletteOnly: "true" == c,
                flat: "true" == _flat,
                showInitial: "true" == e,
                showInput: "true" == e,
                allowEmpty: "true" == e,
                chooseText: a.attr("data-chooseText") || "Coose",
                cancelText: a.attr("data-cancelText") || "Cancel",
                color: _color,
                showInput: !0,
                showPalette: !0,
                preferredFormat: b,
                showAlpha: "rgb" == b,
                palette: f
            })
        })
    })
}

function _editors() {
    var a = jQuery("textarea.summernote");
    a.length > 0 && loadScript(plugin_path + "editor.summernote/summernote.min.js", function() {
        jQuery().summernote && a.each(function() {
            var a = jQuery(this).attr("data-lang") || "en-US";
            "en-US" != a && (alert(a), loadScript(plugin_path + "editor.summernote/lang/summernote-" + a + ".js")), jQuery(this).summernote({
                height: jQuery(this).attr("data-height") || 200,
                lang: jQuery(this).attr("data-lang") || "en-US",
                toolbar: [
                    ["style", ["style"]],
                    ["fontsize", ["fontsize"]],
                    ["style", ["bold", "italic", "underline", "strikethrough", "clear"]],
                    ["color", ["color"]],
                    ["para", ["ul", "ol", "paragraph"]],
                    ["table", ["table"]],
                    ["media", ["link", "picture", "video"]],
                    ["misc", ["codeview", "fullscreen", "help"]]
                ]
            })
        })
    });
    var b = jQuery("textarea.markdown");
    b.length > 0 && loadScript(plugin_path + "editor.markdown/js/bootstrap-markdown.min.js", function() {
        jQuery().markdown && b.each(function() {
            var a = jQuery(this),
                b = a.attr("data-lang") || "en";
            "en" != b && loadScript(plugin_path + "editor.markdown/locale/bootstrap-markdown." + b + ".js"), jQuery(this).markdown({
                autofocus: "true" == a.attr("data-autofocus"),
                savable: "true" == a.attr("data-savable"),
                height: a.attr("data-height") || "inherit",
                language: "en" == b ? null : b
            })
        })
    })
}

function _pajinate() {
    var a = jQuery("div.pajinate");
    a.length > 0 && loadScript(plugin_path + "pajinate/jquery.pajinate.bootstrap.min.js", function() {
        jQuery().pajinate && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-pajinante-items-per-page") || 8;
            _numLinks = a.attr("data-pajinante-num-links") || 5, a.pajinate({
                items_per_page: parseInt(b),
                num_page_links_to_display: parseInt(_numLinks),
                item_container_id: a.attr("data-pajinate-container") || ".pajinate-container",
                nav_panel_id: ".pajinate-nav ul",
                show_first_last: !1,
                wrap_around: !0,
                abort_on_small_lists: !0,
                start_page: 0,
                nav_label_prev: "&laquo;",
                nav_label_next: "&raquo;"
            })
        })
    })
}

function _infiniteScroll() {
    var a = jQuery(".infinite-scroll");
    a.length > 0 && loadScript(plugin_path + "infinite-scroll/jquery.infinitescroll.min.js", function() {
        _navSelector = a.attr("data-nextSelector") || "#inf-load-nex", _itemSelector = a.attr("data-itemSelector") || ".item", _nextSelector = _navSelector + " a", a.infinitescroll({
            loading: {
                finishedMsg: '<i class="fa fa-check"></i>',
                msgText: '<i class="fa fa-refresh fa-spin"></i>',
                img: "data:image/gif;base64,R0lGODlhGAAYAPUAABQSFCwuLBwaHAwKDKyurGxqbNze3CwqLCQmJLS2tOzu7OTi5JyenBweHBQWFJyanPz+/HRydLSytFxeXPz6/ExOTKSmpFRSVHR2dAwODAQCBOzq7PTy9ISChPT29IyKjIyOjISGhOTm5GRiZJSWlJSSlFRWVMTCxNza3ExKTNTS1KyqrHx6fGRmZKSipMzOzMTGxDQyNDw+PAQGBDQ2NERCRFxaXMzKzGxubDw6PCQiJLy+vERGRLy6vHx+fNTW1CH/C05FVFNDQVBFMi4wAwEAAAAh+QQJBQAAACwAAAAAGAAYAEAGqECAcAhoRAiojQJFiAiI0Kh0qOsZOhqhDMK9ZadgAI0WBmhAXAhFVm5HbZR0aTYdsFpSkwqjo5sRLAtpIjxuUzZpECmGjI1QA4JcKH5lGVICDHFpGyoqGx4uDWENFh4iKjcbiR4MT1ItLJSPJWkUNo9uAyhpBpaOGjdpOY7ExcYaIQs9OsUpibfENZoQIF9gY1EpqlwiLAh+M4AqJmUCOBJJGz8EOKJRQQAh+QQJBQABACwAAAAAGAAYAAAGp8CAcBhoRBILDgdFKAiI0KHAB5rUZBUWDALxMJ5R4SCmiWpoJ67iEm4TZx0upOCuB1jyir2tuXE3DnthE3IlglENchwDh0QDG3ITjUQ7ciGTQxFybJgBGkcYGhoYPaGdARdyOKchcjunhH8znQAccmCYJZGnDpAQN2WdFXI+pwEFch2znRe+MDTBbzGMbQIPHlwwLBcyNSMgLIF2Ai0WKAocBhI4uERBACH5BAkFACwALAAAAAAYABgAAAaoQJZwyNIEJiAJCpWICIjQKFGD6Gw8D4d0C3UQIJsKd1wsQSgFMldjgUAu6q1jA27EpRg34x5FUCAeT3xDAx5uBQAMJyZ8GRxuFiRuFAF3B24QKguYE3cpmAubbil3I5gGKpgIdwF/EA9tgAN8JicMGQVuHLODQgKGEKu9QgxuGMNCDQpgAMgsF38rGs4Ffx/TyBUiECtayAIPHgohAdi9DRFKTCAj5VJBACH5BAkFAAAALAAAAAAYABgAAAa0QIBwSAQMaphHoVFsOoezlsEleFqJDsnmcu1qLJBW9zpQUSpjqwyycQgPBAIiLYRBGIDMAgJRaegREB4CE3wQFAN0NHwRYHwwdAANfBIqhlx0AXwGCnx+kQV8Cp0QBZEaL3wbBnwBkReGKgl8TGkadnwugRA0dBkUhhMNHhARdBqWEAsZAAwQkHQIEgQHQgIbFDKRTRUUL4nbRC0QFjPhRBcbEm7nQg0uBi3g7Q0RDxEyzFdBACH5BAkFAAgALAAAAAAYABgAAAaxQIRwSCwKHMWkssgLCZbQYmNnUgpMh6gQoIoUZQqIh6ZFHDjV7QLCLpURIcUTAWKzvWUBhYFwcOwnA28IOx4CBXY3AIMIJRAFEmwoSIwYEAQGbDWMQiwQBh4QKpxCjhyhbqQqEByZLKQ1bAaRr4wOKGwSiKlvADd2BQIeJ4MDJ3YcSA8UlFqWdiBCAgohbyR2C4tCJhwBZTQUEAo5RQUqzVAHJuhDJjsNpFIhKfFG7FFBACH5BAkFAAAALAAAAQAYABYAAAa3QIBQmEnlNMOkcgmoGSCQEJNIY048UIhhKqS1lClKFtLjClmmoWAzvunMgJmqIWRkDTYkHIBxARpiECUDe0MIHg0RUCV6hQAaGxESEAszjkkvEk8sl0kqKgoQCJ1CGiIKChuNlwcQCigvpGcQKBKxpAMLEBI4IpaXGiVQODoeb44DwhAUAgAuGIUaEyhZDEINKr9cCDdjG81CJpxmO2MUPEojVVy6UBQ2TDGEUyFQCzKyjzk880NBACH5BAkFAAEALAAAAAAYABgAAAazwIBwGABMOhcNcckUOkoKiJTVrAYqG6k2YWXiKFptpEs0gbWbXmFmHQwbWcjNJlCSYwIhQ9qxk4UaVAIeEB1/TCANBRAnfodCExEEEDSPSzUJKCeWSzQGHBicRBUcHimiQywKC5WoGjAoCTKoATQUBBETqDMnEAUNH6ghEBQOAT6OZBo+UgxCAjF/Mw0TN1IKeUJuVTMFPSJhEBePGOHEBZYJ4SI8nCxaHB/GnBoXISYATUEAIfkECQUAKgAsAAAAABgAGAAABqpAlXCoErQsr4WBlCE6nQ2XB0Ktup5Yk6LKhZywzgKlyplSKRfwsELdYA6DDCI1OaiFgg2EALirHxAfGn5gDR4rg4RPGhEbDopYAQkdkFgjBnaVTiEoiZpDCQmfRBooIKNDBwYjqEIdCQGtDgoFnpoaEh4NqBogEA+oDisQjn4xExUIAAMILCIQFBV+JmNUHh7VEAWEMF1VCmmELt4UDAKQGSUoCy8WI+dPQQAh+QQJBQAJACwAAAAAGAAYAAAGrMCEcJhoRCQoxUblmmSI0KGA4YFYr9bFIUqsbLBgK4ErLFAosEiuESi8sBKyifKqRTWXk+el4zYULgNkQhkaZBYShoOLOigAi5ARE5CQDzOUixGYi3abXANPnlE5olyapUQzD6hELaesDgYNrAkzEi5kMwOKnxYbs1EIKh4wF5dQNSoQF2QSWC8FATo0GDcUHi2DBGFgGymLBwvcEBQPDpQZNi4qGxsoEjgCXEEAIfkEBQUACAAsAAAAABgAGAAABqZAhHCIEBQIBg/HICk4iNCh4OGBWK9WTgkQHZoUlFMJwyKpsJCFrBvhhJ7QGgqrgA9tr0BX6HhhTUQNO3Z7ADBWFAdEIQJ7UAMRJTREAjyOl0MNmJucnZ6foKGio6SdmqQphDljA5wCIUQBVRAwXJcAO6dCJlg3tl0BPxdQAgpYKDVRAh8cOF05C2g/JSw+JTAeCsOFJRxoVx4PjZgORygcHCgETl1BADs=",
                speed: "normal"
            },
            nextSelector: _nextSelector,
            navSelector: _navSelector,
            itemSelector: _itemSelector,
            behavior: "",
            state: {
                isDone: !1
            }
        }, function(b) {
            Init(!0), jQuery().isotope && (a.isotope("appended", jQuery(b)), setTimeout(function() {
                a.isotope("layout")
            }, 2e3))
        })
    })
}

function _zoom() {
    var a = jQuery("figure.zoom");
    a.length > 0 && loadScript(plugin_path + "image.zoom/jquery.zoom.min.js", function() {
        jQuery().zoom && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-mode"),
                c = a.attr("id");
            "grab" == b ? a.zoom({
                    on: "grab"
                }) : "click" == b ? a.zoom({
                        on: "click"
                    }) : "toggle" == b ? a.zoom({
                            on: "toggle"
                        }) : a.zoom(), c && jQuery(".zoom-more[data-for=" + c + "] a").bind("click", function(a) {
                a.preventDefault();
                var b = jQuery(this).attr("href");
                "#" != b && (jQuery(".zoom-more[data-for=" + c + "] a").removeClass("active"), jQuery(this).addClass("active"), jQuery("figure#" + c + ">.lightbox").attr("href", b), jQuery("figure#" + c + ">img").fadeOut(0, function() {
                    jQuery("figure#" + c + ">img").attr("src", b)
                }).fadeIn(500))
            })
        })
    })
}

function _autosuggest() {
    _container = jQuery("div.autosuggest"), _container.length > 0 && loadScript(plugin_path + "typeahead.bundle.js", function() {
        jQuery().typeahead && _container.each(function() {
            var a = jQuery(this),
                b = a.attr("data-minLength") || 1,
                c = a.attr("data-queryURL"),
                d = a.attr("data-limit") || 10,
                e = a.attr("data-autoload");
            if ("false" == e) return !1;
            var f = new Bloodhound({
                datumTokenizer: Bloodhound.tokenizers.obj.whitespace("value"),
                queryTokenizer: Bloodhound.tokenizers.whitespace,
                limit: d,
                remote: {
                    url: c + "%QUERY"
                }
            });
            jQuery(".typeahead", a).typeahead({
                limit: d,
                hint: "false" != a.attr("data-hint"),
                highlight: "false" != a.attr("data-highlight"),
                minLength: parseInt(b),
                cache: !1
            }, {
                name: "_typeahead",
                source: f
            })
        })
    })
}

function _stepper() {
    var a = jQuery("input.stepper");
    a.length > 0 && loadScript(plugin_path + "form.stepper/jquery.stepper.min.js", function() {
        jQuery().stepper && jQuery(a).each(function() {
            var a = jQuery(this),
                b = a.attr("min") || null,
                c = a.attr("max") || null;
            a.stepper({
                limit: [b, c],
                floatPrecission: a.attr("data-floatPrecission") || 2,
                wheel_step: a.attr("data-wheelstep") || .1,
                arrow_step: a.attr("data-arrowstep") || .2,
                allowWheel: "false" != a.attr("data-mousescrool"),
                UI: "false" != a.attr("data-UI"),
                type: a.attr("data-type") || "float",
                preventWheelAcceleration: "false" != a.attr("data-preventWheelAcceleration"),
                incrementButton: a.attr("data-incrementButton") || "&blacktriangle;",
                decrementButton: a.attr("data-decrementButton") || "&blacktriangledown;",
                onStep: null,
                onWheel: null,
                onArrow: null,
                onButton: null,
                onKeyUp: null
            })
        })
    })
}

function _slimScroll() {
    var a = jQuery(".slimscroll");
    a.length > 0 && loadScript(plugin_path + "slimscroll/jquery.slimscroll.min.js", function() {
        jQuery().slimScroll && jQuery(".slimscroll").each(function() {
            var a;
            a = jQuery(this).attr("data-height") ? jQuery(this).attr("data-height") : jQuery(this).height(), jQuery(this).slimScroll({
                size: jQuery(this).attr("data-size") || "5px",
                opacity: jQuery(this).attr("data-opacity") || .6,
                position: jQuery(this).attr("data-position") || "right",
                allowPageScroll: !1,
                disableFadeOut: !1,
                railVisible: !0,
                railColor: jQuery(this).attr("data-railColor") || "#222",
                railOpacity: jQuery(this).attr("data-railOpacity") || .05,
                alwaysVisible: "false" != jQuery(this).attr("data-alwaysVisible"),
                railVisible: "false" != jQuery(this).attr("data-railVisible"),
                color: jQuery(this).attr("data-color") || "#333",
                wrapperClass: jQuery(this).attr("data-wrapper-class") || "slimScrollDiv",
                railColor: jQuery(this).attr("data-railColor") || "#eaeaea",
                height: a
            }), "true" == jQuery(this).attr("disable-body-scroll") && jQuery(this).bind("mousewheel DOMMouseScroll", function(a) {
                var b = null;
                "mousewheel" == a.type ? b = a.originalEvent.wheelDelta * -1 : "DOMMouseScroll" == a.type && (b = 40 * a.originalEvent.detail), b && (a.preventDefault(), jQuery(this).scrollTop(b + jQuery(this).scrollTop()))
            })
        })
    })
}

function _modalAutoLoad() {
    jQuery("div.modal").length > 0 && jQuery("div.modal").each(function() {
        var a = jQuery(this),
            b = a.attr("id"),
            c = a.attr("data-autoload") || !1;
        "" != b && "hidden" == localStorage.getItem(b) && (c = "false"), "true" == c && jQuery(window).load(function() {
            var b = a.attr("data-autoload-delay") || 1e3;
            setTimeout(function() {
                a.modal("toggle")
            }, parseInt(b))
        }), jQuery("input.loadModalHide", this).bind("click", function() {
            var a = jQuery(this);
            a.is(":checked") ? (localStorage.setItem(b, "hidden"), console.log("[Modal Autoload #" + b + "] Added to localStorage")) : (localStorage.removeItem(b), console.log("[Modal Autoload #" + b + "] Removed from localStorage"))
        })
    })
}

function _bgimage() {
    var a = jQuery("body").attr("data-background") || "";
    "" != a && loadScript(plugin_path + "jquery.backstretch.min.js", function() {
        a && (jQuery.backstretch(a), jQuery("body").addClass("transparent"))
    })
}

function _widget_flickr() {
    var a = jQuery(".widget-flickr");
    a.length > 0 && loadScript(plugin_path + "widget.jflickr/jflickrfeed.min.js", function() {
        jQuery().jflickrfeed && jQuery(".widget-flickr") && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-id"),
                c = a.attr("data-limit") || 14;
            a.jflickrfeed({
                limit: parseInt(c),
                qstrings: {
                    id: b
                },
                itemTemplate: '<li><a href="{{image}}" title="{{title}}"><img src="{{image_s}}" alt="{{title}}" width="63" height="63" /></a></li>'
            }, function(a) {
                _lightbox()
            })
        })
    })
}

function _widget_twitter() {
    var a = jQuery(".widget-twitter");
    a.length > 0 && loadScript(plugin_path + "widget.twittie/twittie.min.js", function() {
        jQuery().twittie && a.each(function() {
            var a = jQuery(this),
                b = a.attr("data-php"),
                c = a.attr("data-username"),
                d = a.attr("data-limit") || 3,
                e = b + "?username=" + c + "&limit=" + d;
            jQuery.getJSON(e, function(b) {
                a.html(format_twitter(b))
            })
        })
    })
}

function format_twitter(a) {
    for (var b = [], c = 0; c < a.length; c++) {
        var d = a[c].user.screen_name,
            e = a[c].text.replace(/((https?|s?ftp|ssh)\:\/\/[^"\s\<\>]*[^.,;'">\:\s\<\>\)\]\!])/g, function(a) {
                return '<a href="' + a + '" target="_blank">' + a + "</a>"
            }).replace(/\B@([_a-z0-9]+)/gi, function(a) {
                return a.charAt(0) + '<a href="http://twitter.com/' + a.substring(1) + '" target="_blank">' + a.substring(1) + "</a>"
            });
        b.push('<li><i class="fa fa-twitter"></i><span>' + e + '</span><small><a href="http://twitter.com/' + d + "/statuses/" + a[c].id_str + '" target="_blank">' + relative_time(a[c].created_at) + "</a></small></li>")
    }
    return b.join("")
}

function relative_time(a) {
    var b = a.split(" "),
        c = Date.parse(a),
        d = arguments.length > 1 ? arguments[1] : new Date,
        e = parseInt((d.getTime() - c) / 1e3);
    return a = b[1] + " " + b[2] + ", " + b[5] + " " + b[3], e += 60 * d.getTimezoneOffset(), e < 60 ? "less than a minute ago" : e < 120 ? "about a minute ago" : e < 3600 ? parseInt(e / 60).toString() + " minutes ago" : e < 7200 ? "about an hour ago" : e < 86400 ? "about " + parseInt(e / 3600).toString() + " hours ago" : e < 172800 ? "1 day ago" : parseInt(e / 86400).toString() + " days ago"
}

function _widget_facebook() {
    var a = jQuery("div.fb-like"),
        b = jQuery("div.fb-share-button");
    (a.length > 0 || b.length > 0) && (jQuery("body").append('<div id="fb-root"></div>'), function(a, b, c) {
        var d, e = a.getElementsByTagName(b)[0];
        a.getElementById(c) || (d = a.createElement(b), d.id = c, d.src = "//connect.facebook.net/en_US/sdk.js#xfbml=1&version=v2.3", e.parentNode.insertBefore(d, e))
    }(document, "script", "facebook-jssdk"))
}

function _widget_dribbble() {
    var a = jQuery(".widget-dribbble");
    a.length > 0 && loadScript(plugin_path + "widget.dribbble/jribbble.min.js", function() {
        var b = a.attr("data-token") || "f688ac519289f19ce5cebc1383c15ad5c02bd58205cd83c86cbb0ce09170c1b4",
            c = a.attr("data-target") || "_blank",
            d = a.attr("data-shots") || 2046896;
        jQuery.jribbble.setToken(b), jQuery.jribbble.shots(d).rebounds().then(function(b) {
            var d = [];
            b.forEach(function(a) {
                d.push("<li>"), d.push('<a href="' + a.html_url + '" target="' + c + '">'), d.push('<img class="img-responsive" src="' + a.images.normal + '" alt="image">'), d.push("</a></li>")
            }), a.html(d.join(""))
        })
    })
}

function _widget_media() {
    var a = jQuery(".widget-media");
    a.length > 0 && loadScript(plugin_path + "widget.mediaelementbuild/mediaelement-and-player.min.js", function() {})
}

function wheel(a) {
    a.preventDefault()
}

function disable_scroll() {
    window.addEventListener && window.addEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = wheel
}

function enable_scroll() {
    window.removeEventListener && window.removeEventListener("DOMMouseScroll", wheel, !1), window.onmousewheel = document.onmousewheel = document.onkeydown = null
}

function enable_overlay() {
    jQuery("span.global-overlay").remove(), jQuery("body").append('<span class="global-overlay"></span>')
}

function disable_overlay() {
    jQuery("span.global-overlay").remove()
}
window.width = jQuery(window).width(), jQuery(window).ready(function() {
    jQuery.browserDetect(), loadScript(plugin_path + "bootstrap/js/bootstrap.min.js", function() {
        Init(!1)
    }), jQuery("html").hasClass("chrome") && jQuery("body").hasClass("smoothscroll") && navigator.platform.indexOf("Mac") < 0 && loadScript(plugin_path + "smoothscroll.js", function() {
        jQuery.smoothScroll()
    })
}), jQuery("#preloader").length > 0 && jQuery(window).load(function() {
    jQuery("#preloader").fadeOut(1e3, function() {
        jQuery("#preloader").remove()
    })
});
// var _arr = {};
// /pofweb/.test(self.location.href) || /tstrap/.test(self.location.href) || (window.location = "http://www.stepofweb.com/templates.html"),
//     function(a) {
//         function b(a, b) {
//             return a.toFixed(b.decimals)
//         }
//         a.fn.countTo = function(b) {
//             return b = b || {}, jQuery(this).each(function() {
//                 function k() {
//                     i += e, h++, l(i), "function" == typeof c.onUpdate && c.onUpdate.call(f, i), h >= d && (g.removeData("countTo"), clearInterval(j.interval), i = c.to, "function" == typeof c.onComplete && c.onComplete.call(f, i))
//                 }
//
//                 function l(a) {
//                     var b = c.formatter.call(f, a, c);
//                     g.html(b)
//                 }
//                 var c = jQuery.extend({}, a.fn.countTo.defaults, {
//                         from: jQuery(this).data("from"),
//                         to: jQuery(this).data("to"),
//                         speed: jQuery(this).data("speed"),
//                         refreshInterval: jQuery(this).data("refresh-interval"),
//                         decimals: jQuery(this).data("decimals")
//                     }, b),
//                     d = Math.ceil(c.speed / c.refreshInterval),
//                     e = (c.to - c.from) / d,
//                     f = this,
//                     g = jQuery(this),
//                     h = 0,
//                     i = c.from,
//                     j = g.data("countTo") || {};
//                 g.data("countTo", j), j.interval && clearInterval(j.interval), j.interval = setInterval(k, c.refreshInterval), l(i)
//             })
//         }, a.fn.countTo.defaults = {
//             from: 0,
//             to: 0,
//             speed: 1e3,
//             refreshInterval: 100,
//             decimals: 0,
//             formatter: b,
//             onUpdate: null,
//             onComplete: null
//         }
//     }(jQuery),
//     function(a) {
//         a.extend({
//             browserDetect: function() {
//                 var a = navigator.userAgent,
//                     b = a.toLowerCase(),
//                     d = function(a) {
//                         return b.indexOf(a) > -1
//                     },
//                     e = "gecko",
//                     f = "webkit",
//                     g = "safari",
//                     h = "opera",
//                     i = document.documentElement,
//                     j = [!/opera|webtv/i.test(b) && /msie\s(\d)/.test(b) ? "ie ie" + parseFloat(navigator.appVersion.split("MSIE")[1]) : d("firefox/2") ? e + " ff2" : d("firefox/3.5") ? e + " ff3 ff3_5" : d("firefox/3") ? e + " ff3" : d("gecko/") ? e : d("opera") ? h + (/version\/(\d+)/.test(b) ? " " + h + RegExp.jQuery1 : /opera(\s|\/)(\d+)/.test(b) ? " " + h + RegExp.jQuery2 : "") : d("konqueror") ? "konqueror" : d("chrome") ? f + " chrome" : d("iron") ? f + " iron" : d("applewebkit/") ? f + " " + g + (/version\/(\d+)/.test(b) ? " " + g + RegExp.jQuery1 : "") : d("mozilla/") ? e : "", d("j2me") ? "mobile" : d("iphone") ? "iphone" : d("ipod") ? "ipod" : d("mac") ? "mac" : d("darwin") ? "mac" : d("webtv") ? "webtv" : d("win") ? "win" : d("freebsd") ? "freebsd" : d("x11") || d("linux") ? "linux" : "", "js"];
//                 c = j.join(" "), i.className += " " + c;
//                 var k = !window.ActiveXObject && "ActiveXObject" in window;
//                 if (k) return void jQuery("html").removeClass("gecko").addClass("ie ie11")
//             }
//         })
//     }(jQuery),
//     function(a) {
//         a.fn.appear = function(b, c) {
//             var d = a.extend({
//                 data: void 0,
//                 one: !0,
//                 accX: 0,
//                 accY: 0
//             }, c);
//             return this.each(function() {
//                 var c = a(this);
//                 if (c.appeared = !1, !b) return void c.trigger("appear", d.data);
//                 var e = a(window),
//                     f = function() {
//                         if (!c.is(":visible")) return void(c.appeared = !1);
//                         var a = e.scrollLeft(),
//                             b = e.scrollTop(),
//                             f = c.offset(),
//                             g = f.left,
//                             h = f.top,
//                             i = d.accX,
//                             j = d.accY,
//                             k = c.height(),
//                             l = e.height(),
//                             m = c.width(),
//                             n = e.width();
//                         h + k + j >= b && h <= b + l + j && g + m + i >= a && g <= a + n + i ? c.appeared || c.trigger("appear", d.data) : c.appeared = !1
//                     },
//                     g = function() {
//                         if (c.appeared = !0, d.one) {
//                             e.unbind("scroll", f);
//                             var g = a.inArray(f, a.fn.appear.checks);
//                             g >= 0 && a.fn.appear.checks.splice(g, 1)
//                         }
//                         b.apply(this, arguments)
//                     };
//                 d.one ? c.one("appear", d.data, g) : c.bind("appear", d.data, g), e.scroll(f), a.fn.appear.checks.push(f), f()
//             })
//         }, a.extend(a.fn.appear, {
//             checks: [],
//             timeout: null,
//             checkAll: function() {
//                 var b = a.fn.appear.checks.length;
//                 if (b > 0)
//                     for (; b--;) a.fn.appear.checks[b]()
//             },
//             run: function() {
//                 a.fn.appear.timeout && clearTimeout(a.fn.appear.timeout), a.fn.appear.timeout = setTimeout(a.fn.appear.checkAll, 20)
//             }
//         }), a.each(["append", "prepend", "after", "before", "attr", "removeAttr", "addClass", "removeClass", "toggleClass", "remove", "css", "show", "hide"], function(b, c) {
//             var d = a.fn[c];
//             d && (a.fn[c] = function() {
//                 var b = d.apply(this, arguments);
//                 return a.fn.appear.run(), b
//             })
//         })
//     }(jQuery),
//     function(a) {
//         var b = a(window),
//             c = b.height();
//         b.resize(function() {
//             c = b.height()
//         }), a.fn.parallax = function(d, e, f) {
//             function k() {
//                 g.each(function() {
//                     i = g.offset().top
//                 }), h = f ? function(a) {
//                         return a.outerHeight(!0)
//                     } : function(a) {
//                         return a.height()
//                     }, (arguments.length < 1 || null === d) && (d = "50%"), (arguments.length < 2 || null === e) && (e = .5), (arguments.length < 3 || null === f) && (f = !0);
//                 var j = b.scrollTop();
//                 g.each(function() {
//                     var b = a(this),
//                         f = b.offset().top,
//                         k = h(b);
//                     f + k < j || f > j + c || g.css("backgroundPosition", d + " " + Math.round((i - j) * e) + "px")
//                 })
//             }
//             var h, i, g = a(this);
//             b.bind("scroll", k).resize(k), k()
//         }
//     }(jQuery), jQuery.easing.jswing = jQuery.easing.swing, jQuery.extend(jQuery.easing, {
//     def: "easeOutQuad",
//     swing: function(a, b, c, d, e) {
//         return jQuery.easing[jQuery.easing.def](a, b, c, d, e)
//     },
//     easeInQuad: function(a, b, c, d, e) {
//         return d * (b /= e) * b + c
//     },
//     easeOutQuad: function(a, b, c, d, e) {
//         return -d * (b /= e) * (b - 2) + c
//     },
//     easeInOutQuad: function(a, b, c, d, e) {
//         return (b /= e / 2) < 1 ? d / 2 * b * b + c : -d / 2 * (--b * (b - 2) - 1) + c
//     },
//     easeInCubic: function(a, b, c, d, e) {
//         return d * (b /= e) * b * b + c
//     },
//     easeOutCubic: function(a, b, c, d, e) {
//         return d * ((b = b / e - 1) * b * b + 1) + c
//     },
//     easeInOutCubic: function(a, b, c, d, e) {
//         return (b /= e / 2) < 1 ? d / 2 * b * b * b + c : d / 2 * ((b -= 2) * b * b + 2) + c
//     },
//     easeInQuart: function(a, b, c, d, e) {
//         return d * (b /= e) * b * b * b + c
//     },
//     easeOutQuart: function(a, b, c, d, e) {
//         return -d * ((b = b / e - 1) * b * b * b - 1) + c
//     },
//     easeInOutQuart: function(a, b, c, d, e) {
//         return (b /= e / 2) < 1 ? d / 2 * b * b * b * b + c : -d / 2 * ((b -= 2) * b * b * b - 2) + c
//     },
//     easeInQuint: function(a, b, c, d, e) {
//         return d * (b /= e) * b * b * b * b + c
//     },
//     easeOutQuint: function(a, b, c, d, e) {
//         return d * ((b = b / e - 1) * b * b * b * b + 1) + c
//     },
//     easeInOutQuint: function(a, b, c, d, e) {
//         return (b /= e / 2) < 1 ? d / 2 * b * b * b * b * b + c : d / 2 * ((b -= 2) * b * b * b * b + 2) + c
//     },
//     easeInSine: function(a, b, c, d, e) {
//         return -d * Math.cos(b / e * (Math.PI / 2)) + d + c
//     },
//     easeOutSine: function(a, b, c, d, e) {
//         return d * Math.sin(b / e * (Math.PI / 2)) + c
//     },
//     easeInOutSine: function(a, b, c, d, e) {
//         return -d / 2 * (Math.cos(Math.PI * b / e) - 1) + c
//     },
//     easeInExpo: function(a, b, c, d, e) {
//         return 0 == b ? c : d * Math.pow(2, 10 * (b / e - 1)) + c
//     },
//     easeOutExpo: function(a, b, c, d, e) {
//         return b == e ? c + d : d * (-Math.pow(2, -10 * b / e) + 1) + c
//     },
//     easeInOutExpo: function(a, b, c, d, e) {
//         return 0 == b ? c : b == e ? c + d : (b /= e / 2) < 1 ? d / 2 * Math.pow(2, 10 * (b - 1)) + c : d / 2 * (-Math.pow(2, -10 * --b) + 2) + c
//     },
//     easeInCirc: function(a, b, c, d, e) {
//         return -d * (Math.sqrt(1 - (b /= e) * b) - 1) + c
//     },
//     easeOutCirc: function(a, b, c, d, e) {
//         return d * Math.sqrt(1 - (b = b / e - 1) * b) + c
//     },
//     easeInOutCirc: function(a, b, c, d, e) {
//         return (b /= e / 2) < 1 ? -d / 2 * (Math.sqrt(1 - b * b) - 1) + c : d / 2 * (Math.sqrt(1 - (b -= 2) * b) + 1) + c
//     },
//     easeInElastic: function(a, b, c, d, e) {
//         var f = 1.70158,
//             g = 0,
//             h = d;
//         if (0 == b) return c;
//         if (1 == (b /= e)) return c + d;
//         if (g || (g = .3 * e), h < Math.abs(d)) {
//             h = d;
//             var f = g / 4
//         } else var f = g / (2 * Math.PI) * Math.asin(d / h);
//         return -(h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c
//     },
//     easeOutElastic: function(a, b, c, d, e) {
//         var f = 1.70158,
//             g = 0,
//             h = d;
//         if (0 == b) return c;
//         if (1 == (b /= e)) return c + d;
//         if (g || (g = .3 * e), h < Math.abs(d)) {
//             h = d;
//             var f = g / 4
//         } else var f = g / (2 * Math.PI) * Math.asin(d / h);
//         return h * Math.pow(2, -10 * b) * Math.sin((b * e - f) * (2 * Math.PI) / g) + d + c
//     },
//     easeInOutElastic: function(a, b, c, d, e) {
//         var f = 1.70158,
//             g = 0,
//             h = d;
//         if (0 == b) return c;
//         if (2 == (b /= e / 2)) return c + d;
//         if (g || (g = e * (.3 * 1.5)), h < Math.abs(d)) {
//             h = d;
//             var f = g / 4
//         } else var f = g / (2 * Math.PI) * Math.asin(d / h);
//         return b < 1 ? -.5 * (h * Math.pow(2, 10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g)) + c : h * Math.pow(2, -10 * (b -= 1)) * Math.sin((b * e - f) * (2 * Math.PI) / g) * .5 + d + c
//     },
//     easeInBack: function(a, b, c, d, e, f) {
//         return void 0 == f && (f = 1.70158), d * (b /= e) * b * ((f + 1) * b - f) + c
//     },
//     easeOutBack: function(a, b, c, d, e, f) {
//         return void 0 == f && (f = 1.70158), d * ((b = b / e - 1) * b * ((f + 1) * b + f) + 1) + c
//     },
//     easeInOutBack: function(a, b, c, d, e, f) {
//         return void 0 == f && (f = 1.70158), (b /= e / 2) < 1 ? d / 2 * (b * b * (((f *= 1.525) + 1) * b - f)) + c : d / 2 * ((b -= 2) * b * (((f *= 1.525) + 1) * b + f) + 2) + c
//     },
//     easeInBounce: function(a, b, c, d, e) {
//         return d - jQuery.easing.easeOutBounce(a, e - b, 0, d, e) + c
//     },
//     easeOutBounce: function(a, b, c, d, e) {
//         return (b /= e) < 1 / 2.75 ? d * (7.5625 * b * b) + c : b < 2 / 2.75 ? d * (7.5625 * (b -= 1.5 / 2.75) * b + .75) + c : b < 2.5 / 2.75 ? d * (7.5625 * (b -= 2.25 / 2.75) * b + .9375) + c : d * (7.5625 * (b -= 2.625 / 2.75) * b + .984375) + c
//     },
//     easeInOutBounce: function(a, b, c, d, e) {
//         return b < e / 2 ? .5 * jQuery.easing.easeInBounce(a, 2 * b, 0, d, e) + c : .5 * jQuery.easing.easeOutBounce(a, 2 * b - e, 0, d, e) + .5 * d + c
//     }
// }),
//     function() {
//         var a, b, c, d, e, f = function(a, b) {
//                 return function() {
//                     return a.apply(b, arguments)
//                 }
//             },
//             g = [].indexOf || function(a) {
//                     for (var b = 0, c = this.length; c > b; b++)
//                         if (b in this && this[b] === a) return b;
//                     return -1
//                 };
//         b = function() {
//             function a() {}
//             return a.prototype.extend = function(a, b) {
//                 var c, d;
//                 for (c in b) d = b[c], null == a[c] && (a[c] = d);
//                 return a
//             }, a.prototype.isMobile = function(a) {
//                 return /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(a)
//             }, a.prototype.addEvent = function(a, b, c) {
//                 return null != a.addEventListener ? a.addEventListener(b, c, !1) : null != a.attachEvent ? a.attachEvent("on" + b, c) : a[b] = c
//             }, a.prototype.removeEvent = function(a, b, c) {
//                 return null != a.removeEventListener ? a.removeEventListener(b, c, !1) : null != a.detachEvent ? a.detachEvent("on" + b, c) : delete a[b]
//             }, a.prototype.innerHeight = function() {
//                 return "innerHeight" in window ? window.innerHeight : document.documentElement.clientHeight
//             }, a
//         }(), c = this.WeakMap || this.MozWeakMap || (c = function() {
//                 function a() {
//                     this.keys = [], this.values = []
//                 }
//                 return a.prototype.get = function(a) {
//                     var b, c, d, e, f;
//                     for (f = this.keys, b = d = 0, e = f.length; e > d; b = ++d)
//                         if (c = f[b], c === a) return this.values[b]
//                 }, a.prototype.set = function(a, b) {
//                     var c, d, e, f, g;
//                     for (g = this.keys, c = e = 0, f = g.length; f > e; c = ++e)
//                         if (d = g[c], d === a) return void(this.values[c] = b);
//                     return this.keys.push(a), this.values.push(b)
//                 }, a
//             }()), a = this.MutationObserver || this.WebkitMutationObserver || this.MozMutationObserver || (a = function() {
//                 function a() {
//                     "undefined" != typeof console && null !== console && console.warn("MutationObserver is not supported by your browser."), "undefined" != typeof console && null !== console && console.warn("WOW.js cannot detect dom mutations, please call .sync() after loading new content.")
//                 }
//                 return a.notSupported = !0, a.prototype.observe = function() {}, a
//             }()), d = this.getComputedStyle || function(a) {
//                 return this.getPropertyValue = function(b) {
//                     var c;
//                     return "float" === b && (b = "styleFloat"), e.test(b) && b.replace(e, function(a, b) {
//                         return b.toUpperCase()
//                     }), (null != (c = a.currentStyle) ? c[b] : void 0) || null
//                 }, this
//             }, e = /(\-([a-z]){1})/g, this.WOW = function() {
//             function e(a) {
//                 null == a && (a = {}), this.scrollCallback = f(this.scrollCallback, this), this.scrollHandler = f(this.scrollHandler, this), this.start = f(this.start, this), this.scrolled = !0, this.config = this.util().extend(a, this.defaults), this.animationNameCache = new c
//             }
//             return e.prototype.defaults = {
//                 boxClass: "wow",
//                 animateClass: "animated",
//                 offset: 0,
//                 mobile: !0,
//                 live: !0,
//                 callback: null
//             }, e.prototype.init = function() {
//                 var a;
//                 return this.element = window.document.documentElement, "interactive" === (a = document.readyState) || "complete" === a ? this.start() : this.util().addEvent(document, "DOMContentLoaded", this.start), this.finished = []
//             }, e.prototype.start = function() {
//                 var b, c, d, e;
//                 if (this.stopped = !1, this.boxes = function() {
//                         var a, c, d, e;
//                         for (d = this.element.querySelectorAll("." + this.config.boxClass), e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
//                         return e
//                     }.call(this), this.all = function() {
//                         var a, c, d, e;
//                         for (d = this.boxes, e = [], a = 0, c = d.length; c > a; a++) b = d[a], e.push(b);
//                         return e
//                     }.call(this), this.boxes.length)
//                     if (this.disabled()) this.resetStyle();
//                     else
//                         for (e = this.boxes, c = 0, d = e.length; d > c; c++) b = e[c], this.applyStyle(b, !0);
//                 return this.disabled() || (this.util().addEvent(window, "scroll", this.scrollHandler), this.util().addEvent(window, "resize", this.scrollHandler), this.interval = setInterval(this.scrollCallback, 50)), this.config.live ? new a(function(a) {
//                         return function(b) {
//                             var c, d, e, f, g;
//                             for (g = [], e = 0, f = b.length; f > e; e++) d = b[e], g.push(function() {
//                                 var a, b, e, f;
//                                 for (e = d.addedNodes || [], f = [], a = 0, b = e.length; b > a; a++) c = e[a], f.push(this.doSync(c));
//                                 return f
//                             }.call(a));
//                             return g
//                         }
//                     }(this)).observe(document.body, {
//                         childList: !0,
//                         subtree: !0
//                     }) : void 0
//             }, e.prototype.stop = function() {
//                 return this.stopped = !0, this.util().removeEvent(window, "scroll", this.scrollHandler), this.util().removeEvent(window, "resize", this.scrollHandler), null != this.interval ? clearInterval(this.interval) : void 0
//             }, e.prototype.sync = function() {
//                 return a.notSupported ? this.doSync(this.element) : void 0
//             }, e.prototype.doSync = function(a) {
//                 var b, c, d, e, f;
//                 if (null == a && (a = this.element), 1 === a.nodeType) {
//                     for (a = a.parentNode || a, e = a.querySelectorAll("." + this.config.boxClass), f = [], c = 0, d = e.length; d > c; c++) b = e[c], g.call(this.all, b) < 0 ? (this.boxes.push(b), this.all.push(b), this.stopped || this.disabled() ? this.resetStyle() : this.applyStyle(b, !0), f.push(this.scrolled = !0)) : f.push(void 0);
//                     return f
//                 }
//             }, e.prototype.show = function(a) {
//                 return this.applyStyle(a), a.className = "" + a.className + " " + this.config.animateClass, null != this.config.callback ? this.config.callback(a) : void 0
//             }, e.prototype.applyStyle = function(a, b) {
//                 var c, d, e;
//                 return d = a.getAttribute("data-wow-duration"), c = a.getAttribute("data-wow-delay"), e = a.getAttribute("data-wow-iteration"), this.animate(function(f) {
//                     return function() {
//                         return f.customStyle(a, b, d, c, e)
//                     }
//                 }(this))
//             }, e.prototype.animate = function() {
//                 return "requestAnimationFrame" in window ? function(a) {
//                         return window.requestAnimationFrame(a)
//                     } : function(a) {
//                         return a()
//                     }
//             }(), e.prototype.resetStyle = function() {
//                 var a, b, c, d, e;
//                 for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], e.push(a.style.visibility = "visible");
//                 return e
//             }, e.prototype.customStyle = function(a, b, c, d, e) {
//                 return b && this.cacheAnimationName(a), a.style.visibility = b ? "hidden" : "visible", c && this.vendorSet(a.style, {
//                     animationDuration: c
//                 }), d && this.vendorSet(a.style, {
//                     animationDelay: d
//                 }), e && this.vendorSet(a.style, {
//                     animationIterationCount: e
//                 }), this.vendorSet(a.style, {
//                     animationName: b ? "none" : this.cachedAnimationName(a)
//                 }), a
//             }, e.prototype.vendors = ["moz", "webkit"], e.prototype.vendorSet = function(a, b) {
//                 var c, d, e, f;
//                 f = [];
//                 for (c in b) d = b[c], a["" + c] = d, f.push(function() {
//                     var b, f, g, h;
//                     for (g = this.vendors, h = [], b = 0, f = g.length; f > b; b++) e = g[b], h.push(a["" + e + c.charAt(0).toUpperCase() + c.substr(1)] = d);
//                     return h
//                 }.call(this));
//                 return f
//             }, e.prototype.vendorCSS = function(a, b) {
//                 var c, e, f, g, h, i;
//                 for (e = d(a), c = e.getPropertyCSSValue(b), i = this.vendors, g = 0, h = i.length; h > g; g++) f = i[g], c = c || e.getPropertyCSSValue("-" + f + "-" + b);
//                 return c
//             }, e.prototype.animationName = function(a) {
//                 var b;
//                 try {
//                     b = this.vendorCSS(a, "animation-name").cssText
//                 } catch (c) {
//                     b = d(a).getPropertyValue("animation-name")
//                 }
//                 return "none" === b ? "" : b
//             }, e.prototype.cacheAnimationName = function(a) {
//                 return this.animationNameCache.set(a, this.animationName(a))
//             }, e.prototype.cachedAnimationName = function(a) {
//                 return this.animationNameCache.get(a)
//             }, e.prototype.scrollHandler = function() {
//                 return this.scrolled = !0
//             }, e.prototype.scrollCallback = function() {
//                 var a;
//                 return !this.scrolled || (this.scrolled = !1, this.boxes = function() {
//                     var b, c, d, e;
//                     for (d = this.boxes, e = [], b = 0, c = d.length; c > b; b++) a = d[b], a && (this.isVisible(a) ? this.show(a) : e.push(a));
//                     return e
//                 }.call(this), this.boxes.length || this.config.live) ? void 0 : this.stop()
//             }, e.prototype.offsetTop = function(a) {
//                 for (var b; void 0 === a.offsetTop;) a = a.parentNode;
//                 for (b = a.offsetTop; a = a.offsetParent;) b += a.offsetTop;
//                 return b
//             }, e.prototype.isVisible = function(a) {
//                 var b, c, d, e, f;
//                 return c = a.getAttribute("data-wow-offset") || this.config.offset, f = window.pageYOffset, e = f + Math.min(this.element.clientHeight, this.util().innerHeight()) - c, d = this.offsetTop(a), b = d + a.clientHeight, e >= d && b >= f
//             }, e.prototype.util = function() {
//                 return null != this._util ? this._util : this._util = new b
//             }, e.prototype.disabled = function() {
//                 return !this.config.mobile && this.util().isMobile(navigator.userAgent)
//             }, e
//         }()
//     }.call(this), window.Modernizr = function(a, b, c) {
//     function d(a) {
//         q.cssText = a
//     }
//
//     function f(a, b) {
//         return typeof a === b
//     }
//
//     function g(a, b) {
//         return !!~("" + a).indexOf(b)
//     }
//
//     function h(a, b) {
//         for (var d in a) {
//             var e = a[d];
//             if (!g(e, "-") && q[e] !== c) return "pfx" != b || e
//         }
//         return !1
//     }
//
//     function i(a, b, d) {
//         for (var e in a) {
//             var g = b[a[e]];
//             if (g !== c) return d === !1 ? a[e] : f(g, "function") ? g.bind(d || b) : g
//         }
//         return !1
//     }
//
//     function j(a, b, c) {
//         var d = a.charAt(0).toUpperCase() + a.slice(1),
//             e = (a + " " + v.join(d + " ") + d).split(" ");
//         return f(b, "string") || f(b, "undefined") ? h(e, b) : (e = (a + " " + w.join(d + " ") + d).split(" "), i(e, b, c))
//     }
//     var r, C, G, k = "2.7.1",
//         l = {},
//         m = !0,
//         n = b.documentElement,
//         o = "modernizr",
//         p = b.createElement(o),
//         q = p.style,
//         t = ({}.toString, " -webkit- -moz- -o- -ms- ".split(" ")),
//         u = "Webkit Moz O ms",
//         v = u.split(" "),
//         w = u.toLowerCase().split(" "),
//         x = {},
//         A = [],
//         B = A.slice,
//         D = function(a, c, d, e) {
//             var f, g, h, i, j = b.createElement("div"),
//                 k = b.body,
//                 l = k || b.createElement("body");
//             if (parseInt(d, 10))
//                 for (; d--;) h = b.createElement("div"), h.id = e ? e[d] : o + (d + 1), j.appendChild(h);
//             return f = ["&#173;", '<style id="s', o, '">', a, "</style>"].join(""), j.id = o, (k ? j : l).innerHTML += f, l.appendChild(j), k || (l.style.background = "", l.style.overflow = "hidden", i = n.style.overflow, n.style.overflow = "hidden", n.appendChild(l)), g = c(j, a), k ? j.parentNode.removeChild(j) : (l.parentNode.removeChild(l), n.style.overflow = i), !!g
//         },
//         E = function() {
//             function a(a, e) {
//                 e = e || b.createElement(d[a] || "div"), a = "on" + a;
//                 var g = a in e;
//                 return g || (e.setAttribute || (e = b.createElement("div")), e.setAttribute && e.removeAttribute && (e.setAttribute(a, ""), g = f(e[a], "function"), f(e[a], "undefined") || (e[a] = c), e.removeAttribute(a))), e = null, g
//             }
//             var d = {
//                 select: "input",
//                 change: "input",
//                 submit: "form",
//                 reset: "form",
//                 error: "img",
//                 load: "img",
//                 abort: "img"
//             };
//             return a
//         }(),
//         F = {}.hasOwnProperty;
//     G = f(F, "undefined") || f(F.call, "undefined") ? function(a, b) {
//             return b in a && f(a.constructor.prototype[b], "undefined")
//         } : function(a, b) {
//             return F.call(a, b)
//         }, Function.prototype.bind || (Function.prototype.bind = function(a) {
//         var b = this;
//         if ("function" != typeof b) throw new TypeError;
//         var c = B.call(arguments, 1),
//             d = function() {
//                 if (this instanceof d) {
//                     var e = function() {};
//                     e.prototype = b.prototype;
//                     var f = new e,
//                         g = b.apply(f, c.concat(B.call(arguments)));
//                     return Object(g) === g ? g : f
//                 }
//                 return b.apply(a, c.concat(B.call(arguments)))
//             };
//         return d
//     }), x.touch = function() {
//         var c;
//         return "ontouchstart" in a || a.DocumentTouch && b instanceof DocumentTouch ? c = !0 : D(["@media (", t.join("touch-enabled),("), o, ")", "{#modernizr{top:9px;position:absolute}}"].join(""), function(a) {
//                 c = 9 === a.offsetTop
//             }), c
//     }, x.csstransforms3d = function() {
//         var a = !!j("perspective");
//         return a && "webkitPerspective" in n.style && D("@media (transform-3d),(-webkit-transform-3d){#modernizr{left:9px;position:absolute;height:3px;}}", function(b, c) {
//             a = 9 === b.offsetLeft && 3 === b.offsetHeight
//         }), a
//     }, x.csstransitions = function() {
//         return j("transition")
//     }, x.video = function() {
//         var a = b.createElement("video"),
//             c = !1;
//         try {
//             (c = !!a.canPlayType) && (c = new Boolean(c), c.ogg = a.canPlayType('video/ogg; codecs="theora"').replace(/^no$/, ""), c.h264 = a.canPlayType('video/mp4; codecs="avc1.42E01E"').replace(/^no$/, ""), c.webm = a.canPlayType('video/webm; codecs="vp8, vorbis"').replace(/^no$/, ""))
//         } catch (a) {}
//         return c
//     };
//     for (var H in x) G(x, H) && (C = H.toLowerCase(), l[C] = x[H](), A.push((l[C] ? "" : "no-") + C));
//     return l.addTest = function(a, b) {
//         if ("object" == typeof a)
//             for (var d in a) G(a, d) && l.addTest(d, a[d]);
//         else {
//             if (a = a.toLowerCase(), l[a] !== c) return l;
//             b = "function" == typeof b ? b() : b, "undefined" != typeof m && m && (n.className += " " + (b ? "" : "no-") + a), l[a] = b
//         }
//         return l
//     }, d(""), p = r = null,
//         function(a, b) {
//             function c(a, b) {
//                 var c = a.createElement("p"),
//                     d = a.getElementsByTagName("head")[0] || a.documentElement;
//                 return c.innerHTML = "x<style>" + b + "</style>", d.insertBefore(c.lastChild, d.firstChild)
//             }
//
//             function d() {
//                 var a = s.elements;
//                 return "string" == typeof a ? a.split(" ") : a
//             }
//
//             function e(a) {
//                 var b = q[a[o]];
//                 return b || (b = {}, p++, a[o] = p, q[p] = b), b
//             }
//
//             function f(a, c, d) {
//                 if (c || (c = b), r) return c.createElement(a);
//                 d || (d = e(c));
//                 var f;
//                 return f = d.cache[a] ? d.cache[a].cloneNode() : m.test(a) ? (d.cache[a] = d.createElem(a)).cloneNode() : d.createElem(a), !f.canHaveChildren || l.test(a) || f.tagUrn ? f : d.frag.appendChild(f)
//             }
//
//             function g(a, c) {
//                 if (a || (a = b), r) return a.createDocumentFragment();
//                 c = c || e(a);
//                 for (var f = c.frag.cloneNode(), g = 0, h = d(), i = h.length; g < i; g++) f.createElement(h[g]);
//                 return f
//             }
//
//             function h(a, b) {
//                 b.cache || (b.cache = {}, b.createElem = a.createElement, b.createFrag = a.createDocumentFragment, b.frag = b.createFrag()), a.createElement = function(c) {
//                     return s.shivMethods ? f(c, a, b) : b.createElem(c)
//                 }, a.createDocumentFragment = Function("h,f", "return function(){var n=f.cloneNode(),c=n.createElement;h.shivMethods&&(" + d().join().replace(/[\w\-]+/g, function(a) {
//                         return b.createElem(a), b.frag.createElement(a), 'c("' + a + '")'
//                     }) + ");return n}")(s, b.frag)
//             }
//
//             function i(a) {
//                 a || (a = b);
//                 var d = e(a);
//                 return s.shivCSS && !n && !d.hasCSS && (d.hasCSS = !!c(a, "article,aside,dialog,figcaption,figure,footer,header,hgroup,main,nav,section{display:block}mark{background:#FF0;color:#000}template{display:none}")), r || h(a, d), a
//             }
//             var n, r, j = "3.7.0",
//                 k = a.html5 || {},
//                 l = /^<|^(?:button|map|select|textarea|object|iframe|option|optgroup)$/i,
//                 m = /^(?:a|b|code|div|fieldset|h1|h2|h3|h4|h5|h6|i|label|li|ol|p|q|span|strong|style|table|tbody|td|th|tr|ul)$/i,
//                 o = "_html5shiv",
//                 p = 0,
//                 q = {};
//             ! function() {
//                 try {
//                     var a = b.createElement("a");
//                     a.innerHTML = "<xyz></xyz>", n = "hidden" in a, r = 1 == a.childNodes.length || function() {
//                             b.createElement("a");
//                             var a = b.createDocumentFragment();
//                             return "undefined" == typeof a.cloneNode || "undefined" == typeof a.createDocumentFragment || "undefined" == typeof a.createElement
//                         }()
//                 } catch (a) {
//                     n = !0, r = !0
//                 }
//             }();
//             var s = {
//                 elements: k.elements || "abbr article aside audio bdi canvas data datalist details dialog figcaption figure footer header hgroup main mark meter nav output progress section summary template time video",
//                 version: j,
//                 shivCSS: k.shivCSS !== !1,
//                 supportsUnknownElements: r,
//                 shivMethods: k.shivMethods !== !1,
//                 type: "default",
//                 shivDocument: i,
//                 createElement: f,
//                 createDocumentFragment: g
//             };
//             a.html5 = s, i(b)
//         }(this, b), l._version = k, l._prefixes = t, l._domPrefixes = w, l._cssomPrefixes = v, l.hasEvent = E, l.testProp = function(a) {
//         return h([a])
//     }, l.testAllProps = j, l.testStyles = D, l.prefixed = function(a, b, c) {
//         return b ? j(a, b, c) : j(a, "pfx")
//     }, n.className = n.className.replace(/(^|\s)no-js(\s|$)/, "$1$2") + (m ? " js " + A.join(" ") : ""), l
// }(this, this.document),
//     function(a, b, c) {
//         function d(a) {
//             return "[object Function]" == o.call(a)
//         }
//
//         function e(a) {
//             return "string" == typeof a
//         }
//
//         function f() {}
//
//         function g(a) {
//             return !a || "loaded" == a || "complete" == a || "uninitialized" == a
//         }
//
//         function h() {
//             var a = p.shift();
//             q = 1, a ? a.t ? m(function() {
//                         ("c" == a.t ? B.injectCss : B.injectJs)(a.s, 0, a.a, a.x, a.e, 1)
//                     }, 0) : (a(), h()) : q = 0
//         }
//
//         function i(a, c, d, e, f, i, j) {
//             function k(b) {
//                 if (!o && g(l.readyState) && (u.r = o = 1, !q && h(), l.onload = l.onreadystatechange = null, b)) {
//                     "img" != a && m(function() {
//                         t.removeChild(l)
//                     }, 50);
//                     for (var d in y[c]) y[c].hasOwnProperty(d) && y[c][d].onload()
//                 }
//             }
//             var j = j || B.errorTimeout,
//                 l = b.createElement(a),
//                 o = 0,
//                 r = 0,
//                 u = {
//                     t: d,
//                     s: c,
//                     e: f,
//                     a: i,
//                     x: j
//                 };
//             1 === y[c] && (r = 1, y[c] = []), "object" == a ? l.data = c : (l.src = c, l.type = a), l.width = l.height = "0", l.onerror = l.onload = l.onreadystatechange = function() {
//                 k.call(this, r)
//             }, p.splice(e, 0, u), "img" != a && (r || 2 === y[c] ? (t.insertBefore(l, s ? null : n), m(k, j)) : y[c].push(l))
//         }
//
//         function j(a, b, c, d, f) {
//             return q = 0, b = b || "j", e(a) ? i("c" == b ? v : u, a, b, this.i++, c, d, f) : (p.splice(this.i++, 0, a), 1 == p.length && h()), this
//         }
//
//         function k() {
//             var a = B;
//             return a.loader = {
//                 load: j,
//                 i: 0
//             }, a
//         }
//         var A, B, l = b.documentElement,
//             m = a.setTimeout,
//             n = b.getElementsByTagName("script")[0],
//             o = {}.toString,
//             p = [],
//             q = 0,
//             r = "MozAppearance" in l.style,
//             s = r && !!b.createRange().compareNode,
//             t = s ? l : n.parentNode,
//             l = a.opera && "[object Opera]" == o.call(a.opera),
//             l = !!b.attachEvent && !l,
//             u = r ? "object" : l ? "script" : "img",
//             v = l ? "script" : u,
//             w = Array.isArray || function(a) {
//                     return "[object Array]" == o.call(a)
//                 },
//             x = [],
//             y = {},
//             z = {
//                 timeout: function(a, b) {
//                     return b.length && (a.timeout = b[0]), a
//                 }
//             };
//         B = function(a) {
//             function b(a) {
//                 var e, f, g, a = a.split("!"),
//                     b = x.length,
//                     c = a.pop(),
//                     d = a.length,
//                     c = {
//                         url: c,
//                         origUrl: c,
//                         prefixes: a
//                     };
//                 for (f = 0; f < d; f++) g = a[f].split("="), (e = z[g.shift()]) && (c = e(c, g));
//                 for (f = 0; f < b; f++) c = x[f](c);
//                 return c
//             }
//
//             function g(a, e, f, g, h) {
//                 var i = b(a),
//                     j = i.autoCallback;
//                 i.url.split(".").pop().split("?").shift(), i.bypass || (e && (e = d(e) ? e : e[a] || e[g] || e[a.split("/").pop().split("?")[0]]), i.instead ? i.instead(a, e, f, g, h) : (y[i.url] ? i.noexec = !0 : y[i.url] = 1, f.load(i.url, i.forceCSS || !i.forceJS && "css" == i.url.split(".").pop().split("?").shift() ? "c" : c, i.noexec, i.attrs, i.timeout), (d(e) || d(j)) && f.load(function() {
//                         k(), e && e(i.origUrl, h, g), j && j(i.origUrl, h, g), y[i.url] = 2
//                     })))
//             }
//
//             function h(a, b) {
//                 function c(a, c) {
//                     if (a) {
//                         if (e(a)) c || (j = function() {
//                             var a = [].slice.call(arguments);
//                             k.apply(this, a), l()
//                         }), g(a, j, b, 0, h);
//                         else if (Object(a) === a)
//                             for (n in m = function() {
//                                 var c, b = 0;
//                                 for (c in a) a.hasOwnProperty(c) && b++;
//                                 return b
//                             }(), a) a.hasOwnProperty(n) && (!c && !--m && (d(j) ? j = function() {
//                                     var a = [].slice.call(arguments);
//                                     k.apply(this, a), l()
//                                 } : j[n] = function(a) {
//                                     return function() {
//                                         var b = [].slice.call(arguments);
//                                         a && a.apply(this, b), l()
//                                     }
//                                 }(k[n])), g(a[n], j, b, n, h))
//                     } else !c && l()
//                 }
//                 var m, n, h = !!a.test,
//                     i = a.load || a.both,
//                     j = a.callback || f,
//                     k = j,
//                     l = a.complete || f;
//                 c(h ? a.yep : a.nope, !!i), i && c(i)
//             }
//             var i, j, l = this.yepnope.loader;
//             if (e(a)) g(a, 0, l, 0);
//             else if (w(a))
//                 for (i = 0; i < a.length; i++) j = a[i], e(j) ? g(j, 0, l, 0) : w(j) ? B(j) : Object(j) === j && h(j, l);
//             else Object(a) === a && h(a, l)
//         }, B.addPrefix = function(a, b) {
//             z[a] = b
//         }, B.addFilter = function(a) {
//             x.push(a)
//         }, B.errorTimeout = 1e4, null == b.readyState && b.addEventListener && (b.readyState = "loading", b.addEventListener("DOMContentLoaded", A = function() {
//             b.removeEventListener("DOMContentLoaded", A, 0), b.readyState = "complete"
//         }, 0)), a.yepnope = k(), a.yepnope.executeStack = h, a.yepnope.injectJs = function(a, c, d, e, i, j) {
//             var l, o, k = b.createElement("script"),
//                 e = e || B.errorTimeout;
//             k.src = a;
//             for (o in d) k.setAttribute(o, d[o]);
//             c = j ? h : c || f, k.onreadystatechange = k.onload = function() {
//                 !l && g(k.readyState) && (l = 1, c(), k.onload = k.onreadystatechange = null)
//             }, m(function() {
//                 l || (l = 1, c(1))
//             }, e), i ? k.onload() : n.parentNode.insertBefore(k, n)
//         }, a.yepnope.injectCss = function(a, c, d, e, g, i) {
//             var j, e = b.createElement("link"),
//                 c = i ? h : c || f;
//             e.href = a, e.rel = "stylesheet", e.type = "text/css";
//             for (j in d) e.setAttribute(j, d[j]);
//             g || (n.parentNode.insertBefore(e, n), m(c, 0))
//         }
//     }(this, document), Modernizr.load = function() {
//     yepnope.apply(window, [].slice.call(arguments, 0))
// };