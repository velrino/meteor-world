import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';


Template.home.events({
  'click .list_users'(event) {
      return Materialize.toast('Clicou' , 4000, 'green');
  },
});

Template.home.helpers({
  AUTH: function () {
    return Session.get("auth");
  }
});
