$(document).ready(function(){
  function prevImage() {
    // salvo img con class="active"
      // rimuovo class="active" dall'immagine e dal circle
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    var circleActive = $(".nav > i.active");
    circleActive.removeClass("active");
    // se img con class="active" ha class="first" -> img precedente = img con class="last"
    if (imgActive.hasClass("first") && circleActive.hasClass("first")) {
      var prevImg = $("img.last");
      var prevCircle = $(".nav > i.last");
    } else {
      // salvo img precedente a quella con class="active"
      var prevImg = imgActive.prev();
      var prevCircle = circleActive.prev();
    };
    // a img precedente aggiungo la class="active"
    prevImg.addClass("active");
    prevCircle.addClass("active");
  };

  function nextImage(){
    // salvo img con class="active"
      // rimuovo class="active"
    var imgActive = $("img.active");
    imgActive.removeClass("active");
    var circleActive = $(".nav > i.active");
    circleActive.removeClass("active");
    // se img con class="active" ha class="last" -> img successiva = img con class="first"
    if (imgActive.hasClass("last") && circleActive.hasClass("last")) {
      var nextImg = $("img.first");
      var nextCircle = $(".nav > i.first");
    } else {
      // salvo img precedente a quella con class="active"
      var nextImg = imgActive.next();
      var nextCircle = circleActive.next();
    };
    // a img precedente aggiungo la class="active"
    nextImg.addClass("active");
    nextCircle.addClass("active");
  };

  // click icona prev
  $(".prev").click(
    function(){
      prevImage();
    }
  );

  // click icona next
  $(".next").click(
    function(){
      nextImage();
    }
  );

  // press freccia sinistra
  $(document).keydown(
    function(key){
      switch (key.which) {
        case 37:
          prevImage();
          break;
        case 39:
          nextImage();
          break;
        default:
        return;
      }
      key.preventDefault();
    }
  );
  // press freccia destra
});

// function slidePrev(selettore) {
//   var elementActive = $ (selettore".active");
//   elementActive.removeClass("active");
//
//   if (elementActive.hasClass("first")) {
//     var prevElement = $(selettore".last");
//   } else {
//     var prevElement = elementActive.next();
//   };
//   return prevElement.addClass("active");
// }
