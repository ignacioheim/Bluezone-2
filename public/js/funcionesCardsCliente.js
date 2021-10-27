function mostrarNuevaTransaccion() {
    document.getElementById("nuevaTransaccion").classList.remove('noMostrar');
}


function mostrarMenu(id_remove, id_add, clase) {
    console.log(id_remove, id_add, clase)
    document.getElementById(id_remove).classList.remove(clase);
    document.getElementById(id_add).classList.add(clase);
}


function ocultarNuevaTransaccion() {
    document.getElementById("nuevaTransaccion").classList.add('noMostrar');
}

function mostrarNuevaEtapa() {
    document.getElementById("nuevaEtapa").classList.remove('noMostrar');
}

function ocultarNuevaEtapa() {
    document.getElementById("nuevaEtapa").classList.add('noMostrar');
}

function mostrarNuevaTFA() {
    document.getElementById("nuevaTFA").classList.remove('noMostrar');
}

function ocultarNuevaTFA() {
    document.getElementById("nuevaTFA").classList.add('noMostrar');
}