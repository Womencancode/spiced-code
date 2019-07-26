# CONNECT 4

## 1. HTML/css

* slot
* board
* change rows column organization

 ```HTML
        <div class="column">
            <div class="slot 1"></div>
            .
            .
            .
            <div class="slot 7"></div>
        </div>
````



## 2. Javascript

* playerselection

  ```javascript
  (function() {
     var currentPlayer = “player1”;
     function switchPlayers() {
         if (currentPlayer == “player1") {
             currentPlayer = “player2”;
         } else {
             currentPlayer = “player1";
         }
     }
  })();)
  ```



## 3. Bugs

+ what works

  + find the diagonal victory from left to right when the "victory stone" is the last stone. it does not matter if on the left or on the right side.

+ what does not work

  + when I insert the "victory stone" in between like in the picture

    ​![](/Users/markusheine/Desktop/Bildschirmfoto 2019-07-26 um 22.35.33.png)

  when I add the last red coin in the victory slot nothing happens. 