/* 
 * Click nbfs://nbhost/SystemFileSystem/Templates/Licenses/license-default.txt to change this license
 * Click nbfs://nbhost/SystemFileSystem/Templates/ClientSide/javascript.js to edit this template
 */

// Funcionalidades.js
let menuItems = [
    { texto: 'Inicio', enlace: 'Practica4.html' },
    { texto: 'Categorías', enlace: 'Categorias.html' },
    { texto: 'Artículos', enlace: 'Articulos.html' },
    { texto: 'Formulario', enlace: 'Formulario.html' }
];

function construirMenu() {
    let nav = document.querySelector('.menuPrincipal');
    
    menuItems.forEach(function(item) {
        let listItem = document.createElement('li');
        let link = document.createElement('a');
        link.textContent = item.texto;
        link.href = item.enlace;
        listItem.appendChild(link);
        nav.appendChild(listItem);
    });
}

// Llama a la función para construir el menú cuando se cargue la página
document.addEventListener('DOMContentLoaded', construirMenu);



document.addEventListener("DOMContentLoaded", function () {
  // Obtener todas las celdas de precio
  var cells = document.querySelectorAll("td:nth-child(4):not(:last-child)");

  cells.forEach(function (cell) {
    cell.addEventListener("click", function () {
      // Obtener la fila actual
      var row = this.parentNode;

      // Verificar el estado actual de la fila
      if (row.classList.contains("precio-rojo")) {
        // Si la fila está en estado rojo, cambiar a azul y amarillo
        row.classList.remove("precio-rojo");
        row.classList.add("precio-azul");
      } else if (row.classList.contains("precio-azul")) {
        // Si la fila está en estado azul, cambiar a los estilos por defecto
        row.classList.remove("precio-azul");
      } else {
        // Si la fila está en estado por defecto, cambiar a rojo y blanco
        row.classList.add("precio-rojo");
      }
    });
  });
});





document.addEventListener('DOMContentLoaded', function () {
    // Definir el array de provincias
    let provincias = new Array(
        "Álava", "Albacete", "Alicante", "Almería", "Ávila",
        "Badajoz", "Baleares", "Barcelona", "Burgos", "Cáceres", "Cádiz", "Castellón",
        "Ciudad Real", "Córdoba", "La Coruña", "Cuenca", "Gerona", "Granada", "Guadalajara",
        "Guipúzcoa", "Huelva", "Huesca", "Jaén", "León", "Lérida", "La Rioja", "Lugo",
        "Madrid", "Málaga", "Murcia", "Navarra", "Orense", "Asturias", "Palencia", "Las Palmas",
        "Pontevedra", "Salamanca", "Tenerife", "Cantabria", "Segovia", "Sevilla",
        "Soria", "Tarragona", "Teruel", "Toledo", "Valencia", "Valladolid", "Vizcaya",
        "Zamora", "Zaragoza", "Ceuta", "Melilla"
    );

    // Obtener el elemento de código postal
    let codigoPostal = document.getElementById('CP');

    // Agregar el evento de cambio al elemento de código postal
    codigoPostal.addEventListener('change', function () {
        // Obtener los dos primeros valores del código postal
        let codigo = codigoPostal.value.substring(0, 2);

        // Restar uno para acceder a la posición adecuada en el array de provincias
        let posicion = parseInt(codigo) - 1;

        // Obtener el elemento de selección de provincia
        let selectProvincia = document.getElementById('Provincia');

        // Limpiar las opciones actuales del elemento de selección
        selectProvincia.innerHTML = "";

        // Agregar la opción por defecto
        let opcionDefecto = document.createElement('option');
        opcionDefecto.value = "";
        opcionDefecto.text = "Elige Provincia";
        selectProvincia.add(opcionDefecto);

        // Agregar dinámicamente las opciones del array de provincias al elemento de selección
        for (var i = 0; i < provincias.length; i++) {
            let opcion = document.createElement('option');
            opcion.value = provincias[i];
            opcion.text = provincias[i];

            selectProvincia.add(opcion);
        }

        // Seleccionar la provincia correspondiente al código postal ingresado
        if (posicion >= 0 && posicion < provincias.length) {
            selectProvincia.value = provincias[posicion];
        }
    });
});






document.addEventListener('DOMContentLoaded', function () {
    var formulario = document.querySelector('.formulario');

    formulario.addEventListener('submit', function (event) {
        var errores = [];
        var clave = document.getElementById('clave').value;
        var rclave = document.getElementById('Rclave').value;

        // Validar el campo "clave" debe tener al menos 6 caracteres y al menos un número
        if (clave.length < 6 || !/\d/.test(clave)) {
            errores.push("La clave debe tener al menos 6 caracteres y contener al menos un número.");
        }

        // Validar que las claves coincidan
        if (clave !== rclave) {
            errores.push("Las claves no coinciden.");
        }

        // Validar campos requeridos
        var camposRequeridos = document.querySelectorAll('.requerido');
        camposRequeridos.forEach(function (campo) {
            if (campo.value.trim() === '') {
                errores.push("El campo " + campo.name + " es requerido.");
                mostrarMensajeError(campo, "Campo requerido");
            }
        });

        // Mostrar mensajes de error si los hay
        if (errores.length > 0) {
            event.preventDefault(); // Evitar el envío del formulario
            mostrarErrores(errores);
        }
    });

    function mostrarErrores(errores) {
        // Mostrar mensaje de error al principio del formulario
        var mensajeError = document.createElement('p');
        mensajeError.style.color = 'red';
        mensajeError.textContent = "Errores detectados:";
        formulario.insertBefore(mensajeError, formulario.firstChild);

        // Mostrar mensajes de error al lado de cada campo requerido no cumplimentado
        var camposRequeridos = document.querySelectorAll('.requerido');
        camposRequeridos.forEach(function (campo) {
            if (campo.value.trim() === '') {
                mostrarMensajeError(campo, "Campo requerido");
            }
        });

        // Mostrar mensajes de error al lado de cada campo con valor incorrecto
        errores.forEach(function (error) {
            var mensajeError = document.createElement('p');
            mensajeError.style.color = 'red';
            mensajeError.textContent = error;
            formulario.appendChild(mensajeError);
        });
    }

    function mostrarMensajeError(elemento, mensaje) {
        // Mostrar mensaje de error al lado de cada campo requerido no cumplimentado
        var mensajeError = document.createElement('span');
        mensajeError.style.color = 'red';
        mensajeError.textContent = mensaje;
        elemento.parentNode.insertBefore(mensajeError, elemento.nextSibling);
    }
});
