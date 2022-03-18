$(() => {

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



    /* METODO JQUERY */

        
    window.addEventListener ("load", function (){
        console.log("Los elementos ya estan cargados");
    });




    /* Verificar campos llenos p/ publicar nuevo gato */


    $("#botonPublicar").on("click",function(){
        verificarCamposLlenos();
    });



    const verificarCamposLlenos =() =>{
        if (($("#nombre").val().length < 1)  ||  ($("#edad").val().length === 0)  ||  $("#sexo").val().length < 2){
            
            alert("Debes completar todos los campos");

        }
        else{
        
            let Gracias = document.createElement("p");    
            Gracias.innerHTML= `Lo publicaremos en la brevedad, ¡G R A C I A S!`;
            document.getElementById("agregarGracias").appendChild(Gracias);
        }
    }

    


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



