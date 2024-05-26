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
    alert("Correo electrónico registrado. Ingrese uno válido.");
  } else {
    //En caso de no existir el usuario, lo pusheamos a nuestro array.
    Users.push({
      name: name.value,
      email: email.value,
      password: password.value,
    });
    //Lo cargamos a LS com JSON
    localStorage.setItem("users", JSON.stringify(Users));
    alert("Registro exitoso");
    reset();
  }
});

const u = JSON.parse(localStorage.getItem("users"));
console.log(u);
