"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const router = express_1.default();
router.use(express_1.default());
router.use(express_1.default.json());
const getUsers_1 = require("./getUsers");
const getSingleUser_1 = require("./getSingleUser");
const postUsers_1 = require("./postUsers");
const login_1 = require("./login");
router.get('/users', (req, res) => {
    res.send(getUsers_1.ob.getUsers());
});
router.get('/users/:id', (req, res) => {
    const user = getSingleUser_1.singleUser.getSingleUser().find(u => u.id == parseInt(req.params.id));
    res.send(user);
});
router.post('/users', postUsers_1.postUsers);
router.post('/users/login', login_1.login);
exports.default = router;
