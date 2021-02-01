const { log } = console

// 

const promise = function () {
    return new Promise(() => { }).then(v => {
        log('then', v)
        return (2)
    }).catch(v => {
        log('catch', v)
        return (3)
    }).finally(v => {
        log('final', v)
        return (4)
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
