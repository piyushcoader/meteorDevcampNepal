/**
 * Created by piyushthapa on 11/5/14.
 */
Todos=new Meteor.Collection('todos');
Meteor.methods({
    'insertTodo':function(todos){
        todos.createdAt=new Date();
        todos.createdBy=Meteor.userId();
        todos.modifiedDate=new Date();
        return Todos.insert(todos);
    },
    'updateTodos':function(todos){
        todos.modifiedDate=new Date();

        return Todos.update({_id:todos.id},{$set:{title:todos.name,description:todos.description,shares:todos.shares}});
    },
    'insertComments':function(id,comments){
        console.log(id);
      return Todos.update({_id:id},{$set:{comments:comments,modifiedDate:new Date()}});
    },
    'deletePost':function(id){
        return Todos.remove({_id:id});
    }
});