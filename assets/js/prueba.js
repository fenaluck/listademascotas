class Inter {
    addPropietario(propietario){
        const listpropietarios = document.getElementById()
        const element = documen.createElement("div");
        element.innerHTML = `
        <div class = "card text-center mb-2"
            <div class = "card-body">
                <strong>Nombre:</strong>:${}
                <strong>Direccon:</strong>:${}
                <strong>Telefono:</strong>:${}
                <a href="#" class = "btn btn-danger" name = "remove">Eliminar</a>
            </div>
        </div>
        `;
        listapropietarios.appendChild(element);


    }

    resetForm(){
        document.getElementById(propietario-form).reset();

    }
    deletePropietario(){
        if(element.name === "Eliminar"){
            element.parentElement.parentElement.parentElement.remove();

        }

    }

    showMesaje(mensaje, cssClass){
        const div = document.createElement('div')
        div.className = `alert alert-${cssClass}`;
        div.appendChild(document.createTextNode(mensaje));

        const container = documen.querySelector('.container');
        const aplicacion = document.querySelector("#")

    }
}
// Dom evento
document.getElementById('propietario-form').addEventListener('submit', function(ev){
    alert("enviando formulario")
    const name = document.getElementById("propietario").value
    const direction = document.getElementById("direccion").value
    const phone = document.getElementById("telefono").value

    const propietarios = new propietarios(name,direction, phone)
    const Inter = new Inter ();
    Inter.addPropietario(propietario);
    Inter.resetForm();    
    Inter.showMesaje("propietario cargado exitosamente")

    e.preventDefault();
} )

document.getElementById('').addEventListener('click', funtion(e){
    const Inter = new Inter();
    Inter.deletePropietario(e.target);
})
