import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';
/*GLOBAL HELPERS*/
Template.registerHelper(
  'AUTH', () => {
  return Session.get("auth");
});

Template.registerHelper('compare', function(v1, v2) {
  if (typeof v1 === 'object' && typeof v2 === 'object') {
    return _.isEqual(v1, v2); // do a object comparison
  } else {
    return v1 === v2;
  }
});

callToast = function( text, time, color)
{
  return Materialize.toast(text, time, color);
}
