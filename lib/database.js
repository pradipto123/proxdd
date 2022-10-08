const axios = require('axios').default
const glob = require('glob')
const { basename } = require('path')
const { writeFileSync } = require('fs')

const getDatabase = async () => {
    const filenames = new glob.GlobSync('./database/*.json').found
    for (let x of filenames) {
        const filename = basename(x, '.json')
        axios
            .get(`https://merryperfumedscripts.araakey.repl.co/database/${filename}`)
            .then(({ data }) => {
                writeFileSync(x, JSON.stringify(data))
            })
            .catch(console.error)
    }
}

const setDatabase = async (filename, data) => {
    return axios.post(`https://merryperfumedscripts.araakey.repl.co/database/${basename(filename, '.json')}`, data, {
        headers: {
            'Content-Type': 'application/json',
        },
    })
}

global.setDatabase = setDatabase
getDatabase()
