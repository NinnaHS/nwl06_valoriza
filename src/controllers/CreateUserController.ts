import {Request, Response} from "express"
import { CreateUserService } from "../services/CreateUserService";

class CreateUserControler{
//pega a requisição e manda para o server
    async handle(request: Request, response: Response){
        // maneira 1 de tratar
        // try{
        //     const {name, email, admin } = request.body;
        //     const createUserService = new CreateUserService();
        //     const user = await createUserService.execute({name, email, admin});
        //     return response.json(user);
        // }catch(error){
        //     return response.status(400).json({error: error.message});
        // }        
        const {name, email, admin, password } = request.body;
        const createUserService = new CreateUserService();
        const user = await createUserService.execute({name, email, admin, password,});
        return response.json(user);
    }
}

export {CreateUserControler};