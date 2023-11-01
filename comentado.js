/*Se declaran las costantes para los id y variables */
/** El document.getElementById se utiliza para manipular elementos del html en el js por medio de sus  id.
 *  id = Identificador.
 */
const seccionBatalla = document.getElementById('campo-batalla');
const msjBatalla = document.getElementById('msj-batalla');
const imgAtaqueJugador = document.getElementById('img-ataque-jugador');
const imgAtaquePc = document.getElementById('img-ataque-pc');
const btnPiedra = document.getElementById('btn-piedra');
const btnPapel = document.getElementById('btn-papel');
const btnTijeras = document.getElementById('btn-tijeras');

let opcionJugador;
let opcionPc;
let imgJugador;
let imgPc;


const imagenes = [
    /*Arreglo de objetos imagenes*/
    {
        name: "Piedra",/*Nombre  */
        url: "assets/Piedra.PNG"  /*Ruta de la imagen */
    },
    {
        name: "Papel",
        url: "assets/Papel.PNG" 
    },
    {
        name: "Tijeras",
        url: "assets/Tijeras.PNG" 
    }
];



function iniciar(){
    /*se le indica que a la constante seccionBatalla que contiene lo que esta con el id,  .style le indica que con la propiedad stilo   para mostrarse  con la sentencia .display = 'none'; (para que no sea visible)*/ 
    seccionBatalla.style.display = 'none';
    /*Se llama esta funcion para su uso en la sentencia*/
    /*window.addEventListener('load', iniciar);*/ 
    
};

 /*----------------Botonera de jugadores---------------------*/


  /*Tiene el id="btn-piedra" luego .addEventListener el escuchardor de eventos, el cual seria el click (cuando se escuche el evento click se ejecutara una funcion(que contiene la variable opcionJugador y opPc(para que la pc realice su jugada ); )) */
  
btnPiedra.addEventListener('click', function(){
    
    /*la cual contiene la variable opcionJugador y tiene guardado piedra*/
    opcionJugador = "Piedra";
    /*Luego llama a la funcion pc (para que la pc realice su jugada )*/
    opPc();
});

btnPapel.addEventListener('click', function(){
     
   /*la cual contiene la variable opcionJugador y tiene guardado Papel*/
    opcionJugador = "Papel";
    /*Luego llama a la funcion pc (para que la pc realice su jugada )*/
    opPc();
});

btnTijeras.addEventListener('click', function(){

     /*la cual contiene la variable opcionJugador y tiene guardado Tijeras*/
    opcionJugador = "Tijeras";
    /*Luego llama a la funcion pc  (para que la pc realice su jugada )*/
    opPc();
})

/*----------------------Fin de botoneras ---------------------------------- */


  /*Esta es la jugada de la maquina, es una funcion opPc que tiene la variable aleatorio que guarda en su interior la funcion nAleatorio()*/
/
function opPc(){
    var aleatorio = nAleatorio();/* para obtener mas detalle de estafuncion, buscar en N1 en los comentarios del codigo. */
    
    /*Se le indica a el programa que si lo que hay en aleatorio == 0 la  variable opcionPc tendria el valor de Piedra y asi con los demas condicionales. */

    if(aleatorio == 0){
        opcionPc = "Piedra";
    }else if(aleatorio == 1){
        opcionPc = "Papel";
    }else if(aleatorio == 2){
        opcionPc = "Tijeras"
    };

    batalla();/*Se ejecuta la funcion batalla*/

};

  /*Funcion para la batalla entre el pc  y tu */
function batalla(){

    /**
     * Teniendo en cuenta la variable opcionJugador (Que seria mi opcion de jugada) y la opcion opcionPc (Que seria la juaga de la pc ) voy a comenzar a definir los ganadores por medio de condicionales (if)
     * 
     *  1-Si pcionJugador es igual a la de opcionPc  entonces seria un empate. --> opcionJugador == opcionPc.
     * 
     *  2-Si pcionJugador  es igual a Piedra  && opcionPc es igual a Tijeras entonces -Ganaria  pcionJugador porque la piedra daña a las   tijeras.
     * 
     * Nota: ( &&) Y (me dice que se debe de cumplir la condicion tal cual como estaplanteada  para poder  ser verdadera ) 
     * Ver la tabla de verdad link :https://platzi.com/clases/3221-pensamiento-logico/50676-que-son-las-tablas-de-verdad/
     *      Conjunción = ( &&)
     * 
            Este operador implica la combinación de dos valores. Es verdadero cuando ambas partes son verdaderas y falso cuando las partes son distintas.

            Tabla del ( &&) = (^) :
            P	Q	P^Q
            V	V	V
            V	F	F
            F	V	F
            F	F	F
     * 
     *  Trabajo de 5 min === Teniendo en cuenta lo anterior, describe el proceso de las 3 opciones faltantes y justifica el porque de su resultado. 
     * 
     * opc 3 -
     * 
     * opc4-
     * 
     * opc-5-
     * 
     * 
     */

    if(opcionJugador == opcionPc){
        msjBatalla.innerHTML = "Empate";/*Esta linea es para crear el mensaje en el html, segun el resultado  y es el mismo proceso cada vez que se utilice  msjBatalla.innerHTML = ""; 
        Recuerda que  msjBatalla se toma de la declaracion de variables en la parte superior con const msjBatalla = document.getElementById('msj-batalla');*/


    }else if(opcionJugador == "Piedra" && opcionPc == "Tijeras"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Papel" && opcionPc == "Piedra"){
        msjBatalla.innerHTML = "Ganaste!";
    }else if(opcionJugador == "Tijeras" && opcionPc == "Papel"){
        msjBatalla.innerHTML = "Ganaste!";
    }else{
        msjBatalla.innerHTML = "Perdiste :(";
    };

    addImagenes();/*Se ejecuta la funcion para añadir las imagenes */

}



/****************** N1 INICIO ************/
      /*Funcion nAleatorio que se utiliza en la function opPc()*/
function nAleatorio(){

    let n = Math.floor(Math.random() * 3);
    return n;
}
 /***************FIN N1***************/



/**Funcion de las imagenes */
function addImagenes(){

    /**1- Tiene un for para recorrer el arry de las imagenes  donde el tamaño lo determina la const imagenes 
     * se inicializa i como variable iteradora luego se pone (let i=0;) ; y se escribe la sentencia  (si i es menor a el tamaño de imagen.-- i<imagenes.length;) entonces  sumele 1 a i {i++} = {i=i+1}) 
     */

    /**
     * Tiene dos if() uno para buscar la imagen de jugador y el otro para buscar la imagen de el pc.
     */
    for(let i=0;i<imagenes.length;i++){

        /** del array imagenes en la posicion [i], .name el nombre es igual a la opcion del jugador entonces a  la variable imgJugador vamos a llevarle la url de la imagen.
         * por medio de la variable local inserta se crea el html de la imagen y se envia la variable.
         */

        if(opcionJugador == imagenes[i].name){
            imgJugador = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgJugador} alt="imagen-jugador">`;
            imgAtaqueJugador.innerHTML = inserta;
        };
        
        if(opcionPc == imagenes[i].name){
            imgPc = imagenes[i].url;
            var inserta = `<img class="img-batalla" src=${imgPc} alt="imagen-maquina">`;
            imgAtaquePc.innerHTML = inserta;
        };
        
    };

      /*para que sea pueda ver */
    seccionBatalla.style.display = 'flex';

    
};

/**para cuando se de f5 a la pagina ejecute la funcion iniciar  */
window.addEventListener('load', iniciar); 