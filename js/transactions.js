$(document).ready(function(){

  let transacciones = JSON.parse(localStorage.getItem("transacciones"));
  let lista = $("#lista");

  transacciones.forEach(t => {
    let item = $("<li>")
      .addClass("list-group-item")
      .text(t)
      .hide()
      .fadeIn(600);

    lista.append(item);
  });

});
