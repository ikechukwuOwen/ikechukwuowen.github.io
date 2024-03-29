var h1 = document.querySelector('h1');
    h1.innerHTML = "Insert information";

var foot = document.querySelectorAll('#footer > h4 , time ');
for (var i = 0; i < foot.length; i++) {
    foot[i].style.color = "red";
}

var nee = document.createElement('p');
nee.innerHTML = "Supervised by: Dr. ik";

var note = document.getElementsByClassName('note')[0];
note.appendChild(nee);


var imput = document.querySelector('input[type="text"]');
imput.setAttribute('placeholder', "whats your name?");
