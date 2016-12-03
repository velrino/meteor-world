import { Template } from 'meteor/templating';

Template.Usuarios.onRendered(function ()
{
  var tabela = $('#tabela_busca').DataTable( {
        ajax: "http://velrino.com:8050/users",
        "order": [[ 0, "asc" ]],
        columns: [
              { data: '_id' },
              { data: 'email' },
              { data: 'name' },
              { data: 'type' },
          ]
      });
      setInterval( function () {
          tabela.ajax.reload();
      }, 30000 );
});

Template.Usuarios.events({
  'click .leanModal'(event) {
    return render_modal($(event.currentTarget).attr("data-modalType"))
  },
  'submit #modal_form'(event)
  {
    var params = {email:  event.target.email.value , password:  event.target.password.value, type:  event.target.type.value, name:  event.target.name.value,creator:  event.target.creator.value };

    HTTP.call("POST", "http://velrino.com:8050/user",
          {data: params},
          function (error, response) {

            if ( error )
              return callToast( 'Falha ao tentar criar' , 5000, 'red');

            if ( !error )
              return callToast( 'Criado com sucesso' , 4000, 'green');
        });
    event.preventDefault();
    event.stopPropagation();
    return false;

  },
});
