// function argsCount() {
//   console.log('length - ', arguments);
// }

// argsCount();
// argsCount(1);
// argsCount(2, 5, 8, 6);
// argsCount('string', 2);
// argsCount(2);
// argsCount(2, 3, 5);


const list = [2, 4, 6, 7, 9, 0, 10];

function cutArray(arr, from, to) {
  if((isNaN(from) && isNaN(to)) || to < from || to > arr.length) {
    return 'Error!';
  } else if (arguments.length >= 3 ) {
      let newArray = [];
      let counter = 0;
      for(let i = from; i <= to; i++) {
        newArray[counter] = arr[i];
        counter++;
      }
      return newArray;
  } else {
      return arr[from];
  }
}

// cutArray(list);
console.log(cutArray(list));
console.log(cutArray(list, 2, 5));
console.log(cutArray(list, 2, 5, 4));
console.log(cutArray(list, 2));

console.log(cutArray(list, 6, 5));



const sum = function(from, to) {
  if(from === to) {
    return to;
  } else {
    return from + sum(from + 1, to);
  }
}

console.log(sum(1, 5));

// const secondSum = function(from, to) {
//   if(from === to) {
//     return from;
//   } else {
//     return to + secondSum(from, to - 1);
//   }
// }

// console.log(secondSum(1, 5));
