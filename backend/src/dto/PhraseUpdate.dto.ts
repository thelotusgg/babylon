import { IsNumber, IsString } from "class-validator";

export default class ProjectDeleteDTO {

    @IsString()
    readonly key: string;

    @IsNumber()
    readonly phraseId: number;

}
