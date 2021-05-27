import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PhraseCommentCreateCommand } from "src/command/PhraseCommentCreate.command";
import { PhraseRepository } from "src/repository/Phrase.repository";

@CommandHandler(PhraseCommentCreateCommand)
export class PhraseDeleteHandler implements ICommandHandler<PhraseCommentCreateCommand> {
 
    constructor(
        private readonly repository: PhraseRepository
    ) {}

    async execute(command: PhraseCommentCreateCommand) {
        const phraseDTO = command.phraseDTO;
        await this.repository.createCommentById(phraseDTO.phraseId, phraseDTO.comment);
    }

}
