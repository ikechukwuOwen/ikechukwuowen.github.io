var students = [ 
    ["Mary", 10], 
    ["Barbara", 11], 
    ["David", 12], 
    ["Alex", 11] 
  ];

  var printStudents = function(students){
    for(var i = 0; i < students.length; i++){
      console.log("Student " + i + ":");
      console.log(students[i][0]);
      console.log(students[i][1]);
    }
  }

console.log(students[0][1]);
  