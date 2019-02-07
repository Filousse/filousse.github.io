function nbaleatoire(x){
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
  var elmtrg = $('#resultatglobal')
  var elmt = $('#start');
  elmt.click(function() {
    $('#resultatglobal').val('2');
    });
});
