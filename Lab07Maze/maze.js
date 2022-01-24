
$(document).ready(function () {

  let lost = false;

  $("#start").click(function () {
    $("#status").text('Click the "S" to begin');

    if (!lost) {
      $("div .boundary").mouseenter(
        function(){
          lsAction();
          lost = true;
        });
      $("#maze").mouseleave(
        function(){
          lsAction();
          lost = true;
        });
    }
    else {
      $("div .boundary").removeClass("you-lose");
      $("#end").mouseenter(function () {
        wnAction();
        lost = false;

      })
    }

  })

});

function lsAction(){
  $("div .boundary").addClass("you-lose");
  $("#status").text("You Lose! :(");
  $("#end").unbind("mouseenter");
}

function wnAction(){
  $("#status").text("You Win! :)");
  $("div .boundary").unbind("mouseenter");
  $("#maze").unbind("mouseleave");
}