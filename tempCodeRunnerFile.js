var Pop = function(Grade, Num){
this.Grade = Grade;
this.Num = Num;
this.first = function(){
 this.Num++;
} 
}

var gou1 = new Pop("ruby", 2);
gou1.first();



var gou2 = new Pop("python", 3);
gou2.first();
gou2.first();


for ( print in gou1, gou2){
console.log(print);
console.log(gou1[print], gou2[print]);
};