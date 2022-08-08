"use strict";

// const { post } = require("../../../routes/home");

const id = document.querySelector("#id"), // 선택자
    psword = document.querySelector("#psword"),
    loginBtn = document.querySelector("button");

// console.log(id);

loginBtn.addEventListener("click", login);

function login() {
    const req = {
        id: id.value,
        psword: psword.value,
    };

    // console.log(req, JSON.stringify(req));
    fetch("/login", {
        method: "POST",
        headers: {
            "Content-Type": "application/json",
        },
        body: JSON.stringify(req),
    });
};