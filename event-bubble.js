const mainParent = document.getElementById('event-main-parrent');
const secondParent = document.getElementById('event-second-parrent');
const eventChild = document.getElementById('event-child');

mainParent.addEventListener('click',function(){
    console.log("Mother Parrent Clicked");

});
secondParent.addEventListener('click',function(event){
    console.log("Second Parrent Clicked");
    event.stopPropagation();
});
eventChild.addEventListener('click',function(event){
    console.log(event.target);
    event.stopPropagation();
});