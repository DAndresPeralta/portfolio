// Este addEvent captura cuando el cursor pasa sobre el logo.
let logo = document.querySelector(".logo");
logo.addEventListener("mouseover", () => console.log("mouseover-logo"));
// Este addEvent captura cuando el cursor pasa sobre el nav.
let nav = document.querySelector("ul");
nav.addEventListener("mouseover", () => console.log("mouseover-nav"));
// Este addEvent captura cuando el cursor hace click sobre Contacto.
let btn = document.querySelector(".btn");
btn.addEventListener("mousedown", () => console.log("mouseup-btn"));

//Con el evendo aplicado a Window registramos cuando hacemos scroll
window.addEventListener("scroll", () => console.log("Scroll"));

//Mejorar con Bootstrap
let singup = document.querySelector("#singup");
singup.addEventListener("click", () => {
  console.log("Click");

  let msg = document.createElement("div");
  msg.className = "alert alert-success alert-dismissible fade show";
  msg.setAttribute("role", "alert");
  msg.innerHTML = "Ingresaste a nuestro sistema";
});
