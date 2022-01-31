const express = require('express');
const songsRoute = express.Router();
const { getAllSongs, 
        getSongById, 
        postAndGet,
        deleteAndGet } = require('../queries/songQuery');

// Where should we error handle?
    // in server or database side?
// What's the difference between this file and songQuery file?
    // is it server vs database file?

songsRoute.get('/', async (request, response) => {
    const allSongs = await getAllSongs();

    allSongs
    ? response.status(200).json(allSongs)
    : response.status(404).json({ error: `data at id: ${id} not found` });
});

songsRoute.get('/:id', async (request, response) => {
    const { id } = request.params;
    const theSong = await getSongById(id);

    theSong.length !== 0
    ? response.status(200).json(theSong)
    : response.status(404).json({ error: `data at id: ${id} not found` });
    // how can I redirect to the 404 page on my app.js
});

// wait a min,
    // how are we making these requests without axios??

songsRoute.post('/', async (request, response) => {
    const postedSong = await postAndGet(request.body);
    const allSongs = await getAllSongs();

    allSongs.push(postedSong)
    ? response.status(201).json(allSongs)
    : response.status(404).json({ error: `wasn't able to post the content` });
});

songsRoute.delete('/:id', async (request, response) => {
    const {id} = request.params;
    const deletedSong = await deleteAndGet(id);
    
    deletedSong
    ? response.status(200).json(deletedSong)
    : response.status(404).json({ error: `we're sorry we couldn't delete the data` });
});

module.exports = songsRoute;