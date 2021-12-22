import {Mascota} from "./mascota.js";


$("#resultado").hide();
$("form").submit(function (ev){
ev.preventDefault();


$("#resultado").hide();
//  creacion de 
const nombre = $("#propietario").val();
const direccion = $("#direccion").val();
const telefono = $("#telefono").val();
let nombreMascota = $("#nombreMascota").val();
let tipo = $("#tipo").val();
let Enfermedad = $("#enfermedad").val();

// creacion de nuevas 
    
let mascotaNueva = new Mascota (nombre, direccion, telefono, tipo, nombreMascota, Enfermedad);

$("#resultado").show();
$("#resultado").html(`<li>${mascotaNueva.datosPropietario()}<li>`);
console.log(mascotaNueva.datosPropietario());

});
