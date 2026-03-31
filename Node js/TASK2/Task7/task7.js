function createPromise(name, delay) {
    return new Promise((resolve) => {
        setTimeout(() => {
            resolve(name);
        }, delay);
    });
}

function withTimeout(promise, timeout) {
    return new Promise((resolve, reject) => {
        const timer = setTimeout(() => {
            reject("timeout");
        }, timeout);

        promise
            .then((value) => {
                clearTimeout(timer);
                resolve(value);
            })
            .catch((err) => {
                clearTimeout(timer);
                reject(err);
            });
    });
}

const promises = [
    withTimeout(createPromise("fetch1", 400), 1000),
    withTimeout(createPromise("fetch2", 1200), 1000),
    withTimeout(createPromise("fetch3", 800), 1000),
    withTimeout(createPromise("fetch4", 2500), 1000),
    withTimeout(createPromise("fetch5", 600), 1000),
];

Promise.allSettled(promises).then((results) => {
    const fulfilled = [];
    const timedOut = [];

    results.forEach((result, index) => {
        if (result.status === "fulfilled") {
            fulfilled.push(result.value);
        } else {
            timedOut.push(`fetch${index + 1}`);
        }
    });

    console.log("Fulfilled:", fulfilled.join(", "));
    console.log("Timed out:", timedOut.join(", "));
});
