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
exports.postUsers = void 0;
const users_1 = require("./users");
const bcrypt_1 = __importDefault(require("bcrypt"));
const postUsers = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        const salt = yield bcrypt_1.default.genSalt(10);
        const hashedPassword = yield bcrypt_1.default.hash(req.body.password, salt);
        const user = { id: Math.floor(Math.random() * 1000),
            name: req.body.name, password: hashedPassword };
        users_1.users.push(user);
        res.status(201).send('User registered!');
    }
    catch (_a) {
        res.status(500).send('User not registered :(');
    }
});
exports.postUsers = postUsers;
