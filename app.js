/*
Web Héroes
--------------

Crear una web de superhéroes donde se carguen los datos de un héroe y se pueda ver en una tabla los héroes cargados.
Los requerimientos son los siguientes:

- La web debe tener las siguientes páginas:
 - **Home** (principal) con un mensaje de bienvenida
 - **Cargar** con un formulario donde se agreguen los siguientes datos: Alias, nombre, poder, equipo, imagen(url de la imagen)
 - **Tabla** donde muestre una tabla dinámica con los datos de los héroes (la imagen no es necesario que aparezca)
- Se debe poder navegar desde un navbar que debe estar presente en todas las páginas.
- Se puede crear un archivo js para cada página
- Los datos deben guardarse en localStorage para poder extraerlos desde allí de ser necesario.
*/

let lista = JSON.parse(localStorage.getItem("lista")) || [];

class heroe {
  constructor(alias, nombre, poder, equipo, imagen) {
    this.alias = alias;
    this.nombre = nombre;
    this.poder = poder;
    this.equipo = equipo;
    this.imagen = imagen;
  }
}


function addHeroe() {
  let alias = document.querySelector("#aliasText");
  let nombre = document.querySelector("#nombreText");
  let poder = document.querySelector("#poderText");
  let equipo = document.querySelector("#equipoText");
  let imagen = document.querySelector("#imagenText");

  //Si falta algun dato -> error: faltan datos;
  //sino: si tiene todos los datos, verificar que ya no esté
  //si está-> alert ya esta agregado
  // si no está: verificar si tiene imagen
  // si tiene imagen: push
  //si no tiene imagen: agregar link not found + push
  if (!alias.value || !nombre.value || !poder.value || !equipo.value) {
    alert("Faltan datos");
    alias.focus();
  } else {
    let verify = verifyContent(alias.value);
    if (verify) {
      alert("Este Heroe ya se ecuentra en su lista");
    } else {
      if (imagen.value) {
        lista.push(
          new heroe(
            alias.value.toUpperCase(),
            nombre.value.toUpperCase(),
            poder.value.toUpperCase(),
            equipo.value.toUpperCase(),
            imagen.value
          )
        );
        localStorage.setItem("lista", JSON.stringify(lista));
      } else {
        imagen.value =
          "https://bitsofco.de/content/images/2018/12/Screenshot-2018-12-16-at-21.06.29.png";
        lista.push(
          new heroe(
            alias.value.toUpperCase(),
            nombre.value.toUpperCase(),
            poder.value.toUpperCase(),
            equipo.value.toUpperCase(),
            imagen.value
          )
        );
        localStorage.setItem("lista", JSON.stringify(lista));
      }
    }
  }
  updateLista();
}

function updateLista() {
  document.querySelector("#aliasText").value = " ";
  document.querySelector("#aliasText").focus();
  document.querySelector("#nombreText").value = " ";
  document.querySelector("#poderText").value = " ";
  document.querySelector("#equipoText").value = " ";
  document.querySelector("#imagenText").value = " ";
  lista = JSON.parse(localStorage.getItem("lista"));
}

function verifyContent(alias) {
  let verify = lista.find(function (heroe) {
    return heroe.alias.toLowerCase() === alias.toLowerCase();
  });
  if (verify) {
    return true;
  } else {
    return false;
  }
}
