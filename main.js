
var clickSubmit = document.getElementById('submit_button');

var firstName = document.getElementById('First_Name');

clickSubmit.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ' + 'firstName');
    console.log('The lastName is: ' + 'Last_Name');
    console.log('The email is: ' + 'email');
    console.log('The message is: ' + 'message');
});
