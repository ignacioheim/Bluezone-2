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
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarWIF() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarCM() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarDMT() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarAP() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarFinalizados() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.remove('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.add('noMostrar');
}

function mostrarOthers() {
    document.getElementsByClassName("dotWIP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotWIF").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotCM").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotDMT").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotAP").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotFinalizados").parentElement.parentElement.classList.add('noMostrar');
    document.getElementsByClassName("dotOthers").parentElement.parentElement.classList.remove('noMostrar');
}