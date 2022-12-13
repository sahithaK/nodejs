import { IsEmail, IsNotEmpty,MinLength,MaxLength} from 'class-validator';

export class RegistrationDTO {

    @IsNotEmpty()
    username: string;

    @IsNotEmpty()
    @MinLength(6)
    @MaxLength(10)
    password: string;

    @IsEmail()
    email:any;
   
  }