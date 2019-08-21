$(document).ready(function () {

  // var popupHtml = '';
  // $("body").append(popupHtml);

  $("#ViewMyWork").click(function (e) {
    e.preventDefault();
    $('html,body').animate({
        scrollTop: $("#aboutMe").offset().top
      },
      'slow');
  });

  $('.projItem').click(function (event) {
    event.preventDefault();
    var e = $(this);
    var title = e.data('title');
    var tech = e.data('tech');
    var about = e.data('about');
    var url = e.data('url');

    $("#myModal").modal("show");
    $('.projTitleModal').html(title);
    $('.projTechModal').html(tech);
    $('.projAboutModal').html(about);
    $('#projVisitModal').attr("href", url);
  });



  function getCookie(cookiename) {
    var cookiestring = RegExp("" + cookiename + "[^;]+").exec(document.cookie);
    return decodeURIComponent(
      !!cookiestring ? cookiestring.toString().replace(/^[^=]+./, "") : ""
    );
  }


});