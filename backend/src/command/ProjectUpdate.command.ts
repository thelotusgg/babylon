import { ICommand } from '@nestjs/cqrs';
import ProjectUpdateDTO from '../dto/ProjectUpdate.dto';
/**
 * This command updates a project.
 */
export class ProjectUpdateCommand implements ICommand {

    constructor(public readonly projectId: number, public readonly dto: ProjectUpdateDTO) {}

}