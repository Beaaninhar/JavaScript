var x = 5;
var y = 10;

x += y;
x -= y;
x *= y;
x /= y;
x %= y;
x **= y;

var idade = 21;
var naoPossuiDiabetes = false;
var podeBeber =
  idade >= 18 && naoPossuiDiabetes ? "Pode beber" : "Não pode beber";
console.log(podeBeber);

var possuiFaculdade = true;
if (possuiFaculdade) console.log("Possui faculdade");
else console.log("Não possui faculdade");

// ou
const facul = (possuiFaculdade) ?  console.log("Possui faculdade") : console.log("Não possui faculdade");
