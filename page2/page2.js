var h1 = document.querySelector('h1');
    h1.innerHTML = "Insert information";

var foot = document.getElementById('footer');
for (var i = 0; i < foot.children.length; i++) {
    foot.children[i].style.color = "red";
}

var nee = document.createElement('p');
nee.innerHTML = "Supervised by: Dr. ik";

var note = document.getElementsByClassName('note')[0];
note.appendChild(nee);



