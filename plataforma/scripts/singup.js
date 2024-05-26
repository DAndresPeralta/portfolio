const form = document.getElementById("singupForm");

const name = document.getElementById("nameS"); //Almaceno en la variable el dato ingresado por el usuario en el form
const email = document.getElementById("emailS");
const password = document.getElementById("passwordS");
const btn = document.getElementById("btnS");

function reset() {
  form.reset();
}

btn.addEventListener("click", (e) => {
  e.preventDefault(); //Con esto evitamos que al apretar el button se actualice la página.

  const Users = JSON.parse(localStorage.getItem("users")) || []; //Lo que decimos aca es: si existe users en LS traerlo y si no existe crearlo [].
  const isUserRegistered = Users.find((user) => user.email === email.value); //Chequeo que el email exista o no en mi arreglo Users proveniente de LocalS.

  // isUserRegistered //Si el usuario con su email ya existe en nuestro array LS nos arroja alerta.
  //   ? alert("Correo electrónico registrado. Ingrese uno válido.")
  //   : Users.push({
  //       //En caso de no existir el usuario, lo pusheamos a nuestro array.
  //       name: name.value,
  //       email: email.value,
  //       password: password.value,
  //     });
  // //Lo cargamos a LS com JSON
  // localStorage.setItem("users", JSON.stringify(Users));
  // alert("Registro exitoso");

  if (isUserRegistered) {
    Swal.fire({
      //Agregamos una alerta con la LIBRERIA SweetAlert
      title: `Correo electrónico registrado. Ingrese uno valido`,
      icon: "error",
      showConfirmButton: false, //Quitamos el boton de confirmacion.
      timer: 3000, // Timer para que desaparezca automaticamente el alerta.
      background: "#007091", //Cambiamos el color de fondo.
    });
  } else {
    //En caso de no existir el usuario, lo pusheamos a nuestro array.
    Users.push({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    //Lo cargamos a LS com JSON
    localStorage.setItem("users", JSON.stringify(Users));
    Swal.fire({
      //Agregamos una alerta con la LIBRERIA SweetAlert
      title: `Registro Exitoso!`,
      icon: "success",
      showConfirmButton: false, //Quitamos el boton de confirmacion.
      timer: 3000, // Timer para que desaparezca automaticamente el alerta.
      background: "#007091", //Cambiamos el color de fondo.
    });
    reset();
  }
});

const u = JSON.parse(localStorage.getItem("users"));
console.log(u);
