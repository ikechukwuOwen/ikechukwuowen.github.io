var avg = function(x, y, w){
    console.log("Start", x, "End", y, "Frequency", w);

    var tot = 0;
if (x <= y){
    while (x <= y){
        tot = tot + x;
        x++;
    }}
    
    else{
        while (x >= y){
            tot = tot + y;
            y++;
        }}
    
    return tot / w;
    
}


var tek = avg(0, 5, 5);{
    console.log(tek);
}