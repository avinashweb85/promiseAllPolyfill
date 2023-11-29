let promise1 = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("promise1")
    }, 1000)
});

let promise2 = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("promise2")
    }, 2000)
});

let promise3 = new Promise((reslove, reject) => {
    setTimeout(() => {
        reslove("promise3")
    }, 3000)
});


// Promise.all([promise1, promise2, promise3]).then(data => console.log(data));

let promieses = [promise1, promise2, promise3];

function myPolyfill(input) {
    let result = [];
    return new Promise((reslove, reject) => {
        input.forEach((list, index) => {
            list.then(data => {
                result[index] = data;
                if(input.length === index + 1) reslove(result);
            }).catch(err => reject(err))
        })
    })
}

myPolyfill(promieses).then(data => console.log(data))

