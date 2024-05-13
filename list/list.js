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
 var images = [
     "/media/vlcsnap-2023-02-11-13h30m53s540.png",
     "/media/vlcsnap-2023-02-11-13h33m04s529.png",
     "/media/vlcsnap-2023-07-30-14h39m56s452.png",
     "/media/vlcsnap-2023-07-30-14h48m50s084.png",
     "/media/vlcsnap-2023-08-19-00h27m50s446.png",
     "/media/vlcsnap-2023-08-31-18h11m52s547.png",
     "/media/vlcsnap-2024-01-16-14h11m33s038.png"
 ];
 var currentIndex = 0;
 var incrementIndex = function() {
     currentIndex = currentIndex + 1;
     if (currentIndex > images.length - 1) { currentIndex = 0 }
     return currentIndex;
 }
 var img = document.querySelector('img');
 var next = document.getElementById('next');
 next.onclick = function() {
     img.setAttribute('src', images[incrementIndex(currentIndex)]);
 }