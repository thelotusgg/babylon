import { Injectable } from "@nestjs/common";
import PhraseCreateDTO from "src/dto/PhraseCreate.dto";
import PhraseUpdateDTO from "src/dto/PhraseUpdate.dto";
import { Phrase } from "src/model/Phrase.model";
import { Store } from "src/store/Store";

@Injectable()
export class PhraseRepository {

    async createPhrase(dto: PhraseCreateDTO) {
        const phrase = new Phrase(
            Store.phraseStore.length,
            dto.projectId,
            dto.key
        );

        console.debug("Persist: ", phrase);

        Store.phraseStore.push(phrase);

        return phrase;

    }

    async getPhraseById(phraseId: number) {
        return Store.phraseStore.find(p => p.phraseId == phraseId);
    }

    async updatePhraseById(phraseId: number, dto: PhraseUpdateDTO) {
        var phrase: Phrase = Store.phraseStore.find(p => p.phraseId == phraseId);

        phrase.key = dto.key;

        Store.phraseStore[phraseId] = phrase;

        return phraseId;
    }

    async deletePhraseById(phraseId: number) {
        return Store.phraseStore.splice(phraseId, 1);
    }

}
