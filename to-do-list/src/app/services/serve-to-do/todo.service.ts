import {Injectable} from '@angular/core';
import {TO_DO} from "../../interface/TO_DO";
import {Observable, of} from "rxjs";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',

})
export class TodoService {
  private apiUrl: string = "http://localhost:5000/todos";

  httpOptions: { headers: HttpHeaders } = {
    headers: new HttpHeaders({
      'Content-Type': 'application/json',
    }),
  };

  constructor(private http: HttpClient) {}

  getToDoJSON(): Observable<TO_DO[]> {
    return this.http.get<TO_DO[]>(this.apiUrl);
    // return of(TO_DO_JSON)
  }

  deleteToDo(toDo: TO_DO): Observable<TO_DO> {
    const url: string = `${this.apiUrl}/${toDo.id}`;
    return this.http.delete<TO_DO>(url);
  }

  // async getToDoJSON(): Promise<TODO_LIST_Interface[]> {
  //   const data: Response = await fetch(this.apiUrl);
  //   return await data.json() ?? [];
  // }

  addTdoDoService(toDo: TO_DO): Observable<TO_DO> {
    return this.http.post<TO_DO>(this.apiUrl, toDo, this.httpOptions);
  }
}

