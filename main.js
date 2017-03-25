
var clickSubmit = document.getElementsByClass('submit')[0];

clickSubmit.addEventListener('click', function (eventInfo) {
    eventInfo.preventDefault();
    console.log(eventInfo);

    var myElement = document.createElement('article');
    myElement.innerHTML = '<p>This is click number x</p>';
    document.getElementById('content').appendChild(myElement);
});
