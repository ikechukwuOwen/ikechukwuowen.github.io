var scores = [
 {
    name: "ikechukwu owen",
    age : 19,
    grade: {
      Maths : 99,
      English: 90,
      Others : 89,
    }
},
  {
  name: "Micheal Bowen",
  age : 29,
  grade: {
    Maths : 49,
    English: 90,
    Others : 39,
  }
}
]

var rate = function (num ){
var bat = 0;
var mat = 0;
var eat = 0;
var oat = 0;
  for( a = 0; a < num.length; a++){
    for ( print in num[a]){
      console.log(print);
      console.log (num[a][print]);
    }
    bat = num [a]["grade"];
    mat = num [a]["grade"]["Maths"];
    eat = num [a]["grade"]["English"];
    oat = num [a]["grade"]["Others"];
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
};

var ben = rate(scores);
console.log(ben);
