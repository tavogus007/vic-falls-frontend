import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Article {
  id: number;
  title: string;
  content: string;
  author: string;
  published_date: string;
  created_at: string;
}

export interface ArticlesResponse {
  data: Article[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ArticlesService {
  private apiUrl = 'http://localhost:5000/api/v1/articles';

  constructor(private http: HttpClient) {}

  getAll(): Observable<ArticlesResponse> {
    return this.http.get<ArticlesResponse>(this.apiUrl);
  }

  getById(id: number): Observable<any> {
    return this.http.get<any>(`${this.apiUrl}/${id}`);
  }

}
