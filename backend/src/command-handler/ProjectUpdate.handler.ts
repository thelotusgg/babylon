import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProjectRepository } from '../repository/Project.repository';
import { ProjectUpdateCommand } from 'src/command/ProjectUpdate.command';
import ProjectUpdateDTO from '../dto/ProjectUpdate.dto';

@CommandHandler(ProjectUpdateCommand)
export class ProjectUpdateHandler implements ICommandHandler<ProjectUpdateCommand> {

    constructor(
        private readonly repository: ProjectRepository
      ) { }
    
      async execute(command: ProjectUpdateCommand) {
          const projectId: number = command.projectId;
          const dto: ProjectUpdateDTO = command.dto;
          this.repository.updateProjectById(projectId, dto);
      }

}