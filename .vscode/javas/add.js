var arraySum = function(numbers) {
    var sums = [];
    var tot = 0;
    for( a = 0; a < numbers.length; a++){
      for( b = 0; b < numbers[a].length; b++){
        tot = tot + numbers[a][b];
      }
      sums[a] = tot ;
        tot = 0;
    }
    //write your code here 
    return sums;
  }
  var numbers = [
    [1, 2, 3, 4],
    [5, 6, 7], 
    [8, 9, 10, 11, 12]
  ];
  
  var tom = arraySum(numbers);
  console.log (tom);