/*eslint-disable */
import $ from 'jquery';

export let onMobile = '';

$(window).on('load', function() {
  onMobile = (/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent));
  responsiveAdjust();
});

$(window).resize(function() {
  responsiveAdjust();
});

function responsiveAdjust() {
  $('.wrapper').css('height', ($('#logo').height() * 0.75) + 'px');
  $('.mainmenulink').css('height', $('.wrapper').height() + 'px');

  $('#accountbar').css('top', $('.wrapper').height() + 'px');
  $('#accountbar').css('height', (($('#logo').height() * 0.25) - ($('#logo').height() * 0.02)) + 'px');

  $('#sandwhichtray').css({width: $('.wrapper').height() + 'px', height: $('.wrapper').height() + 'px'});
  $('#sandwhich').css({width: $('#sandwhichtray').width() * 0.9 + 'px', height: $('#sandwhichtray').height() * 0.9 + 'px'});

  $('#mobileheadermenu').css('top', $('.wrapper').height() + 'px');

  $('#profileinfo').css('width', ($('.maincontent').width() - $('#profilepic').width()) + 'px');

  if ($(window).width() > 600) {
      $('#signup').css('width', $('.buttonrow').width() + 40 + 'px');
  }
  else {
    $('#messageme').css('width', '300px');

    $('#sitelog').css('width', '90%');
    $('#sitelog').css('height', '80%');
  }

  if ($('#slideshow').length) $('#seccontent').css('top', $('#img0').height() + 10);

  if ($('#apptitle').length) {
      $('#apptitle').css('height', ($('#homeimg').height() * $('#homeimg').css('zoom')) + 'px');
      $('#apptitle').css('line-height', ($('#homeimg').height() * $('#homeimg').css('zoom')) + 'px');
  }
}

export function showStatsBar(text, error) {
  var gradcolor1 = error ? '#aa0000' : '#007146';
  var gradcolor2 = error ? '#ff0000' : '#00b456';

  $('#statsbar').css({background: 'linear-gradient(' + gradcolor1 + ' 35%, ' + gradcolor2 + ' 100%)'});
  $('#statsbar').text(text);
  $('#statsbar').css({width: '90%'});

  $('#statsbar').on('transitionend', () => {
    if (parseInt($('#statsbar').width()) == parseInt(($(window).width() * 0.9)) && $('#statsbar').css('opacity') == '1') {
      if ($('#statsbar').text() == 'YOU HAVE SUCCESSFULLY SIGNED IN!') $('#signinform').submit();
      else if ($('#statsbar').text() == 'YOU HAVE SIGNED OUT SUCCESSFULLY') $('#signoutform').submit();
      else if ($('#statsbar').text() == 'SUCCESS! USER HAS BEEN UPDATED') window.location.reload();
      else $('#statsbar').css({opacity: 0});
    }
    else if (parseInt($('#statsbar').width()) == parseInt(($(window).width() * 0.9)) && $('#statsbar').css('opacity') == '0') {
      $('#statsbar').css({width: '0px'});
    }
    else if (parseInt($('#statsbar').width()) == '0' && $('#statsbar').css('opacity') == '0') {
      $('#statsbar').css({opacity: 1});
    }
  });
}
/*eslint-enable */
