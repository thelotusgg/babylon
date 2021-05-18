import { Module, OnModuleInit } from '@nestjs/common';
import ProjectController from './controller/Project.controller';
import { ProjectRepository } from './repository/Project.repository';
import ProjectService from './service/Project.service';
import { ProjectCreateHandler } from './command-handler/ProjectCreate.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectDeleteHandler } from './command-handler/ProjectDelete.handler';
import { ProjectUpdateHandler } from './command-handler/ProjectUpdate.handler';

@Module({
  imports: [CqrsModule],
  controllers: [ProjectController],
  providers: [
    ProjectService,
    ProjectCreateHandler,
    ProjectDeleteHandler,
    ProjectUpdateHandler,
    ProjectRepository
  ],
})
export default class ProjectModule {

}
