import { UsersService } from 'src/users/users.service';
import { JwtService } from '@nestjs/jwt';
import { loginDTO } from 'src/users/dto/login.dto';
export declare class AuthService {
    UsersService: UsersService;
    JwtService: JwtService;
    constructor(UsersService: UsersService, JwtService: JwtService);
    validateUser(username: string, pass: string): Promise<any>;
    generatetoken(login: loginDTO): Promise<{
        token: string;
    }>;
}
