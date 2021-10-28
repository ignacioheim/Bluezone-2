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

// Filtros por categoría de cards en DASHBOARD

function mostrarWIP() {
    document.getElementsByClassName("WIPcard").classList.remove('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarWIF() {
    document.getElementsByClassName("WIPcard").classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.remove('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarCM() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.remove('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarDMT() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.remove('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarAP() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.remove('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarFinalizados() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.remove('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('displayNone');
}

function mostrarOthers() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('displayNone');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.remove('displayNone');
}