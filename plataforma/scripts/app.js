//-----------------------------SINGUP----------------------------------

const name = document.getElementById("nameS"); //Almaceno en la variable el dato ingresado por el usuario en el form
const email = document.getElementById("emailS");
const password = document.getElementById("passwordS");
const btn = document.getElementById("btnS");

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
  }
});

// const U = JSON.parse(localStorage.getItem("users"));
// console.log(U); // Reviso el interior del localStorage

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
    alert("Usuario o contraseña incorrectos");
  } else {
    alert(`Bienvenido ${validUser.name}`);
    localStorage.setItem("loginSuccess", JSON.stringify(validUser)); //Almacenamos los inicios de sesion.
  }
});
