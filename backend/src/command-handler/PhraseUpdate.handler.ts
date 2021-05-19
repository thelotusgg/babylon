import { CommandHandler, ICommandHandler } from "@nestjs/cqrs";
import { PhraseUpdateCommand } from "src/command/PhraseUpdate.command";
import { PhraseRepository } from "src/repository/Phrase.repository";
import PhraseUpdateDTO from "src/dto/PhraseUpdate.dto";

@CommandHandler(PhraseUpdateCommand)
export class PhraseUpdateHandler implements ICommandHandler<PhraseUpdateCommand> {

    constructor(
        private readonly repository: PhraseRepository
    ) {}

    async execute(command: PhraseUpdateCommand) {
        const dto: PhraseUpdateDTO = command.dto;
        this.repository.updatePhraseById(command.phraseId ,dto);
    }

}
