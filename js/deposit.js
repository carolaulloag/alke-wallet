
$(document).ready(function(){

  $(".btn-success").click(function(){
    let monto = parseInt($("#monto").val());
    let saldo = parseInt(localStorage.getItem("saldo"));

    if(monto > 0){
      saldo += monto;
      localStorage.setItem("saldo", saldo);

      alert("Depósito realizado con éxito 💜");
      window.location.href = "menu.html";
    } else {
      alert("Ingresa un monto válido");
    }
  });

});

