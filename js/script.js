var $menu = $('#menu'),
    $menulink = $('#spinner-form');

$menulink.click(function (e) {
    ToggleThis($menulink);
    ToggleThis($menu);
});

$('ul.dropdown li').hover(function () {
    $(this).addClass('hover');
}, function () {
    $(this).removeClass('hover');
});

function ToggleThis($this) {
    $this.toggleClass('active');
}

function IssetActive($this) {
    $this.classList.contains('active');
}

// Size of browser viewport.
var $Hbrowser = $(window).height();
var $Wbrowser = $(window).width();

// Size of HTML document (same as pageHeight/pageWidth in screenshot).
var $Hdocument = $(document).height();
var $Wdocument = $(document).width();

var $Hwindow = window.screen.height;
var $Wwindow = window.screen.width;

console.log($Hwindow);
