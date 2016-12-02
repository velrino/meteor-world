import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';
/*GLOBAL HELPERS*/
Template.registerHelper(
  'AUTH', () => {
  return Session.get("auth");
  }
);
