import { Injectable } from '@nestjs/common';
import ProjectCreateDTO from '../dto/ProjectCreate.dto';
import { CommandBus } from '@nestjs/cqrs';
import { ProjectCreateCommand } from '../command/ProjectCreate.command';
import { ProjectRepository } from '../repository/Project.repository';
import { ProjectDeleteCommand } from 'src/command/ProjectDelete.command';

/**
 * This service either access the datastore directly for reading purposes
 * or publishes new commands to te commandBus in case of write-operations.
 */
@Injectable()
export default class ProjectService {

  constructor(private readonly commandBus: CommandBus, private readonly repository: ProjectRepository) { }

  async createProject(dto: ProjectCreateDTO) {
    return await this.commandBus.execute(new ProjectCreateCommand(dto));
  }

  async getProjectById(projectId: number) {
    const result = await this.repository.getProjectById(projectId);
    return result;
  }

  async deleteProjectById(projectId: number) {
    return await this.commandBus.execute(new ProjectDeleteCommand(projectId));
  }

}
