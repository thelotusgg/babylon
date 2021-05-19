import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProjectRepository } from '../repository/Project.repository';
import { ProjectDeleteCommand } from '../command/ProjectDelete.command';

@CommandHandler(ProjectDeleteCommand)
export class ProjectDeleteHandler implements ICommandHandler<ProjectDeleteCommand> {

    constructor(
        private readonly repository: ProjectRepository
      ) { }
    
      async execute(command: ProjectDeleteCommand) {
          const projectId: number = command.projectId;
          this.repository.deleteProjectById(projectId);
      }

}
