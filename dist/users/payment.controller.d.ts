import { UsersService } from './users.service';
import { paybillsDTO } from './dto/paybills.dto';
export declare class PaymentController {
    _UsersService: UsersService;
    constructor(_UsersService: UsersService);
    paymenttoelectricitybill(paybillsDTO: paybillsDTO, electricitybill?: number, phonebill?: number): string;
}
