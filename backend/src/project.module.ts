import { Module, OnModuleInit } from '@nestjs/common';
import ProjectController from './controller/Project.controller';
import { ProjectRepository } from './repository/Project.repository';
import ProjectService from './service/Project.service';
import { ProjectCreateHandler } from './command-handler/ProjectCreate.handler';
import { CqrsModule } from '@nestjs/cqrs';
import { ProjectDeleteHandler } from './command-handler/ProjectDelete.handler';
import { ProjectUpdateHandler } from './command-handler/ProjectUpdate.handler';
import { PhraseRepository } from './repository/Phrase.repository';
import PhraseService from './service/Phrase.service';
import { PhraseCreateCommand } from './command/PhraseCreate.command';
import PhraseController from './controller/Phrase.controller';
import { ProjectPhraseGetCommand } from './command/ProjectPhraseGet.command';
import { ProjectPhraseGetHandler } from './command-handler/ProjectPhraseGet.handler';
import { PhraseGetCommand } from './command/PhraseGet.command';
import { PhraseUpdateCommand } from './command/PhraseUpdate.command';
import { PhraseCreateHandler } from './command-handler/PhraseCreate.handler';
import { PhraseUpdateHandler } from './command-handler/PhraseUpdate.handler';
import { PhraseGetHandler } from './command-handler/PhraseGet.handler';
import { PhraseDeleteCommand } from './command/PhraseDelete.command';
import { PhraseDeleteHandler } from './command-handler/PhraseDelete.handler';

@Module({
  imports: [CqrsModule],
  controllers: [ProjectController, PhraseController],
  providers: [
    ProjectService,
    PhraseService,
    ProjectCreateHandler,
    ProjectDeleteHandler,
    ProjectUpdateHandler,
    ProjectPhraseGetHandler,
    ProjectPhraseGetCommand,
    PhraseCreateHandler,
    PhraseUpdateHandler,
    PhraseGetHandler,
    PhraseDeleteHandler,
    PhraseCreateCommand,
    PhraseGetCommand,
    PhraseUpdateCommand,
    PhraseDeleteCommand,
    PhraseRepository,
    ProjectRepository
  ],
})
export default class ProjectModule {

}
