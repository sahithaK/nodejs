import { loginDTO } from '../users/dto/login.dto';
import { AuthService } from './auth.service';
export declare class AuthController {
    _AuthService: AuthService;
    constructor(_AuthService: AuthService);
    gettoken(login: loginDTO, req: Request): Promise<{
        token: string;
    }>;
    getProfile(req: Request): any;
}
