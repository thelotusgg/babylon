
import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProjectRepository } from '../repository/Project.repository';
import { ProjectCreateCommand } from '../command/ProjectCreate.command';

/**
 * Processes the incoming commands regarding project creation and delegates them
 * to the persisting layer / datastore (and maybe publishes an event).
 */
@CommandHandler(ProjectCreateCommand)
export class ProjectCreateHandler implements ICommandHandler<ProjectCreateCommand> {

  constructor(
    private readonly repository: ProjectRepository
  ) { }

  async execute(command: ProjectCreateCommand) {
    const project = command.project;
    await this.repository.createProject(project);
  }

}
