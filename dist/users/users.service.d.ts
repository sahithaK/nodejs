import { Repository } from 'typeorm';
import { loginDTO } from './dto/login.dto';
import { userDTO } from './dto/users.dto';
import { User } from './users.entity';
export declare class UsersService {
    private usersRepository;
    constructor(usersRepository: Repository<User>);
    saveuser(user: userDTO): Promise<userDTO>;
    usercheck(username: string): Promise<loginDTO>;
    changepassword(email: string, password: string, newpassword: string): Promise<import("typeorm").UpdateResult>;
    forgotpassword(email: string, username: string, resetpassword: string): Promise<import("typeorm").UpdateResult>;
    checkbalance(email: string): Promise<{
        accountbalance: number;
    }>;
    credit(email: string, amount: number): Promise<import("typeorm").UpdateResult>;
    payelectricity(email: string, ebill: number, pbill: number): Promise<import("typeorm").UpdateResult>;
    payphone(email: string, bill: number): Promise<import("typeorm").UpdateResult>;
    payphoneandelectricity(email: string, pbill: number, ebill: number): Promise<import("typeorm").UpdateResult>;
}
