const { log } = console


const promise = function () {
    return Promise.resolve(1).then(v => {
        log('then', v)
        return Promise.reject(2)
    }).catch(v => {
        log('catch', v)
        return Promise.reject(3)
    }).finally(v => {
        log('final', v)
        return (4)
    })
};

(async function () {
    log('brfore')
    let v = promise().then((v) => {
        log('in then', v)
        // log('in then', Promise.resolve('x'))
    }).catch((err) => {
        log('in catch', err)
    }).finally((err) => {
        log('in final', err)
    })
    log(v)
    log('after')
})();
