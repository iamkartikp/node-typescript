import express, { Request, Response } from 'express';

const router = express();
router.use(express());
router.use(express.json());

import {ob} from './getUsers';
import {singleUser} from './getSingleUser';
import {postUsers} from './postUsers';
import {login} from './login';


router.get('/users', (req,res) => {
    res.send(ob.getUsers())
})

router.get('/users/:id', (req,res) => {
    const user = singleUser.getSingleUser().find(u => u.id == parseInt(req.params.id));
    res.send(user);
})

router.post('/users', postUsers);


router.post('/users/login', login)

export default router;