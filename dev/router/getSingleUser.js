"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.singleUser = void 0;
const express_1 = __importDefault(require("express"));
const app = express_1.default();
const users_1 = require("./users");
class GetSingleUser {
    getSingleUser() {
        return users_1.users;
    }
}
exports.singleUser = new GetSingleUser();
