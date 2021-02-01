const { log } = console

// Throw err in promise
// not res, rej
const promise = function () {
    return Promise.reject(1).then(v => {
        return Promise.reject(2)
    }).catch(v => {
        log('in catch', v)
    })
};

(async function () {
    log('brfore')
    let v = promise().then((v) => {
        log('in then', v)
    }).catch((err) => {
        log('in catch', err)
    })
    log(v)
    log('after')
})();
