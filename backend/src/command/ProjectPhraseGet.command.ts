import { ICommand } from '@nestjs/cqrs';

/**
 * This command gets a translation
 */
export class ProjectPhraseGetCommand implements ICommand {

  constructor(public readonly projectId: number,
    public readonly key: string) { }

}
