//const Leer = require('prompt-sync')()
class Ejercicio1{
// 1-10
expresiones() {
    let a = 0, b = 0, y, z, w, v, u, x, c, d, e, f, resp;
    
    a = parseInt(document.getElementById("a").value);
    b = parseInt(document.getElementById("b").value);

    y = 2 * a + b - a % 3;
    z = a * b + 3 % a + b;
    w = a - b + 2 * (a % b);
    v = 2 * b + a / 2 + 4 * (b % a);
    u = b - a + 3 * (a % b);
    x = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3;
    c = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2);
    d = 260 / 12 + 54 % 3 - 85 % 7;
    e = (48 < 2 * 3) || (2 * 7 < 12);
    f = ((8 > 2) || (932 < 23)) && (4 == 2);

    resp = document.getElementById("resp");
    resp.innerHTML = `1) ${y} = 2 * ${a} + ${b} - ${a} % 3<br>`;
    resp.innerHTML += `2) ${z} = ${a} * ${b} + 3 % ${a} + ${b}<br>`;
    resp.innerHTML += `3) ${w} = ${a} - ${b} + 2 * (${a} % ${b})<br>`;
    resp.innerHTML += `4) ${v} = 2 * ${b} + ${a} / 2 + 4 * (${b} % ${a})<br>`;
    resp.innerHTML += `5) ${u} = ${b} - ${a} + 3 * (${a} % ${b})<br>`;
    resp.innerHTML += `6) ${x} = (5 + 3 * 2) + 9 > 3 * 5 * 14 % 3<br>`;
    resp.innerHTML += `7) ${c} = 2 * (4 - 10 + 8) / 2 * 36 * (1 / 2)<br>`;
    resp.innerHTML += `8) ${d} = 260 / 12 + 54 % 3 - 85 % 7<br>`;
    resp.innerHTML += `9) ${e} = ((48 < 2 * 3) || (2 * 7 < 12))<br>`;
    resp.innerHTML += `10) ${f} = (((8 > 2) || (932 < 23)) && 4 == 2)<br>`;


    }
// 11
sumdos(){
       let numero1, numero2, suma, resp
       

        numero1= parseInt(document.getElementById("numero1").value);
        
        numero2 = parseInt(document.getElementById("numero2").value);
        suma = numero1 + numero2

        // console.log("la suma es: " + suma);
        resp=document.getElementById("resp").innerHTML = `el resultado de la suma: ${suma}`
    }    
// 12
areatri(){
      let base, altura, area

        base=0, altura=0, area=0,resp
        
        base= parseInt(document.getElementById("base").value)
        altura= parseInt(document.getElementById("altura").value)
        area= (base * altura)/2 

        console.log("la area es: ", area);
        resp=document.getElementById("resp").innerHTML = `el resultado de la area: ${area}`

    }
// 13
Numparoimpar(){
        let numero, resp
       

        numero = parseInt(document.getElementById("numero").value);
        if (isNaN(numero)) {
            resp=document.getElementById("resp").innerHTML =`Por favor, ingrese un número válido.`
        } else {
            if (numero % 2 == 0) {
               
                resp=document.getElementById("resp").innerHTML =`El número   ${numero}   es Par.`
            } else {
                resp=document.getElementById("resp").innerHTML =`El número   ${numero}   es Impar.`
            }
        }
       
    }
// 4
calculaculadorasimple(){
        
            let a , resp
            let num1 = parseInt(document.getElementById("num1").value)
          let num2 = parseInt(document.getElementById("num2").value)
            let oper = (document.getElementById("oper").value)
          
            if (oper === '+') {
              a= num1 + num2;
            } else if (oper === '-') {
             a= num1 - num2;
            } else if (oper === '*') {
              a= num1 * num2;
            } else if (oper === '/') {
               a=num1 / num2;
            } else {
                resp=document.getElementById("resp").innerHTML ='Operador no válido'
            //  a= 'Operador no válido';
            }
            //console.log(es ${num1}${oper}${num2}=${a});
            resp=document.getElementById("resp").innerHTML =`${num1} ${oper} ${num2} = ${a}`
    }
// 5 
tablaMult(){
        let t = 0, x = 0, i = 0;
        t = parseInt(document.getElementById("t").value);
    
        
        let tablaMultiplicar = "";
    
        while (x <= 12) {
            i = t * x;
          
            tablaMultiplicar += `<br>${t} x ${x} = ${i}`;
            x = x + 1;
        }
    

        document.getElementById("resp").innerHTML = tablaMultiplicar;
    }
    
// 6

copiarpalabra(){
    let palabra1="", palabra2="", palabranueva="",resp
    palabra1= (document.getElementById("palabra1").value);
    // palabra1 = prompt("palabra1");
    // palabra2 = prompt("palabra2");
    palabra2= (document.getElementById("palabra2").value);
    
    palabranueva = palabra1 + " " + palabra2;
    
    console.log("palabra nueva: ", palabranueva);
       resp= document.getElementById("resp").innerHTML = `palabra nueva: ${palabranueva}`
    }
//7 
mayordetresnumeros(){
        let num1, num2, num3, resp

    //   num1=0, num2=0, num3=0, mayor=0

    num1 = parseInt(prompt("num1"));
    num2 = parseInt(prompt("num2"));
    num3 = parseInt(prompt("num3"));
    num1 = parseInt(document.getElementById("num1").value)
    num2 = parseInt(document.getElementById("num2").value)
    num3 = parseInt(document.getElementById("num3").value)

   let max=num1;
    
    if (num2 > max){
        max= num2;}
    
    if (num3 > max){
        max = num3;}
        resp=document.getElementById("resp").innerHTML =`El mayor es: ${max}`
    
}
// 8
edadminimaparavotar(){
        let edad, res,resp
        edad=0, res=0
        edad = parseInt(document.getElementById("edad").value)
        if (edad >= 18){
            res = `Mayor de edad`
            console.log("mayor de edad")
            
        }else{
          res =`Menor de edad`
          console.log("menor de edad")
         
        }
        resp=document.getElementById("resp").innerHTML= ` ${res}`
    }
// 9
CalculadoradeBMI(){
    let peso = parseFloat(document.getElementById("pe").value);
    let estatura = parseFloat(document.getElementById("est").value);
    let imc = peso / (estatura * estatura);
    let resultado;
    if (imc < 18.5) {
        resultado = "Su peso es inferior a lo normal";
    } else if (imc <= 24.9) {
        resultado = "Su peso es normal";
    } else if (imc <= 30) {
        resultado = "Su peso es superior a lo normal";
    } else {
        resultado = "Tiene Obesidad";
    }

    imc = Math.round(imc * 100) / 100;
    document.getElementById("resp").innerHTML = `Su índice de masa corporal (IMC) es ${imc}. ${resultado}`;
}
   
// 10
Numerospositivosnegativoocero(){
     let num,resp,r 
     num=0
    
     num = parseInt(document.getElementById("num").value)
    if (num>0) {
         r= ` Es positivo `}
    
    else if (num<0) {
           r= `Es Negativo `}
    else{
           r= ` Es Cero `
      }
      resp=document.getElementById("resp").innerHTML= `${r}`
   } 
// 11
Añobisiesto(){
    let a,resp,r
    a=0
    a = parseInt(document.getElementById("a").value)
    if ((a % 4 === 0) && (a % 100!= 0) || (a % 400 === 0)){
     
      r=`Es Bisiesto`
     
    }else{
        r=`No Es Bisiesto`
     }
     resp=document.getElementById("resp").innerHTML= `El año: ${a} ${r}`
   }
// 12
signoZodiacal() {
    let mes = document.getElementById("mes").value.toLowerCase(); // Convertir a minúsculas
    let dia = parseInt(document.getElementById("dia").value);
    let r;
  
    if ((mes === "enero" && dia >= 20 && dia <= 31) || (mes === "febrero" && dia <= 18)) {
      r = "Acuario";
    } else if ((mes === "febrero" && dia >= 19 && dia <= 28) || (mes === "marzo" && dia <= 20)) {
      r = "Piscis";
    } else if ((mes === "marzo" && dia >= 21 && dia <= 31) || (mes === "abril" && dia <= 19)) {
      r = "Aries";
    } else if ((mes === "abril" && dia >= 20 && dia <= 30) || (mes === "mayo" && dia <= 20)) {
      r = "Tauro";
    } else if ((mes === "mayo" && dia >= 21 && dia <= 31) || (mes === "junio" && dia <= 20)) {
      r = "Géminis";
    } else if ((mes === "junio" && dia >= 21 && dia <= 30) || (mes === "julio" && dia <= 22)) {
      r = "Cáncer";
    } else if ((mes === "julio" && dia >= 23 && dia <= 31) || (mes === "agosto" && dia <= 22)) {
      r = "Leo";
    } else if ((mes === "agosto" && dia >= 23 && dia <= 31) || (mes === "septiembre" && dia <= 22)) {
      r = "Virgo";
    } else if ((mes === "septiembre" && dia >= 23 && dia <= 30) || (mes === "octubre" && dia <= 22)) {
      r = "Libra";
    } else if ((mes === "octubre" && dia >= 23 && dia <= 31) || (mes === "noviembre" && dia <= 21)) {
      r = "Escorpio";
    } else if ((mes === "noviembre" && dia >= 22 && dia <= 30) || (mes === "diciembre" && dia <= 21)) {
      r = "Sagitario";
    } else if ((mes === "diciembre" && dia >= 22 && dia <= 31) || (mes === "enero" && dia <= 19)) {
      r = "Capricornio";
    } else {
      r = "Fecha no válida";
    }
  
    let resp = document.getElementById("resp").innerHTML = `Su signo zodiacal es: ${r}`;
  }
// 13
Quincena(){
  let dia,n,resp
  
  dia = parseInt(document.getElementById("dia").value)
 
  if (dia <= 15) {
      n= `Primera Quincena`}
   else if((dia >= 16) && (dia <=31 )) {
        n=`Segunda Quincena`}
      else {
        n=`No existe`}
        resp=document.getElementById("resp").innerHTML= `El mes es la: ${n}`
      }
// 14
diadelasemana(){
  let dia,n,resp
 
  // Preguntar al usuario por un número del 1 al 7
  dia = parseInt(document.getElementById("dia").value);

  // Utilizar una estructura switch para mostrar el nombre del día de la semana correspondiente al número ingresado
  switch (dia) {
    case 1:
        n=`El día es el domingo`
        break;
    case 2:
        n=`El día es el lunes`
        break;
    case 3:

        n=`El día es el martes`
        break;
    case 4:
    
        n=`El día es el miércoles`
        break;
    case 5:

        n=`El día es el jueves`
        break;
    case 6:

        n=`El día es el viernes`
        break;
    case 7:
        n=`El día es el sábado`
        break;
    default:

        n=`El número ingresado no corresponde a un día de la semana válido`
}
//imprimir el dia de la semana
resp=document.getElementById("resp").innerHTML= `${n}`
}
// 15
frasesiguales() {
    let fr1, fr2 
      fr1 = document.getElementById("fr1").value
      fr1 = fr1.toLowerCase()
      fr2 = document.getElementById("fr2").value
      fr2 =fr2.toLowerCase()
     
      if (fr1 == fr2) {
         console.log(fr1,"son iguales", fr2 );
         document.getElementById("resp").innerHTML=`"${fr1}" es igual a "${fr2}"`
     }
     else {
         document.getElementById("resp").innerHTML=`"${fr1}" no es igual a  "${fr2}"`
     }
     resp = document.getElementById("resp")
    }
// 16
calculadoradescuento() {
         let prec, pdesc, desc ,res1 ,res2
         prec= 0,0 ; pdesc= 0,0 ;desc= 0 
         prec = parseInt(document.getElementById("prec").value)
         pdesc = parseInt(document.getElementById("pdesc").value)
         res1 = pdesc / 100 
	     res2 = res1 * prec
	     desc = prec - res2 
         console.log("el precio a pagar es de: ",desc );
         document.getElementById("resp").innerHTML=`el valor a pagar sera de: ${desc}`
        }
// 17
calculadoraimpuesto(){
            let prec, pimp, imp ,res1 ,res2
             prec= 0,0 ; pimp= 0,0 ;imp= 0 
             prec = parseInt(document.getElementById("prec").value)
             pimp = parseInt(document.getElementById("pimp").value)
             res1 = pimp / 100 
             res2 = res1 * prec
             imp = prec + res2 
             console.log("el precio a pagar es de: ",imp );
             document.getElementById("resp").innerHTML=`el valor a pagar sera de:${imp}`
 }
//  18
 aumentosueldo(){

    let sueldo, paum, aum ,res1 ,res2
    sueldo= 0,0 ; paum= 0,0 ;aum= 0,0
    sueldo = parseInt(document.getElementById("sueldo").value)
    paum = parseInt(document.getElementById("paum").value)
    res1 = paum / 100 
    res2 = res1 * sueldo
    aum = sueldo + res2 
    console.log("su sueldo con aumento sera de: ",aum );
    document.getElementById("resp").innerHTML=`su sueldo con aumento sera de:${aum}`
}

comprasMultiples(){
	let precio = parseFloat(document.getElementById("pre").value);
    let cantidad = parseInt(document.getElementById("can").value);
   
	
    let total = precio * cantidad;
    let descuento = total > 100 ? total * 0.10 : 0;
    let totalPagar = total - descuento;

    total = Math.round(total * 100) / 100;
    descuento = Math.round(descuento * 100) / 100;
    totalPagar = Math.round(totalPagar * 100) / 100;

    document.getElementById("resp").innerHTML = `El total a pagar es de $${total}, con un descuento de $${descuento}. Total a pagar con descuento: $${totalPagar}`;

}


impuesto_salario() {
    let sal , imp,to
    sal=0.0 ; imp=0.0
    sal = parseInt(document.getElementById("sal").value)
    if (sal <= 10000){
    imp = (sal * 0.05)
    
    }
    else if ((sal>= 10001) && (sal<20000)){
        imp = (sal*0.10)
       
    }
    else if(sal > 20000){
        imp = (sal*0.15)
    }
    to=(sal+imp)
    document.getElementById("resp").innerHTML=`su salario es de: ${sal}`
    document.getElementById("resp").innerHTML+=`<br>su impuesto  es de: ${imp}`
    document.getElementById("resp").innerHTML+=`<br>su impuesto a pagar es de: ${to}`
 }
//  20
descuento_antiguedad(){
    let sal , años , bono , resp 
    sal=0,0 ; años=0 ; bono=0.0 ; resp=0
    sal=parseInt(document.getElementById("sal").value)
    años=parseInt(document.getElementById("años").value)
    if (años>5){
    bono=(sal * 0.5) 
    document.getElementById("resp").innerHTML=`aprobado para el bono, su bono es de: ${bono}`
    }
    else {
    document.getElementById("resp").innerHTML=`NO aprueba para el bono`
 }
}
// 21
envios_tarifas(){
    let dist , costo
    dist= 0.0 ; costo=0
    dist = parseInt(document.getElementById("dist").value)
   
    if (dist < 50 ){
        costo = 10;
        console.log("valor a pagar",costo);
        document.getElementById("resp").innerHTML=`valor a pagar es de: ${costo}$`   
    } 
    else if(dist >= 50){
        costo = 20; 
        document.getElementById("resp").innerHTML=`valor a pagar es de: ${costo}$`
      }
}
// 22
descuento_lealtad(){
    let prec , desc,o
    prec= 0.0 ; desc=0
    prec= parseInt(document.getElementById("prec").value)
    
    if (prec > 500 ){
     desc= (prec*0.10)
     document.getElementById("resp").innerHTML=`su descuento sera de: ${desc}`
     
    }else {
        document.getElementById("resp").innerHTML=`no aplica para el descuento`
    }
   o=prec-desc
    document.getElementById("resp").innerHTML+=`<br>el valor a pagar es: ${o}`
  }
// 23
  descuento_volumen(){
    let vol=0 , prod=0.0 , desc=0.0 , precio=0.0,o
    prod = parseInt(document.getElementById("prod").value)
    vol =  parseInt(document.getElementById("vol").value)
    precio = prod*vol 
    if (prod >= 10 && prod <= 50){
        desc =(precio-(precio * 0.05))
        document.getElementById("resp").innerHTML=`su precio es de: ${precio} su descuento de 5% sera de: ${desc}` 
    }else if (prod >= 51 && prod < 100){
        desc = (precio-(precio * 0.10))
        document.getElementById("resp").innerHTML=`su precio es de: ${precio} su descuento de 10% sera de: ${desc}`
    }else if (prod >= 100){
        desc = (precio-(precio * 0.15))
        document.getElementById("resp").innerHTML=`su precio es de: ${precio} su descuento de 15% sera de: ${desc} `
    }else {
        document.getElementById("resp").innerHTML=`su precio es de: ${precio}`
    }
}
   
     


calculadoraservicio() {
        let hora,precio,resp,descuento
        hora=parseFloat(document.getElementById("hora").value)
        precio=parseFloat(document.getElementById("precio").value)
        descuento=hora*precio
        if (hora>10) {
            descuento=descuento-(descuento*0.2)
        }
        else {
            descuento=descuento
             }   
      resp=document.getElementById("resp").innerHTML=`El costo es de:${descuento}`    
    }
sumpares() {
        let resp, pro = 0, acu = 0, pos, lon, n1;
    
        for (pos = 2; pos <= 50; pos=pos+2) {
            
                pro=pro+pos
                
            
        }
    
        resp = document.getElementById("resp").innerHTML = `La suma de numeros pares es: ${pro}`;
    }
tablla() {
        let t = 0, x = 0, i = 0;
        t = parseInt(document.getElementById("t").value);
    
        
        let tablaMultiplicar = "";
    
        for(x=0;x<=12;x++){
            i = t * x;
          
            tablaMultiplicar += `<br>${t} x ${x} = ${i}`;
          
        }
    

        document.getElementById("resp").innerHTML = tablaMultiplicar;
    }

vocales() {
    let pos = 0, cv = 0, frase, resp
    frase = document.getElementById("frase").value
    frase = frase.toLowerCase()
    while (pos < frase.length) {
        if (frase[pos] == 'a' || frase[pos] == 'e' || frase[pos] == 'i' || frase[pos] == 'o' || frase[pos] == 'u') {
            cv = cv + 1 // cv++
        }
        pos++
    }
    resp = document.getElementById("resp")
    resp.innerHTML = `cantidad vocales: ${cv}`
}
contarDigitos() {
    let resp, contador = 0;

    let frase = document.getElementById("frase").value;

    for (let i = 0; i < frase.length; i++) {
        // Verificar si el carácter actual es un dígito
        if (!isNaN(parseInt(frase[i]))) {
            contador++;
        }
    }

    resp = document.getElementById("resp").innerHTML = `La frase "${frase}" tiene ${contador} dígitos.`;
}

aletnum() {
    let na = Math.floor(Math.random() * 20);  // Corregido: "Math" con mayúscula
    let num = parseInt(document.getElementById("num").value);

    if (!isNaN(num)) {  // Verificar si la entrada es un número
        if (na === num) {
            document.getElementById("resp").innerHTML = `¡Guau, eres genial! El número es correcto: ${na}`;
            console.log(`¡Guau, eres genial! El número es correcto: ${na}`);
        } else {
            document.getElementById("resp").innerHTML = `Sigue Intentando`;
            console.log(`Sigue Intentando`);
        }
    } else {
        alert("Por favor, ingrese un número válido.");
    }
}

contadorAlfabeto() {
    let contador = 0;

    let frase = document.getElementById("frase").value.toLowerCase();

    for (let i = 0; i < frase.length; i++) {
        // Verificar si el carácter actual es una letra del alfabeto
        if ((frase[i] >= 'a' && frase[i] <= 'z') || (frase[i] >= 'A' && frase[i] <= 'Z')) {
            contador++;
        }
    }

    document.getElementById("resp").innerHTML = `La frase "${frase}" tiene ${contador} letras del alfabeto.`;
}

sumimpar() {
    let x=1 , imp=0

    while ( x <= 100){ 
		if (x % 2 == 1){ 
			imp = imp + x
        }
		x = x + 1
        }
        document.getElementById("resp").innerHTML = `La suma de numeros Impares es: ${imp}`;
    }

contarcaracteres(){
    var palabra = document.getElementById("palabra").value

        // Obtener la longitud de la palabra
        var longitud = palabra.length;

        // Mostrar la cantidad de caracteres en la palabra
        document.getElementById("resp").innerHTML = `La palabra "${palabra}" tiene ${longitud} caracteres.`;
 }   


 sumarNumeros() {
    let suma = 0;n=0

    // Obtener el valor ingresado por el usuario
    let numero = parseInt(document.getElementById('numeroInput').value);
    
    // Verificar si el número es positivo
    if (!isNaN(numero) && numero >= 0) {
        // Sumar el número al total
        suma += numero;
    n=suma
        // Actualizar el resultado en la interfaz
        document.getElementById('resp').innerHTML = `${n}`;
    } else {
        // Mostrar mensaje de fin del programa
        alert('Ingresaste un número negativo. La suma ha terminado.');
    }
}


cuentaregresiva(){
    let num=0
	
     num = parseInt(document.getElementById("num").value);
	
	while (num>=1) {	
		document.getElementById("resp").innerHTML += `<br>${num}`;

		num=num-1	}	
	
}

sumaarreglo(){
   
        let resp, pro = 0, pos, lon, n1;
        n1 = document.getElementById("n1").value;
        n1 = n1.split(",");
        lon = n1.length;
    
        for (pos = 0; pos < lon; pos++) {
            let num = parseInt(n1[pos]);
            
                pro=pro+num
            
        }
    
        resp = document.getElementById("resp").innerHTML = `la suma es: ${pro}`;
    
}

promedioNotas() {
    let resp, pro, acu = 0, pos, lon,notas 
    //numeros = [10,20,40,50]
    notas = document.getElementById("notas").value
    notas = notas.split(";")
    lon = notas.length
    for (pos = 0; pos < lon; pos++) {
        acu = acu + parseFloat(notas[pos])
    }
    pro = acu / lon
    pro = Math.round(pro * 100) / 100;
    resp = document.getElementById("resp").innerHTML = `Promedio de Notas:[${notas}] = ${pro}`
}


 mayorMenosArr() {
    let n1 = document.getElementById("n1").value;
    let numeros = n1.split(",")  // Convertir los números a un array de enteros
    let longitud = numeros.length;

   
        let max = numeros[0];
        let min = numeros[0];

        for (let pos = 1; pos < longitud; pos++) {
            let num = numeros[pos];

            if (num > max) {
                max = num;
            }

            if (num < min) {
                min = num;
            }
        }

        document.getElementById("resp").innerHTML = `El mayor es: ${max}. El menor es: ${min}`;
    
}

buscar(){ //54
let na = [];
let resp


let numeroUsuario =parseInt(document.getElementById("n1").value)

for (let i = 0; i < 5; i++) {
  var numero = Math.floor(Math.random() * 20);
  na.push(numero);
}


let encontrado = false;
for (let i = 0; i < na.length; i++) {
  if (parseInt(numeroUsuario) == na[i]) {
    encontrado = true;
    break;
  }
}


if (encontrado) {
  console.log("El número está presente en el arreglo.");
  resp = document.getElementById("resp").innerHTML = `El número está presente en el arreglo`
} else {
  console.log("El número NO está presente en el arreglo.");
  resp = document.getElementById("resp").innerHTML = `El número NO está presente en el arreglo
  `
}
console.log("Arreglo generado:", na);
resp = document.getElementById("resp").innerHTML += `<br>arreglo generado :[${na}]`

}

pares() {
    let resp, pro = 0, acu = 0, pos, lon, n1;
    n1 = document.getElementById("n1").value;
    n1 = n1.split(",");
    lon = n1.length;

    for (pos = 0; pos < lon; pos++) {
        let num = parseInt(n1[pos]);
        if (!isNaN(num) && num % 2 === 0) {
            acu += num;
            pro++;
        }
    }

    resp = document.getElementById("resp").innerHTML = `Los Numeros pares son: ${pro}`;
}

invertir(){
   
     let resp,n1 =(document.getElementById("n1").value)
     n1=n1.split(",")
 

 n1.reverse();
 
 console.log("Arreglo invertido:",n1);
 resp = document.getElementById("resp").innerHTML = `Invertidos; ${n1}`
 }

buscarIndice() {
    let arregloInput = document.getElementById("arregloInput").value.split(",");
    let valorBuscado = document.getElementById("valorInput").value.trim();
    let indices = [];

    for (let i = 0; i < arregloInput.length; i++) {
        if (arregloInput[i] === valorBuscado) {
            indices.push(i);
        }
    }

    let resultadoElement = document.getElementById("resultado");
    if (indices.length === 0) {
        resp=document.getElementById("resp").innerHTML= `El valor ${valorBuscado} no se encuentra en el arreglo.`;
    } else {
        resp=document.getElementById("resp").innerHTML= `Índice(s) del valor ${valorBuscado}: ${indices.join(", ")}`;
    }
}

saludo(){
    let resp
    resp=document.getElementById("resp").innerHTML=`¡Hola! ¿Cómo estás?`
}

suma(num1, num2) {
    let resul = 0
    resul = num1 + num2
    return resul
}
    sumar() {
    let n1 = 0, n2 = 0, resp, r
    n1 = parseFloat(document.getElementById("n1").value)
    n2 = parseFloat(document.getElementById("n2").value)
    r = this.suma(n1, n2)
    resp = document.getElementById("resp")
    resp.innerHTML = `${n1} + ${n2} = ${r}`

}

multiplicar() {
    let resul = 0
    let n1 = 0, n2 = 0
      n1 = parseFloat(document.getElementById("n1").value)
      n2 = parseFloat(document.getElementById("n2").value)
  resul = n1 * n2        
       return resul

  }
    multiplicacion() {
      let resp,r
      r = this.multiplicar()
      resp = document.getElementById("resp")
      resp.innerHTML = `La respuesta es: ${r}`

  }

parimpar(){
    let n1,resp
    n1 = parseInt(document.getElementById("n1").value)
  
    if (n1 % 2 === 0) {
        resp=document.getElementById("resp").innerHTML=`${n1} Es par`
    } else {
        resp=document.getElementById("resp").innerHTML=`${n1} Es Impar`
    }
}

area(num1, num2) {
    let resul = 0
  resul = num1 * num2        
       return resul

  }
    areaCuadrado() {
      let n1 = 0, n2 = 0, resp, r
      n1 = document.getElementById("n1").value
      n2 = document.getElementById("n2").value
      n1 = parseFloat(n1)
      n2 = parseFloat(n2)
      r = this.area(n1, n2)
      resp = document.getElementById("resp")
      resp.innerHTML = `El area es: ${n1} * ${n2} = ${r}`

  }

nombre(){
    let resp,n
    n=document.getElementById("n").value
    resp=document.getElementById("resp").innerHTML=`${n}`
    } 

convertir() {
        let resul = 0
        let n1 = 0, n2 = 0
          n1 = parseFloat(document.getElementById("n1").value)
          
      resul = (n1*(9/5))+32        
           return resul
    
      }
    convertidor() {
          let resp,r
          r = this.convertir()
          resp = document.getElementById("resp").innerHTML = `Los grados Fahrenheit son: ${r}`
    
      }

contarCaracter(frase, caracter) {
        let contador = 0;
    
        for (let i = 0; i < frase.length; i++) {
          
            if (frase[i] === caracter) {
                contador++;
            }
        }
        return contador;
    }
    contar(){

        let resp
    
    fraseUsuario=document.getElementById("fraseUsuario").value
  
    caracterBuscar=document.getElementById("caracterBuscar").value

    let cantidad = this.contarCaracter(fraseUsuario, caracterBuscar);
    console.log(`El carácter "${caracterBuscar}" aparece ${cantidad} veces en la frase.`);
    resp=document.getElementById("resp").innerHTML =`El carácter "${caracterBuscar}" aparece ${cantidad} veces en la frase.`
    }

del1al10(){

    let  x = 1
    
    let t = "";

    while (x <= 10) {
       
      
        t += `<br>${x} `;
        x = x + 1;
    }


    document.getElementById("resp").innerHTML = t;

}
lisSuma(numeros) {
    let pro = 0;
    for (let pos = 0; pos < numeros.length; pos++) {
        let num = parseInt(numeros[pos]);

        if (!isNaN(num)) {
            pro += num;
        }
    }
    return pro;
}

    suma1() {
    let n1 = document.getElementById("n1").value;
    let numeros = n1.split(",");
    let su = this.lisSuma(numeros);

    // Mostrar el resultado en el elemento con id "resp"
    document.getElementById("resp").innerHTML = `La suma es ${su}`;
}


}





let ope = new Ejercicio1() //crea una variable igual que la clase
//ope.multiplo()
//ope.tablaMultiplicar()
// ope.buscar()
// ope.nume()

