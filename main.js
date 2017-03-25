
var clickMe = document.getElementById('clicker'), count = 0;

clickMe.addEventListener('click', function () {
    count += 1;
    var myElement = document.createElement('p');
    myElement.innerHTML = 'This is click number ' + count;
    document.getElementById('content').appendChild(myElement);
});
