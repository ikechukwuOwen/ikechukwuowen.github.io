var rag = function(num){
    console.log(num);
var sum = 0;
var i = num;
if( num < 0){
while(i < 0){
    sum = sum + i;
    i = i + 1;
}
}
else{
    while(i > 0){
        sum = sum + i;
        i = i - 1;
    }
}
return sum;
}
 
var bis = rag(-10);{
    console.log(bis);
}
