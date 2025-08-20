import { HashMap } from "./hash_map.js";

const test = new HashMap();

test.set('apple', 'red')
test.set('banana', 'yellow')
test.set('carrot', 'orange')
test.set('dog', 'brown')
test.set('elephant', 'gray')
test.set('frog', 'green')
test.set('grape', 'purple')
test.set('hat', 'black')
test.set('ice cream', 'white')
test.set('jacket', 'blue')
test.set('kite', 'pink')
test.set('lion', 'golden')

console.log(test.length());
console.log(test.capacity);

test.set('moon', 'silver');
test.set('grae', 'purple')
test.set('ha', 'black')
test.set('ie cream', 'white')
test.set('acket', 'blue')
test.set('kte', 'pink')
test.set('ion', 'golden')


console.log(test.length());
console.log(test.capacity);

console.log(test.keys());
console.log(test.values());
console.log(test.entries());

//test.clear();
console.log(test.get('kte'));
console.log(test.get('grae'));

test.remove('grae');
console.log(test.entries());