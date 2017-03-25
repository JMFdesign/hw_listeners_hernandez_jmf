
var clickMe = document.getElementById('clicker');

clickMe.addEventListener('click', function () {
    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number x</p>';
    document.getElementById('content').appendChild(myElement);
});
