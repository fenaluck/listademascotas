export class Propietario {
    constructor(Nombre, Direccion, Telefono){
        this._nombre = Nombre;
        this._direccion = Direccion;
        this._telefono = Telefono; 
    }
        
    datosPropietario(){
        return `El nombre del dueño es: ${this._nombre}, su direccion es: ${this._direccion}, su telefono es: ${this._telefono}`        
    }

}

