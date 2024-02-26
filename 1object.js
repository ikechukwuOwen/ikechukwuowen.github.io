
var print = function(ink){
    var a = [];
    var b =  0;
    var e = 0;
    for( c = 0; c < ink.length; c++){
        b = ink[c]["grades"];
        for (d = 0; d < b.length; d++){
            console.log(b[d]);        
        }
        a[c] = b[c][d];
    }
    return a;
    
}


    var student = [
        { 
          name: "Mary", 
          age: 10, 
          grades: [90, 88, 95]
        }, 
        {
          name: "Joseph", 
          age: 11, 
          grades: [80, 100, 90, 96]
        }
      ];
 var get = print(student);
 console.log( get);
