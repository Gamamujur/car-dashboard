import { Request, Response, NextFunction } from "express";

const jwt = require("jsonwebtoken");

const authorizeToken = (userRole? : string[]) =>  (req: Request, res: Response, next: NextFunction)=> {
    const token = req.header('Authorization');
    const splitToken = token?.split('Bearer ')[1]
    if (!token) {
        return res.status(401).json({ message: 'Unauthorized - No Token' });
    }

    try {
        const decoded = jwt.verify(splitToken, 'CAR-DASH');

        if(userRole!.length > 0 && !userRole?.includes(decoded.role)){
            return res.status(401).json({message : 'Invalid Role'})
        }

        // @ts-ignore
        req.user = decoded;

        next();
    } catch (error) {
        return res.status(401).json({ message: 'Unauthorized - Invalid token' });
    }
};

export default authorizeToken