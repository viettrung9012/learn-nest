import { IsString, IsInt } from "class-validator";

export class CreateCatDTO {
    @IsString()
    name: string;

    @IsInt()
    age: number;

    @IsString()
    breed: string;
}