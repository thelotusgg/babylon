import { ICommand } from '@nestjs/cqrs';
import ProjectCreateDTO from '../dto/ProjectCreate.dto';

/**
 * This command creates a new project.
 */
export class ProjectCreateCommand implements ICommand {

  constructor(public readonly project: ProjectCreateDTO) { }

}
