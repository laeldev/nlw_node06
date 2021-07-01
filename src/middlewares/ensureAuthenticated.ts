import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";

interface IPayload{
    sub: string;
}

export function ensureAuthenticated(
    request: Request,
    response: Response,
    next: NextFunction
) {
    // Receber o token
    const authToken = request.headers.authorization;
    

    // Validar se token esta preenchido
    if(!authToken){
        return response.status(401).end();
    }

    const [, token] = authToken.split(" ");
      
    // Validar se token e valido
    try{
        const { sub } = verify(token , "94d5cffbf574f9f41aaaf6f3c97a3f83") as IPayload;
        
        // Recuperar informações do usuario
        request.user_id = sub;

        return next();
    } catch (err) {
        return response.status(401).end();
    }
    
    


   
}