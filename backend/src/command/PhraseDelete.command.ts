import { ICommand } from "@nestjs/cqrs";

export class PhraseDeleteCommand implements ICommand {

    constructor(public readonly phraseId: number) {}

}