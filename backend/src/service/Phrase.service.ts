import { Injectable } from "@nestjs/common";
import { CommandBus } from "@nestjs/cqrs";
import { PhraseCreateCommand } from "src/command/PhraseCreate.command";
import { PhraseDeleteCommand } from "src/command/PhraseDelete.command";
import { PhraseGetCommand } from "src/command/PhraseGet.command";
import { PhraseUpdateCommand } from "src/command/PhraseUpdate.command";
import PhraseCreateDTO from "src/dto/PhraseCreate.dto";
import PhraseUpdateDTO from "src/dto/PhraseUpdate.dto";
import { PhraseRepository } from "src/repository/Phrase.repository";

@Injectable()
export default class PhraseService {

    constructor(private readonly commandBus: CommandBus, private readonly repository: PhraseRepository) {}

    async createPhrase(dto: PhraseCreateDTO) {
        return await this.commandBus.execute(new PhraseCreateCommand(dto));
    }

    async getPhraseById(phraseId: number) {
        const result = await this.repository.getPhraseById(phraseId);
        return result;
    }

    async updatePhraseById(phraseId: number, dto: PhraseUpdateDTO) {
        return await this.commandBus.execute(new PhraseUpdateCommand(phraseId, dto));
    }

    async deletePhraseById(phraseId: number) {
        return await this.commandBus.execute(new PhraseDeleteCommand(phraseId));
    }

}
