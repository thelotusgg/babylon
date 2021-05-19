import { Injectable } from "@nestjs/common";
import { Project } from "../model/Project.model";
import ProjectCreateDTO from "../dto/ProjectCreate.dto";
import ProjectUpdateDTO from "../dto/ProjectUpdate.dto";
import { runInThisContext } from "node:vm";
import { Phrase } from "src/model/Phrase.model";
import { Store } from "src/store/Store";

/**
 * The repository is responsible for persisting changes made to a project to our datastore (MongoDB).
 * It can also be used for fetching data from the datastore.
 */
@Injectable()
export class ProjectRepository {

  async createProject(dto: ProjectCreateDTO) {
      const project: Project = new Project(
        Store.projectStore.length,
        dto.name,
        dto.description
      );

      console.debug("Persist: ", project);

      Store.projectStore.push(project);
      
      return project;
  }

  async getProjectById(projectId: number) {
    return Store.projectStore.find(p => p.projectId == projectId);
  }

  async deleteProjectById(projectId: number) {
    return Store.projectStore.splice(projectId, 1);
  }

  async updateProjectById(projectId: number, dto: ProjectUpdateDTO) {
    const project: Project = new Project(
      projectId,
      dto.name,
      dto.description
    );

      console.debug("Persist: ", project);

      Store.projectStore[projectId] = project;
    return projectId;
  }

  async getTranslationByIdAndKey(projectId: number, key: string) {
    return Store.phraseStore.find(p => p.projectId == projectId && p.key == key);
  }

}
