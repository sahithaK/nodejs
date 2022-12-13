import { IsNotEmpty} from 'class-validator';

export class ThoughtsDTO {

  @IsNotEmpty()
  owner: string;

  @IsNotEmpty()
  thoughts: string;
}
