import { Request, Response } from 'express';
import { users } from './users';
import bcrypt from 'bcrypt';

export const login = async (req: Request, res: Response) => {
    const user = users.find(user => user.name === req.body.name);
    if(user == null) {
        return res.send('User not found!');
    }
    try {
        if(await bcrypt.compare(req.body.password, user.password)) {
            res.send('Login successful!')
        } else {
            res.send('Cannot login')
        }
    } catch {
        res.status(500).send('500')
    }
}