// Async Generators
async function* asyncSequence(start, end) {
    for (let i = start; i <= end; i++) {
        yield new Promise((resolve, reject) => {
            setTimeout(() => {
                resolve(i);
            }, 1000);
        });

    }
}

(async () => {
    let seq = asyncSequence(1, 5);

    for await (let num of seq) {
        console.log(num);
    }
})();

//The async generators can be very useful when you access a stream of
//data and want to report the progress like using a progress bar.
//yield returns a Promise , instead of a value.
//The Promise is typically a wrapper of an asynchronous operation.
