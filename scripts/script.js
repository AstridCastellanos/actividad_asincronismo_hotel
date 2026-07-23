let habitaciones = [];

function tiempoDeEspera(ms) {
  return new Promise((resolve, reject) => setTimeout(resolve, ms));
}

async function menu() {
    let opcion = prompt(
        "**************** HOTEL ALEGRÍA ****************\n\n" +
        "1. Registrar nueva habitación\n" +
        "2. Listar habitaciones\n" +
        "3. Buscar habitación por número\n" +
        "4. Cambiar estado de una habitación\n" +
        "5. Eliminar habitación\n" +
        "6. Salir",
    );
 
    switch (opcion) {
      case "1":
        
        break;
      case "2":
       
        break;
      case "3":
       
        break;
      case "4":
       
        break;
      case "5":

        break;
      case "6":
        console.log("Saliendo....");
        return;
      default:
        console.log("Opción no válida!");
    }
    menu();
}


menu();

// Función para mostrar y almacenar las opciones multiples
function subMenu(lista){
    let opcion = prompt(
        `1. ${lista[0]}\n` +
        `2. ${lista[1]}\n` +
        `3. ${lista[2]}\n`
    );

    switch (opcion) {
        case "1":
            return lista[0];
        case "2":
            return lista[1];
        case "3":
            return lista[2];
        default:
            console.log("Opción no válida!");
            return subMenu(lista);
    }
}