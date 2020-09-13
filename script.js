const email = document.getElementById("email");
const name = document.getElementById("name");


email.addEventListener("input", function (event) {
  if (email.validity.typeMismatch) {
    email.setCustomValidity("I am expecting an e-mail address!");
  } else {
    email.setCustomValidity("");
  }
});

// name.addEventListener("input", function (event) {
//   if (name.validity.valid) {
//     name.setCustomValidity("Pls enter a valid username");
//   } else {
//     name.setCustomValidity("");
//   }
// });