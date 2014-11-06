/**
 * Created by piyushthapa on 11/5/14.
 */
Template.loggedIn.events({
   'click #logout':function(e,t){
       e.preventDefault();
       Meteor.logout(function(err,res){
           if(!err)
            Router.go('/');
       });
   }
});