// function headerMenu() {
//     var windowWidth = jQuery(window).width();
//     var wH = jQuery(window).height();
//     if (windowWidth > 767) {
//         $("header .menu_topnav").removeAttr("style");
//     } else {
//         var rh = 90;
//         $("header .menu_topnav").css("max-height",wH-rh);
//     }
// }

function mainpage() {
    var windowWidth = jQuery(window).width();
    var widthContainer = $('.container').width();
    var windowHeight = jQuery(window).height();
    var heightHeader = $('header').height();
    var heightFooter = $('footer').height();
    $(".main-page").css("min-height", windowHeight - heightHeader - heightFooter);
    $(".go-top").css("right", (windowWidth - widthContainer) / 2);
    $(".header .menu-level-2").css("width", widthContainer);
}

$(document).ready(function () {
    var $grid = $('.grid').masonry({
        itemSelector: '.grid-item',
        percentPosition: true,
        columnWidth: '.grid-sizer'
    });
    // layout Masonry after each image loads
    $grid.imagesLoaded().progress(function () {
        $grid.masonry();
    });

    $(window).scroll(function () {
        $(window).scrollTop() > 300 ? $(".go_top").addClass("go_tops") : $(".go_top").removeClass("go_tops")
    });

    //headerMenu();
    mainpage();
    jQuery(window).resize(function () {
        //headerMenu();
        mainpage();
    });

    $('.dropdown:not(.form-search) .title-dropdown').click(function () {
        $('.dropdown').toggleClass('show-section');
    });

    $('.box-button-responsive').click(function () {
        $('.vertical-menu').css('display', 'block');
        $(this).addClass('hide');
    })

    $('.section-menu .search-input i.fa-search').click(function () {
        $(this).parent().addClass('show-input');
        $('.section-menu .search-input input[type="text"]').focus();
    });


    $('.box-button-responsive').click(function () {
        $(this).prev().prev().addClass('show-menu');
    })
    $('.box-small-devices').click(function () {
        $(this).parent().toggleClass('show');
    })

    $('.box-responsive').click(function () {
        $(this).toggleClass('show-menu');
        $('.header-menu .list-menu').toggleClass('show-menu');
    })

    $('.header-search .fa-search').click(function () {
        $('.header-search .input-header').toggleClass('show-input');
    })

    $('.wp-info-user .logo-user').click(function () {
        $('.wp-info-user .list-action').toggleClass('show-list');
    });
    $('.dropdown-form .item-visible').click(function () {
        $(this).parent().toggleClass('show-select');
    })

    $('.change-mode').click(function () {
        $('body').toggleClass('dark-mode');
    })
    $('.section-notifications .notification').click(function () {
        $('.list-notifications').toggleClass('show-list');
    });

    $('.action-share .share').click(function () {
        $(this).next().toggleClass('show-list');
    })

    // Checkbox checked, show 1 checked and remove more checked, 
    // Item visible show content check when click
    $('.dropdown-form .list-item .item-select input[type="checkbox"]').click(function (e) {
        $('.dropdown-form .list-item .item-select input[type="checkbox"]').prop('checked', false);
        $(this).prop('checked', true);
        var textInput = $(this).next().text();
        var itemVisible = $('.dropdown-form .item-visible span');
        itemVisible.text(textInput);
    });

    $('.main-post .dropdown-box-list .fa-ellipsis-h').click(function(e){
        $(this).next().toggleClass('show');
    })

    // ==== Tab page Popular detail ====
    $('.main-list .tag-tab').click(function () {
        let data_target = $(this).attr("data-target");
        // active tag menu
        if (!$(this).parent().hasClass('active')) {
            $('.main-list .item-list').removeClass('active');
            $(this).parent().addClass('active');
            // active main content
            $('.main-popular-detail .main-contents .item-main').removeClass('show-item');

            $('.main-popular-detail .main-contents .item-main[data-tabs=' + data_target + ']').addClass('show-item');

            $('.grid').masonry({
                itemSelector: '.grid-item',
                percentPosition: true,
                columnWidth: '.grid-sizer'
            });
        }
    });

    $('.wp-settings .section-middle .list-menu-setting .item-menu').click(function (e) {
        var data_target = $(this).attr('data-target');
        $('.wp-settings .section-middle .list-menu-setting .item-menu').removeClass('active');
        $(this).addClass('active');
        var settingPage = '.wp-settings .section-right .setting-page';
        $(`${settingPage}`).removeClass('show');
        var tabActive = '.wp-settings .section-right .setting-page' + `.${data_target}`;
        $(`${tabActive}`).addClass('show');
    });
});

// Remove dropdown when click outside target
window.onclick = function (e) {
    if (!e.target.matches('.notification .fa-bell')) {
        var dropdownNotifications = $('.section-notifications .list-notifications')
        if (dropdownNotifications.hasClass('show-list'));
        dropdownNotifications.removeClass('show-list')
    }

    if (!e.target.matches('.fa-search')) {
        var focusInput = e.target.matches('.input-search .input-header');
        if (!focusInput) {
            var inputHeaderDropdown = $('.input-search .input-header');
            if (inputHeaderDropdown.hasClass('show-input'));
            inputHeaderDropdown.removeClass('show-input');
        }
    }

    if (!e.target.matches('.logo-user img')) {
        var dropdownSetting = $('.wp-info-user .list-action');
        if (dropdownSetting.hasClass('show-list'));
        dropdownSetting.removeClass('show-list');
    }

    if (!e.target.matches('.action-share .share')) {
        var dropdownShare = $('.action-share .list-share');
        if (dropdownShare.hasClass('show-list'));
        dropdownShare.removeClass('show-list');
    }

    if (!e.target.matches('.box-small-devices .popular')) {
        var dropdownListPopular = $('.section-left .list-popular');
        if (dropdownListPopular.has('show'));
        dropdownListPopular.removeClass('show');
    }

    if (!e.target.matches('.box-responsive')) {
        var dropdownMenu = $('.header-menu .list-menu');
        if (dropdownMenu.hasClass('show-menu'));
        dropdownMenu.removeClass('show-menu');
    }

    if (!e.target.matches('.dropdown-form .item-visible')) {
        var selectChild = e.target.matches(".setting .dropdown-form .list-item label input[type='checkbox']");
        if (!selectChild) {
            var dropdownSetting = $('.setting-page .setting .dropdown-form');
            if (dropdownSetting.hasClass('show-select'));
            dropdownSetting.removeClass('show-select');
        }
    }

    if(!e.target.matches('.main-post .dropdown-box-list .fa-ellipsis-h')){
        var listDropdown = $('.main-post .dropdown-box-list .dropdown-list');
        if(listDropdown.hasClass('show'));
        listDropdown.removeClass('show');
    }
}

window.onscroll = function () {
    scrollTop();
}

function scrollTop() {
    var offsetMouse = document.documentElement.scrollTop;
    var offsetBody = document.body.scrollTop;
    var btngoTop = document.getElementById("btn-goTop");
    if (offsetMouse > 0 || offsetBody > 0) {
        btngoTop.style.display = " block"
    } else {
        btngoTop.style.display = "none";
    }

}

document.getElementById('btn-goTop').addEventListener("click", function () {
    document.body.scrollTop = 0;
    document.documentElement.scrollTop = 0;
});

function height_scroll() {
    var w_heigh = window.innerHeight;
    var w_width = window.innerWidth;
    if (w_width > 1024) {
        $(".section-left").css("height", w_heigh);
    }
}
height_scroll();
