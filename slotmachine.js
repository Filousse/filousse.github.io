function nbaleatoire(x) {
  var a = Math.random()*x;
  var b = Math.round(a);
  return b;
}

function pioche(l) {
  var length = l.length-1;
  var result = nbaleatoire(length);
  return l[result];
}

var liste1 = [ "restaurant" , "bar" , "maison" ] ;
var liste2 = [ "chaussures" , "casquette" , "pull"];
var liste3 = [ "foto" , "video" , "audio" ] ;

$(function(){
  var elmt = $('#start');
  elmt.hover(function() {
    $(this).css({
      'color' : 'red'
    });
})

  var nb1 = pioche(liste1);
  var nb2 = pioche(liste2);
  var nb3 = pioche(liste3);
  var elmtrg = $('#resultatglobal');
  var elmt = $('#start');
  elmt.click(function() {
    $(elmtrg).val('Vas dans un(e) ' + nb1 + ' habillé d un(e) ' + nb2 + ' et fais un(e) ' + nb3);
    });
});

$(function(){
    var elmt = $('#start');
    elmt.click(function() {
      var off = nbaleatoire(4) * 100;
      var margin = '-' + off + 'px';
      $('ul').css({
        'margin-top': margin
      });

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
