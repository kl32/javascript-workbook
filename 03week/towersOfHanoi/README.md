TOWERS OF HANOI LOGIC:

* checking for win:
    - do not check for a win on a.
    - to determine a win check that either 'b' or 'c' has all #'s in descending order. greatest to least.

* moving #'s:
    - get user input.
    - when we want to move a # we must check its value to make sure it is less than the # you are trying to place it on.
    - only able to move a # from the top of a stack and place a # on the top of a stack. (from the end of an array and placed on the end of another array).
    - we can always move #'s into an empty array, but you cannot choose from an empty stack / stack won't be updated, message will be printed "choose a valid stack".
    - update stacks object by user input. startStack, endStack.

    