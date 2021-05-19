import { AggregateRoot } from '@nestjs/cqrs';
import { Translation } from './Translation.model';

/**
 * Represents internal phrase structure.
 */
export class Phrase extends AggregateRoot {
    phraseId?: number;
    projectId?: number;
    key?: string;
    translation?: Translation;

    constructor(phraseId?: number, projectId?: number, key?: string, translation?: Translation) {
        super();
        this.phraseId = phraseId;
        this.projectId = projectId;
        this.key = key;
        this.translation = translation;
     }

}
