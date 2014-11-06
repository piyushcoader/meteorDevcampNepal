/**
 * Created by piyushthapa on 11/5/14.
 */
Template.signup.events({
   'submit #signupForm':function(e,t){
       e.preventDefault();
       var user={
           username:t.find('#userName').value,
        email:t.find('#userEmail').value,
        password: t.find('#userPassword').value,
           profile:{name:t.find('#userName').value,avatar:null}
       };




       Accounts.createUser(user,function(err,res){
          if(err){
              console.log(err);
          } else{
             Router.go('/');
          }
       });
   }
});