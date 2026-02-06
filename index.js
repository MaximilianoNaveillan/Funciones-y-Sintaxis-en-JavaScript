const ingresoBruto = document.getElementById("ingresoBruto")
const IvaReturn = document.getElementById("IvaReturn")

function iva(){
const valorIngresado= ingresoBruto.value;
let ivaValor = valorIngresado * 0.19;
IvaReturn.value = ivaValor
/* console.log(valorIngresado) */
}

