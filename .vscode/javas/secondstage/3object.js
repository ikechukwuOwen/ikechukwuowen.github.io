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
]

var average = function (wine){
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
};

var getAverage = average(lol);
console.log(getAverage);
