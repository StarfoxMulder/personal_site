$(document).ready(function () {

  var popupHtml = '';
  $("body").append(popupHtml);

  $("#closeIcon").click(function () {
    $("#myModal").css("display", "none");
  });

  function getCookie(cookiename) {
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
    );
  }


});