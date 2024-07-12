//1. Crea una función nombrada que sume dos números
function addition (){
    let num1 = 3 
    let num2 = 6 
    console.log(num1 + num2)
    }
    addition()
    
    // 2. Escribe una función nombrada que reste dos números.
    function subtraction () {
    let num1 = 5
    let num2 = 4
    console.log(num1 - num2)
    
    }
    subtraction()
    
    // 3. Desarrolla una función nombrada que multiplique dos números
    function multiplication () {
    let num1 = 2
    let num2 = 4
    console.log(num1 * num2)
    
    }
    multiplication()
    // 4. Implementa una función nombrada que divida dos números
    function div () {
      let num1 = 48
      let num2 = 4
      console.log(num1 / num2)
      
      }
      div ()
      
      // 5. Diseña una función nombrada que calcule el módulo de dos números
      function mod (){
      let num1 = 44
      let num2 = 6
      console.log(num1 % num2)
    
      }
      mod ()
    // 6. Asigna una función anónima a una variable que eleve un número al cuadrado
    const square = function (x){
      return x*x;
    }
    console.log(square(2))
    
    // 7. Usa una función anónima para convertir grados Celsius a Fahrenheit
    let celsius_Fahrenheit = celsius => (celsius * 9/5) + 32;
    let temperaturaCelsius = 40
    let temperaturaFahrenheit = celsius_Fahrenheit(temperaturaCelsius)
    console.log(temperaturaFahrenheit)
    
    // 8. Crea una función anónima que calcule el perímetro de un rectángulo.
    let perimeter = formula => 2 * (height + base)
    let height = 7
    let base = 5
    let Perimeter = perimeter(height,base)
    console.log(Perimeter)
    // 9. Implementa una función anónima que determine si un número es par o impar
    let evennumber = num => num % 2 === 0
    let oddnumber = num => num % 2 !== 0
    console.log(evennumber(4))
    console.log(oddnumber(6))
    
    // 10. Escribe una función anónima que devuelva el número mayor entre dos números
    let biggernumber =  (number1, number2) => (number1 > number2) ? number1 : number2 
    let number1 = 6
    let number2 = 87
    let highnumber = biggernumber(number1,number2)
    console.log(highnumber)
    
    // 11. Desarrolla una función flecha que calcule el área de un círculo
    let circlearea = radio => Math.PI * radio**2
    let radio = 5 
    let area = circlearea(radio)
    console.log(area)
    // 12. Crea una función flecha que convierta kilómetros a millas
    let km_millas = formula => km * 0.62
    let km = 9
    let resp = km_millas(km)
    console.log(resp)
    
    // 13. Escribe una función flecha que retorne el nombre completo dado un nombre y apellido
    let person =  (name,lastname) =>{
        return name,lastname 
    }
    console.log("Faviola","Moran")
    
    // 14. Implementa una función flecha que verifique si un texto contiene la letra 'a'
    let arrow = (text) => text.includes ("a")
    let text= "hola mundo"
    let analysis = arrow(text)
    console.log(analysis)
    
    // 15. Diseña una función flecha que cuente cuántos elementos en un array son números
    const countnumbers = (arr) => arr.filter((element) => typeof element === 'number').length
    
    const miarr = [1, 'hola', 3, 'mundo', 5, 7]
    const quantitynumbers = countnumbers(miarr)
    console.log(quantitynumbers)
    
    // 16. Escribe una función de orden superior que tome una función y la aplique a todos los 
    // elementos de un array.
    function applyfunction(func, array) {
        return array.map(func)
    }
    function increase(n) {
        return n + 1
    }
    
    let number = [1, 2, 3, 4, 5]
    let numberincrease = applyfunction(increase, number)
    
    console.log(numberincrease)
    
    // 17. Crea una función de orden superior que filtre elementos de un array basándose en una 
    // condición dada
    function aplicarfiltro(func, array) {
      return array.filter(func)
    }
    function esPar(n) {
      return n % 2 === 0
    }
    let numbers = [1, 2, 3, 4, 5]
    let peers = aplicarfiltro(esPar, numbers)
    console.log(peers)
    
    // 18. Desarrolla una función de orden superior que retorne una nueva función incrementadora
    function increase() {
      return function (n) {
          return n + 1
      }
    }
    let increaseone = increase()
    console.log(increaseone(5))
    
    // 19. Implementa una función de orden superior que tome dos funciones como argumentos 
    // y elija una para ejecutar basada en una condición
    
    function aplicarFuncion(func1, func2, condicion) {
      if (condicion) {
        return func1
      } else {
        return func2
      }
    }
    
    function add(a, b) {
      return a + b
    }
    
    function muliply(a, b) {
      return a * b
    }
    
    let result = aplicarFuncion(add, muliply, true)
    console.log(result(2, 9))
    // 20. Diseña una función de orden superior que modifique un objeto utilizando otra función proporcionada
    
    function aplicarfuncion(func, obj) {
      return func(obj)
    }
    
    function modificar(obj) {
      obj.nombre = 'Angel'
      return obj
    }
    
    let persona = {
      nombre: 'Otniel',
      apellido: 'Lopez'
    }
    
    let personamodificada = aplicarfuncion(modificar, persona)
    
    console.log(personamodificada)
    // 21. Define una función constructora para un objeto "Coche" que tenga propiedades como 
    // marca, modelo y año
    
    function Car (brand, modelo, year) {
      this.brand = brand
      this.modelo = modelo
      this.year = year
    }
    
    let car = new Car('CHEVROLET', 'land Rover', 2020)
    
    console.log(Car)
    
    // 22. Crea una función constructora para un objeto "Libro" con propiedades de autor, título 
    // y año de publicación
    function book (autor,titulo,año){
      this.author = author
      this.qualification = qualification
      this.year = year
    }
    
    let book1 = new book('Fedor Dostoievski', 'Crimen ',2000)
    console.log(book1)
    
    // 23. Implementa una función constructora que cree objetos "Usuario" con nombre, correo 
    // electrónico y contraseña
    
    function User (name,mail,password){
      this.name = name
      this.mail = mail
      this.password= password
    }
    
    let user1 = new User('Faviola','Faviolab27@gmail,com','98945')
    console.log(user1)
    
    // 24. Escribe una función constructora para "Producto" con propiedades de nombre, precio y cantidad
    
    function Product (name,precio,cantidad){
      this.name = name
      this.precio = precio
      this.amount= amount
    }
    
    let product1 = new Product('Camiseta Jordan retro black', 100, 10)
    console.log(product1)
    // 25. Desarrolla una función constructora que inicialice objetos "Estudiante" con nombre, 
    // matrícula y carrera
    
    function student (name,tuition,career){
      this.name = name
      this.tuition = tuition
      this.career = career
    }
    
    let student1 = new Student('Faviola','0.3','Lic.Fisioterapia')
    
    console.log(student1)
    
    // 26. Escribe una función recursiva para calcular el factorial de un número
    
    function factorial(n) {
      if (n === 0) {
        return 1
      } else {
        return n * factorial(n - 1)
      }
    }
    
    console.log(factorial(5))
     // 27. Crea una función recursiva que sume todos los números hasta un número dado
     function add(n) {
      if (n === 0) {
        return 0
      } else {
        return n + add(n - 1)
      }
    }
    
    console.log(add(5))
    
    // 28. Implementa una función recursiva que encuentre el máximo común divisor (MCD) de dos numeros
    
    function mcd(a, b) {
      if (b === 0) {
        return a
      } else {
        return mcd(b, a % b)
      }
    }
    
    console.log(mcd(12, 18))
    
     // 29. Diseña una función recursiva que genere la secuencia de Fibonacci hasta un número especifico
     function fibonacci(n) {
      if (n <= 1) {
        return n
      } else {
        return fibonacci(n - 1) + fibonacci(n - 2)
      }
    }
    
    console.log(fibonacci(10))
    
    
    //30. Desarrolla una función recursiva que invierta una cadena de texto.
    function invest(chain){
        if(chain.length==0){
            return chain;
        }else{
            return invest(chain.substr(1))+chain.charAt(0);
        }
    }
    console.log(invest("hello"))
    //31. Demuestra el uso de una variable global modificándola dentro de una función.
    let global="global";
    function globalfunction(){
        global="global function"
    }
    console.log(global)
    //32. Escribe un código donde una variable local oculte una variable global del mismo nombre.
    let x = 10;
    function hidevariable() {
        let x = 2; 
        console.log("Variable local x =", x); 
    }
    
    hideVariable(); 
    
    console.log("Variable global x =", x); 
    //33. Explica mediante un ejemplo cómo las variables locales pueden evitar conflictos de
    //nombres.
    function ejemplo() {
        var variableLocal = "Soy local"; 
        console.log(variableLocal); 
    }
    
    ejemplo(); 
    console.log(variableLocal); // Genera un error, variableLocal no está definida
    
    //34. Implementa un contador utilizando una variable global.
    let contador = 0; 
    function incrementarContador() {
      contador++;
    }
    
    function obtenerContador() {
      return contador;
    }
    
    
    function reiniciarContador() {
      contador = 0;
    }
    console.log("Valor inicial del contador:", obtenerContador()); 
    incrementarContador();
    console.log("Valor después de incrementar:", obtenerContador()); 
    incrementarContador();
    console.log("Valor después de incrementar nuevamente:", obtenerContador()); 
    reiniciarContador();
    console.log("Valor después de reiniciar:", obtenerContador());
    //35. Crea una función que intente modificar una variable local definida en otra función.
    function funcionModificar(objeto) {
        objeto.valor = "Modificado";
      }
      
      function funcionPrincipal() {
       let variableLocal = { valor: "Original" };
        console.log("Antes de modificar:", variableLocal);
        funcionModificar(variableLocal);
        console.log("Después de modificar:", variableLocal);
      }
      
      funcionPrincipal();
      //36. Escribe una función que determine si un año es bisiesto.
      function esBisiesto(año) {
        return año % 4 == 0 && (año % 100!= 0  || año % 400 == 0);
      }
       console.log(esBisiesto(2024));
        // 37. Implementa una función que evalúe tres números y retorne el mayor.
      function elderly(a, b, c) {
        if (a > b && a > c) {
          return a
        } else if (b > a && b > c) {
          return b
        } else {
          return c
        }
      }
      console.log(elderly(12, 23, 34))
      console.log(elderly(12, 31, 21))
    
     // 38. Diseña una función que decida si un estudiante aprueba o reprueba basado en su nota.
     function approve(nota) {
      if (nota >= 60) {
        return "aprobado"
      } else {
        return "reprobado"
      }
    }
    console.log(approve(50))
    console.log(approve(79))
     // 39. Crea una función que clasifique una edad en categorías (niño, adolescente, adulto, anciano)
     function classifyage(age) {
      if (age < 13) {
        return "niño"
      } else if (age < 18) {
        return "adolescente"
      } else if (age < 65) {
        return "adulto"
      } else {
        return "Tercera edad anciano"
      }
    }
    console.log(classifyage(12))
    console.log(classifyage(17))
    console.log(classifyage(64))
    console.log(classifyage(65))
    
    // 40. Desarrolla una función que verifique si un usuario tiene acceso basado en su edad.
    function access(age) {
      if (age >= 18) {
        return "tiene acceso"
      } else {
        return "no puede acceder"
      }
    }
    console.log(access(18))
    console.log(access(17))
    // 41. Escribe un bucle while que cuente de 1 a 100
    let i = 1
    while (i <= 100) {
      console.log(i)
      i++
    }
    
    // 42. Implementa un bucle while que sume los primeros 50 números naturales
    let t = 1
    let addition = 0
    while (t <= 50) {
      addition += t
      t++
    }
    console.log(addition)
    
    // 43. Crea un bucle while que repita un saludo hasta que el usuario decida parar
    prompt = "¿Deseas recibir otro saludo? (sí/no)"
    
    let continuar = true
    
    while (continuar) {
      console.log("¡Hello!")
    
      let respuesta = prompt 
      if (respuesta.toLowerCase() !== "yes") {
          continuar = false
      }
    }
    
    // 44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango
    let h = 1
    while (h % 7!== 0) {
        h++
    }
    console.log(h)
    
    // 45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.
    while (true) {
      const userInput = prompt("Por favor, ingresa un valor:"); // Solicita al usuario que ingrese un valor
      if (userInput !== null && userInput.trim() !== "") {
          // Verifica si el usuario ingresó algo (no vacío)
          console.log("Entrada válida:", userInput);
          break; // Sale del bucle si la entrada es válida
      } else {
          console.log("Entrada inválida. Inténtalo de nuevo.");
      }
    }
    
      
    // 44. Desarrolla un bucle while que encuentre el primer número divisible por 7 en un rango
    
    let numb = 1; 
    while (true) {
        if (numb % 7 === 0) {
            console.log(`El primer número divisible por 7 es: ${numb}`);
            break; // Salimos del bucle cuando encontramos el número
        }
        numb++; // Incrementamos el número para verificar el siguiente
    }
    
    // 45. Diseña un bucle while que verifique la entrada del usuario hasta que sea válida.
      prompt = "Ingresa un número entre 1 y 10"
    
      var nume = prompt
      while (nume < 1 || nume > 10) {
        numero = prompt
      }
      console.log(nume)
      console.log(4)
      console.log("¡Gracias!")
    
     // 46. Escribe una función que use switch para asignar calificaciones (A, B, C, D, F) basado en puntos
     function calificacion(puntos) {
      switch (true) {
        case puntos >= 90:
          return "A"
        case puntos >= 80:
          return "B"
        case puntos >= 70:
          return "C"
        case puntos >= 60:
          return "D"
        default:
          return "F"
      }
    }
    console.log(calificacion(90))
    console.log(calificacion(89))
    console.log(calificacion(79))
    console.log(calificacion(69))
    console.log(calificacion(59))
    
     // 47. Implementa una función que use switch para responder a diferentes comandos de un chatbot
     function chatbot(comando) {
      switch (comando) {
        case "  Que tal":
          return "Bien ,Gracias"
        case "Nos vemos ":
          return "Adios"
        case "como estas":
          return "Muy bien"
        default:
          return "No entiendo"
      }
    }
    console.log(chatbot("hola"))
    console.log(chatbot("adios"))
    console.log(chatbot("como estas"))
    console.log(chatbot("como te llamas?"))
    
      // 48. Crea un switch para manejar diferentes tipos de métodos de pago (efectivo, tarjeta, cheque)
      function metodoPago(metodo) {
        switch (metodo) {
          case "efectivo":
            return "Pago en efectivo"
          case "tarjeta":
            return "Pago con tarjeta"
          case "cheque":
            return "Pago con cheque"
          default:
            return "ERROR"
        }
      }
      console.log(metodoPago("efectivo"))
      console.log(metodoPago("tarjeta"))
      console.log(metodoPago("cheque"))
      console.log(metodoPago("paypal"))
    
     // 49. Desarrolla una función que utilice switch para realizar cálculos básicos (+, -, *, /)
     function calcular(a, b, operacion) {
      switch (operacion) {
        case "+":
          return a + b
        case "-":
          return a - b
        case "*":
          return a * b
        case "/":
          return a / b
        default:
          return "ERROR"
      }
    }
    console.log(calcular(2, 3, "+"))
    console.log(calcular(2, 3, "-"))
    console.log(calcular(2, 3, "*"))
    console.log(calcular(2, 3, "/"))
    console.log(calcular(2, 3, "x"))
    console.log(calcular(2, 3, "%"))
    
     // 50. Diseña un switch para cambiar entre diferentes idiomas de un sitio web
     function cambiarIdioma(idioma) {
      switch (idioma) {
        case "es":
          return "Español"
        case "en":
          return "Inglés"
        case "fr":
          return "Francés"
        default:
          return "ERROR"
      }
    }
    console.log(cambiarIdioma("es"))
    console.log(cambiarIdioma("en"))
    console.log(cambiarIdioma("fr"))
    console.log(cambiarIdioma("it"))
     
     // 51. Implementa un bucle for que imprima todos los elementos de un array
     let array = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
     for (let i = 0; i < array.length; i++) {
       console.log(array[i])
     }
    
     // 52. Escribe un bucle for que multiplique todos los elementos de un array 
     let arr = [1, 2, 3, 4, 5, 6, 7, 8, 9,10]
     for (let i = 0; i < array.length; i++) {
       array[i] = array[i] * 5
     }
     console.log(array)
    
     // 53. Crea un bucle for para encontrar el menor número en un array
     let arraiii = [ 7, 2, 9, 10]
     let menor = arraiii[0]
     for (let i = 0; i < arraiii.length; i++) {
       if (arraiii[i] < menor) {
         menor = arraiii[i]
       }
     }
     console.log(menor)
    
    // 54. Desarrolla un bucle for para verificar si un array contiene un elemento específico
    let arry = [1, 2, 3, 6, 5]
    for (let i = 0; i < arry.length; i++) {
      if (arry[i] === 5) {
        console.log("El array contiene el número 5")
      }
    }
    // 55. Diseña un bucle for que copie un array en otro
    let arre= [1, 2, 3, 4, 5, 6, 7, 8, 9, 10]
    let arr2 = []
    for (let i = 0; i < arr.length; i++) {
      arr2[i] = arr[i]
    }
    console.log(arre)
    console.log(arr2)
    
    // 56. Utiliza un bucle do-while para pedir al usuario que ingrese un número hasta que sea mayor que 10
    prompt = "Ingresa un número mayor que 10"
    var numeroo = prompt
    do {
      numero = prompt
    } while (numero <= 10)
      console.log(numeroo)
      console.log("¡Thank You!")
    
    // 57. Implementa un for-in para mostrar todas las propiedades de un objeto
    let obj = {
      nombre: "Eduardo",
      apellido: "Romero",
      edad: 25,
      profesion: "Doctor"
    }
    for (let propiedad in obj) {
      console.log(obj[propiedad])
    }
    
    // 58. Usa un for-of para iterar sobre un array de nombres y saludar a cada uno.
    let nomb = ["Eduardo", "Fernando", "Faviola", "Ariana"]
    for (let nombre of nomb) {
      console.log("Hello  " + nombre)
    }
    
    // 59. Crea un forEach para aplicar un descuento del 10% a precios en un array
    let prices = [100, 200, 300, 400]
    prices.forEach(price => {
      console.log(price * 0.9)
    })
    
    
    // 60. Escribe un código que use map para convertir todas las temperaturas de un array de 
    // Celsius a Fahrenheit
     let celsius = [0, 40, 70, 80, 90]
    let fahrenheit = celsius.map(celsius => celsius * 1.8 + 32)
    console.log(celsius)
    console.log(fahrenheit)
    
    
        
    
        
        
        
       
       
    
    
    
    
      