/**
 * Created by piyushthapa on 11/5/14.
 */
Template.todoForm.events({
   'submit #todoForm':function(e,t){
       e.preventDefault();
       var todo={
         description: t.find('#description').value,
         comments:[],
         shares:users,
         commentedAt:null
       };
       Meteor.call('insertTodo',todo,function(err,res){
          if(!err){
              console.log(res);
          }
       });
   },
    'click #addUser':function(e,t){
        e.preventDefault();
        var user=t.find('#usersList').value;
        Meteor.call('checkUser',user,function(err,res){
            if(res){
                users.push(t.find('#usersList').value);
                Session.set('users',users);
                t.find('#usersList').value="";
            }else{
                alert("invalid user");
            }
        });

    },
    'click .removeuser':function(e,t){
       // console.log(this.toString());
        users.splice(users.indexOf(this.toString()),1);
        Session.set('users',users);
    }

});
Template.todoForm.rendered= function () {
  users=[];
    Session.set('users',null);

};

Template.todoForm.helpers({
   'userLists':function(){
       return Session.get('users');
   }
});
Template.posts.events({
   'submit #commentForm':function(e,t){
       e.preventDefault();
       var x=this.comments;

       var cmnt={
           id:this._id,
           by:Meteor.user().profile.name,
           message: t.find('#message').value
       };
       x.push(cmnt);
       Meteor.call('insertComments',this._id,x,function(err,res){

       });
   },
    'click .remove':function(e,t){

        Meteor.call('deletePost',this._id,function(err,res){});
    }
});