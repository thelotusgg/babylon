import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PhraseCreateCommand } from "src/command/PhraseCreate.command";
import { PhraseRepository } from "src/repository/Phrase.repository";

@CommandHandler(PhraseCreateCommand)
export class PhraseCreateHandler implements ICommandHandler<PhraseCreateCommand> {
 
    constructor(
        private readonly repository: PhraseRepository
    ) {}

    async execute(command: PhraseCreateCommand) {
        const phrase = command.phrase;
        await this.repository.createPhrase(phrase);
    }

}