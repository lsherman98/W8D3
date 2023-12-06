// const readline = require('readline');

// const reader = readline.createInterface({
//     input: process.stdin,
//     output: process.stdout
// });

// function addNumbers(sum, numsLeft, completionCallback) {
//     if (numsLeft === 0) completionCallback(sum);

//     if (numsLeft > 0) {
//         reader.question("Enter a number!", function (number){
//             const num = parseInt(number);
//             sum += num;
//             console.log(sum);
//             addNumbers(sum, numsLeft - 1, completionCallback);
//         })
//     }
// }
// Function.prototype.myBind = function(context) {
//     return () => {
//         this.apply(context)
//     }
// }

// class Lamp {
//     constructor() {
//         this.name = "a lamp";
//     }
// }

// const turnOn = function() {
//     console.log("Turning on " + this.name);
// };

// const lamp = new Lamp();

//     turnOn(); // should not work the way we want it to

// const boundTurnOn = turnOn.bind(lamp);
// const myBoundTurnOn = turnOn.myBind(lamp);

//     boundTurnOn(); // should say "Turning on a lamp"
//     myBoundTurnOn(); // should say "Turning on a lamp"
// addNumbers(0, 3, sum => {console.log(`Total Sum: ${sum}`)
// reader.close()});

// function askIfGreaterThan(el1, el2, callback) {
//     reader.question(`Is ${el1} greater then ${el2}?`, function (response) {
//         if (response === 'yes') {
//             callback(true);
//         } else if (response === 'no') {
//             callback(false);
//         } else {
//             console.log('Response must be yes or no!')
//         }
//     })
// };

// function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
//     if (i === arr.length - 1) {
//         outerBubbleSortLoop(madeAnySwaps) 
//     } else {
//         askIfGreaterThan(arr[i], arr[i+1], (isGreaterThan) => {
//             if (isGreaterThan === true) {
//                 [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
//                 innerBubbleSortLoop(arr, i+1, true, outerBubbleSortLoop);
//             } else {
//                 innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
//             }
//         })
//     }
// };

// innerBubbleSortLoop([1,9,4,2], 0, false, () => console.log('in outer loop'));

// function absurdBubbleSort(arr, sortCompletionCallback) {
//     function outerBubbleSortLoop(madeAnySwaps) {
//         if (madeAnySwaps === true) {
//             innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
//         } else {
//             sortCompletionCallback(arr);
//         }
//     }
//     outerBubbleSortLoop(true);
// };

// absurdBubbleSort([3, 2, 1, 1, 9, 12, 15, 5], function(arr) {
//     console.log("Sorted array: " + JSON.stringify(arr));
//     reader.close();
// });

// Function.prototype.myThrottle = function(x) {
//     let tooSoon = false;
//     return () => {if (tooSoon === false) {
//         tooSoon = true;
//         setTimeout(() => {
//             tooSoon = false;
//         }, x)
//         this.apply(this, arguments);
//     }}
// };

// class Neuron {
//     fire() {
//       console.log("Firing!");
//     }
//   }

//   const neuron = new Neuron();

//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);

// clearInterval(interval);

//   neuron.fire = neuron.fire.myThrottle(500);

//   const interval = setInterval(() => {
//     neuron.fire();
//   }, 10);

//   class Neuron {
//     constructor() {
//       this.fire = this.fire.myThrottle(500);
//     }

//     fire() {
//       console.log("Firing!");
//     }
//   }

Function.prototype.myDebounce = function(interval) {
    let timeoutId;

    return (...args) => {
    clearTimeout(timeoutId);

    timeoutId = setTimeout(() => {
        this(...args)
    }, interval)};
};

class SearchBar {
    constructor() {
      this.query = "";
  
      this.type = this.type.bind(this);
      this.search = this.search.bind(this);
    }
  
    type(letter) {
      this.query += letter;
      this.search();
    }
  
    search() {
      console.log(`searching for ${this.query}`);
    }
  }

  const searchBar = new SearchBar();



searchBar.search = searchBar.search.myDebounce(500);

const queryForHelloWorld = () => {
    searchBar.type("h");
    searchBar.type("e");
    searchBar.type("l");
    searchBar.type("l");
    searchBar.type("o");
    searchBar.type(" ");
    searchBar.type("w");
    searchBar.type("o");
    searchBar.type("r");
    searchBar.type("l");
    searchBar.type("d");
};

queryForHelloWorld();