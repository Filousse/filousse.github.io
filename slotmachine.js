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

var liste1 = [ "restaurant" , "bar" , "maison", "piscine" , "garage" ,"place public" , "voiture", "terrain de foot" , "salle de bain" , "cinema" ] ;
var liste2 = [ "chaussures" , "casquette" , "pull" , "gilet" , "hiboux" ,"chou" , "gun", "" , "f" , "g"];
var liste3 = [ "foto" , "video" , "audio" , "selfie" , "b" ,"c" , "d", "e" , "f" , "g" ] ;
var listes = [ liste1, liste2, liste3 ] ;


$(function(){
    var elmt = $('#start');
    var elmtrg = $('#resultatglobal');

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
      var indexli = [];
      var liHeight = $('#ul1 li:first-child').outerHeight();

      for(var i = 0; i < uls.length; i++) {
        var ul = uls[i];
        var index = nbaleatoire(9);
        var liste = listes[i];
        var mot = liste[index];
        var off = (index * liHeight);
        mots.push(mot);
        var margin = '-' + off + 'px';
        indexli.push(index);


        var props = {
          'margin-top': margin
        };
        var vitesse = 1000;

        if (i == 2) {
          ul.animate(props, vitesse , function() {
            $(elmtrg).val('Vas dans un(e) ' + mots[0] + ' habillé d un(e) ' + mots[1] + ' et fais un(e) ' + mots[2]);
            if (indexli[0] == indexli[1] && indexli[0] == indexli[2]) {
              $('body').css({
                'background-color': 'gold',
                'borderColor': 'red'
              });
            }
          });
        } else {
          ul.animate(props, vitesse);
        };
        }
    });
});
