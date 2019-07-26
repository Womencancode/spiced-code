(function() {
    var currentPlayer = "player1";
    var column = $(".column");
    var actualSlot;

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
        if (i == -1) {
            return;
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

        // ********
        // check the victory horizontaly left to right
        // ********
        function checkForVictoryHorizontalyDown(slots) {
            var slotsPosition;
            for (var i = 0; i < slots.length; i++) {
                if (slots[i] == actualSlot[0]) {
                    slotsPosition = i;
                    break;
                }
            }
            checkLeftToRight();
            function checkLeftToRight() {
                var vertialLtRcount = 1;
                for (var j = 1; j <= 3; j++) {
                    var substractor = 5;
                    if (
                        slots
                            .eq(slotsPosition)
                            .parent()
                            .attr("id") !=
                        slots
                            .eq(slotsPosition - substractor)
                            .parent()
                            .attr("id")
                    ) {
                        slotsPosition = slotsPosition - substractor;
                        var slotPosNew = slots.eq(slotsPosition);
                        if (slotPosNew.hasClass(currentPlayer)) {
                            vertialLtRcount++;
                            if (vertialLtRcount == 4) {
                                column.off();
                                winningAnimation();
                            }
                        }
                    } else {
                        //********
                        // start check slots upwards
                        //********
                        var slotPostIncrementStart = slotPosNew;
                        checkForVictoryHorizontalyUp(
                            $("#gamearea").find(".slot"),
                            slotPostIncrementStart
                        );
                        break;
                    }
                }
            }
        }
        function checkForVictoryHorizontalyUp(slots, startPoint) {
            var slotsPosition = startPoint;
            console.log("checkForVictoryHorizontalyUp");
            console.log(slotsPosition);
            for (var k = 0; k < slots.length; k++) {
                if (slots[k] == actualSlot[0]) {
                    slotsPosition = k;
                    break;
                }
            }
            checkLeftToRight();
            function checkLeftToRight() {
                var vertialRtLcount = 1;
                for (var l = 1; l <= 3; l++) {
                    var aditionier = 5;
                    if (
                        slots
                            .eq(slotsPosition)
                            .parent()
                            .attr("id") !=
                        slots
                            .eq(slotsPosition + aditionier)
                            .parent()
                            .attr("id")
                    ) {
                        slotsPosition = slotsPosition + aditionier;
                        var slotPosNew = slots.eq(slotsPosition);
                        if (slotPosNew.hasClass(currentPlayer)) {
                            vertialRtLcount++;
                            if (vertialRtLcount == 4) {
                                column.off();
                                winningAnimation();
                            }
                        }
                    } else {
                        break;
                    }
                }
            }
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
        } else if (
            checkForVictoryHorizontalyDown($("#gamearea").find(".slot"))
        ) {
            winningAnimation();
            column.off();
        }
        switchPlayers();
    });
})();
