const { log } = console

// Throw err in promise
// not res, rej
const throwErrPromise = function () {
    return new Promise((r,reject) => {
        throw('err')
    })
};

(async function () {
    log('brfore')
    await throwErrPromise()
    log('after')
})();

// (function () {
//     log('brfore')
//     throwErrPromise().then((v) => {
//         log('in then', v)
//     }).catch((v) => {
//         log('in catch', v)
//     }).finally((v) => {
//         log('in final', v)
//     });
//     log('after')

// })();