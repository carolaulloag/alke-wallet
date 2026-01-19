$(document).ready(function(){

  $(".btn-primary").click(function(){

    const user = $("#user").val();
    const pass = $("#pass").val();

    //functional credentials, no backend
    if(user === "R_ariel" && pass === "2026"){

      localStorage.setItem("saldo", 100000);
      localStorage.setItem("transacciones", JSON.stringify([]));
      window.location.href = "menu.html";

    } else {
      $("#error").text("Usuario o contraseña incorrectos");
    }

  });

});
