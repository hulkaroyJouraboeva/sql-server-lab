const express = require('express');
const songsRoute = express.Router();
const { getAllSongs, getSongById, postAndGet } = require('../queries/songQuery');

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
    // how can I redirect to the 404 page on my app.js
});

// wait a min,
    // how are we making these requests without axios??

songsRoute.post('/', async (request, response) => {
    console.log(request.body);
    const postedSong = await postAndGet(request.body);
    const allSongs = await getAllSongs();

    allSongs.push(postedSong)
    ? response.status(201).json(allSongs)
    : response.status(404).json({ error: `wasn't able to post the content` });
})

module.exports = songsRoute;