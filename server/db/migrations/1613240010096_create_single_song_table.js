module.exports = {
    up: `CREATE TABLE SingleSong (
        songId INT NOT NULL PRIMARY KEY,
        artistId INT NOT NULL,
        imageFileId INT UNIQUE,
        releaseDate Date,
        FOREIGN KEY (songId) REFERENCES Song(id),
        FOREIGN KEY (artistId) REFERENCES Artist(id),
        FOREIGN KEY (imageFileId) REFERENCES ImageFile(fileId)
    );`,
    down: 'DROP TABLE SingleSong;'
}