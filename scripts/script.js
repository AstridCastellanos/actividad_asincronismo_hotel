
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
