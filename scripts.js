const age = 25;
let counter = 0;

// while (counter <= 1000) {
//   if (counter % age === 0) {
//     console.log('Numbers - ' + counter);
//   }
//   counter++;
// }

// console.log('do ...while');

// do {
//   if (counter % age === 0) {
//     console.log('Numbers - ' + counter);
//   }
//   counter++;
// } while (counter <= 1000);

// console.log('for');


// for (let counter = age; counter <= 1000; counter+25) {
//   if (counter % age === 0) {
//     console.log('Numbers - ' + counter);
//   }
// }

// function areaCircle (radius) {
//   if (isNaN(+radius)) {
//     return 'radius is not a number';
//   }
//   return Math.PI * Math.pow(radius, 2);
// }

// console.log(areaCircle('ghjgh'));
// console.log(areaCircle(6));

// function sumFunction (from=0, to=10) { // es 6
//   let sum = 0;
//   if (from < to) {
//     for(let counter = from; counter <= to; counter++ ) {
//       // sum = sum + counter;
//       sum += counter;
//     }
//   } 
//   return sum;
// }
// console.log(sumFunction(0));


console.log('List');
const awasomeList = ['хліб', 'сир', 'молоко', 'Яйця', 'Апельсини'];

function firtsUpper(row) {
  // const firtsSymbol = row[0];
  const firtsSymbol = row[0].toUpperCase();
  row.substr(1);
  return firtsSymbol + row.substr(1);
}

function lengthRow(rew) {
  return 'Length of row - ' + rew.length;
}

// console.log(firtsUpper('хліб'));
// console.log(firtsUpper('молоко'));
// console.log(lengthRow('молоко'));

function createList(list) {
  for (let i = 0; i < list.length; i++) {
    let correctCounter = i + 1;
    console.log(correctCounter + '. ' + firtsUpper(list[i]) + lengthRow(list[i]));
  }
}

createList(awasomeList);





