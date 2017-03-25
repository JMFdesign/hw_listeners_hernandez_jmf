//Listening for MouseOver - Increase font-size of h2 when event occurs

var growTitle = document.getElementsByTagName('h2')[0];

growTitle.addEventListener('mouseover', function() {
    growTitle.className = 'growing';
});

//
