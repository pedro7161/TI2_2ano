$(function () {
  $("#menu").load("menu.html");

  $("#btnjquery").click(function (evt) {
    evt = evt ? evt : window.event;
    evt.preventDefault();
    let num = parseInt($("#txtnum").val());
    if (num !== "undefined") {
      $("#txtdobro").val(2 * num);
    } else $("#txtdobro").val("Número Inválido");

    //alert(evt.target.id);
  });

  $("#btnajax").click(function (evt) {
    evt = evt ? evt : window.event;
    evt.preventDefault();
    let num = parseInt($("#txtnum").val());
    num = typeof num !== "undefined" ? num : 0;
    $.ajax({
      url: "calculo.php",
      type: "post",
      dataType: "json",
      data: { n: num },
      success: function (dados) {
        console.log(dados);
        $("#txtdobro").val(dados.dobro);
      },
      error: function () {
        alert("Erro de envio");
      },
    });
  });
});
