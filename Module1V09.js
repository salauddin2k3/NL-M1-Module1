//Set data-structure
/*

01. Mail Feature: Duplicate entry kora jai nah
02. kotojon user visit korse, seta easily ber kora jai
03. set er shathe push, delete etc korte parbo na directly...but amra etake array te convert kore [Array.form] then push .... korte parbo
04. set.has / set.delete / 

** // Brute Force vs Set Implementation

*/

const set = new Set();

set.add("Banana",)
set.add("Apple")
set.add("Orange")

// console.log(set.size);


const user1 = {
    userId: 1,
    Name: "Rakib",
    Roll: 5299
};

const user2 = {
    userId: 2,
    Name: "Sakib",
    Roll: 5290
};

const user3 = {
    userId: 3,
    Name: "Zilani",
    Roll: 5209
};

const anotherSet = new Set();

anotherSet.add(user1);
anotherSet.add(user2);

// console.log(anotherSet);


const fruits = ["Banana", "Apple", "Mango", "Orange", "Mango"]; //er vitore 4 ta set ase

const fruitsSet = new Set(fruits);

// console.log(fruitsSet);

// fruitsSet.forEach((value => console.log(value)));
// anotherSet.forEach((value => console.log(value)));

/* 
--------------------------------------------------------------
const NewFE = fruitsSet.forEach((value => console.log(value)));
console.log(NewFE);

Note: eta korle undefined dekhabe, karon forEatch kono kisui return kore nah
*** set er kaj shesh hole sheta array te convert korte hobe>>> [Array.form] diye
--------------------------------------------------------------
*/

const test = Array.from(fruitsSet);   // ekhetre amra test er upore [push or other korte parbo]
test.push("TestF")

// console.log(test);

const fruits2 = ["Banana", "Apple", "Mango", "Orange", "Mango"];
// console.log(fruits2);

const setToArray = Array.from(fruits2);

// console.log(setToArray);

// setToArray.push("TestP")

// console.log(setToArray);

const fruits3 = ["Banana", "Apple", "Mango", "Orange", "Mango"]; //er vitore 4 ta set ase

const fruitsSet3 = new Set(fruits3);

// console.log(fruitsSet3);

// console.log(fruitsSet3.delete("Banana"));

// console.log(fruitsSet3);




// Brute Force vs Set Implementation

// Remove Duplicates using Array

const fruitsForBF = ["Banana", "Apple", "Mango", "Orange", "Mango"];

// const testFriends = ["Alam", "Kalam", "Galib", "Rakib", "Galib", "Alam"]

const removeDupArr = (E) => {
    const newfruitsForBF = [];

    E.forEach((element => {
        if (!newfruitsForBF.includes(element)){
            newfruitsForBF.push(element);
        }
    }));

    return newfruitsForBF;
}

const resultBF = removeDupArr(fruitsForBF);
// const resultBF = removeDupArr(testFriends);
// console.log(resultBF);


// Remove Duplicates using Set

const removeDupArrSet = (E) => {
    const set = new Set(E);

    return Array.from(set);
}

console.log(removeDupArrSet(fruitsForBF));


