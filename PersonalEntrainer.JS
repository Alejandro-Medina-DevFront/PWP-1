const nombre = document.querySelector('#ctc_nombre')
const enviar = document.querySelector('#ctc_enviar_nombre')
const opcion_1 = document.querySelector('#opcion_1')
const opcion_2 = document.querySelector('#opcion_2')
const opcion_3 = document.querySelector('#opcion_3')
const objetivo = document.getElementsByClassName('opcion_de_mejora')
const objetivo_box = document.querySelector('#ctc_objetivo')
const preg_objetivo = document.querySelector('#pregunta_objetivo')
const overlay = document.querySelector('.overlay')
const btn_cerrar = document.querySelector('#button')
const contactame = document.querySelector('#contactame')
const conoceme = document.querySelector('#conoceme')
const ver_mas = document.querySelector('#ver_mas')
const articulos_añadir = document.querySelector('.articulos_del_blog')
const articulos_añadir2 = document.querySelector('.articulos_del_blog2')
// const = document.querySelector('')

//VARIABLES


//FUNCIONES

function comprobacion() {
    const nombre_valor = nombre.value.trim()
    const regaño = document.querySelector("#regaño")
    if (nombre_valor === "") {
        regaño.textContent = "Por favor, esciba su nombre"
    } else if (/\d/.test(nombre_valor)) {
        regaño.textContent = "El nombre no debe contener numeros"
    } else if (nombre_valor.length > 35) {
        regaño.textContent = "El nombre no puede contener mas de 35 caracteres"
    } else if (nombre_valor.length < 3) {
        regaño.textContent = "El nombre debe contener mas de 3 caracteres"
    } else {
        setTimeout(function () { regaño.textContent = "" }, 20)
        setTimeout(function () { objetivo_box.classList.remove("display_none") }, 0)
        setTimeout(function () {

            opcion_2.classList.remove("invisible")
            opcion_2.classList.add("visible")
        }, 110)
        setTimeout(function () {
            opcion_1.classList.remove("invisible")
            opcion_1.classList.add("visible")
        }, 110)
        setTimeout(function () {
            opcion_3.classList.remove("invisible")
            opcion_3.classList.add("visible")
        }, 110)
        setTimeout(function () {
            preg_objetivo.classList.remove("invisible")
            preg_objetivo.classList.add("visible")
        }, 100)
    }

}

function cerrar() {
    contactame.classList.add("display_none")
    overlay.classList.remove("invisible")
    overlay.classList.add("visible")

}

function cerrar_overlay() {
    overlay.classList.remove("visible")
    overlay.classList.add("invisible")
}

function mas_articulos() {

    

    if (ver_mas.textContent === "+ Ver más") {
        ver_mas.textContent = "Ver menos"
        setTimeout(function () { articulos_añadir.classList.remove("display_none") }, 0)
    setTimeout(function () { articulos_añadir.classList.remove("invisible") }, 110)
    setTimeout(function () { articulos_añadir.classList.add("visible") }, 110)
    setTimeout(function () { articulos_añadir2.classList.remove("display_none") }, 0)
    setTimeout(function () { articulos_añadir2.classList.remove("invisible") }, 110)
    setTimeout(function () { articulos_añadir2.classList.add("visible") }, 110)
    } else if (ver_mas.textContent === "Ver menos") { ver_mas.textContent = "+ Ver más" 
        setTimeout(function () { articulos_añadir.classList.add("display_none") }, 1000)
        setTimeout(function () { articulos_añadir.classList.add("invisible") }, 0)
        setTimeout(function () { articulos_añadir.classList.remove("visible") }, 0)
        setTimeout(function () { articulos_añadir2.classList.add("display_none") }, 1000)
        setTimeout(function () { articulos_añadir2.classList.add("invisible") }, 0)
        setTimeout(function () { articulos_añadir2.classList.remove("visible") }, 0)
    }
}

//FUNCIONES
//PROCESOS



enviar.addEventListener('click', comprobacion)

nombre.addEventListener('input', function () {
    this.value = this.value.replace(/[^a-zA-ZáéíóúÁÉÍÓÚñÑ\s]/g, "")
})

opcion_1.addEventListener('click', cerrar)
opcion_2.addEventListener('click', cerrar)
opcion_3.addEventListener('click', cerrar)

btn_cerrar.addEventListener('click', cerrar_overlay)

ver_mas.addEventListener('click', mas_articulos)

//PROCESOS

//ANIMACIONES AOS

AOS.init({
    duration: 800,
    easing: 'ease-in-out',
    once: false,
    mirror: true
});
