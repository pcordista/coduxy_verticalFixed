var controller = new ScrollMagic.Controller();

$(document).ready(function() {
  console.log($("#animationContainer").height());
  var height = $("#animationContainer").height() - 900 + "px";
  var offset = $("#sec1").height() / 2 + "px"

  $("#slider-numbers").fadeOut("slow");
  var indicatorScrolled = TweenMax.to("#slider-indicator", 1, {
    className: "+=active"
  });
  var indicatorScrolled2 = TweenMax.to("#slider-numbers", 1, {
    className: "+=active"
  });

  //************************** TEXTVIEW ************************** */
  var sliderIndicator = new ScrollMagic.Scene({
    triggerElement: "#trigger1",
    duration: height
  })
  .offset(offset)
    .setTween(indicatorScrolled)
    .setPin("#slider-indicator", { pushFollowers: true })
    .addIndicators({ name: "slider-indicator", colorEnd: "yellow" }) // add indicators (requires plugin)
    .addTo(controller);
    sliderIndicator.on("end", function() {
      $("#slider-indicator>div").addClass('fix');
    });
    sliderIndicator.on("progress", function() {
      $("#slider-indicator>div").removeClass('fix');
    });
  function callback(event) {
    console.log("Event fired! (" + event.type + ")");
  }
  // add listeners
  sliderIndicator.on("change update progress start end enter leave", callback);
  //************************** NUMBER ************************** */
  var numberIndicator = new ScrollMagic.Scene({ triggerElement: "#trigger2" })
    .setTween(indicatorScrolled2)
    // .setTween(indicatorScrolled)
    .setPin("#slider-numbers")
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  //************************** SECT1 ************************** */
  var sceneOne = new ScrollMagic.Scene({ triggerElement: "#sec1" })
    .setClassToggle("#high1", "active") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);
  //************************** SECT1 ACTIONS ************************** */
  sceneOne.on("start", function() {
    // $("#slider-indicator").show();
    $("#slider-numbers").show();
    // $("#sec1").css({ "margin-top": "-2rem" });
  });

  sceneOne.on("leave", function() {
    // $("#slider-indicator").hide();
    $("#slider-numbers").hide();
  });

  //************************** SECT2 ************************** */
  var sceneTwo = new ScrollMagic.Scene({ triggerElement: "#sec2" })
    .setClassToggle("#high2", "active") // add class toggle
    // .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  //************************** SECT2 ACTIONS ************************** */
  sceneTwo.on("enter", function(event) {
    $(".sliderOne, .sliderThree").addClass("ocultarDisplay");
    $(".sliderTwo").removeClass("ocultarDisplay");
  });

  sceneTwo.on("leave", function(event) {
    $(".sliderTwo, .sliderThree").addClass("ocultarDisplay");
    $(".sliderOne").removeClass("ocultarDisplay");
  });

  //************************** SECT3 ************************** */
  var sceneThree = new ScrollMagic.Scene({ triggerElement: "#sec3" })
    .setClassToggle("#high3", "active") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  //************************** SECT3 - ACTIONS ************************** */
  sceneThree.on("enter", function(event) {
    $(".sliderOne, .sliderTwo").addClass("ocultarDisplay");
    $(".sliderThree").removeClass("ocultarDisplay");
  });

  sceneThree.on("leave", function(event) {
    $(".sliderOne, .sliderThree").addClass("ocultarDisplay");
    $(".sliderTwo").removeClass("ocultarDisplay");
  });

  //************************** SECT AUXILIAR ************************** */
  var lastSlide = new ScrollMagic.Scene({ triggerElement: "#sec4" })
    .setClassToggle("#high4", "active") // add class toggle
    .addIndicators() // add indicators (requires plugin)
    .addTo(controller);

  //************************** SECT AUXILIAR - ACTIONS ************************** */
  lastSlide.on("enter", function(event) {
    // $("#slider-indicator").hide();
    $("#slider-numbers").hide();
    // $("#slider-indicator-clone").fadeIn("fast");
  });

  lastSlide.on("leave", function(event) {
    // $("#slider-indicator").show();
    $("#slider-numbers").show();
    // $("#slider-indicator-clone").fadeOut("fast");
  });
  sliderIndicator.update();
});
