"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
var readlineSync = require("readline-sync");
const axios = require("axios").default;
let getData = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield axios.get("http://localhost:3000/Users");
    let data = res.data;
    let accountNum = readlineSync.question("Enter your Account Number: ");
    let pass = readlineSync.question("Enter your Password : ");
    for (let i = 0; i < data.length; i++) {
        if (accountNum == data[i].accountNo && pass == data[i].password) {
            console.log("User Deatils: ", data[i]);
            return;
        }
    }
    console.log("Invalid Credentials");
    return;
});
getData();
