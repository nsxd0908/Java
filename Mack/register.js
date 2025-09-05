function irAPagina() {
      window.location.href = "2.html";
}

const Pass1 = document.getElementById("Ñinpu")
const Pass2 = document.getElementById("Tinput") 
const Button = document.getElementById("Alfredo") 



    function alfredito() {
      let pass = document.getElementById("Ñinpu").value;
      let confirm = document.getElementById("Tinput").value;

      if (pass === "" || confirm === "") {
        document.getElementById("resultado").innerText = "Por favor llena ambos campos.";
      } else if (pass === confirm) {
        document.getElementById("resultado").innerText = "✅ La contraseña coincide.";
      } else {
        document.getElementById("resultado").innerText = "❌ Las contraseñas no coinciden.";
      }
    }

Button.addEventListener("click", alfredito)