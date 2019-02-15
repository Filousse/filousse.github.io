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

var liste1 = [ "restaurant" , "bar" , "maison", "a" , "b" ,"c" , "d", "k" , "f" , "g" ] ;
var liste2 = [ "chaussures" , "casquette" , "pull" , "a" , "b" ,"c" , "d", "e" , "f" , "g"];
var liste3 = [ "foto" , "video" , "audio" , "a" , "b" ,"c" , "d", "e" , "f" , "g" ] ;
var listes = [ liste1, liste2, liste3 ] ;



$(function(){
    var elmt = $('#start');
    var elmtrg = $('#resultatglobal');

    elmt.hover(function() {
        $(this).css({
            'color' : 'red'
        });
    });

    elmt.click(function() {
      var off = nbaleatoire(9) * 100;
      var margin = '-' + off + 'px';
      $('ul').css({
        'margin-top': margin
      });

      var l1 = $('#ul1');
      var l2 = $('#ul2');
      var l3 = $('#ul3');
      var uls = [l1, l2, l3];
      var mots = [];

      for(var i = 0; i < uls.length; i++) {
        var ul = uls[i];
        var index = nbaleatoire(9);
        var liste = listes[i];
        var mot = liste[index];
        mots.push(mot);
        var off = index * 100;
        var margin = '-' + off + 'px';
        var props = {
          'margin-top': margin
        };
        var vitesse = 1000;

        if (i < 2) {
          ul.animate(props, vitesse);
        } else {
          ul.animate(props, vitesse , function() {
            $(elmtrg).val('Vas dans un(e) ' + mots[0] + ' habillé d un(e) ' + mots[1] + ' et fais un(e) ' + mots[2]);
          });
        }

      }
    });
});
