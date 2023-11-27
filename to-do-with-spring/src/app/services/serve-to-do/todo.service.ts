import {Injectable} from '@angular/core';
import {HttpClient, HttpHeaders} from "@angular/common/http";
import {Observable} from "rxjs";
import {TO_DO} from "../../interface/todo";
import {Todo_body} from "../../interface/todo_body";

@Injectable({
  providedIn: 'root'
})
export class TodoService {
  private apiUrl: string = "http://localhost:8080/api/v1/todo";
  private httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {
  }

  getToDoJSON(): Observable<TO_DO[]> {
    return this.http.get<TO_DO[]>(this.apiUrl);
  }

  addToDoService(toDo: Todo_body): Observable<Todo_body> {
    return this.http.post<Todo_body>(this.apiUrl, toDo);
  }

  updateTodoService(toDo: TO_DO): Observable<TO_DO> {
    return this.http.put<TO_DO>(`${this.apiUrl}/id/${toDo.id}?task=${toDo.task}&details=${toDo.details}&date=${toDo.dueDate}&time=${toDo.dueTime}`,this.httpOptions)
  }

  deleteToDo(toDo: TO_DO): Observable<TO_DO> {
    const url: string = `${this.apiUrl}/${toDo.id}`;
    console.log(url)
    return this.http.delete<TO_DO>(url);
  }
}
