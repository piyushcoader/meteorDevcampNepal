/**
 * Created by piyushthapa on 11/5/14.
 */
Meteor.publish('getTodosById',function(id){

});
Meteor.publish('getTodos',function(id,username){
    console.log(id+'\n'+username);

  return Todos.find({$or:[{createdBy:id},{shares:username}]});
});
Meteor.publish('userInfoById',function(id){
  return Meteor.users.find({_id:id});
});