import { Injectable } from "@nestjs/common";
import { Project } from "../model/Project.model";
import ProjectCreateDTO from "../dto/ProjectCreate.dto";

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

}
