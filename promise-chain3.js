const { log } = console

// Throw err in promise
// not res, rej
const promise = function () {
    return Promise.resolve(1).then(v => {
    }).catch(v => {
        log(v)
    })
};

(async function () {
    log('brfore')
    let v= await promise()
    log(v)
    log('after')
})();
