import { Injectable } from '@angular/core';
import { HttpClientModule, HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'

})
export class ProductService {
  url ="http://localhost:8000";

  constructor(private httpClient: HttpClient) {
    }

  getData() {
    return this.httpClient.get(`${this.url}/project`);
  }
  DeleteData(id:string) {
    return this.httpClient.delete(`${this.url}/project/` + id);
  }
  CreateProject(projectName:string,dateOfStart:Date,teamSize:number) {
    return this.httpClient.post(`${this.url}/project`, { projectName, dateOfStart,teamSize });
  }
  getProjectById(id: any) {
    return this.httpClient.get(`${this.url}/project/` + id);
  }
  updateProject(id: string, updatedProject: any) {
    return this.httpClient.put(`${this.url}/project/` + id, updatedProject);
  }

  createTask(data:any){
    return this.httpClient.post<any>(`${this.url}/tasks`,data)
  }
  getDataTasks() {
    return this.httpClient.get(`${this.url}/tasks`);
  }
  DeleteDataTasks(id:string) {
    return this.httpClient.delete(`${this.url}/tasks/` + id);
  }

  getProjectByIdTasks(id: any) {
    return this.httpClient.get(`${this.url}/tasks/` + id);
  }
  updateProjectTasks(id: string, updatedProject: any) {
    return this.httpClient.put(`${this.url}/tasks/` + id, updatedProject);
  }
}
