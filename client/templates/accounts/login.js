/**
 * Created by piyushthapa on 11/5/14.
 */
Template.login.events({
   'submit #loginForm':function(e,t){
       e.preventDefault();
       var email= t.find('#userEmail').value,
           password= t.find('#userPassword').value;
       Meteor.loginWithPassword(email,password,function(err,temp){
            if(!err){
                Router.go('/');
            }
           else{
                $('#logError').text(err.reason);
            }
       });

   }
});