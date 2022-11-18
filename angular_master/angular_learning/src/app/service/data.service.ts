import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http'
import { DataStructure } from '../dataStructure';
import { Observable } from 'rxjs';


@Injectable({
  providedIn: 'root'
})
export class DataService {
  url: string = 'http://localhost:3000/posts';
  // url: string = '../data/db.json';
  constructor(private http: HttpClient) { }
  getData(): Observable<DataStructure[]> {
    return this.http.get<DataStructure[]>(this.url);
  }
  pushData(data: any): Observable<DataStructure[]> {
    return this.http.post<DataStructure[]>(this.url, data);
  }
  editData(data: any): Observable<DataStructure[]> {
    return this.http.put<DataStructure[]>(this.url + '/' + data.id, data);
  }
}