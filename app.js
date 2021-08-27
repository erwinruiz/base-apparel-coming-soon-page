const input = document.querySelector(".email_input");
const button = document.querySelector(".arrow_icon");
const errorMessage = document.querySelector(".error_message");

button.addEventListener("click", () => {
  const enteredEmail = input.value;

  const reg =
    /^(([^<>()[\]\\.,;:\s@\"]+(\.[^<>()[\]\\.,;:\s@\"]+)*)|(\".+\"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
  if (!enteredEmail.match(reg)) {
    errorMessage.style["display"] = "initial";
    input.style["border"] = "1px solid var(--SoftRed)";
    return;
  }

  errorMessage.style["display"] = "none";
  input.style["border"] = "1px solid var(--DesaturatedRed)";
});
