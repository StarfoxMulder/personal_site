$(document).ready(function () {

  // var popupHtml = '';
  // $("body").append(popupHtml);

  $("#ViewMyWork").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#portfolio").offset().top
      },
      'slow');
  });


  function getCookie(cookiename) {
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
    );
  }


});