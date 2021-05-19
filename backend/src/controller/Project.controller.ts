import { Body, Controller, Delete, Get, Param, Patch, Post } from '@nestjs/common';
import { Project } from '../model/Project.model';
import ProjectService from '../service/Project.service';
import ProjectCreateDTO from '../dto/ProjectCreate.dto';
import ProjectDeleteDTO from 'src/dto/ProjectUpdate.dto';

/**
 * The project controller handles all incoming REST requests, validates their parameters and
 * forwards them to the corresponding service.
 */
@Controller('/project')
export default class ProjectController {

  constructor(private readonly projectService: ProjectService) { }

  // Commands

  @Post()
  async createProject(@Body() dto: ProjectCreateDTO): Promise<number> {
    console.debug("Incoming project: ", dto)
    return this.projectService.createProject(dto) ? 200 : 500;
  }

  // Queries

  @Get("/:projectId")
  async getProject(@Param('projectId') projectId: number) {
    console.debug("Get project: ", projectId)
    return this.projectService.getProjectById(projectId);
  }

  @Delete("/:projectId")
  async deleteProject(@Param('projectId') projectId: number) {
    console.debug("Delete project: ", projectId);
    return this.projectService.deleteProjectById(projectId);
  }

  @Patch("/:projectId")
  async updateProject(@Param('projectId') projectId: number, @Body() dto: ProjectDeleteDTO) {
    console.debug("Update project: ", projectId);
    return this.projectService.updateProjectById(projectId, dto);
  }

  @Get("/:projectId/translation/:key")
  async getTranslationByIdAndKey(@Param('projectId') projectId: number, @Param('key') key: string) {
    console.debug("Get translation by key: ", projectId);
    return this.projectService.getTranslationByIdAndKey(projectId, key);
  }

}
