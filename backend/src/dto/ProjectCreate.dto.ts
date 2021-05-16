import { IsString } from 'class-validator';

/**
 * Data transfer object used to transmit the needed data for project creation.
 */
export default class ProjectCreateDTO {
  
  @IsString()
  readonly name!: string;

  @IsString()
  readonly description!: string;

}
