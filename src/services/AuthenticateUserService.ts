import { getCustomRepository } from "typeorm"
import { UsersRepositories } from "../repositories/UsersRepositories";
import {compare} from "bcryptjs";
import {sign} from "jsonwebtoken";

interface IAuthenticateRequest{
    email: string;
    password: string;
}

class AuthenticateUserService{
    async execute({email, password}: IAuthenticateRequest){
        const usersRepositories = getCustomRepository(UsersRepositories);
        //Verificar se email existe
        const user = await usersRepositories.findOne({
            email,
        });
        if(!user){
            throw new Error("Email/Password Incorrect");
        }
        //Verificar se senha correta
        const passwordMatch = await compare(password, user.password);
        if(!passwordMatch){
            throw new Error("Email/Password Incorrect");
        }
        //Gerar token
        const token = sign({
            email: user.email,
        }, 
        "c2498b2d42faa96da3b5b62e03e3be1b",
        {
            subject: user.id,
            expiresIn: "1d",
        });
        return token;
    }
}

export{AuthenticateUserService};