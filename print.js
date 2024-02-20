var room = [
    ["room", "boom", 44],
    ["bum", "cum", 55],
    ["cook", "book", 99],
    ["boss", "loss", 22],
    ["past", "fast", 11],
    ["beat", "feat", 0],
];

var print = function( rooms){
    for( a = 0; a < rooms.length; a++){
        console.log("student"+ a);
        for ( b = 0; b < rooms[a].length; b++ ){
            console.log(room[a][b]);
        }
    }
}


print(room);