module.exports = {
    up: `CREATE TABLE ImageFile (
        fileId INT NOT NULL PRIMARY KEY,
        FOREIGN KEY (fileId) REFERENCES File(id)
    )`,
    down: 'DROP TABLE ImageFile'
}