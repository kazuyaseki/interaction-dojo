$(function() {
  function randomNum(m, n) {
    m = parseInt(m);
    n = parseInt(n);
    return Math.floor(Math.random() * (n - m + 1)) + m;
  }

  var clap = $(".clap");
  var confetti = $(".confetti-effect");

  clap.on("click", function() {
    //randomに回転させる
    confetti.css("transform", "rotate(" + randomNum(0, 180) + "deg)");

    confetti
      .children(".confetti-wrap")
      .stop()
      .addClass("expand");

    clap.addClass("faved");
    // setTimeout(function() {
    // clap.removeClass("faved");
    // }, 480);
  });
});
