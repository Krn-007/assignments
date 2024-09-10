/*
 * Write 3 different functions that return promises that resolve after t1, t2, and t3 seconds respectively.
 * Write a function that sequentially calls all 3 of these functions in order.
 * Return a promise chain which return the time in milliseconds it takes to complete the entire operation.
 * Compare it with the results from 3-promise-all.js
 */

// promises-chain run all three function sequentily that's why this program takes only 30 sec to resolve

function wait1(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

function wait2(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

function wait3(t) {
    return new Promise((resolve,reject)=>{
        setTimeout(resolve,t*1000)
    })
}

async function calculateTime(t1, t2, t3) {
    let startTime = new Date()
    return call(t1,t2,t3).then(()=>{
        let end = new Date()
        return end.getTime() - startTime.getTime()
    })
}
function call(t1,t2,t3){
    return wait1(t1)
    .then(()=>{
        return wait2(t2)
        .then(()=>{
            return wait3(t3)
        })
    })
}
module.exports = calculateTime;
module.exports(10,10,10).then((data)=>{
    console.log(data);
})
