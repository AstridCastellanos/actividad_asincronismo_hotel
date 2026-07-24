let habitaciones = [];
let tipos = ["Sencilla","Doble","Suite"];
let estados = ["Libre","Ocupada","Limpieza"];

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
        await registrar();
        break;
      case "2":
        listar();
        break;
      case "3":
        await buscar();
        break;
      case "4":
       await actualizar();
        break;
      case "5":
        eliminar();
        break;
      case "6":
        console.log("Saliendo....");
        return;
      default:
        console.log("Opción no válida!");
    }
    menu();
}

// Función para mostrar y almacenar las opciones multiples
function subMenu(lista){
    let opcion = prompt(
        `1. ${lista[0]}\n` +
        `2. ${lista[1]}\n` +
        `3. ${lista[2]}\n` +
        `\nElija un opción`
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

//Función para registrar nuevas habitaciones
async function registrar() {

    let numero = Number(prompt("Número de la habitación:"));
    let tipo = subMenu(tipos);
    let precioNoche = parseFloat(prompt("Precio por noche:"));
    let estado = subMenu(estados);
    let huesped = prompt("Nombre del huésped (vacío si está libre):");

    let habitacion = {
        numero,
        tipo,
        precioNoche,
        estado,
        huesped,
    };

    console.log("Validando información de la habitación...");

    await tiempoDeEspera(2000);

    habitaciones.push(habitacion);
    console.log(`Habitación #${numero} registrada!`);
}

function listar() {
  console.log("************** Habitaciones **************");
  habitaciones.forEach((habitacion) => {
    let huesped;
    if(habitacion.huesped == ""){
        huesped = "N/A";
    }else {
        huesped = habitacion.huesped;
    }
    console.log(
      `Número: ${habitacion.numero} | Tipo: ${habitacion.tipo.toUpperCase()} | Precio por Noche: Q. ${habitacion.precioNoche} | Estado: ${habitacion.estado.toUpperCase()} | Huésped: ${huesped.toUpperCase()}`
    );
  });
}

//Función para buscar habitaciones por número
async function buscar() {
  let numero = parseInt(prompt("Número de habitación a buscar:"));
  console.log("Buscando en base de datos...");

  await tiempoDeEspera(3000);

  let habitacionBuscada = habitaciones.find((habitacion) => {
    return habitacion.numero === numero;
  });
  if (habitacionBuscada) {
    let huesped;
    if(habitacionBuscada.huesped == ""){
        huesped = "N/A";
    }else {
        huesped = habitacionBuscada.huesped;
    }
    console.log("************* Habitación encontrada *************");
    console.log(
      `Número: ${habitacionBuscada.numero} | Tipo: ${habitacionBuscada.tipo.toUpperCase()} | Precio por Noche: Q. ${habitacionBuscada.precioNoche} | Estado: ${habitacionBuscada.estado.toUpperCase()} | Huésped: ${huesped.toUpperCase()}`
    );
  } else {
    console.log("Habitación no encontrada...");
  }
}

//Función para actualizar estado de una habitación
async function actualizar() {
  let numero = parseInt(prompt("Número de habitación a buscar:"));
  console.log("Buscando en base de datos...");

  await tiempoDeEspera(3000);

  let habitacionBuscada = habitaciones.find((habitacion) => {
    return habitacion.numero === numero;
  });
  if (habitacionBuscada) {
    let nuevoEstado = prompt("Ingrese el nuevo estado:");
    habitacionBuscada.estado = nuevoEstado;
    console.log("Estado actualizado: " + habitacionBuscada.numero);
  } else {
    console.log("Habitación no encontrada...");
  }
}

// Función para eliminar habitaciones por número
function eliminar() {
  let numero = parseInt(prompt("Número de habitación a eliminar:"));

  let indice = habitaciones.findIndex((habitacion) => {
    return habitacion.numero === numero;
  });

  if (indice !== -1) {
    habitaciones.splice(indice, 1);
    console.log("Habitación eliminada: " + numero);
  } else {
    console.log("Habitación no encontrada...");
  }
}

menu();