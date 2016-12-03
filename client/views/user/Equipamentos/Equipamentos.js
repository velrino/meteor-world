import { Template } from 'meteor/templating';
import { request } from "meteor/froatsnook:request";

var optionsObject = {
    columns: [{
        title: 'Real Name',
        data: '_id',
        className : 'blue'
    }],

}

Template.Equipamentos.onRendered(function ()
{
  var tabela = this.$('#tabela_busca').DataTable( {
        ajax: "http://velrino.com:8050/equipments",
        "order": [[ 0, "asc" ]],
        columns: [
              { data: 'type' },
              { data: 'name' },
              { data: 'brand' },
              { data: 'price' },
              { data: 'hour_meter' },
          ]
      });
      setInterval( function () {
          tabela.ajax.reload();
      }, 30000 );
});

Template.Equipamentos.events({
  'click .leanModal'(event) {
    return render_modal($(event.currentTarget).attr("data-modalType"))
  },
  'submit #modal_form'(event)
  {
    var params = {
      type:  event.target.type.value,
      year:  event.target.year.value,
      hour_meter:  event.target.hour_meter.value,
      price:  event.target.price.value,
      model:  event.target.model.value,
      brand:  event.target.brand.value,
      name:  event.target.name.value,
      creator:  event.target.creator.value
    };

    HTTP.call("POST", "http://velrino.com:8050/equipment",
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
