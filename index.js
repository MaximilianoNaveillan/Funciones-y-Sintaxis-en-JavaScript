const ingresoBruto = document.getElementById('ingresoBruto');
const IvaReturn = document.getElementById('IvaReturn');

function iva() {
  const valorIngresado = ingresoBruto.value;
  let ivaValor = valorIngresado * 0.19;
  IvaReturn.value = '.';
  setTimeout(function () {
    IvaReturn.value = '..';
  }, 1000);
  setTimeout(function () {
    IvaReturn.value = '...';
  }, 2000);
  setTimeout(function () {
    IvaReturn.value = ivaValor;
  }, 3000);
  /* console.log(valorIngresado) */
}
