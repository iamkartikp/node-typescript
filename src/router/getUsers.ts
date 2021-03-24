import express from 'express';

const app = express();

import { users } from './users';
import {getUsersInterface} from './getUsersInterface';

class GetUsers implements getUsersInterface {
    getUsers() {
        return users;
    }
}

export const ob = new GetUsers();
