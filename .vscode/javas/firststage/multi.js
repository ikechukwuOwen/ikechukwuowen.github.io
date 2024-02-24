// a code for multiplication  //
var mutil = function(abc){
var tion = [];
var mul = 1;

for (a = 0; a < abc.length; a++){
    console.log("multiplication of", abc[a]);
    for(b = 0; b < abc[a].length; b++){
        mul = mul * abc[a][b];
    }
    tion[a] = mul;
    mul = 1;
}
return tion;
}


var tuk =[ 
    [2, 20, 2],
    [4, 40, 4],
];

var tom = mutil (tuk);
console.log(tom);
