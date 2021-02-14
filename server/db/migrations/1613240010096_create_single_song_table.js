module.exports = {
    up: `CREATE TABLE SingleSong (
        songId INT NOT NULL PRIMARY KEY,
        artistId INT NOT NULL,
        imageFileId INT UNIQUE,
        releaseDate Date,
        FOREIGN KEY (songId) REFERENCES Song(id) ON DELETE CASCADE,
        FOREIGN KEY (artistId) REFERENCES Artist(id) ON DELETE CASCADE,
        FOREIGN KEY (imageFileId) REFERENCES ImageFile(fileId) ON DELETE SET NULL
    );`,
    down: 'DROP TABLE SingleSong;'
}