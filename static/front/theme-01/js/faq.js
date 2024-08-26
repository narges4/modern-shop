//Tabs Faq
function openTabs(element, tabsName) {
  $(element).addClass("Active_Faq");
  $(element).siblings().removeClass("Active_Faq");
  var i;
  var x = document.getElementsByClassName("step-tab");
  for (i = 0; i < x.length; i++) {
    x[i].style.display = "none";
  }
  document.getElementById(tabsName).style.display = "block";
}
$(".ShowFaq").click(function () {
  if ($(window).width() < 768){
    if ($("#TabsFaqMobile").hasClass("active")) {
      $(this).siblings().css({ display: "none" });
      $("#TabsFaqMobile").removeClass("active");
      $(this).find('.ArrowFaq').removeClass('hidden')
      $(this).siblings().find('.ArrowFaq').addClass('hidden')
      $(".ArrowFaq").css({ display: "inline-block" });
      $(".ArrowFaq").css({ transform: "rotate(0)" });
    } else {
      $("#TabsFaqMobile").addClass("active");
      $("#TabsFaqMobile").children().css({ display: "flex" });
      $(".ArrowFaq").css({ transform: "rotate(0)" });
      $(".ArrowFaq").css({ display: "none" });
    }
  }
  
});
