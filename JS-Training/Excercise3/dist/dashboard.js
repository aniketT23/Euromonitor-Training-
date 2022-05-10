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
const getData = () => __awaiter(void 0, void 0, void 0, function* () {
    let res = yield axios.get("http://localhost:3000/Users/1");
    let data = yield res.data;
    let choice = readlineSync.question("Please Select a Option: \n 1.Withdraw \n 2.Deposit ");
    if (+choice == 1) {
        let amount = readlineSync.question("Enter Amount you want to Withdraw: ");
        if (+amount > +data.amount) {
            throw "you cannot withdraw the amount due to insufficient balance";
        }
        else {
            data.amount = +data.amount - +amount;
            postData(data);
            console.log("User Data: ", data);
        }
    }
    else if (+choice == 2) {
        let amount = readlineSync.question("Enter Amount you want to Deposit: ");
        if (data.account == "Current") {
            if (+amount < 1000) {
                throw "Minimum balance should not be less than 1000";
            }
            else {
                data.amount = +data.amount + +amount;
            }
        }
        else {
            if (+amount < 500) {
                throw "Minimum balance should not be less than 500";
            }
            else {
                data.amount = +data.amount + +amount;
            }
        }
        postData(data);
        console.log("User Data: ", data);
    }
    else {
        throw "Choose a Valid Option";
    }
});
getData();
const postData = (data) => __awaiter(void 0, void 0, void 0, function* () {
    return yield axios.put("http://localhost:3000/Users/1", data);
});
