 var add = document.getElementById('sub');
 var list = document.getElementById('ollist');

    add.onclick = function() {
        var put = document.getElementById('newmovie').value;
        
        var li = document.createElement('li');
        li.innerHTML = put;
        list.appendChild(li);
        document.getElementById('newmovie').value = '';

    }

    