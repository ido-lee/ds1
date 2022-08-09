"use strict";

class UserStorage {
    static #users = {
        id: ["sirius", "cello", "i.do.lee"],
        psword: ["1234", "1234", "123456"],
        name: ["이동건", "카리나", "유지민"],
    };

    static getUsers(...fields) {
        const users = this.#users;
        const newUsers = fields.reduce((newUsers, field) => {
            if (users.hasOwnProperty(field)) {
                newUsers[field] = users[field];
            };
            return newUsers;
        }, {});
        return newUsers;
    }

};

module.exports = UserStorage