
$(document).ready(function(){

  $(".btn-warning").click(function(){
    let monto = parseInt($("#monto").val());
    let saldo = parseInt(localStorage.getItem("saldo"));

    if(monto > 0 && monto <= saldo){
      saldo -= monto;
      localStorage.setItem("saldo", saldo);

      let transacciones = JSON.parse(localStorage.getItem("transacciones"));
      transacciones.push("Envío de $" + monto);
      localStorage.setItem("transacciones", JSON.stringify(transacciones));

      alert("Transferencia realizada 💜");
      window.location.href = "menu.html";
    } else {
      alert("Saldo insuficiente");
    }
  });

});
