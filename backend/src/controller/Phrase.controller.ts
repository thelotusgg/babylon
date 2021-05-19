import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import PhraseService from 'src/service/Phrase.service';
import PhraseCreateDTO from 'src/dto/PhraseCreate.dto';
import PhraseUpdateDTO from 'src/dto/PhraseUpdate.dto';
import { Store } from 'src/store/Store';

/**
 * The project controller handles all incoming REST requests, validates their parameters and
 * forwards them to the corresponding service.
 */
@Controller('/phrase')
export default class PhraseController {

    constructor(private readonly phraseService: PhraseService) {}

    @Post()
    async createPhrase(@Body() dto: PhraseCreateDTO): Promise<number> {
        console.debug("Incoming phrase: ", dto);
        return this.phraseService.createPhrase(dto) ? 200: 500; 
    }

    @Get("/:phraseId")
    async getPhraseById(@Param('phraseId') phraseId: number) {
        console.debug("Get phrase: ", phraseId);
        return this.phraseService.getPhraseById(phraseId);
    }

    @Patch("/:phraseId")
    async updatePhraseById(@Param('phraseId') phraseId: number, @Body() dto: PhraseUpdateDTO) {
        console.debug("Update phrase: ", phraseId);
        return this.phraseService.updatePhraseById(phraseId, dto);
    }

    @Delete("/:phraseId")
    async deletePhraseById(@Param('phraseId') phraseId: number) {
        console.debug("Delete phrase: ", phraseId);
        return this.phraseService.deletePhraseById(phraseId);
    } 

}
