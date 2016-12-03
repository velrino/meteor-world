import { Template } from 'meteor/templating';
import { request } from "meteor/froatsnook:request";

var optionsObject = {
    columns: [{
        title: 'Real Name',
        data: '_id',
        className : 'blue'
    }],

}

Template.Manutencao.onRendered(function ()
{
  var tabela = $('#tabela_busca').DataTable( {
        ajax: "http://velrino.com:8050/maintenances",
        "order": [[ 0, "asc" ]],
        columns: [
              { data: '_id' },
              { data: 'name' },
              { data: 'type' },
              { data: 'hour_meter_start' },
              { data: 'hour_meter_end' },
          ]
      });
      setInterval( function () {
          tabela.ajax.reload();
      }, 30000 );
});

Template.Manutencao.events({
  'click .leanModal'(event) {
    return render_modal($(event.currentTarget).attr("data-modalType"))
  },
  'submit #modal_form'(event)
  {
      var params = {
        type:  event.target.type.value,
        year:  event.target.year.value,
        hour_meter_start:  event.target.hour_meter_start.value,
        hour_meter_end:  event.target.hour_meter_end.value,
        equipment:  event.target.name.value,
        name:  event.target.name.value,
        creator:  event.target.creator.value
      };

      HTTP.call("POST", "http://velrino.com:8050/maintenance",
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
