import {Injectable} from '@angular/core';
import {TODO_LIST_Interface} from "../../interface/TODO_LIST_Interface";
import {Observable, of} from "rxjs";
import {TO_DO_JSON} from "../../to-do-list";
import {HttpClient, HttpHeaders} from "@angular/common/http";

@Injectable({
  providedIn: 'root',

})
export class TodoService {
  private apiUrl: string = "http://localhost:5000/todos";

  constructor(private http: HttpClient) {
  }

  getToDoJSON(): Observable<TODO_LIST_Interface[]> {
    return this.http.get<TODO_LIST_Interface[]>(this.apiUrl);
    // return of(TO_DO_JSON)
  }

  // async getToDoJSON(): Promise<TODO_LIST_Interface[]> {
  //   const data: Response = await fetch(this.apiUrl);
  //   return await data.json() ?? [];
  // }
}
