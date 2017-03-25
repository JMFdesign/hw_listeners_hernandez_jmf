//Listening for MouseOver - Increase font-size of h2 when event occurs

var growTitle = document.getElementsByTagName('h2')[0];

growTitle.addEventListener('mouseover', function() {
    growTitle.className = 'growing';
});

//Listening for Click - Log Secret Message when "Read More" is clicked

var secretMessage = document.getElementsByClassName('links')[0].children[0];

secretMessage.addEventListener('click', function(eventInfo) {
    eventInfo.preventDefault();
    console.log('Just keep swimming, just keep swimming... Swimming, swimming, swimming...');
});

// Listening for Double Click - Change font and size of entry <p> when event occurs

var colorChange1 = document.getElementsByTagName('p')[1];

colorChange.addEventListener('dblclick', function() {
    colorChange.className = 'changing';
});
