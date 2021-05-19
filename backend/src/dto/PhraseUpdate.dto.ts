import { IsNumber, IsString } from "class-validator";

export default class PhraseUpdateDTO {

    @IsString()
    readonly key: string;

    @IsNumber()
    readonly phraseId: number;

}
