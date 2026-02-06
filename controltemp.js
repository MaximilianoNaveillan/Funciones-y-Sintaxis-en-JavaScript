const resultadotemp = document.getElementById('resultado-temp');
// 1. Declara una constante que guarda una función anónima (sin nombre propio).
//    Las funciones anónimas usan "function () {}" y se asignan a variables para invocarlas después [web:23].
const generarTemperatura = function () {
  // 2. return devuelve el resultado de la función al lugar donde se la invoca.
  //    Sin return, la función devuelve "undefined".
  return Math.round(Math.random() * 40);

  // 3. Math.random(): genera un número flotante aleatorio >=0 y <1 (ej: 0.723) [web:16][web:17][web:1].
  // 4. * 40: escala el rango a 0–39.999... (ej: 0.723 * 40 = 28.92).
  // 5. Math.round(): redondea al entero más cercano (ej: 28.92 → 29).
  //    Así obtenés enteros de 0 a 40 inclusive [web:18][web:2].
};

// 6. Declara otra constante con función flecha (arrow function): sintaxis corta "=>(param) => {}".
//    Hereda "this" del ámbito padre y es ideal para funciones simples [web:26][web:20].
const clasificarClima = (temperatura) => {
  // 7. if: verifica si temperatura está entre 0 y 15 (inclusive).
  //    && es "Y lógico": ambas condiciones deben ser verdaderas [web:6].
  if (temperatura >= 0 && temperatura <= 15) {
    // 8. console.log(): imprime en la consola del navegador/dev tools.
    //    Usa template literals `${}` para insertar variables dinámicamente [web:21][web:27].
    console.log(`Temperatura: ${temperatura}°C - Hace frío`);
    resultadotemp.innerText = `Temperatura: ${temperatura}°C - Hace frío`;
  } else if (temperatura >= 16 && temperatura <= 25) {
    // 9. else if: se ejecuta solo si el if anterior es falso, y esta condición es verdadera.
    console.log(`Temperatura: ${temperatura}°C - Está templado`);
    resultadotemp.innerText = `Temperatura: ${temperatura}°C -Está templado`;
  } else {
    // 10. else: se ejecuta si ninguna condición anterior es verdadera (temperatura >25).
    console.log(`Temperatura: ${temperatura}°C - Hace calor`);
    resultadotemp.innerText = `Temperatura: ${temperatura}°C - Hace calor`;
  }
};

// 11. Invoca generarTemperatura() y guarda su resultado (ej: 23) en tempActual.
const tempActual = generarTemperatura();

// 12. Pasa tempActual como argumento a clasificarClima.
//     Esto "envía" el valor a la función para evaluarlo [web:12].
//clasificarClima(tempActual);

function resultadoTemperatura() {
  // 11. Invoca generarTemperatura() y guarda su resultado (ej: 23) en tempActual.
  const tempActual = generarTemperatura();

  clasificarClima(tempActual);
}
