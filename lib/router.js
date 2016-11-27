Router.route('/', function () {
  this.render('guest');
});

Router.route('/home', function () {
  console.log("HOMEEEEE");
  this.render('home');
});
