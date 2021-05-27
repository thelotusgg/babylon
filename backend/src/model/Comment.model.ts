import { AggregateRoot } from '@nestjs/cqrs';

export class Comment extends AggregateRoot {

    phraseId: number;
    commentText: string;
    parent?: number;
    name?: string;

    constructor(phraseId: number,commendText: string, parent?: number, name?: string) {
        super();
        this.phraseId = phraseId;
        this.parent = parent;
        this.name = name;
        this.commentText = commendText;
    }

}
