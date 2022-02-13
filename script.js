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
        {nombre: "Moly", sexo: "hembra", edad: 3 +" meses"},
        {nombre: "Lolo", sexo: "macho", edad: 3 +" meses"},
        {nombre: "Mindy", sexo: "hembra", edad: 4 +" meses"},
        {nombre: "Lila", sexo: "hembra", edad: 3 + " meses"},
        {nombre: "Toni", sexo: "macho", edad: 2 +" meses"},
        {nombre: "Marta", sexo: "hembra", edad: 2 +" meses"},
        {nombre: "Pepi", sexo: "macho", edad: 3 +" meses"},
        {nombre: "Kail", sexo: "macho", edad: 7 +" meses"},
        {nombre: "Flora", sexo: "hembra", edad: 5 +" meses"},
        {nombre: "Ragnar", sexo: "macho", edad: 8 +" meses"},
        {nombre: "Simona", sexo: "hembra", edad: 4 +" meses"},
        {nombre: "Luana", sexo: "hembra", edad: 3 +" meses"},
        {nombre: "Roberto", sexo: "macho", edad: 5 +" meses"},
    ]
    
    listaGatitos.push({nombre: "Lula", sexo: "hembra", edad: "5 meses"},)


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

    //IMG 1
    let img1 = document.getElementById("img1");

    function cambiarImagen1(){
        this.setAttribute('src','./multimedia/gato negro y blanco.jpeg');   
    }

    function imagenNueva1(){
        this.setAttribute('src',"./multimedia/gatoRagnar.jpeg");
    }

    img1.addEventListener("mouseout", cambiarImagen1);
    img1.addEventListener('mouseover',imagenNueva1);
   

    //IMG 2
    let img2 = document.getElementById("img2");

    function cambiarImagen2(){
        this.setAttribute('src','./multimedia/gato blanco peludo.jpeg');   
    }

    function imagenNueva2(){
        this.setAttribute('src',"./multimedia/gataFlora.jpeg");
    }

    img2.addEventListener("mouseout", cambiarImagen2);
    img2.addEventListener('mouseover',imagenNueva2);


    //IMG 3
    let img3 = document.getElementById("img3");

    function cambiarImagen3 (){
        this.setAttribute('src', './multimedia/gato gris.jpeg');
    }

    function imagenNueva3 (){
        this.setAttribute('src', './multimedia/gatoToni.jpeg');
    }

    img3.addEventListener("mouseout", cambiarImagen3);
    img3.addEventListener("mouseover", imagenNueva3);



    //IMG 4

    let img4= document.getElementById("img4");


    function cambiarImagen4(){

        this.setAttribute("src", "./multimedia/gato naranja y blanco.jpeg");

    }


    function imagenNueva4(){

        this.setAttribute("src", "./multimedia/gatoLolo.jpeg");

    }


    img4.addEventListener("mouseout", cambiarImagen4);
    img4.addEventListener("mouseover", imagenNueva4);


    //IMG 5
    let img5= document.getElementById("img5");

    function cambiarImagen5(){
        this.setAttribute("src", "./multimedia/gato blanco y gris.jpeg");
    }

    function imagenNueva5(){
        this.setAttribute("src", "./multimedia/gataMoly.jpeg");
    }

    img5.addEventListener("mouseout", cambiarImagen5);
    img5.addEventListener("mouseover", imagenNueva5);


    //IMG 6

    let img6= document.getElementById("img6");

    function cambiarImagen6(){
        this.setAttribute("src", "./multimedia/gato marron y blanco.jpeg");
    }

    function nuevaImagen6(){
        this.setAttribute("src", "./multimedia/gataLila.jpeg")
    }

    img6.addEventListener("mouseout", cambiarImagen6);
    img6.addEventListener("mouseover", nuevaImagen6);


    //IMG 7
    let img7= document.getElementById("img7");

    function cambiarImagen7(){
        this.setAttribute("src", "./multimedia/gato blanco y atigrado peludo.jpeg");
    }

    function imagenNueva7(){
        this.setAttribute("src", "./multimedia/gatoKail.jpeg");
    }

    img7.addEventListener("mouseout", cambiarImagen7);
    img7.addEventListener("mouseover", imagenNueva7);


    //IMG 8
    let img8= document.getElementById("img8");

    function cambiarImagen8(){
        this.setAttribute("src", "./multimedia/gata tricolor.jpeg");
    }

    function imagenNueva8(){
        this.setAttribute("src", "./multimedia/gataLuana.jpeg");
    }

    img8.addEventListener("mouseout", cambiarImagen8);
    img8.addEventListener("mouseover", imagenNueva8);


    //IMG 9
    let img9= document.getElementById("img9");

    function cambiarImagen9(){
        this.setAttribute("src", "./multimedia/gato negro ojos celestes.jpg");
    }

    function imagenNueva9(){
        this.setAttribute("src", "./multimedia/gataMarta.jpeg");
    }

    img9.addEventListener("mouseout", cambiarImagen9);
    img9.addEventListener("mouseover", imagenNueva9);



    //IMG 10
    let img10= document.getElementById("img10");

    function cambiarImagen10(){
        this.setAttribute("src", "./multimedia/gato atigrado.jpeg");
    }

    function nuevaImagen10(){
        this.setAttribute("src", "./multimedia/gatoRoberto.jpeg")
    }

    img10.addEventListener("mouseout", cambiarImagen10);
    img10.addEventListener("mouseover", nuevaImagen10);


    //IMG 11
    let img11=document.getElementById("img11");

    function cambiarImagen11(){
        this.setAttribute("src", "./multimedia/gato naranja.jpg");
    }

    function imagenNueva11(){
        this.setAttribute("src", "./multimedia/gatoPepi.jpeg");
    }

    img11.addEventListener("mouseout", cambiarImagen11);
    img11.addEventListener("mouseover", imagenNueva11);


    //IMG 12
    let img12=document.getElementById("img12");

    function cambiarImagen12(){
        this.setAttribute("src", "./multimedia/gato blanco.jpeg");
    }

    function imagenNueva12(){
        this.setAttribute("src", "./multimedia/gataSimona.jpeg");
    }

    img12.addEventListener("mouseout", cambiarImagen12);
    img12.addEventListener("mouseover", imagenNueva12);



    /* Funcionalidad de Boton Adoptar */

    let cuadroDeAdopcion = document.getElementById("cuadroDeAdopcion");
    let formularioAdoptar = document.getElementById("formularioAdoptar");


    //1
    let btnAdoptar1= document.getElementById("btnAdoptar1");

    btnAdoptar1.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visible");
        formularioAdoptar.classList.add("visible");
    })


    //2
    let btnAdoptar2= document.getElementById("btnAdoptar2");

    btnAdoptar2.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visible");
        formularioAdoptar.classList.add("visible");
    })


    //3
    let btnAdoptar3= document.getElementById("btnAdoptar3");

    btnAdoptar3.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visible");
        formularioAdoptar.classList.add("visible");
    })



    //4
    let btnAdoptar4 = document.getElementById("btnAdoptar4");

    btnAdoptar4.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visible");
        formularioAdoptar.classList.add("visible");
    })


    //5

    let btnAdoptar5 = document.getElementById("btnAdoptar5");


    btnAdoptar5.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })


    //6

    let btnAdoptar6 = document.getElementById("btnAdoptar6");

    btnAdoptar6.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })

    //7

    let btnAdoptar7 = document.getElementById("btnAdoptar7");

    btnAdoptar7.addEventListener("click", function(){ 
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })


    //8

    let btnAdoptar8 = document.getElementById("btnAdoptar8");


    btnAdoptar8.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })


    //9

    let btnAdoptar9 = document.getElementById("btnAdoptar9");

    btnAdoptar9.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })


    //10

    let btnAdoptar10 = document.getElementById("btnAdoptar10");

    btnAdoptar10.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visble");
        formularioAdoptar.classList.add("visible");
    })


    //11

    let btnAdoptar11= document.getElementById("btnAdoptar11");

    btnAdoptar11.addEventListener("click", function(){
        cuadroDeAdopcion.classList.add("visible");
        formularioAdoptar.classList.add("visible");
    })

    
    //12

    let btnAdoptar12= document.getElementById("btnAdoptar12");

    btnAdoptar12.addEventListener("click", function(){
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




    /* Guardar gatos q publica la gente */


    const guardarGatitoPublicado=() =>{
        let inputNombre= document.getElementById("nombre").value;
        localStorage.setItem("nombre", inputNombre.value);
    
        let inputSexo= document.getElementById("sexo").value;
        localStorage.setItem("sexo", inputSexo.value);
    
        let inputEdad= document.getElementById("edad").value;
        localStorage.setItem("edad", inputEdad.value);

        let nuevoGato = new Gatito (nombre, sexo, edad);
        let otraLista;
    
        if (localStorage.getItem("listaGatitos") != null){
            otraLista=JSON.parse(localStoragge.getItem("listaGatitos"));
            otraLista.push(nuevoGato);
            localStorage.setItem("listaGatitos",JSON.stringify(otraLista));
        }
        
        else {
            listaGatitos.push(nuevoGato);
            localStorage.setItem("listaGatitos",JSON.stringify(listaGatitos));
        }
        return nuevoGato;
    }

    guardarGatitoPublicado;

    /* Obtener datos de gatos guardados */

    let obtenerDatos = localStorage.getItem("nombre", "sexo", "edad");

    obtenerDatos;

    /* Agradecer por publicar nuevos gatos*/

    let parrafoGracias = document.createElement("p");
    parrafoGracias.innerHTML= `♥ Gracias por ayudar a que encuentre un hogar ♥`;
    document.body.appendChild(parrafoGracias);


    let botonPublicar=  document.getElementById("botonPublicar");

    botonPublicar.addEventListener("click", function(){
        alert("¡Gracias!");
    });




    /* METODOS DE JQUERY */

    window.addEventListener ("load", function (){
        console.log("Los elementos ya estan cargados");
    });


    const verificarCamposLlenos = function (){

        if ( $ ("nombre".val().length>0)  &&  $("edad".val().length > 0)  &&  $("sexo".val().length > 0) &&  $("desparacitado".val().length > 0) ){
            let gracias = document.createElement("p");
            gracias.innerHTML= `¡GRACIAS!`;
            document.body.appendChild(gracias);

        }else{
            let incompleto = document.createElement("p");
            incompleto.innerHTML= `*Debes llenar todos los campos`;
            document.body.appendChild(incompleto);
        }
    }

    verificarCamposLlenos;

    /* AJAX*/

    let nombreEnviar = $("#nombre").val();
    let sexoEnviar = $("#sexo").val();
    let edadEnviar = $("#edad").val();

    const url = "https://jsonplaceholder.typicode.com/posts";

    $("#botonPublicar").on("click", function(){

        $.post(url, nombreEnviar,function(data,status){

            if (status === "success"){
                console.log("Se guardo el nombre");
            }

            else{
                console.log("No se pudo guardar el nombre");
            }
        })

        $.post(url, sexoEnviar,function(data,status){

            if (status === "success"){
                console.log("Se guardo el sexo");
            }

            else{
                console.log("No se pudo guardar el sexo");
            }

        })

        $.post(url, edadEnviar,function(data,status){

            if (status === "success"){
                console.log("Se guardo la edad");
            }
            
            else{
                console.log("No se pudo guardar la edad");
            }

        })
    
    });













});

