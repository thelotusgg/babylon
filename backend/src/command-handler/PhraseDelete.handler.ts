import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PhraseDeleteCommand } from "src/command/PhraseDelete.command";
import { PhraseRepository } from "src/repository/Phrase.repository";

@CommandHandler(PhraseDeleteCommand)
export class PhraseDeleteHandler implements ICommandHandler<PhraseDeleteCommand> {
 
    constructor(
        private readonly repository: PhraseRepository
    ) {}

    async execute(command: PhraseDeleteCommand) {
        const phraseId = command.phraseId;
        await this.repository.deletePhraseById(phraseId);
    }

}
