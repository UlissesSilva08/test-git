$(document).on("click","#xtudo",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> X-Tudo: </td> <td class='valor'>"+$("#xtudo").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#xsalada",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> X-Mato: </td> <td class='valor'>"+$("#xsalada").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#xegg",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> X-Ovo: </td> <td class='valor'>"+$("#xegg").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#misto",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Misto: </td> <td class='valor'>"+$("#misto").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#bauru",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Bauru: </td> <td class='valor'>"+$("#bauru").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#coca",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> CocaCola: </td> <td class='valor'>"+$("#coca").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#guarana",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Guaraná: </td> <td class='valor'>"+$("#guarana").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#suco",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Suco: </td> <td class='valor'>"+$("#suco").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#agua",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Água: </td> <td class='valor'>"+$("#agua").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#dolly",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Dolly: </td> <td class='valor'>"+$("#dolly").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#breja",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> Cerveja: </td> <td class='valor'>"+$("#breja").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click","#xburguer",function(){
  var codigo = $("#tabela").html();
  codigo += "<tr> <td> X-Vaca: </td> <td class='valor'>"+$("#xburguer").val()+"</td><tr>";
  $("#tabela").html(codigo);
});

$(document).on("click", "#conta", function(){
  var total = 0;
  $(".valor").each(function(index,element){
      total += parseFloat($(element).text());
  });
  $("#resultado").text("O valor total a pagar é de R$"+total);
});
