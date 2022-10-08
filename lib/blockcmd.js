global.fs = require('fs')

global.addblockcmd = (msg, _data) => {
    const obj = {
        cmd: msg,
    }
    _data.push(obj)
    global.setDatabase('blockcmd.json', JSON.stringify(_data))

    return true
}

global.deleteblockcmd = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].cmd === command) {
            _data.splice(i, 1)
            global.setDatabase('blockcmd.json', JSON.stringify(_data))
        }
    })
    return true
}

global.checkblockcmd = (command, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].cmd === command) {
            status = true
        }
    })

    return status
}

