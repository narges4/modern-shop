
//Change Tab Application
$("#AndroidApplicationTab").click(function () {
  $("#AppTab1").removeClass("hidden");
  $("#AppTab2").addClass("hidden");
  $("#AndroidApplicationTab").addClass("ActiveBtnApp");
  $("#IOSApplicationTab").removeClass("ActiveBtnApp");
  $("#IOSApplicationTab").addClass("NotActiveBtnApp");
});

$("#IOSApplicationTab").click(function () {
  $("#AppTab1").addClass("hidden");
  $("#AppTab2").removeClass("hidden");
  $("#IOSApplicationTab").addClass("ActiveBtnApp");
  $("#AndroidApplicationTab").removeClass("ActiveBtnApp");
  $("#AndroidApplicationTab").addClass("NotActiveBtnApp");
});

// Menu Mobile
$("#OpenMenu").click(function () {
  console.log("11111111");
  $("#BgMenuMobile").removeClass("-right-full");
  $("#BgMenuMobile").addClass("right-0");

  setTimeout(() => {
    $("#MenuMobile").removeClass("-right-full");
    $("#MenuMobile").addClass("right-0");
  }, 200);
});

$("#CloseMenu").click(function () {
  $("#MenuMobile").addClass("-right-full");
  $("#MenuMobile").removeClass("right-0");

  setTimeout(() => {
    $("#BgMenuMobile").addClass("-right-full");
    $("#BgMenuMobile").removeClass("right-0");
  }, 200);
});
$(document).click(function (event) {
  let container = $("#MenuMobile");
  let iconOpen = $("#OpenMenu");
  if (
    !container.is(event.target) &&
    !container.has(event.target).length &&
    !iconOpen.is(event.target) &&
    !iconOpen.has(event.target).length
  ) {
    $("#MenuMobile").addClass("-right-full");
    $("#MenuMobile").removeClass("right-0");

    setTimeout(() => {
      $("#BgMenuMobile").addClass("-right-full");
      $("#BgMenuMobile").removeClass("right-0");
    }, 200);
  }
});
