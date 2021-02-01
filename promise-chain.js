const { log } = console

// Throw err in promise
// not res, rej
const promise = function () {
    return Promise.resolve(1)
};

(async function () {
    log('brfore')
    await promise()
    log('after')
})();