
var tab = [ "restaurant" , "bar" , "maison" ] ;
var length = tab.length-1;

function nbaleatoire(x){
  var a = Math.random()*x;
  var b = Math.round(a);
  return b;
}
var resultlieux = nbaleatoire(length);
console.log (tab[resultlieux]);
