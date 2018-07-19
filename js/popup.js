$(document).ready(function() {

  $(window).on('showpassage:after', function(event){
    initMagnific();
  });

  function initMagnific() {
    $('figure > a').magnificPopup({
      type:'image',
      cursor: null,
      image: {
        titleSrc: function(item) {
          return item.el.next('figcaption').html();
        }
      },
      fixedContentPos: true,
      // Delay in milliseconds before popup is removed
      removalDelay: 300,

      // Class that is added to popup wrapper and background
      // make it unique to apply your CSS animations just to this exact popup
      mainClass: 'mfp-fade'
    });
  }

});