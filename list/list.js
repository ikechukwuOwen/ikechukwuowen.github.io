 var add = document.getElementById('sub');
 var list = document.getElementById('list');

 add.onclick = function() {
     var put = document.getElementById('newMovie').value;

     if (put !== '') {

         var li = document.createElement('li');
         li.innerHTML = put;
         list.appendChild(li);
         document.getElementById('newMovie').value = '';
     }

 }