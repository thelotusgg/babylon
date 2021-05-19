import { IsString } from 'class-validator';

/**
 * Data transfer object used to transmit the needed data for update a project.
 */
export default class ProjectDeleteDTO {
  
  @IsString()
  readonly name!: string;

  @IsString()
  readonly description!: string;

}
