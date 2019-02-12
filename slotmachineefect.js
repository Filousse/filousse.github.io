$(function(){
    var elmt = $('#start');
    elmt.click(function() {

      var l1 = $('#ul1');
      var l2 = $('#ul2');
      var l3 = $('#ul3');

      var uls = [l1, l2, l3];

      for(var i=0; i<uls.length; i++) {
        var ul = uls[i];
        var off = nbaleatoire(4) * 100;
        var margin = '-' + off + 'px';

        ul.animate({
          'margin-top': margin

        });
      }
    });
});
