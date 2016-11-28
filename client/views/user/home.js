import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';

Template.home.onRendered(function () {
  this.$('.sidemenu').sideNav();
  this.$('#modal1').modal();
});

Template.home.events({
  'click .list_users'(event) {
      return Materialize.toast('Clicou' , 4000, 'green');
  },

});
