const fs = require('fs')

/**
 * Add user to bannedList database
 * @param {String} userId
 * @param {String} expired
 * @param {Object} _data
 */
global.addBanned = (nama, tanggal, userId, _data) => {
    let success = false

    const obj = { name: nama, id: userId, date: tanggal }

    _data.push(obj)
    global.setDatabase('banned.json', JSON.stringify(_data))
}
/**
 * Unbanned someone.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Number}
 */
global.unBanned = (userId, _data) => {
    let position = null
    Object.keys(_data).forEach((i) => {
        if (_data[i].id === userId) {
            position = i
        }
    })
    if (position !== null) {
        _data.splice(position, 1)
        global.setDatabase('banned.json', JSON.stringify(_data))
    }
    return true
}

/**
 * Check user is premium.
 * @param {String} userId
 * @param {Object} _dir
 * @returns {Boolean}
 */
global.cekBannedUser = (userId, _dir) => {
    let status = false
    Object.keys(_dir).forEach((i) => {
        if (_dir[i].id === userId) {
            status = true
        }
    })

    return status
}

global.clearAllBan = (_dir) => {
    Object.keys(_dir).forEach((i) => {
        _dir.splice(_dir[i], 1)
        global.setDatabase('banned.json', JSON.stringify(_dir))
    })
    console.log('Sukses clear all ban')
}


