import express from 'express';

const app = express();

import { users } from './users';
import {getSingleUserInterface} from './getSingleUserInterface';

class GetSingleUser implements getSingleUserInterface {
    getSingleUser() {
        return users;
    }
}

export const singleUser = new GetSingleUser();
