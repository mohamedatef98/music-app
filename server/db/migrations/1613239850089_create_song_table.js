module.exports = {
    up: `CREATE TABLE Song (
        id INT PRIMARY KEY AUTO_INCREMENT,
        name varchar(40) NOT NULL,
        audioFileId INT NOT NULL UNIQUE,
        FOREIGN KEY (audioFileId) REFERENCES AudioFile(fileId) ON DELETE CASCADE
    );`,
    down: 'DROP TABLE Song;'
}