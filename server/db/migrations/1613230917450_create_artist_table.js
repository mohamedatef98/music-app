module.exports = {
    up: `CREATE TABLE Artist (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name varchar(40) NOT NULL,
        imageFileId INT,
        FOREIGN KEY (imageFileId) REFERENCES ImageFile(fileId) ON DELETE SET NULL
    )`,
    down: 'DROP TABLE Artist;'
}