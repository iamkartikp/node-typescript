import { Request, Response } from 'express';
import { users } from './users';
import bcrypt from 'bcrypt';

export const postUsers = async (req: Request,res: Response) => {
    try {
        const salt = await bcrypt.genSalt(10);
        console.log({salt});
        
        const hashedPassword: string = await bcrypt.hash(req.body.password, salt);
        console.log({hashedPassword});
        const user = {id: Math.floor(Math.random()*1000), 
                        name: req.body.name, password: hashedPassword}
        users.push(user);
        res.status(200).send(req.headers);

    } catch {
        res.status(500).send('User not registered :(');
    }
}