lista = JSON.parse(localStorage.getItem("lista"));

function cargarTabla(array) {
  document.querySelector("#cuerpoTabla").innerHTML = "";

  array.forEach(function (elemento, index) {
    let fila = document.createElement("tr");

    fila.classList = "text-center";

    let datos = `
                <th scope="row">${elemento.alias}</th>
                <td>${elemento.nombre}</td>
                <td>${elemento.poder}</td>
                <td>${elemento.equipo}</td>
                <td>
                <button class="btn btn-warning" onclick='verHeroe(${index})'>Ver</button>
                </td>
                <td><button class="btn btn-danger" onclick="delHeroe(${index})">X</button>
                </td>
               
`;

    fila.innerHTML = datos;

    let cuerpo = document.querySelector("#cuerpoTabla");
    cuerpo.appendChild(fila);
  });
}

cargarTabla(lista);

function verHeroe(id) {
  console.log(id);

  document.querySelector("#title_modal").innerText = lista[id].alias;
  document.querySelector(".card-title").innerText = lista[id].nombre;
  document.querySelector("#imagen_heroe").src = lista[id].imagen;
  document.querySelector("#text_poder").innerText = lista[id].poder;
  document.querySelector("#text_equipo").innerText = lista[id].equipo;
  $("#heroeModal").modal("show");
}

function delHeroe(id) {
  let lista = JSON.parse(localStorage.getItem("lista"));
  let index = lista.findIndex(function (heroe) {
    return heroe.nombre === lista[id].nombre;
  });

  console.log(index);

  let validar = confirm("Está seguro que quiere borrar este Heroe?");
  if (validar) {
    lista.splice(index, 1);
    localStorage.setItem("lista", JSON.stringify(lista));
    cargarTabla(lista);
  }
}
