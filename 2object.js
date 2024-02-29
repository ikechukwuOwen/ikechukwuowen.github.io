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

for ( print in scores[0]){
  console.log(print);
  console.log (scores[0][print]);
}