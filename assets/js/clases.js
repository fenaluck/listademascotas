class Propietario {
        contructor(Nombre, Direccion, Telefono){
            this.nombre = Nombre;
            this.direccion = Direccion;
            this.telefono = Telefono; 
        }
            datosPropietario(){}
    }

class Animal extends Propietario{
        constructor(Nombre, Direccion, Telefono, Tipo){
            this.tipo = Tipo;
            super(Nombre, Direccion, Telefono)
        }
        get obtenerTipo(){
            return this.tipo;
        }
}
            
class Mascota extends Animal{
        constructor(Nombre, Direccion, Telefono, Tipo, nomMascota, Enfermedad){
            this._nomMascota = nomMascota;
            this._enfermedad = Enfermedad;
            super(Nombre, Direccion, Telefono,Tipo)
        }
        get obtenernombre(){
        return this._nomMascota;
        }
        get enfermedad(){
        return this._enfermedad;
        }
        set ponerNombre(nuevoNombre){
        this._nomMascota = nuevoNombre;
        }
        set ponerEnfermedad(nuevaEnfermedad){
        this._enfermedad = nuevaEnfermedad;
        }
                
}

    