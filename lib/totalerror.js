const fs = require('fs')

global.addError = (msg, command, _data) => {
    const obj = {
        error: msg,
        cmd: command,
    }
    _data.push(obj)
    global.setDatabase('listerror.json', JSON.stringify(_data))

    return true
}

global.deleteError = (command, _data) => {
    Object.keys(_data).forEach((i) => {
        if (_data[i].error === command) {
            _data.splice(i, 1)
            global.setDatabase('listerror.json', JSON.stringify(_data))
        }
    })
    return true
}

global.checkError = (command, _data) => {
    let status = false
    Object.keys(_data).forEach((i) => {
        if (_data[i].error === command) {
            status = true
        }
    })

    return status
}

global.clearAllError = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
        global.setDatabase('listerror.json', JSON.stringify(_dir))
    })
    console.log('Sukses clear all error')
}

