function cambiarValor(arr) {
  arr.push(5);
  return arr;
}

let valores = [1, 2, 3];
let otrovalor = [9, 8, 7, 6];

console.log(cambiarValor(valores));
console.log(cambiarValor(otrovalor));
console.log(valores);
