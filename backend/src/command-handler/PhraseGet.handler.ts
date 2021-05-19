import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PhraseGetCommand } from "src/command/PhraseGet.command";
import { PhraseRepository } from "src/repository/Phrase.repository";

@CommandHandler(PhraseGetCommand)
export class PhraseGetHandler implements ICommandHandler<PhraseGetCommand> {
    
    constructor(
        private readonly repository: PhraseRepository
    ) {}

    async execute(command: PhraseGetCommand) {
        const phraseId = command.phraseId;
        await this.repository.getPhraseById(phraseId);
    }

}
