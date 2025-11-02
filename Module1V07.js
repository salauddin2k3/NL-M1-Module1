
// const startTime = performance.now();

console.time("test")

for(i=0; i<5000; i++){
    console.log(i);
};

console.timeEnd("test")

// const endTime = performance.now();

// console.log(`This is our performance: ${endTime-startTime}`);