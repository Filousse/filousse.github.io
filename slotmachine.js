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

  $("#start").click(function(){
    var result1 = pioche(liste1);
    var result2 = pioche(liste2);
    var result3 = pioche(liste3);
    console.log(result1);
    console.log(result2);
    console.log(result3);

  });
});
