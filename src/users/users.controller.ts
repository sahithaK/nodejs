import { Body, Controller, Get, Param, Post, Req ,UseGuards } from '@nestjs/common';
import { UsersService } from './users.service';
import {userDTO} from './dto/users.dto';
import { loginDTO } from './dto/login.dto';
import { AuthGuard } from '@nestjs/passport';
import { changepassDTO } from './dto/changepass.dto';
import { forgotpasswordDTO } from './dto/forgotpass.dto';
import { checkbalanceDTO } from './dto/checkbalance.dto';
import { creditamountDto } from './dto/creditamount.dto';

@Controller('bank')
export class UsersController {
    constructor(public _UsersService:UsersService){}

@Post('/register')
register(@Body() reguser:userDTO){
const save= this._UsersService.saveuser(reguser);
return save;
}

@Post('/login')
@UseGuards(AuthGuard('local'))
loginuser(@Body()loguser:loginDTO){
const login=this._UsersService.usercheck(loguser.username);
return login;
}

@Post('/changepassword')
@UseGuards(AuthGuard('jwt'))
changePassword(@Body() chnagepass:changepassDTO){
const updatedpassword= this._UsersService.changepassword(chnagepass.email,chnagepass.oldpassword,chnagepass.newpassword);
return updatedpassword;
}

@Post('/forgotpassword')
@UseGuards(AuthGuard('jwt'))
forgotpassword(@Body() forgotpass:forgotpasswordDTO){
const resetpassword= this._UsersService.changepassword(forgotpass.email,forgotpass.username,forgotpass.resetpassword);
return resetpassword;
}

@Get('/balance')
@UseGuards(AuthGuard('jwt'))
checkbalance(@Body() checkbalance:checkbalanceDTO){
  return this._UsersService.checkbalance(checkbalance.email)
}

@Get('credit/:amount')
@UseGuards(AuthGuard('jwt'))
creditamount(@Body() creditdto:creditamountDto, @Param('amount') amount){
return this._UsersService.credit(creditdto.email,parseInt(amount))
}

}
