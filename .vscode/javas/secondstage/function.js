var solve = {
    average : function (wine){
        var total = 0;
        var rem  = 0;
        var ans = [];
        for (var a = 0; a < wine.length; a++){
          for (var b = 0; b < wine[a].grade.length; b++){
            total += wine[a].grade[b][1];
          }
          total = total / wine[a].grade.length;
          ans[a] = total;
          total = 0;
          rem = 0;
        }
        return ans;
      },
      rate : function (num ){
        var bat = 0;
        var mat = 0;
        var eat = 0;
        var oat = 0;
        var u = 1;
          for( a = 0; a < num.length; a++){
            for ( print in num[a]){
              console.log(print);
              console.log (num[a][print]);
            }
            bat = num [a]["grade"];
            mat = num [a]["grade"][0][u];
            eat = num [a]["grade"][1][u];
            oat = num [a]["grade"][2][u];
              if ( mat >= 70 ){
                console.log(num[a]["name"], "passed", "Maths");
              }
              else { 
                console.log(num[a]["name"], "failed", "Maths");
              }
              if ( eat >= 70 ){
                console.log(num[a]["name"], "passed", "English");
              }
              else { 
                console.log(num[a]["name"], "failed", "English");
            }
            if ( oat >= 70 ){
              console.log(num[a]["name"], "passed", "others");
            }
            else { 
              console.log(num[a]["name"], "failed", "others");
          }
        
        }
        },
        print : function(ink){
          var a = [];
          var b =  0;
          var e = 0;
          for( c = 0; c < ink.length; c++){
              b = ink[c]["grade"];
              for (d = 0; d < b.length; d++){
                  console.log(b[d]);        
              }   
          }   
      },
        
};

var lol = [
  {
     name: "ikechukwu owen",
     age : 19,
     grade: [
       ["Maths", 99],
       ["English", 90],
       ["Others", 89]
     ],
 },
   {
   name: "Micheal Bowen",
   age : 29,
   grade: [
     ["Maths",  49],
     ["English", 90],
     ["Others", 39],
   ],
 }
];

var lol = [
  {
     name: "ikechukwu owen",
     age : 19,
     grade: [
       ["Maths", 99],
       ["English", 90],
       ["Others", 89]
     ],
 },
   {
   name: "Micheal Bowen",
   age : 29,
   grade: [
     ["Maths",  49],
     ["English", 90],
     ["Others", 39],
   ],
 }
];
console.log(solve.rate(lol));