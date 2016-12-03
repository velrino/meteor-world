import { Template } from 'meteor/templating';


Template.Modal.events({
  'click .leanModal'(event) {
      console.log( render_modal( 'teste' ) );
      //console.log( $(event.currentTarget).data('teste') );
  },
});

Template.Modal.onRendered(function () {
  $('.leanModal').leanModal({
    dismissible: false
  });
});

render_modal = function( response )
{
  if(response == 'teste')
  return response;
};

render_modal_teste()
{
  
}
