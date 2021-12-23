import {Animal} from "./animal.js";

export class Mascota extends Animal{
        constructor(Nombre, Direccion, Telefono, Tipo, nomMascota, Enfermedad){
            super(Nombre, Direccion, Telefono,Tipo)
            this._nomMascota = nomMascota;
            this._enfermedad = Enfermedad;
        }
        get obtenerNombre(){
            return this._nomMascota;
        }
        get obtenerEnfermedad(){
            return this._enfermedad;
        }
        set ponerNombre(nuevoNombre){
            this._nomMascota = nuevoNombre;
        }
        set ponerEnfermedad(nuevaEnfermedad){
            this._enfermedad = nuevaEnfermedad;
        }
                
}