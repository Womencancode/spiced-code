(function() {
    var currentPlayer = "player1";
    var column = $(".column");
    var slotArr = $("#gamearea").find(".slot");
    var actualSlot;
    var actualSlotPosition;
    var returnedActualSlotPosition = false;

    //********
    // switch Players
    //********

    function switchPlayers() {
        if (currentPlayer == "player1") {
            currentPlayer = "player2";
        } else {
            currentPlayer = "player1";
        }
    }

    //********
    // winning animation
    //********
    function winningAnimation() {
        console.log("in the winning animation");
        var winnerDiv = $("#winner");
        var winnerText = $("#winnerText");
        winnerText.append("<h1>" + currentPlayer + "</h1>");
        winnerDiv.fadeIn("4000");
    }

    //********
    // check the victory for rows an columns
    //********
    function checkForVictory(slots) {
        var counter = 0;
        for (var i = 0; i < slots.length; i++) {
            if (slots.eq(i).hasClass(currentPlayer)) {
                counter++;
                if (counter == 4) {
                    console.log(currentPlayer + " wins");
                    return true;
                }
            } else {
                counter = 0;
            }
        }
    }

    //********
    // check diagonal
    // direction:   top right to bottom left: -5
    //              bottom left to top right: +5
    //              top left to bottom right: +7
    //              bottom right to top left: -7
    //********

    function checkForVictoryDiagonal(slots, direction, actualSlotPosition) {
        console.log("check: " + direction);
        returnedActualSlotPosition = false;
        var count = 0;
        // console.log("direction: " + direction);
        // console.log("Actual Slot Postion: " + actualSlotPosition);
        // console.log("New Slot Position: " + (actualSlotPosition + direction));
        // console.log(
        //     slots
        //         .eq(actualSlotPosition)
        //         .parent()
        //         .attr("id")
        // );
        // console.log(
        //     slots
        //         .eq(actualSlotPosition + direction)
        //         .parent()
        //         .attr("id")
        // );
        for (var j = 0; j < 4; j++) {
            if (
                slots
                    .eq(actualSlotPosition)
                    .parent()
                    .attr("id") !=
                slots
                    .eq(actualSlotPosition + direction)
                    .parent()
                    .attr("id")
            ) {
                var oldSlot = slots.eq(actualSlotPosition);
                var newSlot = slots.eq(actualSlotPosition + direction);
                if (count == 0) {
                    count++;
                }
                if (
                    oldSlot.hasClass(currentPlayer) ==
                    newSlot.hasClass(currentPlayer)
                ) {
                    // console.log("oldSlot: " + oldSlot.attr("id"));
                    // console.log("newSlot: " + newSlot.attr("id"));
                    count++;
                    console.log("counter: " + count);
                    if (count == 4) {
                        return true;
                    } else {
                        actualSlotPosition = actualSlotPosition + direction;
                    }
                } else {
                    console.log("next slot hast different color or no color");
                    count = 0;
                    returnedActualSlotPosition = actualSlotPosition;
                    break;
                }
            } else {
                console.log("slots in the same column");
                returnedActualSlotPosition = actualSlotPosition;
                console.log("+++++++++ BREAK +++++++++++");
                break;
            }
        }
        ///////// function checkForVictoryDiagonal end /////////////
        return;
    }

    column.on("click", function(e) {
        //********
        // add the stones
        //********
        var slotsInColumn = $(e.currentTarget).find(".slot");
        for (var i = 5; i >= 0; i--) {
            // slotsInColumn = slotsInColumn.eq(i);
            if (
                !slotsInColumn.eq(i).hasClass("player1") &&
                !slotsInColumn.eq(i).hasClass("player2")
            ) {
                slotsInColumn.eq(i).addClass(currentPlayer);
                actualSlot = slotsInColumn.eq(i).addClass(currentPlayer);
                break;
            }
        }

        for (var k = 0; k < slotArr.length; k++) {
            if (slotArr[k] == actualSlot[0]) {
                actualSlotPosition = k;
                break;
            }
        }

        if (i == -1) {
            return;
        }

        //********
        // call the checks and look who won
        //********
        if (checkForVictory(slotsInColumn)) {
            column.off();
            winningAnimation();
        } else if (checkForVictory($("." + (i + 1)))) {
            winningAnimation();
            column.off();
        } else if (checkForVictoryDiagonal(slotArr, -5, actualSlotPosition)) {
            winningAnimation();
            column.off();
            // check diagonal from left to right
        } else if (
            returnedActualSlotPosition !== false &&
            checkForVictoryDiagonal(slotArr, 5, returnedActualSlotPosition)
        ) {
            // console.log("<3<3<3<3<3<3<3<3<3<3<3");
            // console.log("actualSlotPosition: " + actualSlotPosition);
            // console.log(
            //     "returnedActualSlotPosition: " + returnedActualSlotPosition
            // );
            // console.log("<3<3<3<3<3<3<3<3<3<3<3");

            winningAnimation();
            column.off();

            // check diagonalfrom right to left
        } else if (checkForVictoryDiagonal(slotArr, 7, actualSlotPosition)) {
            winningAnimation();
            column.off();
        } else if (
            returnedActualSlotPosition !== false &&
            checkForVictoryDiagonal(slotArr, -7, returnedActualSlotPosition)
        ) {
            winningAnimation();
            column.off();
        }
        switchPlayers();
    });
})();
