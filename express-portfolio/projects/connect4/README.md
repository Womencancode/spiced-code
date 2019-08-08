# CONNECT 4

## 1. HTML/css

-   slot
-   board
-   change rows column organization

```HTML
       <div class="column">
           <div class="slot 1"></div>
           .
           .
           .
           <div class="slot 7"></div>
       </div>
```

## 2. Javascript

-   playerselection

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

--
