import { HashMap } from "./hash_map.js";
import { HashSet } from "./hash_set.js";

// const test = new HashMap();

// test.set('apple', 'red')
// test.set('banana', 'yellow')
// test.set('carrot', 'orange')
// test.set('dog', 'brown')
// test.set('elephant', 'gray')
// test.set('frog', 'green')
// test.set('grape', 'purple')
// test.set('hat', 'black')
// test.set('ice cream', 'white')
// test.set('jacket', 'blue')
// test.set('kite', 'pink')
// test.set('lion', 'golden')

// console.log(test.length());
// console.log(test.capacity);

// test.set('moon', 'silver');
// test.set('grae', 'purple')
// test.set('ha', 'black')
// test.set('ie cream', 'white')
// test.set('acket', 'blue')
// test.set('kte', 'pink')
// test.set('ion', 'golden')


// console.log(test.length());
// console.log(test.capacity);

// console.log(test.keys());
// console.log(test.values());
// console.log(test.entries());

// //test.clear();
// console.log(test.get('kte'));
// console.log(test.get('grae'));

// test.remove('grae');
// console.log(test.entries());

const test = new HashSet();

test.set('apple')
test.set('banana')
test.set('carrot')
test.set('dog')
test.set('elephant')
test.set('frog')
test.set('grape')
test.set('hat')
test.set('ice cream')
test.set('jacket')
test.set('kite')
test.set('lion')

console.log(test.length());
console.log(test.capacity);

test.set('moon');
test.set('grae')
test.set('ha')
test.set('ie cream')
test.set('acket')
test.set('kte')
test.set('ion')


console.log(test.length());
console.log(test.capacity);

console.log(test.keys());

//test.clear();
console.log(test.has('kte'));
console.log(test.has('grae'));
console.log(test.has('graefff'));

test.remove('grae');