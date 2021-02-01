const { log } = console

// Promise not resolve/reject
// Pending forever
const foreverPromise = function () {
    return new Promise(() => { })
};
// Using directly
(async function () {
    log('brfore')
    await new Promise(() => { })
    log('after')
})();

// Using in func return
(async function () {
    log('brfore')
    await foreverPromise()
    log('after')
})();

// Using in func return
// then catch
(function () {
    log('brfore')
    foreverPromise().then((() => {
        log('in then')
    })).catch(() => {
        log('in catch')
    }).finally(() => {
        log('in finally')
    })
    log('after')

})();