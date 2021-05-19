
import { EventPublisher, ICommandHandler, CommandHandler } from '@nestjs/cqrs';
import { ProjectRepository } from '../repository/Project.repository';
import { ProjectPhraseGetCommand } from 'src/command/ProjectPhraseGet.command';

/**
 * Processes the incoming commands regarding project creation and delegates them
 * to the persisting layer / datastore (and maybe publishes an event).
 */
@CommandHandler(ProjectPhraseGetCommand)
export class ProjectPhraseGetHandler implements ICommandHandler<ProjectPhraseGetCommand> {

  constructor(
    private readonly repository: ProjectRepository
  ) { }

  async execute(command: ProjectPhraseGetCommand) {
    const projectId: number = command.projectId;
    const key: string = command.key;
    await this.repository.getTranslationByIdAndKey(projectId, key);
  }

}
