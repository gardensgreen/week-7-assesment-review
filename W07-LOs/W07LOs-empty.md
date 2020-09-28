# GitHub, Big-O, and Intro to Data Structures and Algorithms (Week 7) - Learning Objectives

## Assessment Structure

-   2 hours
-   Mixture of multiple choice (10-15) and VSCode (3-5) problems, each with multiple specs.
    -   Coding problems will have specs to run (`npm test`) and check your work against
-   Standard assessment procedures
    -   You will be in an individual breakout room
    -   Use a single monitor and share your screen
    -   Only have open those resources needed to complete the assessment:
        -   Zoom
        -   VSCode
        -   Browser with AAO and Progress Tracker (to ask questions)
        -   Approved Resources for this assessment:
        -   MDN: https://developer.mozilla.org/en-US/docs/Web/JavaScript

## GitHub (W7D1) - Learning Objectives

### GitHub

1. You will be able to participate in the social aspects of GitHub by starring repositories, following other developers, and reviewing your followers

    _Doing these basic activities shows that you are not only an active programmer, but active in the overall community, which is a positive attribute during the job search._

2. You will be able to use Markdown to write code snippets in your README files

    _Great cheatsheet for markdown syntax: https://github.com/adam-p/markdown-here/wiki/Markdown-Cheatsheet_

3. You will craft your GitHub profile and contribute throughout the course by keeping your "gardens green"

    _You can easily achieve this by making commits to your projects throughout the day and pushing your projects up to your own repositories at the end of the day._

4. You will be able to identify the basics of good Wiki entries for proposals and minimum viable products 5. You will be able to identify the basics of a good project README that includes technologies at the top, images, descriptions and code snippets

    - _Design documents give a road-map for how you envision the product developing._
    - _They serve as a planning tool as well as a resource during development._
    - _Minimum Viable Products (MVPs) indicate the features that need to be implemented in order to have a completed application. They also indicate your stepping stones for completing the project._

5.You will be able to identify the basics of a good project README that includes technologies at the top, images, descriptions and code snippets

1. _Displaying all of these within your README gives someone a preview of the project._
2. _It highlights what it looks like, describes its main features, and discusses at a high-level how it was implemented._

## Big-O, Memoization, and Tabulation (W7D2) - Learning Objectives

### Big-O

1. Order the common complexity classes according to their growth rate

-   O(n!) - _factorial_
-   O(c^n) - _exponential_
-   O(n^c) - _polynomial_
-   O(n log n) - _loglinear_
-   O(n) - _linear_
-   O(log n) - _logarithmic_
-   O(1) - _constant_

2. Identify the complexity classes of common sort methods

-   Bubble
    -   _Time:_ O(n^2)
    -   _Space:_ O(1)
-   Selection
    -   _Time:_ O(n^2)
    -   _Space:_ O(1)
-   Insertion
    -   _Time:_ O(n^2)
    -   _Space:_ O(1)
-   Merge
    -   _Time:_ O(n log n)
    -   _Space:_ O(n)
-   Quick
    -   _Time:_ O(n^2) _\ \* With quicksort the worst case is exceedingly rare, most people will consider quicksort to be closer to O(n log n)_
    -   _Space:_ O(n) _\ \* You can get the space complexity down to O(log n) with a certain implementation._

3. Identify complexity classes of code

-   Important takeaway here is being able to connect code patterns with complexities

```javascript
//Time =>  O(1)
//Space => O(1)
function example1(n) {
    for (let i = 1; i <= 20; i++) {
        console.log(i);
    }
}

// Time => O(n^2)
// Space => O(1)
function example2(n) {
    for (let i = 1; i <= n; i++) {
        for (let j = 1; j <= n; j++) {
            console.log(`${i}, ${j}`);
        }
    }
}

// time: O(2^n)
function example3(n) {
    console.log(n);
    if (n === 1) return;
    example3(n - 1);
    example3(n - 1);
}
```

### Memoization and Tabulation

1. Apply memoization to recursive problems to make them less than polynomial time.

```javascript
function fib(n, memo = {}) {
    if (n in memo) return memo[n];
    if (n === 1 || n === 2) return 1;

    memo[n] = fib(n - 1, memo) + fib(n - 2, memo);
    return memo[n];
}
```

2. Apply tabulation to iterative problems to make them less than polynomial time.

```javascript
function fib(n) {
    if (n === 1 || n === 2) return 1;
    return fib(n - 1) + fib(n - 2);
}

function fibTab(n) {
    let table = new Array(n + 1);
    table[0] = 0;
    table[1] = 1;
    for (let i = 2; i < table.length; i++) {
        table[i] = table[i - 1] + table[i - 2];
    }

    return table[n];
}
```

## Sorting Algorithms (W7D3) - Learning Objectives

### Sorting Algorithms

1. Explain the complexity of and write a function that performs bubble sort on an array of numbers.

-   _Time Complexity_: O(n^2)
-   _Space Complexity_: O(1)
-   Code:

```javascript
function bubbleSort(array) {
    let noSwaps;

    for (let i = array.length - 1; i > 0; i--) {
        noSwaps = true;
        for (let j = 0; j <= i - 1; j++) {
            if (array[j] > array[j + 1]) {
                let temp = arr[j];
                arr[j] = arr[j + 1];
                arr[j + 1] = temp;
                noSwaps = false;
            }
        }
        if (noSwaps) break;
    }
    return array;
}
```

2. Explain the complexity of and write a function that performs selection sort on an array of numbers.

-   _Time Complexity_: O(n^2)
-   Space Complexity: O(1)
-   Code:

```javascript
function selectionSort(array) {
    for (let i = 0; i < array.length; i++) {
        let min = i;
        for (let j = i + 1; j < array.length; j++) {
            if (array[j] < array[min]) {
                min = j;
            }
        }
        if (i !== min) {
            let temp = array[i];
            array[i] = array[min];
            array[min] = temp;
        }
    }
    return array;
}
```

3. Explain the complexity of and write a function that performs insertion sort on an array of numbers.

-   _Time Complexity_: O(n^2)
-   _Space Complexity_: O(1)
-   Code:

```javascript
function insertionSort(array) {
    for (let i = 1; i < array.length; i++) {
        let currentValue = array[i];
        for (let j = i - 1; j >= 0 && array[j] > currentValue; j++) {
            array[j + 1] = array[j];
        }
        array[j + 1] = currentValue;
    }
    return array;
}
```

4. Explain the complexity of and write a function that performs merge sort on an array of numbers.

-   _Time Complexity_: O(n log n)
-   _Space Complexity_: O(n)
-   Code:

```javascript
function merge(array1, array2) {
    let merged = [];

    // keep running while either array still contains elements
    while (array1.length || array2.length) {
        // if array1 is nonempty, take its the first element as ele1
        // otherwise array1 is empty, so take Infinity as ele1
        let ele1 = array1.length ? array1[0] : Infinity;

        // do the same for array2, ele2
        let ele2 = array2.length ? array2[0] : Infinity;

        let next;
        // remove the smaller of the eles from it's array
        if (ele1 < ele2) {
            next = array1.shift();
        } else {
            next = array2.shift();
        }

        // and add that ele to the new array
        merged.push(next);
    }

    return merged;
}

[1, 3, 8, 4, 2, 5, 6];
          m;
left = [1, 3, 8];
right = [2, 5, 6];
[1,3,8]                 [2, 5, 6]
left = [1]              left = [2]
right = [3, 8]          right = [5, 6]

sortedLeft
function mergeSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let midIdx = Math.floor(array.length / 2);
    let leftHalf = array.slice(0, midIdx);
    let rightHalf = array.slice(midIdx);

    let sortedLeft = mergeSort(leftHalf);
    let sortedRight = mergeSort(rightHalf);

    return merge(sortedLeft, sortedRight);
}
```

5. Explain the complexity of and write a function that performs quick sort on an array of numbers.

-   _Time Complexity_: O(n^2/n log n) _\*Worst case/Average case_
-   _Space Complexity_: O(n/log n) _\*Worst case/ Average case_
-   Code:

```javascript
function quickSort(array) {
    if (array.length <= 1) {
        return array;
    }

    let pivot = array.shift();
    let left = array.filter((el) => el < pivot);
    let right = array.filter((el) => el >= pivot);

    let leftSort = quickSort(left);
    let rightSort = quickSort(right);

    return [...leftSorted, pivot, ...rightSorted];
}
```

6. Explain the complexity of and write a function that performs a binary search on a sorted array of numbers.

-   _Time Complexity_: O(log n)
-   _Space Complexity_: O(1)
-   Code:

```javascript
function binarySearch(array, value) {
    const pivot = Math.ceil(left + right / 2);

    let left = 0;
    let right = array.length - 1;
    while (left <= right) {
        if (value < array[pivot]) {
            right = pivot;
            pivot = Math.floor(left + right/2)
        if (value >= array[pivot]){
            left = pivot;
            pivot = Math.ceil(left + right/2)

        }
        if (value === array[pivot]) return pivot;
    }
}
```

## Lists, Stacks, and Queues (W7D4) - Learning Objectives

### Lists, Stacks, and Queues

1. Explain and implement a Linked List.

-   What properties does an instance of a linked list track?

    -   _Head_: Beginning of linked list, first node
    -   _Tail_: End of linked list, last node
    -   _length_: Amount of connected nodes
    -   \*\*_- The main differences between lists and arrays are that a list does not have random access or indices to signify where in the list an element is._
    -   _The only references to elements that we have in a list are the head and the tail._
    -   _If we want an element in the middle of the list, we would have to traverse the list until we encountered it._
    -   _The two main types of linked lists that we talked about are Singly Linked Lists and Doubly Linked Lists._
    -   _Singly Linked Lists are composed of nodes that only have a reference to the next node in the list. We can only traverse the list in one direction._
    -   _Doubly Linked Lists are composed of nodes that have a reference to both the next node and the previous node in the list. This allows us to traverse both forwards and backwards._

-   What methods does a linked list need to implement?

    -   _addToHead()_: Adds a new node at the beginning of the list.
    -   _addToTail()_: Adds a new node at the end of the list.
    -   _removeTail()_: Removes node at the end of the list.
    -   _removeHead()_: Removes node at the beginning of the list.
    -   _insertAt()_: Adds a new node at the specified position (we need to traverse to that point, then update pointers)
    -   _removeFrom()_: Removes the node at the specified position (we need to traverse to that point, then update pointers)
    -   _contains()_: Traverses the list and returns a boolean to indicate if the value was found at any node.
    -   _get()_: Returns a reference to the node at the specified position.
    -   _set()_: Updates the value of the node at the specified position.
    -   _size()_: returns the current length of the list

-   What are the time complexities for these methods?

    -   _Accessing a node_: O(n), because we may have to traverse the entire list.
    -   _Searching a list_: O(n), because we may have to traverse the entire list.
    -   _Inserting a value_: O(1), under the assumption that we have a reference to the node that we want to insert it after/before. If we don't have this reference we would first have to access it (O(n) from above), but the actual creation is O(1)
    -   _Deleting a node_: O(1), for the same reasons as insertion. If we first need to find the previous and next nodes, we would need to access them (O(n) from above), but the actual deletion is O(1)

-   Be able to implement a Singly Linked List and a Doubly Linked List.

    -   _This would require you to use a Node class with a value instance variable and an instance variable that points to the next (and possibly previous) Node instance(s). You should then be able to interact with these Nodes to perform all of the actions of a Linked List, as we defined above._

2. Explain and implement a Stack.

-   Define LIFO and ADT and how it relates

    -   _LIFO_: Last in first out data structure.
    -   _ADT_: The actual implementation of the stack may very as long as the main principles and methods associated with them are abided by in the implementation.We could use Nodes like we did with Linked Lists, we could use an Array as an underlying instance variable as long as the methods we implement only interact with it in the way a stack should be interacted with, etc.

-   What methods does a stack need to implement?

    -   _Push()_: Adds to the top of the stack
    -   _Pop()_: Removes from the top of the stack. (Last Item)
    -   _Peek()_: Returns the value of the top element in the stack.
    -   _Size()_: Returns the amount of items in the stack.

-   What are the time complexities for these methods?

    -   _Adding an element_: O(1), since we are always adding it to the top and the addition doesn't affect any other elements.
    -   _Removing an element_: O(1), we're always taking the top element of the stack.
    -   _Finding or Accessing a particular element_: O(n), since we can only interact with our stack by removing elements from the top, we may have to remove every element to find what we're looking for.

-   Know how to implement a stack using both a node class as well as just an array instance variable. Use Thursday's project as an example/guide for your usage of a Node. How would this change if we just wanted to keep an array instance variable on our Stack instead?

3. Explain and implement a Queue.

-   Define FIFO and ADT and how it relates

    -   _FIFO_: First in first out data structure.
    -   _ADT_: The actual implementation of the queue can vary as long as the main principles and methods associated with them are abided by. We could use Nodes like we did with Linked Lists, we could use an Array as an underlying instance variable as long as the methods we implement only interact with it in the way a queue should be interacted with, etc.

-   What methods does a queue need to implement?

    -   _enqueue()_: Adds an element to the beginning of the queue
    -   _dequeue()_: Removes an element from the end of the queue
    -   _peek()_: Returns the value of the front element of the queue.
    -   _length()_: Returns the amount of elements in the queue

-   What are the time complexities for these methods?
    -   _Adding an element_: O(1), since we are always adding it to the back. If we are using Nodes instead of a simple array, keeping a reference to the last node allows us to immediately update these pointers without having to do any traversal.
    -   _Removing an element_: O(1), we're always taking the front element of the queue.
    -   _Finding or Accessing a particular element_: O(n), since we can only interact with our queue by removing elements from the front, we may have to remove every element to find what we're looking for.
