module.exports = {
    up: `create table File(
        id INT not null primary key auto_increment,
        name varchar(30) not null,
        directory varchar(20) not null
    )`,
    down: 'drop table File'
}