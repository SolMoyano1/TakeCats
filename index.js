$(() => {


    //LISTA DE GATOS EN ADOPCION//
    class Gatito{
        constructor(nombre, sexo, edad){
            this.nombre= nombre;  
            this.sexo= sexo;
            this.edad= parseInt(edad);    
        }
    }


    let listaGatitos =[

        {nombre: "Ragnar", sexo: "macho", edad: 8 +" meses", 
        foto: '<img class="fotoGato" src="./multimedia/gato_negro_y_blanco.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoRagnar.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato1}></aside>'},

        {nombre: "Flora", sexo: "hembra", edad: 5 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato blanco peludo.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataFlora.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato2}></aside>'},

        {nombre: "Toni", sexo: "macho", edad: 2 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato gris.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoToni.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato3}></aside>'},
        
        {nombre: "Lolo", sexo: "macho", edad: 3 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato naranja y blanco.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoLolo.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 0px; margin-right: 0px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato4}></aside>'},

        {nombre: "Moly", sexo: "hembra", edad: 3 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato blanco y gris.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataMoly.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato5}></aside>'},

        {nombre: "Lila", sexo: "hembra", edad: 3 + " meses",
        foto: '<img class="fotoGato" src="./multimedia/gato marron y blanco.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataLila.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato6}></aside>'},

        {nombre: "Kail", sexo: "macho", edad: 7 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato blanco y atigrado peludo.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoKail.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato7}></aside>'},
        
        {nombre: "Luana", sexo: "hembra", edad: 3 +" meses", 
        foto: '<img class="fotoGato" src="./multimedia/gata tricolor.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataLuana.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato8}></aside>'},

        {nombre: "Marta", sexo: "hembra", edad: 2 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato negro ojos celestes.jpg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataMarta.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato9}></aside>'},
        
        {nombre: "Roberto", sexo: "macho", edad: 5 +" meses", 
        foto: '<img class="fotoGato" src="./multimedia/gato atigrado.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoRoberto.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato10}></aside>'},

        {nombre: "Pepi", sexo: "macho", edad: 3 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gato naranja.jpg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gatoPepi.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato11}></aside>'},

        {nombre: "Simona", sexo: "hembra", edad: 4 +" meses", 
        foto: '<img class="fotoGato" src="./multimedia/gato blanco.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataSimona.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;" >',
        IDGato: '<aside class="asideGatos" id={gato12}></aside>'},

        {nombre: "Mindy", sexo: "hembra", edad: 6 +" meses",
        foto: '<img class="fotoGato" src="./multimedia/gata_peluda.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;">',
        fotoInfo: '<img class="fotoInfo" src="./multimedia/gataMindy.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;">',
        IDGato: '<aside class="asideGatos" id={gato13}></aside>'},

       
    ]
    
    listaGatitos.push({nombre: "Lula", sexo: "hembra", edad: "4 meses", 
    foto: '<img class="fotoGato" src="./multimedia/gata_ojos_verdes.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;">',
    fotoInfo: '<img class="fotoInfo" src="./multimedia/gataLula.jpeg" width="280" height="320" style="margin-top: 50px; margin-left: 15px; margin-right: 15px; padding: 4px; background-color: white;">',
    IDGato: '<aside class="asideGatos" id={gato13}></aside>'},);
    
    
    // Mostrar Array en html


    listaGatitos.forEach( mostrarGatos =>{
        let nodo= document.createElement("div");

        nodo.innerHTML ='<aside style="align-items: center">'+mostrarGatos.foto+'</section>'+'<br>'+
                        '<button class="btnAdoptar" style=" border: 0.6px solid rgba(86, 59, 17, 0.38); background-color: #fff;font-family: Spartan, sans-serif; height: 30px; width: 160px; sans-serif; text-transform: uppercase; letter-spacing: 1.2px; font-size: 12px;">Adoptar</button>';
        
        document.getElementById("prueba").appendChild(nodo);
        
    });


    /*  Ordenar gatos por su edad */

    listaGatitos.sort((a, b) => {
        if (a.edad < b.edad){
            return -1;
        }
        if (a.edad > b.edad){        
            return 1;
        }  
        
    })
    console.log (listaGatitos);



    /* Animaciones */

    
    // Cambiar a img informativa

    // Esto esta mal, no pude resolverlo :(
        
    let tarjetaGato = document.querySelector("aside");
    
    tarjetaGato .addEventListener("mouseover", function(e){

        function cambiarImagen(){

            let imagenActual = document.getElementsByClassName("asideGatos");
          
            let imagenNueva = listaGatitos.find(IDGato => IDGato == idHover);
          
            e.target.previousSibling.setAttribute(imagenNueva, imagenActual);   
        }
        
        cambiarImagen();

    });
   


    /* Funcionalidad de Boton Adoptar */


    let cuadroDeAdopcion = document.getElementById("cuadroDeAdopcion");
    let formularioAdoptar = document.getElementById("formularioAdoptar");


    $(".btnAdoptar").on("click", function(e){
        cuadroDeAdopcion.classList.add("visible");    
        formularioAdoptar.classList.add("visible");

    })



    /* Cerrar cartel de Adoptar */


    let btnCerrar = document.getElementById("btnCruz");

    btnCerrar.addEventListener('click', function(e){
        e.preventDefault();
        cuadroDeAdopcion.classList.remove('visible');
        formularioAdoptar.classList.remove('visible');
    });



    /* Poner suguiente en el cartel de Adoptar */


    let btnSiguiente = document.getElementById("btnSiguiente");

    let seleccionarOpcion= document.getElementById("seleccionarOpcion");
    let opcionEnvioDomicilio= document.getElementById("opcionEnvioDomicilio");
    let opcionBuscarEnPunto= document.getElementById("opcionPuntoDeRetiro");

    let popupEnvioDomicilio= document.getElementById("popupEnvioDomicilio");
    let formEnvioDomicilio = document.getElementById("formEnvioDomicilio");
    let popupPuntoDeEntrega= document.getElementById("popupPuntoDeEntrega");
    let formPuntoDeEntrega= document.getElementById("formPuntoDeEntrega");



    function popup(e){

        if(seleccionarOpcion.value == 2){
            e.preventDefault();
            formEnvioDomicilio.classList.add("visible");        
            popupEnvioDomicilio.classList.add("visible"); 
        }
        
        else if (seleccionarOpcion.value == 3){

            e.preventDefault();
            formPuntoDeEntrega.classList.add("visible");
            popupPuntoDeEntrega.classList.add("visible"); 
        }
        
        else{
            alert("Selecciona una opción");    
            e.preventDefault();
        }
    }

    btnSiguiente.addEventListener("click", popup);



    
    /* Guardar solicitudes de adopcion */

     
    let guardarSolicitudEnvioDomicilio = function (){
        let inputDireccionEnvio= document.getElementById("direccionEnvio").value;
        localStorage.setItem("direccionEnvio", inputDireccionEnvio.value);
    
        let inputBarrioEnvio= document.getElementById("barrioEnvio").value;
        localStorage.setItem("barrioEnvio", inputBarrioEnvio.value);
    
        let inputCelularEnvio= document.getElementById("celularEnvio").value;
        localStorage.setItem("celularEnvio", inputCelularEnvio.value);

        let inputMailEnvio= document.getElementById("mailEnvio").value;
        localStorage.setItem("mailEnvio", inputMailEnvio.value);

    }

    guardarSolicitudEnvioDomicilio;



    /* Obtener datos de solicitudes de adopcion  */

    let obtenerSolicitudes = localStorage.getItem("direccionEnvio", "barrioEnvio", "celularEnvio", "mailEnvio" );
    
    obtenerSolicitudes;



    /* Cerrar Envio Domicilio */


    let cerrarEnvioDomicilio = document.getElementById("cerrarEnvioDomicilio");

    cerrarEnvioDomicilio.addEventListener('click', function(e){
        e.preventDefault();
	    popupEnvioDomicilio.classList.remove('visible');
	    formEnvioDomicilio.classList.remove('visible');
	    cuadroDeAdopcion.classList.remove('visible');
	    formularioAdoptar.classList.remove('visible');
    });



    /* Cerrar Retirar en Punto de Entrega */

    let cerrarRetirarPuntoEntrega = document.getElementById("cerrarPuntoDeEntrega");

    cerrarRetirarPuntoEntrega.addEventListener('click', function(e){
	    e.preventDefault();
	    popupPuntoDeEntrega.classList.remove('visible');
        formPuntoDeEntrega.classList.remove('visible');
        cuadroDeAdopcion.classList.remove('visible');
        formularioAdoptar.classList.remove('visible');
    });



    /*Guardar datos del formulario de adopcion*/

    const guardarDatosFormulario=() =>{
        let inputNombrePersona= document.getElementById("nombrePersona").value;
        localStorage.setItem("nombrePersona", inputNombrePersona.value);
    
        let selectEntrega= document.getElementById("seleccionarOpcion").value;
        localStorage.setItem("seleccionarOpcion", selectEntrega.value);
    
        let inputDireccion= document.getElementById("direccionEnvio").value;
        localStorage.setItem("direccionEnvio", inputDireccion.value);

        let inputBarrio= document.getElementById("barrioEnvio").value;
        localStorage.setItem("barrioEnvio", inputBarrio.value);

        let inputCelularEnvio= document.getElementById("celularEnvio").value;
        localStorage.setItem("celularEnvio", inputCelularEnvio.value);

        let inputMail= document.getElementById("mailEnvio").value;
        localStorage.setItem("mailEnvio", inputMail.value);

        let inputBarrioRetirar= document.getElementById("barrioRetirar").value;
        localStorage.setItem("barrioRetirar", inputBarrioRetirar.value);

        let inputCelularRetirar= document.getElementById("celularRetirar").value;
        localStorage.setItem("celularRetirar", inputCelularRetirar.value);

        let inputEmailRetirar= document.getElementById("mailRetirar").value;
        localStorage.setItem("mailRetirar", inputEmailRetirar.value);


        
    }

    guardarDatosFormulario;

    /* Obtener datos del formulario */

    let obtenerDatosFormulario = localStorage.getItem("nombrePersona", "seleccionarOpcion", "direccionEnvio","barrioEnvio","celularEnvio" ,"mailEnvio","barrioRetirar", "celularRetirar" ,"mailRetirar");

    obtenerDatosFormulario;



    /* METODO JQUERY */

    window.addEventListener ("load", function (){
        console.log("Los elementos ya estan cargados");
    });














});

