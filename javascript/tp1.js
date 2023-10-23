//1.- Escribe un programa de una sola línea que haga que aparezca en la pantalla un alert que diga “un mensaje”.
alert('Hola mundillo')

// Escribe un programa de una sola línea que escriba en la pantalla un texto que diga «Hello World» (document.write).
document.write('Hello world')

//3.- Escribe un programa de una sola línea que escriba en la pantalla el resultado de sumar 3 + 5.
document.write(3 + 5) 

//4.- Escribe un programa de dos líneas que pida el nombre del usuario con un prompt y escriba un texto que diga «Hola nombreUsuario»
let nombreUsuario = prompt('Ingresa un nombre: ')
document.write(`Hola! ${nombreUsuario}`)

//5.- Escribe un programa de tres líneas que pida un número, pida otro número y escriba el resultado de sumar estos dos números
(function (){
    let number1 = parseInt(prompt('Ingrese un numero: '))
    let number2 = parseInt(prompt('Ingrese otro numero: '))

    document.write(number1 + number2)
})()

//Escribe un programa que pida dos números y escriba en la pantalla cual es el mayor.
(function(){
    let number1 = parseInt(prompt('Ingrese un numero: '))
    let number2 = parseInt(prompt('Ingrese otro numero: '))

    if(number1 > number2){
        document.write(`${number1} es mayor!`)
    }else{
        document.write(`${number2} es mayor!`)
    }
})()

//7.- Escribe un programa que pida 3 números y escriba en la pantalla el mayor de los tres.
(function(){
    let number1 = parseInt(prompt('Ingrese un numero: '))
    let number2 = parseInt(prompt('Ingrese otro numero: '))
    let number3 = parseInt(prompt('Ingrese un 3er numero: '))


    if(number1 > number2 && number1 > number3){
        document.write(`${number1} es mayor!`)
    }else if(number2 > number1 && number2 > number3){
        document.write(`${number2} es mayor!`)
    }else{
        document.write(`${number3} es mayor!`)
    }

})

//8.- Escribe un programa que pida un número y diga si es divisible por 2
(function(){
    let number1 = parseInt(prompt('Ingrese un numero: '))

    if(number1 % 2 === 0){
        document.write('Es divisible por 2')
    }else{
        document.write('No es divisible')
    }

})()

//9.- Escribe un programa que pida una frase y escriba las vocales que aparecen
(function(){
    let frase = prompt('Ingresa una frase wach@: ')
    let salida;
    for(i = 0; i < frase.length; i++){
        switch (frase[i]) {
            case 'a':
                console.log('a')
                salida += 'a'
                break;
            case 'e':
                console.log('e')
                salida += 'e'
                break;
            case 'i':
                console.log('i')
                salida += 'i'
                break;
            case 'o':
                console.log('o')
                salida += 'o'
                break;
            case 'u':
                console.log('u')
                salida += 'u'
                break;
            default:
                break;
        }
    }

    document.write(salida)
})()


//10.- Escribe un programa que pida un número y nos diga si es divisible por 2, 3, 5 o 7 (sólo hay que comprobar si lo es por uno de los cuatro)
//11.- Añadir al ejercicio anterior que nos diga por cuál de los cuatro es divisible (hay que decir todos por los que es divisible)

(function(){
    let number1 = parseInt(prompt('Ingrese un numero: '))

    let arrayDivisible = [2,3,5,7]
    let esDivisiblePor = [];

    arrayDivisible.forEach(e => {
        if(number1 % e === 0){
            esDivisiblePor.push(e)
        }
    })

    document.write(`El numero es divisible por: ${
        esDivisiblePor.forEach(e => e) 
    }`)

})()