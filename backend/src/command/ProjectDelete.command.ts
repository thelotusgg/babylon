import { ICommand } from '@nestjs/cqrs';
/**
 * This command deletes a project.
 */
export class ProjectDeleteCommand implements ICommand {

    constructor(public readonly projectId: number) {}

}