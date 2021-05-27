import { AggregateRoot } from '@nestjs/cqrs';
import { Translation } from './Translation.model';
import { Comment } from './Comment.model';

/**
 * Represents internal phrase structure.
 */
export class Phrase extends AggregateRoot {
    phraseId?: number;
    projectId?: number;
    key?: string;
    translation?: Translation;
    comments?: [Comment];

    constructor(phraseId?: number, projectId?: number, key?: string, translation?: Translation) {
        super();
        this.phraseId = phraseId;
        this.projectId = projectId;
        this.key = key;
        this.translation = translation;
    }

}
