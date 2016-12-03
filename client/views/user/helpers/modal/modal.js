import { Template } from 'meteor/templating';


Template.Modal.events({
  'click .leanModal'(event) {
    return render_modal($(event.currentTarget).attr("data-modalType"))
  },
});

Template.Modal.onRendered(function () {
  $('.leanModal').leanModal({
    dismissible: false
  });
});

render_modal = function( response )
{
  if(response == 'createUser') return render_modal_createUser();
  if(response == 'createEquipment') return render_modal_createEquipment();
  if(response == 'createMaintenance') return render_modal_createMaintenance();

  return true;
};

render_modal_createUser = function()
{
  var render="";
  render += "            <div class=\"row\">";
  render += "               <h4>Criar Usuário<\/h4>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"name\" name=\"name\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"name\">Nome<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "                     <input id=\"creator\" name=\"creator\" value=\""+Session.get("auth")._id+"\" type=\"hidden\" class=\"validate\">";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"password\" type=\"password\" class=\"validate\" required>";
  render += "                     <label for=\"password\">Senha<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"email\" type=\"email\" class=\"validate\" required>";
  render += "                     <label for=\"email\">E-mail<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <select name=\"type\" class=\"browser-default\" required>";
  render += "                        <option disabled selected value=\"\">Escolha o tipo de usuário<\/option>";
  render += "                        <option value=\"admin\"> Administrador<\/option>";
  render += "                        <option value=\"user\">Operador<\/option>";
  render += "                     <\/select>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "            <\/div>";
  render += "            <div class=\"row\">";
  render += "              <div class=\"input-field col s12\">";
  render += "                <button type=\"submit\" href=\"#\" class=\"btn waves-effect waves-light col s12 cyan createUserSubmit\"> Criar <\/button>";
  render += "              <\/div>";
  render += "            <\/div>";

  $(".modal_body").html( render );
  return true;
};

render_modal_createEquipment = function()
{
  var render="";
  render += "            <div class=\"row\">";
  render += "               <h4>Criar Equipamento<\/h4>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"name\" name=\"name\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"name\">Equipamento<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"brand\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"brand\">Marca<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"model\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"model\">Modelo<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "                     <input id=\"creator\" name=\"creator\" value=\""+Session.get("auth")._id+"\" type=\"hidden\" class=\"validate\">";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"year\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"year\">Ano<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <select name=\"type\" class=\"browser-default\" required>";
  render += "                        <option disabled selected value=\"\">Escolha o tipo de equipamento<\/option>";
  render += "                        <option value=\"Içamento e Elevação\"> Içamento e Elevação<\/option>";
  render += "                        <option value=\"Linha Leve\"> Linha Leve<\/option>";
  render += "                        <option value=\"Acessórios\"> Acessórios <\/option>";
  render += "                        <option value=\"Asfalto\"> Asfalto <\/option>";
  render += "                        <option value=\"Caminhões\"> Caminhões <\/option>";
  render += "                        <option value=\"Outros\"> Outros<\/option>";
  render += "                        <option value=\"Drones (Topografia e Inspeção)\"> Drones (Topografia e Inspeção) <\/option>";
  render += "                        <option value=\"Terraplanagem\"> Terraplanagem <\/option>";
  render += "                     <\/select>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"price\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"price\">Custo<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"hour_meter\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"hour_meter\">Horímetro<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";


  render += "            <\/div>";
  render += "            <div class=\"row\">";
  render += "              <div class=\"input-field col s12\">";
  render += "                <button type=\"submit\" href=\"#\" class=\"btn btn-large waves-effect waves-light col s12 cyan createEquipmentSubmit\"> Criar <\/button>";
  render += "              <\/div>";
  render += "            <\/div>";

  $(".modal_body").html( render );
  return true;
};

render_modal_createMaintenance = function()
{
  var render="";
  render += "            <div class=\"row\">";
  render += "               <h4>Criar Manutenção<\/h4>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"name\" name=\"name\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"name\">Equipamento<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"brand\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"brand\">Marca<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";
  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"model\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"model\">Modelo<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "                     <input id=\"creator\" name=\"creator\" value=\""+Session.get("auth")._id+"\" type=\"hidden\" class=\"validate\">";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"year\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"year\">Ano<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <select name=\"type\" class=\"browser-default\" required>";
  render += "                        <option disabled selected value=\"\">Escolha o tipo de usuário<\/option>";
  render += "                        <option value=\"Abastecimento Diesel\"> Abastecimento Diesel<\/option>";
  render += "                        <option value=\"Filtro combustível\"> Filtro combustível<\/option>";
  render += "                        <option value=\"Filtro de Ar\"> Filtro de Ar<\/option>";
  render += "                        <option value=\"Filtro hidráulico\"> Filtro hidráulico<\/option>";
  render += "                        <option value=\"Fluído arrefecimento\"> Fluído arrefecimento<\/option>";
  render += "                        <option value=\"Graxa\"> Graxa<\/option>";
  render += "                        <option value=\"Troca de óleo hidráulico\"> Troca de óleo hidráulico<\/option>";
  render += "                        <option value=\"Troca de óleo motor\">Troca de óleo motor<\/option>";
  render += "                     <\/select>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"price\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"price\">Custo<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"hour_meter_start\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"hour_meter_start\">Horímetro Inicial<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "               <div class=\"row\">";
  render += "                  <div class=\"input-field col s12\">";
  render += "                     <input id=\"hour_meter_end\" type=\"text\" class=\"validate\" required>";
  render += "                     <label for=\"hour_meter_end\">Horímetro Final<\/label>";
  render += "                  <\/div>";
  render += "               <\/div>";

  render += "            <\/div>";
  render += "            <div class=\"row\">";
  render += "              <div class=\"input-field col s12\">";
  render += "                <button type=\"submit\" href=\"#\" class=\"btn btn-large waves-effect waves-light col s12 cyan createMaintenanceSubmit\"> Criar <\/button>";
  render += "              <\/div>";
  render += "            <\/div>";

  $(".modal_body").html( render );
  return true;
};
