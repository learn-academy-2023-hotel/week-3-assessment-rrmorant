// ASSESSMENT 3: Coding Practical Questions with Jest

// Please read all questions thoroughly
// Pseudo coding is REQUIRED
// If you get stuck, please leave comments to help us understand your thought process

// Use test driven development to complete the following questions
// Add appropriate dependencies: $ yarn add jest

// Reminder: The test will call your function
// Run the file with the following command: $ yarn jest

// --------------------1) Prompt: Create a function that takes in a number (greater than 2) and returns an array containing the Fibonacci sequence. The length of the array is determined by the argument of the function.

// a) Create a test with expect statements for each of the variables provided.

const fibonacciLength1 = 6
// Expected output: [1, 1, 2, 3, 5, 8]

const fibonacciLength2 = 10
// Expected output: [1, 1, 2, 3, 5, 8, 13, 21, 34, 55]

describe("genFib", () => {
  // "genFib" is the string argument for the describe function
  it("takes in a number (greater than 2) and returns an array containing the Fibonacci sequence", () => {
  // the "it" statement explains that the function should give us the Fibonacci sequence
    expect(genFib(fibonacciLength1)).toEqual([1, 1, 2, 3, 5, 8])
    expect(genFib(fibonacciLength2)).toEqual([1, 1, 2, 3, 5, 8, 13, 21, 34, 55])
  // two expect statements are used to call the function for each variable and compare the output  
  })
}) // FAIL: ReferenceError: genFib is not defined

// b) Create the function that makes the test pass.

const genFib = (length) => {
  // created a function called genFib that uses the parameter length as an argument
  const fibLength = [1, 1]; 
  // fibLength is an array for the beginning sequence of index 0 & 1 of the Fibonacci
  for (let i = 2; i < length; i++) {
  // in the for loop, i begins at index 2 since fibLength is holding index 0 and 1. the index is less than the length of the array and goes to the next index in the iteration until i is less than the length
    const nextFib = fibLength[i - 1] + fibLength[i - 2];
  // nextFib holds the value of fibLength[i - 1] + fibLength[i - 2]. since i begins at index 2, fibLength[2 - 1] + fibLength[2 - 2] becomes fibLength[1] + fibLength[0]. then we add the values at those indexes which is 1 + 1 = 2 which is the third value at index 2. when i = 3, its fibLength[2] + fibLength[1], 2 + 1 = 3, the fourth value at index 3. so forth and so on. 
    fibLength.push(nextFib);
  // fibLength.push add the value to the end of the array in nextFib and runs it again until the iteration is complete
  }

  return fibLength;
  // fibLength is returned with the the completed Fibonacci sequence
}

// console.log(genFib(fibonacciLength1))
// console.log(genFib(fibonacciLength2))

// Pseudo code:

// --------------------2) For the following prompt, use ChatGPT or an equivalent AI tool to help you solve the problem. The prompt will require the use of a JavaScript method called Object.values()
// Prompt: Create a function that takes in an object and returns an array of the object's values sorted from least to greatest.

// a) Create a test with expect statements for each of the variables provided.

const studyMinutesWeek1 = {
  sunday: 90,
  monday: 30,
  tuesday: 20,
  wednesday: 15,
  thursday: 30,
  friday: 15,
  saturday: 60
}
// Expected output: [15, 15, 20, 30, 30, 60, 90]

const studyMinutesWeek2 = {
  sunday: 100,
  monday: 10,
  tuesday: 45,
  wednesday: 60,
  thursday: 20,
  friday: 15,
  saturday: 65
}
// Expected output: [10, 15, 20, 45, 60, 65, 100]

describe("studyTime", () => {
  // studyTime is the string argument for the describe function
  it("takes in an object and returns an array of the object's values sorted from least to greatest", () => {
  // in the it statement, the objects array's are sorted from least to greatest
    expect(studyTime(studyMinutesWeek1)).toEqual([15, 15, 20, 30, 30, 60, 90])
    expect(studyTime(studyMinutesWeek2)).toEqual([10, 15, 20, 45, 60, 65, 100])
  // the two expect statements are calling the function for each object's and making comparisons to the output
  })
}) // FAIL:  ReferenceError: studyTime is not defined

// b) Create the function that makes the test pass.

const studyTime = (studyMin) => {
  // function studyTime uses parameter studyMin for the argument
  const studyMinutesArray = Object.values(studyMin);
  // studyMinutesArray contains the value of Object.values(studyMin), which extracts the values of the keys in the object
  studyMinutesArray.sort((a, b) => a - b);
  // .sort() arranges the elements in order. however, when using just .sort(), the array isn't arrange in numeric order. (a, b) => a - b) is used to compare the elements with the array and states whether the element is bigger or smaller and arranges them accordingly.
  return studyMinutesArray;
} // PASS: ✓ takes in an object and returns an array of the object's values sorted from least to greatest (2 ms)

// const result1 = studyTime(studyMinutesWeek1);
// console.log(result1); // [15, 15, 20, 30, 30, 60, 90]

// const result2 = studyTime(studyMinutesWeek2);
// console.log(result2); // [10, 15, 20, 45, 60, 65, 100]


// Pseudo code: I used Microsoft Bing AI to assist with solving the problem.
