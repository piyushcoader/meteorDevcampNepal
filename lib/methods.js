/**
 * Created by piyushthapa on 11/5/14.
 */
Meteor.methods({
   'checkUser':function(username){
       var user=Meteor.users.find({username:username}).count();
       return user;
   }
});