import { Request, Response, NextFunction } from "express";
import { verify } from "jsonwebtoken";


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
        const decode = verify(token , "94d5cffbf574f9f41aaaf6f3c97a3f83");
        
        return next();
    } catch (err) {
        return response.status(401).end();
    }
    
    // Recuperar informações do usuario


   
}