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
  for( a = 0; a < scores.length; a++){
    for ( print in scores[a]){
      console.log(print);
      console.log (scores[a][print]);
    }
    bat = scores[a]["grade"];
    mat = scores [a]["grade"]["Maths"];
    eat = scores [a]["grade"]["English"];
    oat = scores [a]["grade"]["Others"];
      if ( mat >= 70 ){
        console.log(scores[a]["name"], "passed", "Maths");
      }
      else { 
        console.log(scores[a]["name"], "failed", "Maths");
      }
      if ( eat >= 70 ){
        console.log(scores[a]["name"], "passed", "English");
      }
      else { 
        console.log(scores[a]["name"], "failed", "English");
    }
    if ( oat >= 70 ){
      console.log(scores[a]["name"], "passed", "others");
    }
    else { 
      console.log(scores[a]["name"], "failed", "others");
  }

}
}

var ben = rate(scores);
console.log(ben);
