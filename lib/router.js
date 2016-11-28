import { Session } from 'meteor/session';

function checkAuth()
{
  if(Session.get('auth')) return true;
  return Router.go('/');
}
function checkGuest()
{
  if(!Session.get('auth')) return true;
  return Router.go('/dashboard');
}
/*
  GUEST
*/
Router.route('/', function () {
  checkGuest();
  return this.render('guest');
});
/*
  AUTH
*/
Router.route('/dashboard', function () {
  checkAuth();
  return this.render('home');
});

Router.route('/logout', function () {
  checkAuth();
  Session.clearPersistent();
  return Router.go('/');
});
