import { UsersService } from './users.service';
import { userDTO } from './dto/users.dto';
import { loginDTO } from './dto/login.dto';
import { changepassDTO } from './dto/changepass.dto';
import { forgotpasswordDTO } from './dto/forgotpass.dto';
import { checkbalanceDTO } from './dto/checkbalance.dto';
import { creditamountDto } from './dto/creditamount.dto';
export declare class UsersController {
    _UsersService: UsersService;
    constructor(_UsersService: UsersService);
    register(reguser: userDTO): Promise<userDTO>;
    loginuser(loguser: loginDTO): Promise<loginDTO>;
    changePassword(chnagepass: changepassDTO): Promise<import("typeorm").UpdateResult>;
    forgotpassword(forgotpass: forgotpasswordDTO): Promise<import("typeorm").UpdateResult>;
    checkbalance(checkbalance: checkbalanceDTO): Promise<{
        accountbalance: number;
    }>;
    creditamount(creditdto: creditamountDto, amount: any): Promise<import("typeorm").UpdateResult>;
}
