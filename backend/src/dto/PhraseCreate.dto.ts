import { IsNumber, IsString } from "class-validator";

export default class PhraseCreateDTO {

    @IsNumber()
    readonly projectId: number;
    
    @IsString()
    readonly key: string;

}
