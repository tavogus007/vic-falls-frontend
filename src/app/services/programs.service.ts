import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

export interface Programs {
  id: number;
  title: string;
  description: string;
  start_date: string;
  end_date: string;
  created_at: string;
}

export interface ProgramsResponse {
  data: Programs[];
  message: string;
}

@Injectable({
  providedIn: 'root'
})
export class ProgramsService {
   private apiUrl = 'http://localhost:5000/api/v1/programs';

  constructor(private http: HttpClient) { }

  getAll(): Observable<ProgramsResponse> {
      return this.http.get<ProgramsResponse>(this.apiUrl);
    }
  
    getById(id: number): Observable<any> {
      return this.http.get<any>(`${this.apiUrl}/${id}`);
    }
}
