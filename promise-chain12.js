const { log } = console

// 

const promise = function () {
    return Promise.resolve(1).then(v => {
        log('in then', v)
        return (2)
    }).catch(v => {
        log('in catch', v)
        return (2)
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
