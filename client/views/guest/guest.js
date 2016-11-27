import { Template } from 'meteor/templating';
import { ReactiveVar } from 'meteor/reactive-var';
import { Session } from 'meteor/session';
import { HTTP } from 'meteor/http';


Template.guest.events({
  'click .AddPlaceButton'(event, instance) {
    // increment the counter when button is clicked
    //instance.counter.set(instance.counter.get() + 1);
    //Session.set('teste', 'musica');
    HTTP.get( 'http://jsonplaceholder.typicode.com/posts/1', {}, function( error, response ) {

       if ( error ) {
          console.log( error );
       } else {
          console.log( response );
       }

    });
  },
});
