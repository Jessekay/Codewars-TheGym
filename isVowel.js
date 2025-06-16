function isVow(a){
  return a.map(x => 'aeiou'.includes(String.fromCharCode(x)) ? String.fromCharCode(x) : x);
}