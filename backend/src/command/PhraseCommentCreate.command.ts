import { ICommand } from "@nestjs/cqrs";
import PhraseCreateCommentDTO from "src/dto/PhraseCommentCreate.dto";

export class PhraseCommentCreateCommand implements ICommand {

    constructor(public readonly phraseDTO: PhraseCreateCommentDTO) {}

}
