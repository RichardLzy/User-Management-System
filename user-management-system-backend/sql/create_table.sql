# Database Initialization

-- Create Database
create database if not exists user_management_system;

-- Use Database
use user_management_system;

-- User Table
create table user (
    id bigint auto_increment comment 'id' primary key,
    username varchar(256) null comment 'User Nickname',
    userAccount varchar(256) null comment 'Account',
    avatarUrl varchar(1024) null comment 'Avatar',
    gender tinyint null comment 'Gender',
    userPassword varchar(512) not null comment 'Password',
    phone varchar(128) null comment 'Phone',
    email varchar(512) null comment 'Email',
    userStatus int default 0 not null comment 'Status 0 - Normal',
    createTime datetime default CURRENT_TIMESTAMP null comment 'Create Time',
    updateTime datetime default CURRENT_TIMESTAMP null on update CURRENT_TIMESTAMP,
    isDelete tinyint default 0 not null comment 'Is Deleted',
    userRole int default 0 not null comment 'Role 0 - User 1 - Admin'
) comment 'User';

-- Insert Demo User
INSERT INTO
    user_management_system.user (
        username,
        userAccount,
        avatarUrl,
        gender,
        userPassword,
        phone,
        email,
        userStatus,
        createTime,
        updateTime,
        isDelete,
        userRole
    )
VALUES (
        'admin',
        'admin',
        '',
        null,
        '734d2f66b73652996d2104ac306a33fe', -- 12345678
        null,
        null,
        0,
        '2023-08-06 14:14:22',
        '2023-08-06 14:39:37',
        0,
        1
    );