let miNombre = "Victoria"
let miApellido = "Ullio Gamboa"

let nombreUsuario = prompt("Ingrese su nombre:")
let apellidoUsuario = prompt("Ingrese su apellido completo:")
if (nombreUsuario != "" || apellidoUsuario != "") {
    alert("Bienvenida/o " + nombreUsuario + " " + apellidoUsuario)
} else {
    alert("Datos no concluyentes")
}

let savedPassword = "holamundo"
for (i = 0; i < 2; i++) {
    let password = prompt("Escribe tu contraseña")
    if (savedPassword === password) {
        alert("Hola cómo estás?")
        break
    }
}