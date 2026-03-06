import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Research {
  id: number;
  title: string;
  author: string;
  abstract: string;
  publication_date: string;
  file_url: string;
  created_at: string;
}

export interface ResearchResponse {
  data: Research[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ResearchService {
  private apiUrl = 'http://localhost:5000/api/v1/research';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ResearchResponse> {
      return this.http.get<ResearchResponse>(this.apiUrl);
    }
  
    getById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }

}
