Tracker.autorun(function(){

    if(Meteor.userId() && Meteor.user() && Meteor.user().username){
        console.log(Meteor.user().username);
         Meteor.subscribe('getTodos',Meteor.userId(),Meteor.user().username);
    }
});