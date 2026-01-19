$(document).ready(function () {
  let saldo = localStorage.getItem("saldo");

  $("#saldo")
    .hide()
    .text(saldo)
    .fadeIn(800);
});
