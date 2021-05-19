import { AggregateRoot } from '@nestjs/cqrs';

export class Formatting extends AggregateRoot {

    projectId?: number;
    parent?: number;
    name?: string;
    description?: string;

    constructor(projectId?: number, parent?: number, name?: string, description?: string) {
        super();
        this.projectId = projectId;
        this.parent = parent;
        this.name = name;
        this.description = description;
    }

}
