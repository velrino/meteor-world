import { Meteor } from 'meteor/meteor';
import { HTTP } from 'meteor/http';

Meteor.startup(() => {

});

Meteor.methods({
  checkTwitter: function ()
  {
  var javas = HTTP.call("GET", "http://velrino.com:8050/user",
  function (error, response){
    if ( error )
    {
      callToast( 'Falha ao se comunicar com a API', 5000, 'red');
      return []
    }

    if ( !error )
    {
      Session.clear("API_Users");
      Session.set("API_Users", JSON.parse(response.content));
      return JSON.parse(response.content);
    }
  });
  }
});
