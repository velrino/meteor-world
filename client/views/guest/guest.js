import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';

function toastRequest( text, time, color)
{
  return Materialize.toast(text, time, color);
}

function makeLogin( obj )
{
  console.log(obj);
}

Template.guest.helpers({
  UserEmail: function () {
    return Session.get('auth').email;
  }
});

Template.guest.events({
  'submit .login_form'(event) {
    // Prevent default browser form submit
    var auth = {email:  event.target.email.value , password:  event.target.password.value };
    HTTP.call("POST", "http://velrino.com:8050/auth/login",
          {data: auth},
          function (error, response) {

            if ( error )
              return toastRequest( JSON.parse(response.content).error.message , 5000, 'red');

            if ( !error )
            {
              Session.setPersistent('auth', JSON.parse(response.content));
              toastRequest( 'Login com sucesso' , 4000, 'green');
              return document.location.reload(true);
            }

        });
    event.preventDefault();
    event.stopPropagation();
    return false;

  },
});
