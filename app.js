"use strict";
const numElement1 = document.getElementById("num1");
const numElement2 = document.getElementById("num2");
const addBtn = document.querySelector("button");
// Generic type - a generic type is a type that combines type types together e.g. number[], string[] etc.
// const numResults: number[] = [];
const numResults = [];
const stringResults = [];
const addNums = (num1, num2) => {
    // Type guard
    if (typeof num1 === "number" && typeof num2 === "number") {
        return num1 + num2;
    }
    else if (typeof num1 === "string" && typeof num2 === "string") {
        return num1 + " " + num2;
    }
    // else case
    return +num1 + +num2;
};
const prinResult = (obj) => {
    console.log(obj.val);
};
addBtn.addEventListener("click", () => {
    const num1 = numElement1.value;
    const num2 = numElement2.value;
    const result = addNums(+num1, +num2);
    const stringResult = addNums(num1, num2);
    numResults.push(result);
    stringResults.push(stringResult);
    console.log(result);
    console.log(stringResult);
    prinResult({ val: result, timestamp: new Date() });
    console.log(numResults, stringResults);
});
// Generic type
const myPromise = new Promise((resolve, reject) => {
    setTimeout(() => resolve("It worked!"), 2000);
});
myPromise.then((result) => {
    console.log(result.split(" "));
});
