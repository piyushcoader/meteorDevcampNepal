/**
 * Created by piyushthapa on 11/5/14.
 */
Template.posts.helpers({
   'Posts':function(){
        var x= Todos.find().fetch();
       x.sort(function(a,b){return new Date(b.modifiedDate)-new Date(a.modifiedDate)});
       $.each(x,function(indx,data){
           Meteor.subscribe('userInfoById',data.createdBy);
        var userInfo=Meteor.users.findOne({_id:data.createdBy});
           if(userInfo){
               data.name=userInfo.profile.name;
               if(data.comments)
                data.cmntsLength=data.comments.length;
           }
           if(data.createdBy==Meteor.userId()){
               data.isCreator=true;
           }
           data.duration= $.timeago(new Date(data.createdAt));


       });
       return x;

   }
});