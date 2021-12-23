import {Propietario} from "./propietario.js";

export class Animal extends Propietario{
        constructor(
                Nombre, Direccion, Telefono, Tipo){
        super(Nombre, Direccion, Telefono)
        this._tipo = Tipo;
        }
        get tipo(){
        return this._tipo;
        }
}