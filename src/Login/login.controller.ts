import { Controller,Header,Body,Get, Param, Post,Render,Res} from '@nestjs/common';
import { AppService } from '../app.service';
import { LoginDTO } from '../Login/login.dto';
import { Response } from 'express';
import { RegistrationController } from 'src/registration/registration.controller';
import {ThoughtsDTO}  from './thoughts.dto';

@Controller()
export class LoginController{
loggedin:boolean=false;
thoughtsexsisting = [
             {  "owner": "suresh", "thoughts":"piligram places" },
             { "owner": "naresh", "thoughts":"hill stations" },
            { "owner": "ramya", "thoughts":"my todo's" }
        ];
constructor(public AppService:AppService){

}

@Post('/login')
@Render('login')
submit(@Body() logdata: LoginDTO, @Res() res:Response){
   if(this.AppService.loginuser)
   {   
   return res.render('welcome',{username: logdata.username ,thoughts :this.thoughtsexsisting});
   }
   else{
    return res.render('login')
  }
}

@Post('/welcome')
@Render('welcome')
submit2(@Body() thought:ThoughtsDTO,@Res() res:Response){
    console.log(this.thoughtsexsisting);
    this.thoughtsexsisting = [...this.thoughtsexsisting, thought];

    return res.render('welcome',{user :this.thoughtsexsisting});
}

  
}