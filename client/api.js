import { HTTP } from 'meteor/http';


API_Users = function()
{
  return HTTP.call("GET", "http://velrino.com:8050/user",
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
      return true;
    }
  });
}

API_Equipaments = function()
{
  $.get("http://velrino.com:8050/equipment", function(data, status)
  {
      return data;
  });
}
