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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.login = void 0;
const users_1 = require("./users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const login = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    const user = users_1.users.find(user => user.name === req.body.name);
    if (user == null) {
        return res.send('User not found!');
    }
    try {
        if (yield bcrypt_1.default.compare(req.body.password, user.password)) {
            res.send('Login successful!');
        }
        else {
            res.send('Cannot login');
        }
    }
    catch (_a) {
        res.status(500).send('500');
    }
});
exports.login = login;
