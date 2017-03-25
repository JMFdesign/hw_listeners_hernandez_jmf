
var clickSubmit = document.getElementById('submit_button');

var firstName = document.getElementById('First_Name');
var lastName = document.getElementById('Last_Name');
var emailAddress = document.getElementById('Email');
var theMessage = document.getElementById('Message');

clickSubmit.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
    console.log('The firstName is: ' + firstName.value);
    console.log('The lastName is: ' + lastName.value);
    console.log('The email is: ' + emailAddress.value);
    console.log('The message is: ' + theMessage.value);
});
