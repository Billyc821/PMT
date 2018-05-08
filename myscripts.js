$( document ).ready(function() {


    $(".item-a, .item-b, .item-c, .item-d, .item-e, .item-f, .item-g, .item-h, .item-i").click(function() {
      window.location = $(this).find("a").attr("href");
      return false;
    });

    $(function() {
      $('.item-a').hover(function() {
        $('.connected').css('color', '#222222');
        $('.value-wrapper').css('color', '#222222');
        $('.item-a').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.connected').css('color', '');
          $('.value-wrapper').css('color', '');
          $('.item-a').css('background-color', '');
        });
    });

    $(function() {
      $('.item-b').hover(function() {
        $('.available').css('color', '#222222');
        $('.item-b').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.available').css('color', '');
          $('.item-b').css('background-color', '');
        });
    });

    $(function() {
      $('.item-c').hover(function() {
        $('.temp').css('color', '#222222');
        $('.item-c').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.temp').css('color', '');
          $('.item-c').css('background-color', '');
        });
    });

    $(function() {
      $('.item-d').hover(function() {
        $('.lap').css('color', '#222222');
        $('.item-d').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.lap').css('color', '');
          $('.item-d').css('background-color', '');
        });
    });

    $(function() {
      $('.item-e').hover(function() {
        $('.mob').css('color', '#222222');
        $('.item-e').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.mob').css('color', '');
          $('.item-e').css('background-color', '');
        });
    });

    $(function() {
      $('.item-f').hover(function() {
        $('.white').css('color', '#222222');
        $('.item-f').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.white').css('color', '');
          $('.item-f').css('background-color', '');
        });
    });

    $(function() {
      $('.item-g').hover(function() {
        $('.lig').css('color', '#222222');
        $('.item-g').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.lig').css('color', '');
          $('.item-g').css('background-color', '');
        });
    });

    $(function() {
      $('.item-h').hover(function() {
        $('.smart').css('color', '#222222');
        $('.item-h').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.smart').css('color', '');
          $('.item-h').css('background-color', '');
        });
    });

    $(function() {
      $('.item-i').hover(function() {
        $('.batt').css('color', '#222222');
        $('.item-i').css('background-color', 'white');
        }, function() {
          // on mouseout, reset the background colour
          $('.batt').css('color', '');
          $('.item-i').css('background-color', '');
        });
    });



});
