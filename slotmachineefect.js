$(function(){
    var elmt = $('#start');
    elmt.click(function() {
      var off = nbaleatoire(4) * 100;
      var margin = '-' + off + 'px';
      $('ul').css({
        'margin-top': margin
      });
    });
});
