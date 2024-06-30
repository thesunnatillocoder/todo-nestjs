import { IsNotEmpty } from 'class-validator';

export class TodoDto {

    @IsNotEmpty()
    title: string;

    @IsNotEmpty()
    desc: string;
    
}
