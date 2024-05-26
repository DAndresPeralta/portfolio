const loginform = document.getElementById("loginForm"); //Traigo informacion de los dos formulario para hacer los Reset.

function reset() {
  //Con esta funcion se borran los campos del formulario al hacer clicke en el button.
  loginform.reset();
}

//-----------------------------LOGIN----------------------------------

const username = document.getElementById("username");
const pass = document.getElementById("pass");

const button = document.getElementById("btn");

button.addEventListener("click", (e) => {
  e.preventDefault();
  //Traigo los datos del localStorage
  const Users = JSON.parse(localStorage.getItem("users")) || [];
  //Valido los datos
  const validUser = Users.find(
    (user) => user.email === username.value && user.password === pass.value
  ); //Nos da un valor TRUE solo si existen y coinciden email y password.
  if (!validUser) {
    //!validUser significa si es False, es decir, no coinciden los datos anteriores.
    Swal.fire({
      //Agregamos una alerta con la LIBRERIA SweetAlert
      title: `Correo o contraseña incorrectos`,
      icon: "error",
      showConfirmButton: false, //Quitamos el boton de confirmacion.
      timer: 3000, // Timer para que desaparezca automaticamente el alerta.
      background: "#007091", //Cambiamos el color de fondo.
    });
  } else {
    Swal.fire({
      //Agregamos una alerta con la LIBRERIA SweetAlert
      title: `Bienvenido ${validUser.name}`,
      icon: "success",
      showConfirmButton: false, //Quitamos el boton de confirmacion.
      timer: 3000, // Timer para que desaparezca automaticamente el alerta.
      background: "#007091", //Cambiamos el color de fondo.
    });
    localStorage.setItem("loginSuccess", JSON.stringify(validUser)); //Almacenamos los inicios de sesion.
    reset();
  }
});

const u = JSON.parse(localStorage.getItem("users"));
console.log(u);
