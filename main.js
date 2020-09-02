$(document).ready(function(){
  // click icona prev o press tasto left
  $(".prev").click(
    function(){
      // salvo img con class="active"
        // rimuovo class="active"
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      // se img con class="active" ha class="first" -> img precedente = img con class="last"
      if (imgActive.hasClass("first")) {
        var prevImg = $("img.last");
      } else {
        // salvo img precedente a quella con class="active"
        var prevImg = imgActive.prev();
      }
        // a img precedente aggiungo la class="active"
        prevImg.addClass("active");
    }
  );

  // click icona next o press tasto right
  $(".next").click(
    function(){
      // salvo img con class="active"
        // rimuovo class="active"
      var imgActive = $("img.active");
      imgActive.removeClass("active");

      // se img con class="active" ha class="last" -> img successiva = img con class="first"
      if (imgActive.hasClass("last")) {
        var nextImg = $("img.first");
      } else {
        // salvo img precedente a quella con class="active"
        var nextImg = imgActive.next();
      }
        // a img precedente aggiungo la class="active"
        nextImg.addClass("active");
    }
  );

});
