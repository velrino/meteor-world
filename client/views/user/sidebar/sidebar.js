Template.Sidebar.events({
  'click .list_users'(event) {
      return Materialize.toast('Clicou' , 4000, 'green');
  },
});


Template.Sidebar.onRendered(function () {
  this.$('.sidemenu').sideNav(
    {
        menuWidth: 240,
        edge: 'left',
        closeOnClick: false
    }
  );
});
