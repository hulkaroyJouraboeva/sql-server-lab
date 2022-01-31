const express = require('express');
const songsRoute = express.Router();
const { getAllSongs, getSongById } = require('../queries/songQuery');

// Where should we handle error handling?
    // in server or database side?
// What's the difference between this file and songQuery file?
    // is it server vs database file?

songsRoute.get('/', async (request, response) => {
    const allSongs = await getAllSongs();
    allSongs
    ? response.status(200).json(allSongs)
    : response.status(404).json({ error: `data at index: ${index} not found` });
});

songsRoute.get('/:index', async (request, response) => {
    const { index } = request.params;
    const theSong = await getSongById(index);
    theSong.length !== 0
    ? response.status(200).json(theSong)
    : response.status(404).json({ error: `data at index: ${index} not found` });
});

module.exports = songsRoute;