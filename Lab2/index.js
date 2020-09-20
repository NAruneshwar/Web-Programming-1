// Test cases for LAB 2
const array = require("./arrayUtils");
const obj = require("./objUtils");
const str = require("./stringUtils");

try {
   // Should Pass
   const meanOne = array.mean([21, 33, 45]);
   const meanThree = array.mean([21, 33, 45, 46]);

   console.log('mean passed successfully');
} catch (e) {
   console.error('mean failed test case');
}
try {
   // Should Fail
   const meanTwo = array.mean(1234);
   console.error('mean did not error');
} catch (e) {
      console.log('mean failed successfully');
}


try {
   // Should Pass
   const medianSquaredOne = array.medianSquared([2, 3, 4]);
   console.log('medianSquared passed successfully');
} catch (e) {
   console.error('medianSquared failed test case');
}
try {
   // Should Fail
   const medianSquaredTwo = array.medianSquared("banana");
   console.error('medianSquared did not error');
} catch (e) {
   console.log('medianSquared failed successfully');
}



try {
   // Should Pass
   const maxElementOne = array.maxElement([5, 6, 7]); 
   console.log('maxElement passed successfully');
} catch (e) {
   console.error('maxElement failed test case');
}
try {
   // Should Fail
   const maxElementTwo = array.maxElement([1,2,"nope"]);
   console.error('maxElement did not error');
} catch (e) {
   console.log('maxElement failed successfully');
}


try {
   // Should Pass
   const fillOne = array.fill(3, 'Welcome'); ;
   console.log('fill passed successfully');
} catch (e) {
   console.error('fill failed test case');
}
try {
   // Should Fail
   const fillTwo = array.fill(0);
   console.error('fill did not error');
} catch (e) {
   console.log('fill failed successfully');
}


try {
   // Should Pass
   const countRepeatingOne = array.countRepeating([7, '7', 13, true, true, true, "Hello","Hello", "hello"]);
   console.log('countRepeating passed successfully');
} catch (e) {
   console.error('countRepeating failed test case');
}
try {
   // Should Fail
   const countRepeatingTwo = array.countRepeating(' ');
   console.error('countRepeating did not error');
} catch (e) {
   console.log('countRepeating failed successfully');
}


try {
   // Should Pass
   const isEqualOne = array.isEqual([[ 1, 2, 3 ], [ 4, 5, 6 ], [ 7, 8, 9 ]], [[ 3, 1, 2 ], [ 5, 4, 6 ], [ 9, 7, 8 ]]);
   console.log('isEqual passed successfully');
} catch (e) {
   console.error('isEqual failed test case');
}
try {
   // Should Fail
   const isEqualTwo = array.isEqual([1, 2],'hello');
   console.error('isEqual did not error');
} catch (e) {
   console.log('isEqual failed successfully');
}

try {
   // Should Pass
   const camelCaseOne = str.camelCase("How now brown cow"); 
   console.log('camelCase passed successfully');
} catch (e) {
   console.error('camelCase failed test case');
}

try {
   // Should Fail
   const camelCaseTwo = str.camelCase(1234);
   console.error('camelCase did not error');
} catch (e) {
   console.log('camelCase failed successfully');
}

try {
   // Should Pass
   const replaceCharOne = str.replaceChar("Hello, How are you? I hope you are well");
   console.log('replaceChar passed successfully');
} catch (e) {
   console.error('replaceChar failed test case');
}
try {
   // Should Fail
   const replaceCharTwo = str.replaceChar(1234);
   console.error('replaceChar did not error');
} catch (e) {
   console.log('replaceChar failed successfully');
}
try {
   // Should Pass
   const mashUpOne = str.mashUp("hello", "world"); 
   console.log('mashUp passed successfully');
} catch (e) {
   console.error('mashUp failed test case');
}
try {
   // Should Fail
   const mashUpTwo = str.mashUp("John");
   console.error('mashUp did not error');
} catch (e) {
   console.log('mashUp failed successfully');
}


try {
   // Should Pass
   const first = { x: 2, y: 3};
   const second = { a: 70, x: 4, z: 5 };
   const third = { x: 0, y: 9, q: 10 };
   const makeArraysOne = obj.makeArrays([first, second, third]);
   console.log('makeArrays passed successfully');
} catch (e) {
   console.error('makeArrays failed test case');
}
try {
   // Should Fail
   const makeArraysTwo = obj.makeArrays(1234);
   console.error('makeArrays did not error');
} catch (e) {
   console.log('makeArrays failed successfully');
}
try {
   // Should Pass
  
   const forth = {a: {sA: "Hello", sB: "There", sC: "Class"}, b: 7, c: true, d: "Test"}
   const fifth  = {c: true, b: 7, d: "Test", a: {sB: "There", sC: "Class", sA: "Hello"}}
   const isDeepEqualOne = obj.isDeepEqual(forth, fifth);
   console.log('isDeepEqual passed successfully');
}  catch (e) {
   console.error('isDeepEqual failed test case');
}
try {
// Should Fail
   const first = {a: 2, b: 3};
   const second = null;
   const isDeepEqualTwo = obj.isDeepEqual(first, second);
   console.error('isDeepEqual did not error');
} catch (e) {
   console.log('isDeepEqual failed successfully');
}
try {
   // Should Pass
   const computeObjectOne = obj.computeObject({ a: 9, b: 7, c: 3 }, n => n * 2);
   console.log('computeObject passed successfully');
} catch (e) {
  console.error('computeObject failed test case');
   }
try {
   // Should Fail
   const computeObjectTwo = obj.computeObject('  ');
   console.error('computeObject did not error');
} catch (e) {
   console.log('computeObject failed successfully');
}
     