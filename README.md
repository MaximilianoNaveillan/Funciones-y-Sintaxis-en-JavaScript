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

## ✨ Buenas prácticas a observar

- Usar funciones para evitar repetir código.
- Elegir el tipo de función según el contexto.
- Mantener funciones pequeñas y con una sola responsabilidad.
- Priorizar la legibilidad del código por sobre la complejidad.

---

## 💬 Preguntas para discutir en clase

- ¿Cuáles son las ventajas de usar funciones en programación?
- ¿Cuál es la diferencia entre **declarar** e **invocar** una función?
- ¿En qué situaciones usarías una función tradicional, una anónima o una función flecha?
- ¿Cómo impacta la reutilización de código en el desarrollo de un proyecto real?

---

## 🚀 Desafío final (opcional)

Intenta:

- Transformar una función tradicional en una función flecha.
- Usar una función anónima dentro de un método.
- Detectar cuándo una función podría reutilizarse en otro contexto.

No busques la solución perfecta.  
👉 **Experimenta, equivócate y aprende del proceso.**
