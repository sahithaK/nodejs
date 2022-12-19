import { Strategy } from 'passport-jwt';
import { AuthService } from './auth.service';
declare const JwtStrategy_base: new (...args: any[]) => Strategy;
export declare class JwtStrategy extends JwtStrategy_base {
    AuthService: AuthService;
    constructor(AuthService: AuthService);
    validate(payload: any): Promise<{
        username: any;
    }>;
}
export {};
