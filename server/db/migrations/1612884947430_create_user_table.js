module.exports = {
        up: `CREATE TABLE User (
            id INT NOT NULL PRIMARY KEY AUTO_INCREMENT,
            username varchar(30) NOT NULL,
            email varchar(30) NOT NULL UNIQUE,
            password varchar(50) NOT NULL 
        );`,
    down: 'DROP TABLE User;'
}
