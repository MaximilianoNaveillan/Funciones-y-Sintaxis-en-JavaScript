const ingresoBruto = document.getElementById('ingresoBruto');
const IvaReturn = document.getElementById('IvaReturn');
const valorTotal = document.getElementById('total');

const myTime = (time, iva, total) => {
  setTimeout(function () {
    IvaReturn.value = iva;
    valorTotal.value = total;
  }, time);
};

function myIva() {
  const valorIngresado = ingresoBruto.value;
  let ivaValor = valorIngresado * 0.19;
  let total = Number(ivaValor) + Number(valorIngresado);
  IvaReturn.value = '●';
  valorTotal.value = '●';
  myTime(1000, '●●', '●●');
  myTime(2000, '●●●', '●●●');
  myTime(3000, ivaValor, total);
}
