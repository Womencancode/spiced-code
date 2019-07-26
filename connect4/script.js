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
            // console.log(slots);
            // console.log(actualSlot[0]);
            // console.log(slots);
            // console.log(actualSlot[0]);
            var slotsPosition;
            for (var i = 0; i < slots.length; i++) {
                // console.log(slots[i]);
                if (slots[i] == actualSlot[0]) {
                    slotsPosition = i;
                    break;
                }
            }
            checkLeftToRight();
            function checkLeftToRight() {
                // console.log("+-+-+-+-+-+-+-+-+-");
                // console.log("check left to right");
                var vertialLtRcount = 1;
                for (var j = 1; j <= 4; j++) {
                    var substractor = 5;

                    //********
                    // visualize actual and future slots
                    //********
                    // console.log(substractor);
                    // console.log("actual slot");
                    // console.log(
                    //     "Slot: " +
                    //         slotsPosition +
                    //         " in row: " +
                    //         slots
                    //             .eq(slotsPosition)
                    //             .parent()
                    //             .attr("id")
                    // );
                    // console.log("substractor: " + substractor);
                    // console.log("next slot is: -->");
                    // console.log(
                    //     console.log(
                    //         "Slot: " +
                    //             (slotsPosition - substractor) +
                    //             " in row: " +
                    //             slots
                    //                 .eq(slotsPosition - substractor)
                    //                 .parent()
                    //                 .attr("id")
                    //     )
                    // );
                    // console.log("++++++++++++++");
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
                        // console.log("in the if statement");
                        slotsPosition = slotsPosition - substractor;
                        var slotPosNew = slots.eq(slotsPosition);

                        // console.log("Old: " + slotPosOld.attr("class"));
                        // console.log(slotPosOld.hasClass(currentPlayer));
                        // console.log("New: " + slotPosNew.attr("class"));
                        // console.log(slotPosNew.hasClass(currentPlayer));
                        // console.log(currentPlayer);

                        if (slotPosNew.hasClass(currentPlayer)) {
                            vertialLtRcount++;
                            if (vertialLtRcount == 4) {
                                // console.log(currentPlayer + " wins");
                                column.off();
                                winningAnimation();
                            }
                        }
                    } else {
                        // console.log("/+/+/+/+/+/+/+/+");
                        //********
                        // start incremeting the count
                        //********
                        var slotPostIncrementStart = slotPosNew;
                        // console.log(slotPostIncrementStart);
                        checkForVictoryHorizontalyUp(
                            $("#gamearea").find(".slot"),
                            slotPostIncrementStart
                        );
                        ////////////////////////////
                        break;
                    }
                }
            }
        }
        function checkForVictoryHorizontalyUp(slots, startPoint) {
            // console.log("call checkForVictoryHorizontalyUp");
            var slotsPosition = startPoint;
            for (var i = 0; i < slots.length; i++) {
                // console.log(slots[i]);
                if (slots[i] == actualSlot[0]) {
                    slotsPosition = i;
                    break;
                }
            }
            checkLeftToRight();
            function checkLeftToRight() {
                // console.log("+-+-+-+-+-+-+-+-+-");
                // console.log("check left to right");
                var vertialRtLcount = 1;
                for (var j = 1; j <= 4; j++) {
                    var aditionier = 5;

                    //********
                    // visualize actual and future slots
                    //********
                    // console.log(substractor);
                    // console.log("actual slot");
                    // console.log(
                    //     "Slot: " +
                    //         slotsPosition +
                    //         " in row: " +
                    //         slots
                    //             .eq(slotsPosition)
                    //             .parent()
                    //             .attr("id")
                    // );
                    // console.log("substractor: " + substractor);
                    // console.log("next slot is: -->");
                    // console.log(
                    //     console.log(
                    //         "Slot: " +
                    //             (slotsPosition - substractor) +
                    //             " in row: " +
                    //             slots
                    //                 .eq(slotsPosition - substractor)
                    //                 .parent()
                    //                 .attr("id")
                    //     )
                    // );
                    // console.log("++++++++++++++");
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
                        // console.log("in the if statement");
                        slotsPosition = slotsPosition + aditionier;
                        var slotPosNew = slots.eq(slotsPosition);

                        // console.log("Old: " + slotPosOld.attr("class"));
                        // console.log(slotPosOld.hasClass(currentPlayer));
                        // console.log("New: " + slotPosNew.attr("class"));
                        // console.log(slotPosNew.hasClass(currentPlayer));
                        // console.log(currentPlayer);

                        if (slotPosNew.hasClass(currentPlayer)) {
                            vertialRtLcount++;
                            if (vertialRtLcount == 4) {
                                // console.log(currentPlayer + " wins");
                                column.off();
                                winningAnimation();
                            }
                        }
                    } else {
                        // console.log("/+/+/+/+/+/+/+/+");
                        //********
                        // start incremeting the count
                        //********
                        ////////////////////////////
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
