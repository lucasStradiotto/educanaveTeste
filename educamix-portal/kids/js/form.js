
$(function () {


    var $forms = $(".nice-form"),
    $inputs = $forms.find("textarea, input:not([type=submit],[type=reset],[type=button],[type=radio],[type=checkbox])");
  
    $inputs.each((k, el) => {
  
      var $input = $(el),
      $label = $input.prev("label");
  
      if ($label.length) {
  
        $label.
        insertAfter($input).
        add($input).
        addClass("is-replaced");
  
        $input.on("change focus blur compositionchange compositionend keyup", ev => {
  
          var $tar = $(ev.target),
          chars = $tar.val().trim().length,
          filled = $tar.val().trim() !== "",
          medium = chars >= 5 && chars < 15,
          alot = chars >= 15;
  
          $tar.toggleClass("filled", filled);
  
          if (alot) {
  
            $tar.
            addClass("filled-alot").
            removeClass("filled-medium");
  
          } else if (medium) {
  
            $tar.
            addClass("filled-medium").
            removeClass("filled-alot");
  
          } else {
  
            $tar.removeClass("filled-alot filled-medium");
  
          }
  
        });
  
      }
  
      if ($input.val() !== "") {
  
        $input.trigger("change");
  
      }
  
    });
  
  
  
  });