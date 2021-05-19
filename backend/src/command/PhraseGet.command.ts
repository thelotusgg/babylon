import { ICommand } from "@nestjs/cqrs";

export class PhraseGetCommand implements ICommand {

    constructor(public readonly phraseId: number) {}

}
