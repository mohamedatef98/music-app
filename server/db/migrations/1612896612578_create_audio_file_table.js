module.exports = {
    up: `CREATE TABLE AudioFile (
        fileId INT NOT NULL PRIMARY KEY,
        FOREIGN KEY (fileId) REFERENCES File(id)
    )`,
    down: 'DROP TABLE AudioFile'
}