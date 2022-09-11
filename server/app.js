// Phase 2
const {
	getAllArtists,
	getLatestArtist,
	getArtistByArtistId,
	addArtist,
	editArtistByArtistId,
	deleteArtistByArtistId,
	getAlbumsForLatestArtist,
	getAlbumsByArtistId,
	getAlbumByAlbumId,
	addAlbumByArtistId,
	editAlbumByAlbumId,
	deleteAlbumByAlbumId,
	getFilteredAlbums,
	getSongsByArtistId,
	getSongsByAlbumId,
	getSongBySongId,
	addSongByAlbumId,
	editSongBySongId,
	deleteSongBySongId,
} = require("./data");

const express = require("express");
const app = express();
app.use(express.json());
// Your code here

app.use((req, res, next) => {
	console.log("Body:", req.body);

	next();
});

app.get("/artists", (req, res) => {
	const artists = getAllArtists();
	// res.statusCode(200);
	res.status(200).json(getAllArtists());
});

app.post("/artists", (req, res) => {
	const data = req.body;
	addArtist(data);
	res.status(201).json(data);
});

app.get("/artists/latest", (req, res) => {
	res.status(200).json(getLatestArtist());
});

app.get("/artists/latest/albums", (req, res) => {
	res.status(200).json(getAlbumsForLatestArtist());
});
const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
