module.exports = {
    up: `CREATE TABLE AudioFile (
        fileId INT NOT NULL PRIMARY KEY,
        FOREIGN KEY (fileId) REFERENCES File(id) ON DELETE CASCADE
    )`,
    down: 'DROP TABLE AudioFile'
}