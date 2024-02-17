var t = 20 > 10;
var u = 70 < 10;

console.log ( t ); 
console.log ( u );

var a = "bole";
var b = "hed";
var c = " ";
 
console.log( a + c + b);

var sum = function(x, y){
    return x + y;
}

var fourplustwo = sum(4, 2);
console.log(fourplustwo);

var crazy = function(a, b, c){
    return (a - b) + c;
}

var tom = crazy( 15, 9, 4);
console.log(tom);

var weather = function(temp){
    console.log("The temprature is", temp, "degrees");

if(temp <= 70) {
    console.log("frezzing don't com outside");
}
if(100 > temp > 70) {
    console.log("Good day for activities");
}
if( temp >= 100) {
    console.log("heat wave");
}

}
weather(170);


var num = 0;

while (num <= 10){
    if(num >= 10){
        console.log("correct the number", num, "is greater than 10");
    }
    else{
        console.log("wrong answer the number", num, "is not grater than 10");
    }
    num += 2; 
}

for( var r = 10; r <= 100; r += 10){
    console.log(r);
}