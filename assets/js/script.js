import {Mascota} from "./mascota.js";


$("form").submit(function (ev){
    ev.preventDefault();
    
        //  creacion de variables

    let nombre = $("#propietario").val();
    let direccion = $("#direccion").val();
    let telefono = $("#telefono").val();
    let nombreMascota = $("#nombreMascota").val();
    let tipo = $("#tipo").val();
    let Enfermedad = $("#enfermedad").val();
    let mascotaNueva = new Mascota (nombre, direccion, telefono, tipo, nombreMascota, Enfermedad);

    //  mostrar resultados
    $("#resultado").show();
    $("#resultado").html(" ")
    $("#resultado").html(`<li>${mascotaNueva.datosPropietario()}<li>`);
    console.log(mascotaNueva.datosPropietario(), "su mascota es un "+tipo +" y se llama " + nombreMascota + " y viene por " + Enfermedad); 
    
    $("#propietario").val('');
    $("#direccion").val('');
    $("#telefono").val('');
    $("#nombreMascota").val('');
    $("#enfermedad").val('');
});
    



