$(document).ready(function() {

  $.urlParam = function(name){
    var results = new RegExp('[\?&]' + name + '=([^&#]*)').exec(window.location.href);
    if (results==null){
       return null;
    }
    else{
       return decodeURI(results[1]) || 0;
    }
  }

  function initDisableLinks() {

    $(document).on('click', 'a.disabled', function(e){
        e.preventDefault();
        return false;
    });

    $(window).on('showpassage:after', function(event){
        disableLinks();
    });

    // remove share container
    $( ".share-container" ).remove();

  }

  function disableLinks() {
    // detect and disable external links
    $('a:not(.disabled)').filter(function() {
       return this.hostname && this.hostname !== location.hostname;
    }).addClass("disabled");
  }

  function setupCookieAndStyle() {

    if ($.urlParam('disable-links') == 'true') {
      Cookies.set('disable-links', true);
    } else if ($.urlParam('disable-links') == 'false') {
      Cookies.remove('disable-links');
    }

    // append disabled css style
    var disabled_style = 'a.disabled { cursor: not-allowed; opacity: 0.5; color: currentColor; display: inline-block; pointer-events: none; text-decoration: none; } .chat-panel a.disabled { color: black;  opacity: 1.0; border: none !important;}';
    $('head').append('<style type="text/css">'+disabled_style+'</style>');

    return true;

  }


  if (setupCookieAndStyle()) {
    if (Cookies.get('disable-links')) {
      initDisableLinks();
      disableLinks();
    }
  }

});