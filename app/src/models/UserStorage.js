"use strict";


const fs = require("fs").promises;

class UserStorage {
    static #getUserInfo(data, id) {
        const users = JSON.parse(data, id);
        const idx = users.id.indexOf(id);
        const usersKeys = Object.keys(users);    // => [id, psword]
        const userInfo = usersKeys.reduce((newUser, info) => {
            newUser[info] = users[info][idx];
            return newUser
        }, {});

        return userInfo
    }

    static #getUsers (data, isALL, fields) {
        const users = JSON.parse(data);
        if (isALL) return users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    }

    static getUsers(isALL, ...fields) {
        // const users = this.#users;
        return fs
        .readFile("./src/databases/users.json") 
        .then((data) => {
          return this.#getUsers(data, isALL, fields);
        })
         .catch(console.error);        
    }

    static getUserInfo(id) {
        return fs
        .readFile("./src/databases/users.json") 
        .then((data) => {
          return this.#getUserInfo(data, id);
        })
         .catch(console.error);
       
    }

    static async save(userInfo) {
        const users = await this.getUsers(true)
        if (users.id.includes(userInfo.id)) {
            throw "이미 존재하는 아이디 입니다.";
        }
        users.id.push(userInfo.id);
        users.name.push(userInfo.name);
        users.psword.push(userInfo.psword);
         // 데이터 추가
        fs.writeFile("./src/databases/users.json", JSON.stringify(users));
        return { success: true };
    }
};

module.exports = UserStorage