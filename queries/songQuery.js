const database = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        const allSongs = await database.any('SELECT * FROM songs');
        return allSongs;
    } catch(error) {
        return error;
    }
};

module.exports = {
    getAllSongs
};