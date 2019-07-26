function() {
   var currentPlayer = “player1”;

   $(".column").on("click", function (e) {
       var slotsInColumn = $(e.currentTarget).find(".slot");

       for (var i = 5; i >= 0; i--){
           var slotsInColumn = slotsInColumn.eg(i)
           if (
               !slotsInColumn.hasClass("player1")
               &&
               !slotsInColumn.hasClass("player2")
           ) {
               slotsInColumn.addClass(currentPlayer)
            break;
           }
       }

       // i is the indicator for the row

       if(i == -1) {
           //column was full
           return;
       }
       // check on the end check for victory here
       switchPlayers();
   })



   function switchPlayers() {
       if (currentPlayer == “player1") {
           currentPlayer = “player2”;
       } else {
           currentPlayer = “player1";
       }
   }
})();


function checkForVictory(slots) {
    var str = "";
    for (var i = 0; i < slots.length; i++) {
        if (slots.eq(i).hasClass(currentPlayer)){
            str + "o"
        } else {
            str + "x"
        }
    }
    if (checkForVictory(slotsInColumn)){
        // do the victory stuff
    } else if (checkForVictory($(".row" + i))){
        // same logic
        //loop through all colums to find the slots  a row

    }
    return str.indexOf("oooo") > -1;
}

//horiziontal check

var slots = $(".slots")
