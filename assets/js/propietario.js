export class Propietario {
    contructor(Nombre, Direccion, Telefono){
        this.nombre = Nombre;
        this.direccion = Direccion;
        this.telefono = Telefono; 
        }
        
    datosPropietario(){
        return `El nombre es: ${this.nombre}, la direccion: ${this.direccion}, el telefono ${this.telefono}`
    }

}

