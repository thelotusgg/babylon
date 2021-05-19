import { ICommand } from "@nestjs/cqrs";
import PhraseCreateDTO from "src/dto/PhraseCreate.dto";

export class PhraseCreateCommand implements ICommand {

    constructor(public readonly phrase: PhraseCreateDTO) {}

}
