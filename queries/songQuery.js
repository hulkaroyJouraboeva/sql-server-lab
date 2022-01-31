const database = require('../db/dbConfig');

const getAllSongs = async () => {
    try {
        // is * referring to the columns (the type of data to get back)
        const allSongs = await database.any('SELECT * FROM songs;');
        return allSongs;
    } catch(error) {
        return error;
    }
};

const getSongById = async (index) => {
    try {
        const theSong = await database.any(`SELECT * FROM songs WHERE id = ${index};`);
        return theSong;
    } catch(error) {
        return error;
    }
};

const postAndGet = async ({ title, artist, album, length, is_favorite }) => {
    try {
        const postedSong = await database.any(`
            INSERT INTO songs 
                (title, artist, album, length, is_favorite) 
            VALUES
                ('${title}', '${artist}', '${album}', '${length}', ${is_favorite})
            RETURNING * ;`);

        return postedSong;
    } catch(error) {
        return error;
    }
}

module.exports = {
    getAllSongs,
    getSongById,
    postAndGet,
};