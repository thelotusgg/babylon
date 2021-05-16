import { AggregateRoot } from '@nestjs/cqrs';

/**
 * Represents internal project structure.
 */
export class Project extends AggregateRoot {
    projectId?: number;
    name?: string;
    description?: string;

    constructor(projectId?: number, name?: string, description?: string) {
        super();
        this.projectId = projectId;
        this.name = name;
        this.description = description;
     }

}

