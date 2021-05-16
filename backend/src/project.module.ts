import { Module, OnModuleInit } from '@nestjs/common';
import ProjectController from './controller/Project.controller';
import { ProjectRepository } from './repository/Project.repository';
import ProjectService from './service/Project.service';
import { ProjectCreateHandler } from './command-handler/ProjectCreate.handler';
import { CqrsModule } from '@nestjs/cqrs';

@Module({
  imports: [CqrsModule],
  controllers: [ProjectController],
  providers: [
    ProjectService,
    ProjectCreateHandler,
    ProjectRepository
  ],
})
export default class ProjectModule {

}
