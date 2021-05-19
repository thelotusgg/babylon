import { ICommand } from '@nestjs/cqrs';
import PhraseUpdateDTO from '../dto/PhraseUpdate.dto';
/**
 * This command updates a project.
 */
export class PhraseUpdateCommand implements ICommand {

    constructor(public readonly phraseId: number, public readonly dto: PhraseUpdateDTO) {}

}
