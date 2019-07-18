1. HTML/CSS
    * container element
        * `position: relative;`
        * `height: 600px;`
        * `overflow: hidden;`
    * kitty elements
        * `position: absolute;`
        * `height: 100%`
            * img elements
                * `height: 100%; width: 100%; object-fit: cover;`
        * classes for onscreen and offscreen on the left
            * these changes should be transitions

2. Javascript
    * main animation function
        * remove the onscreen class from the element that has it and add the exit class to it
        * add the onscreen class to the next kitty
    * transitionend event handler
        * removes the exit class from the kitty that has it
        * call `setTimeout` to do it again
