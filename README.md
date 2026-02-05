# 🧠 Demo: Funciones y Sintaxis en JavaScript

## 🎯 Objetivo de la Demo

En esta actividad exploraremos los **distintos tipos de funciones en JavaScript** y cómo se utilizan en situaciones reales.
La idea no es memorizar sintaxis, sino **entender cuándo y por qué usar cada tipo de función**.

Trabajaremos con:

- Funciones con nombre
- Funciones anónimas
- Funciones flecha (arrow functions)

---

## 📌 ¿En qué consistirá la Demo?

Durante la demo se analizarán ejemplos prácticos para comprender:

- Cómo se definen las funciones tradicionales usando la palabra clave `function`.
- Cómo se invocan las funciones utilizando su nombre.
- Cómo los **parámetros** permiten que una función sea reutilizable.
- En qué casos es útil una **función anónima**, especialmente cuando se usa dentro de otros métodos.
- Por qué las **funciones flecha** tienen una sintaxis más corta y moderna.
- Cómo se comporta la palabra clave `this` en funciones flecha.
- Cuándo es conveniente usar la **sintaxis reducida** de una arrow function.

⚠️ **Importante:**
Durante esta actividad **no se entregará la solución completa**, solo pistas para que puedas llegar a ella por tu cuenta.

---

## 🧩 1. Funciones con nombre

Las funciones con nombre:

- Se definen usando la palabra clave `function`.
- Tienen un nombre que permite invocarlas desde cualquier parte del código.
- Son ideales cuando necesitas reutilizar la lógica varias veces.

### 🔍 Pistas

- Piensa en una acción que puedas repetir más de una vez.
- Pregúntate: ¿qué datos debería recibir esta función para ser flexible?
- Observa cómo cambia el resultado cuando modificas los argumentos.

---

## 🧩 2. Funciones anónimas

Las funciones anónimas:

- No tienen nombre.
- Se utilizan comúnmente como **argumentos de otras funciones**.
- Son útiles cuando la función solo se ejecutará en un lugar específico.

### 🔍 Pistas

- Piensa en funciones que se ejecutan automáticamente después de cierto tiempo.
- Observa métodos de arreglos donde se recibe una función como parámetro.
- Pregúntate: ¿realmente necesito reutilizar esta función?

---

## 🧩 3. Funciones flecha (Arrow Functions)

Las funciones flecha:

- Tienen una sintaxis más corta.
- No usan la palabra clave `function`.
- Permiten escribir código más limpio y legible.

### 🔍 Pistas

- Compara una función tradicional con una flecha y observa qué partes desaparecen.
- Prueba reducir aún más la sintaxis cuando la función tiene una sola instrucción.
- Analiza cómo se comporta `this` dentro de una arrow function.

🧠 **Dato clave:**
Las funciones flecha **no crean su propio contexto de `this`**, sino que lo heredan del contexto donde fueron definidas.

---

## 🧪 Ejercicio: Simulador de Temperatura

### 🙌 Contexto

En una ciudad, un **sensor de temperatura** registra valores cada cierto tiempo y debe indicar si hace frío, templado o calor según el valor obtenido.

---

### ✍️ Consigna

Crear una **función anónima** que genere un número aleatorio entre **0 y 40**, simulando una temperatura en grados Celsius.

⏱️ **Tiempo estimado:** 25 minutos

---

### ⚙️ Paso a paso (sin solución)

- Utiliza una función que permita generar números aleatorios.
- Guarda el valor de la temperatura generada.
- Crea otra función que **reciba la temperatura como parámetro**.
- Dentro de esa función, evalúa el valor recibido y clasifica el clima según los rangos:
  - "Hace frío" → entre 0 y 15 °C
  - "Está templado" → entre 16 y 25 °C
  - "Hace calor" → más de 25 °C

- Muestra el resultado en la consola.

💡 **Pistas:**

- Piensa qué estructura condicional es la más adecuada.
- Revisa cómo pasar valores desde una función a otra.
- Pregúntate si alguna de las funciones podría transformarse en arrow function.

---

## 💬 Preguntas para discutir en clase

- ¿Cuáles son las ventajas de usar funciones en programación?
- ¿Cuál es la diferencia entre **declarar** e **invocar** una función?
- ¿En qué situaciones usarías una función tradicional, una anónima o una función flecha?
- ¿Cómo impacta la reutilización de código en el desarrollo de un proyecto real?

---

## 🚀 Desafío final (opcional)

- Transforma una función tradicional en una función flecha.
- Usa una función anónima dentro de otro método.
- Identifica qué funciones podrían reutilizarse en otro contexto.

👉 **Experimenta, equivócate y aprende del proceso.**
