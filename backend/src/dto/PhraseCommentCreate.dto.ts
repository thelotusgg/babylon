import { IsNumber, IsString } from "class-validator";

export default class PhraseCommentCreateDTO {

    @IsNumber()
    readonly phraseId: number;
    
    @IsString()
    readonly comment: string;

    @IsNumber()
    readonly userId: number;

}