import { Injectable } from "@nestjs/common";
import { Project } from "../model/Project.model";
import ProjectCreateDTO from "../dto/ProjectCreate.dto";
import ProjectUpdateDTO from "../dto/ProjectUpdate.dto";
import { runInThisContext } from "node:vm";

/**
 * The repository is responsible for persisting changes made to a project to our datastore (MongoDB).
 * It can also be used for fetching data from the datastore.
 */
@Injectable()
export class ProjectRepository {

  private store: Project[] = [];

  async createProject(dto: ProjectCreateDTO) {
      const project: Project = new Project(
        this.store.length,
        dto.name,
        dto.description
      );

      console.debug("Persist: ", project);

      this.store.push(project);
      
      return project;
  }

  async getProjectById(projectId: number) {
    return this.store.find(p => p.projectId == projectId);
  }

  async deleteProjectById(projectId: number) {
    return this.store.splice(projectId, 1);
  }

  async updateProjectById(projectId: number, dto: ProjectUpdateDTO) {
    const project: Project = new Project(
      projectId,
      dto.name,
      dto.description
    );

      console.debug("Persist: ", project);

    this.store[projectId] = project;
    return projectId;
  }

}
